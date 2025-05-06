"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Search, CheckCircle, AlertTriangle, Info } from "lucide-react"

// 더미 데이터 - 실사 계획 상세 정보
const getPlanDetail = (planId: number | null) => {
  if (!planId) {
    return {
      id: null,
      name: "",
      startDate: "",
      endDate: "",
      status: "계획 중",
      manager: "",
      department: "",
      targetLocation: "",
      targetItems: [],
      description: "",
    }
  }

  // 실제 구현에서는 API 호출 등을 통해 데이터를 가져옴
  return {
    id: planId,
    name: "2023년 4분기 정기 실사",
    startDate: "2023-12-20",
    endDate: "2023-12-25",
    status: "계획 중",
    manager: "김재고",
    department: "재고관리팀",
    targetLocation: "본사 금고",
    description: "연말 정기 재고 실사",
    createdAt: "2023-12-01",
    targetItems: [
      {
        id: 1,
        brand: "롤렉스",
        modelNumber: "126610LN",
        modelName: "서브마리너 데이트",
        serialNumber: "7DX92R5J",
        location: "본사 금고",
      },
      {
        id: 2,
        brand: "롤렉스",
        modelNumber: "126711CHNR",
        modelName: "GMT-마스터 II",
        serialNumber: "9FT81L3K",
        location: "본사 금고",
      },
      {
        id: 3,
        brand: "롤렉스",
        modelNumber: "126334",
        modelName: "데이트저스트 41",
        serialNumber: "5HN43P7M",
        location: "본사 금고",
      },
    ],
    result:
      planId === 3
        ? {
            matchCount: 30,
            mismatchCount: 2,
            missingItems: [
              { serialNumber: "7DX92R5J", modelName: "서브마리너 데이트" },
              { serialNumber: "9FT81L3K", modelName: "GMT-마스터 II" },
            ],
          }
        : null,
  }
}

// 더미 데이터 - 재고 목록 (실사 대상 선택용)
const inventoryItems = [
  {
    id: 1,
    brand: "롤렉스",
    modelNumber: "126610LN",
    modelName: "서브마리너 데이트",
    serialNumber: "7DX92R5J",
    location: "본사 금고",
  },
  {
    id: 2,
    brand: "롤렉스",
    modelNumber: "126711CHNR",
    modelName: "GMT-마스터 II",
    serialNumber: "9FT81L3K",
    location: "본사 금고",
  },
  {
    id: 3,
    brand: "롤렉스",
    modelNumber: "126334",
    modelName: "데이트저스트 41",
    serialNumber: "5HN43P7M",
    location: "본사 금고",
  },
  {
    id: 4,
    brand: "오메가",
    modelNumber: "310.30.42.50.01.001",
    modelName: "스피드마스터 문워치",
    serialNumber: "8KL72P9N",
    location: "강남점",
  },
  {
    id: 5,
    brand: "오메가",
    modelNumber: "210.30.42.20.03.001",
    modelName: "씨마스터 다이버 300M",
    serialNumber: "3JM56R2T",
    location: "강남점",
  },
  {
    id: 6,
    brand: "까르띠에",
    modelNumber: "WSSA0018",
    modelName: "산토스 드 까르띠에",
    serialNumber: "2PQ47L8S",
    location: "본사 금고",
  },
  {
    id: 7,
    brand: "까르띠에",
    modelNumber: "WSBB0046",
    modelName: "발롱 블루 드 까르띠에",
    serialNumber: "6TN39K4R",
    location: "본사 금고",
  },
  {
    id: 8,
    brand: "IWC",
    modelNumber: "IW371617",
    modelName: "포르투기저 크로노그래프",
    serialNumber: "4HL63M2P",
    location: "강남점",
  },
  {
    id: 9,
    brand: "IWC",
    modelNumber: "IW501001",
    modelName: "빅 파일럿 워치",
    serialNumber: "1KJ94N7L",
    location: "서비스 센터",
  },
  {
    id: 10,
    brand: "태그호이어",
    modelNumber: "CBN2A1B.BA0643",
    modelName: "카레라 크로노그래프",
    serialNumber: "5RP28S9Q",
    location: "강남점",
  },
]

interface InspectionPlanModalProps {
  isOpen: boolean
  onClose: () => void
  mode: "create" | "edit" | "view"
  planId: number | null
}

export default function InspectionPlanModal({ isOpen, onClose, mode, planId }: InspectionPlanModalProps) {
  const [plan, setPlan] = useState(getPlanDetail(planId))
  const [activeTab, setActiveTab] = useState<"basic" | "items" | "result">("basic")
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  // 위치 목록 추출
  const locations = Array.from(new Set(inventoryItems.map((item) => item.location)))

  // 모달이 열릴 때마다 데이터 초기화
  useEffect(() => {
    if (isOpen) {
      const planData = getPlanDetail(planId)
      setPlan(planData)
      setSelectedItems(planData.targetItems.map((item) => item.id))

      // 모드에 따라 초기 탭 설정
      if (mode === "view" && planData.status === "완료") {
        setActiveTab("result")
      } else {
        setActiveTab("basic")
      }
    }
  }, [isOpen, planId, mode])

  if (!isOpen) return null

  // 폼 입력 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPlan((prev) => ({ ...prev, [name]: value }))
  }

  // 아이템 선택 핸들러
  const handleItemSelect = (itemId: number) => {
    if (mode === "view") return

    setSelectedItems((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId)
      } else {
        return [...prev, itemId]
      }
    })
  }

  // 위치 일괄 선택 핸들러
  const handleLocationSelect = (location: string) => {
    if (mode === "view") return

    const itemsInLocation = inventoryItems.filter((item) => item.location === location).map((item) => item.id)

    // 해당 위치의 모든 아이템이 이미 선택되어 있는지 확인
    const allSelected = itemsInLocation.every((id) => selectedItems.includes(id))

    if (allSelected) {
      // 모두 선택되어 있으면 해제
      setSelectedItems((prev) => prev.filter((id) => !itemsInLocation.includes(id)))
    } else {
      // 일부만 선택되어 있으면 모두 선택
      setSelectedItems((prev) => {
        const newSelection = [...prev]
        itemsInLocation.forEach((id) => {
          if (!newSelection.includes(id)) {
            newSelection.push(id)
          }
        })
        return newSelection
      })
    }
  }

  // 모든 아이템 선택/해제 핸들러
  const handleSelectAll = () => {
    if (mode === "view") return

    if (selectedItems.length === inventoryItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(inventoryItems.map((item) => item.id))
    }
  }

  // 실사 계획 저장 핸들러
  const handleSavePlan = () => {
    // 필수 입력 검증
    if (!plan.name || !plan.startDate || !plan.endDate || !plan.manager || !plan.department) {
      alert("필수 항목을 모두 입력해주세요.")
      return
    }

    if (selectedItems.length === 0) {
      alert("실사 대상 아이템을 하나 이상 선택해주세요.")
      setActiveTab("items")
      return
    }

    // 여기에 저장 로직 구현
    console.log("실사 계획 저장:", {
      ...plan,
      targetItems: inventoryItems.filter((item) => selectedItems.includes(item.id)),
    })

    // 성공 메시지 표시 후 모달 닫기
    alert(mode === "create" ? "실사 계획이 생성되었습니다." : "실사 계획이 수정되었습니다.")
    onClose()
  }

  // 검색 및 필터링된 재고 아이템
  const filteredItems = inventoryItems.filter((item) => {
    const matchesSearch =
      item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLocation = locationFilter === "all" || item.location === locationFilter

    return matchesSearch && matchesLocation
  })

  // 모달 제목
  const modalTitle = {
    create: "새 실사 계획 생성",
    edit: "실사 계획 수정",
    view: "실사 계획 상세",
  }[mode]

  // 읽기 전용 여부
  const isReadOnly = mode === "view"

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b border-[#dde0df]">
          <h2 className="text-xl font-medium">{modalTitle}</h2>
          <button onClick={onClose} className="text-[#5b5c5b] hover:text-[#1f1f1f]">
            <X size={20} />
          </button>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex border-b border-[#dde0df]">
          <button
            className={`px-4 py-2 ${
              activeTab === "basic" ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            기본 정보
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "items" ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
            }`}
            onClick={() => setActiveTab("items")}
          >
            실사 대상 ({selectedItems.length})
          </button>
          {plan.status === "완료" && (
            <button
              className={`px-4 py-2 ${
                activeTab === "result"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("result")}
            >
              실사 결과
            </button>
          )}
        </div>

        {/* 모달 내용 */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* 기본 정보 탭 */}
          {activeTab === "basic" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                    실사명 <span className="text-[#f94b50]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={plan.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    placeholder="실사명을 입력하세요"
                    readOnly={isReadOnly}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">상태</label>
                  <select
                    name="status"
                    value={plan.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    disabled={isReadOnly}
                  >
                    <option value="계획 중">계획 중</option>
                    <option value="진행 중">진행 중</option>
                    <option value="완료">완료</option>
                    <option value="취소">취소</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                    시작일 <span className="text-[#f94b50]">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={plan.startDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    readOnly={isReadOnly}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                    종료일 <span className="text-[#f94b50]">*</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={plan.endDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    readOnly={isReadOnly}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                    담당자 <span className="text-[#f94b50]">*</span>
                  </label>
                  <input
                    type="text"
                    name="manager"
                    value={plan.manager}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    placeholder="담당자 이름"
                    readOnly={isReadOnly}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                    부서 <span className="text-[#f94b50]">*</span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={plan.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    placeholder="부서명"
                    readOnly={isReadOnly}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5b5c5b] mb-1">대상 위치</label>
                <input
                  type="text"
                  name="targetLocation"
                  value={plan.targetLocation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                  placeholder="실사 대상 위치 (예: 본사 금고, 강남점)"
                  readOnly={isReadOnly}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5b5c5b] mb-1">설명</label>
                <textarea
                  name="description"
                  value={plan.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                  placeholder="실사 계획에 대한 설명을 입력하세요"
                  readOnly={isReadOnly}
                ></textarea>
              </div>
            </div>
          )}

          {/* 실사 대상 탭 */}
          {activeTab === "items" && (
            <div>
              {!isReadOnly && (
                <div className="mb-4 flex flex-col md:flex-row gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-[#5b5c5b]" />
                    </div>
                    <input
                      type="text"
                      placeholder="브랜드, 모델명, 시리얼번호 검색"
                      className="w-full pl-10 pr-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  >
                    <option value="all">모든 위치</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-[#f7f9f8]">
                    <tr>
                      {!isReadOnly && (
                        <th className="w-10 py-2 px-3">
                          <input
                            type="checkbox"
                            checked={selectedItems.length === inventoryItems.length}
                            onChange={handleSelectAll}
                            className="rounded"
                          />
                        </th>
                      )}
                      <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">브랜드</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">모델명</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">모델번호</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">시리얼번호</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">위치</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        className={`hover:bg-[#f7f9f8] ${
                          selectedItems.includes(item.id) ? "bg-[#ecfcf8]" : ""
                        } cursor-pointer`}
                        onClick={() => handleItemSelect(item.id)}
                      >
                        {!isReadOnly && (
                          <td className="py-2 px-3 border-t border-[#dde0df]">
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(item.id)}
                              onChange={() => handleItemSelect(item.id)}
                              className="rounded"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </td>
                        )}
                        <td className="py-2 px-3 border-t border-[#dde0df]">{item.brand}</td>
                        <td className="py-2 px-3 border-t border-[#dde0df]">{item.modelName}</td>
                        <td className="py-2 px-3 border-t border-[#dde0df]">{item.modelNumber}</td>
                        <td className="py-2 px-3 border-t border-[#dde0df]">{item.serialNumber}</td>
                        <td className="py-2 px-3 border-t border-[#dde0df]">{item.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {!isReadOnly && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center"
                    onClick={handleSelectAll}
                  >
                    {selectedItems.length === inventoryItems.length ? "모두 해제" : "모두 선택"}
                  </button>
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm"
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location} 선택
                    </button>
                  ))}
                </div>
              )}

              {isReadOnly && filteredItems.length === 0 && (
                <div className="text-center py-8 text-[#5b5c5b]">선택된 실사 대상이 없습니다.</div>
              )}
            </div>
          )}

          {/* 실사 결과 탭 */}
          {activeTab === "result" && plan.result && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">총 대상 수량</p>
                  <p className="text-xl font-medium">{plan.result.matchCount + plan.result.mismatchCount}개</p>
                </div>
                <div className="bg-[#ecfcf8] p-4 rounded-md">
                  <p className="text-sm text-[#00806a]">일치 수량</p>
                  <p className="text-xl font-medium">{plan.result.matchCount}개</p>
                  <p className="text-xs text-[#00806a]">
                    {Math.round((plan.result.matchCount / (plan.result.matchCount + plan.result.mismatchCount)) * 100)}%
                    일치
                  </p>
                </div>
                <div className="bg-[#fee6db] p-4 rounded-md">
                  <p className="text-sm text-[#ea2228]">불일치 수량</p>
                  <p className="text-xl font-medium">{plan.result.mismatchCount}개</p>
                  <p className="text-xs text-[#ea2228]">
                    {Math.round(
                      (plan.result.mismatchCount / (plan.result.matchCount + plan.result.mismatchCount)) * 100,
                    )}
                    % 불일치
                  </p>
                </div>
              </div>

              {plan.result.mismatchCount > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <AlertTriangle size={18} className="mr-2 text-[#ea2228]" />
                    불일치 항목
                  </h3>
                  <div className="bg-[#fee6db] p-4 rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">시리얼번호</th>
                          <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">모델명</th>
                          <th className="font-medium text-[#1f1f1f] py-2 px-3 text-left">상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plan.result.missingItems.map((item, index) => (
                          <tr key={index}>
                            <td className="py-2 px-3">{item.serialNumber}</td>
                            <td className="py-2 px-3">{item.modelName}</td>
                            <td className="py-2 px-3 text-[#ea2228]">미발견</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="bg-[#f7f9f8] p-4 rounded-md mb-4">
                <div className="flex items-center mb-2">
                  <Info size={18} className="mr-2 text-[#5b5c5b]" />
                  <h3 className="font-medium">실사 결과 요약</h3>
                </div>
                <p className="text-sm">
                  {plan.result.matchCount}개 항목이 정상적으로 확인되었으며, {plan.result.mismatchCount}개 항목이 불일치
                  상태입니다.{" "}
                  {plan.result.mismatchCount > 0
                    ? "불일치 항목에 대한 추가 조사가 필요합니다."
                    : "모든 항목이 정상적으로 확인되었습니다."}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 모달 푸터 */}
        <div className="p-4 border-t border-[#dde0df] flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-[#1f1f1f] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]"
          >
            {isReadOnly ? "닫기" : "취소"}
          </button>
          {!isReadOnly && (
            <button
              onClick={handleSavePlan}
              className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] flex items-center"
            >
              <CheckCircle size={16} className="mr-1" />
              저장
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
