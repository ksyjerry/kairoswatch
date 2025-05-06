"use client"

import { useState } from "react"
import { Search, Filter, Calendar, Plus, Edit, Trash2, Eye, CheckCircle } from "lucide-react"
import InspectionPlanModal from "@/components/inspection-plan-modal"

// 더미 데이터 - 실사 계획 목록
const inspectionPlans = [
  {
    id: 1,
    name: "2023년 4분기 정기 실사",
    startDate: "2023-12-20",
    endDate: "2023-12-25",
    status: "계획 중",
    manager: "김재고",
    department: "재고관리팀",
    targetLocation: "본사 금고",
    targetCount: 45,
    description: "연말 정기 재고 실사",
    createdAt: "2023-12-01",
  },
  {
    id: 2,
    name: "강남점 특별 실사",
    startDate: "2023-12-15",
    endDate: "2023-12-16",
    status: "진행 중",
    manager: "이매니저",
    department: "강남점",
    targetLocation: "강남점",
    targetCount: 28,
    description: "강남점 재고 불일치 확인을 위한 특별 실사",
    createdAt: "2023-12-05",
  },
  {
    id: 3,
    name: "롤렉스 브랜드 실사",
    startDate: "2023-12-10",
    endDate: "2023-12-12",
    status: "완료",
    manager: "박실사",
    department: "재고관리팀",
    targetLocation: "전체",
    targetCount: 32,
    description: "롤렉스 브랜드 제품 대상 실사",
    createdAt: "2023-11-25",
    completedAt: "2023-12-12",
    result: {
      matchCount: 30,
      mismatchCount: 2,
      missingItems: [
        { serialNumber: "7DX92R5J", modelName: "서브마리너 데이트" },
        { serialNumber: "9FT81L3K", modelName: "GMT-마스터 II" },
      ],
    },
  },
  {
    id: 4,
    name: "서비스 센터 실사",
    startDate: "2023-11-15",
    endDate: "2023-11-17",
    status: "완료",
    manager: "김기술",
    department: "서비스센터",
    targetLocation: "서비스 센터",
    targetCount: 15,
    description: "서비스 센터 내 수리 중인 제품 실사",
    createdAt: "2023-11-01",
    completedAt: "2023-11-17",
    result: {
      matchCount: 15,
      mismatchCount: 0,
      missingItems: [],
    },
  },
  {
    id: 5,
    name: "2023년 3분기 정기 실사",
    startDate: "2023-09-25",
    endDate: "2023-09-30",
    status: "완료",
    manager: "김재고",
    department: "재고관리팀",
    targetLocation: "전체",
    targetCount: 120,
    description: "3분기 정기 재고 실사",
    createdAt: "2023-09-01",
    completedAt: "2023-09-30",
    result: {
      matchCount: 118,
      mismatchCount: 2,
      missingItems: [
        { serialNumber: "3JM56R2T", modelName: "씨마스터 다이버 300M" },
        { serialNumber: "6TN39K4R", modelName: "발롱 블루 드 까르띠에" },
      ],
    },
  },
]

export default function InspectionPlanPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
  const [modalMode, setModalMode] = useState<"create" | "edit" | "view">("create")

  // 상태 목록 추출
  const statuses = Array.from(new Set(inspectionPlans.map((plan) => plan.status)))

  // 검색 및 필터링 로직
  const filteredPlans = inspectionPlans.filter((plan) => {
    const matchesSearch =
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.targetLocation.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || plan.status === statusFilter

    // 날짜 필터링
    const planStartDate = new Date(plan.startDate)
    const planEndDate = new Date(plan.endDate)
    const filterStartDate = startDate ? new Date(startDate) : null
    const filterEndDate = endDate ? new Date(endDate) : null

    const matchesDateRange =
      (!filterStartDate || planEndDate >= filterStartDate) && (!filterEndDate || planStartDate <= filterEndDate)

    return matchesSearch && matchesStatus && matchesDateRange
  })

  // 새 실사 계획 생성 모달 열기
  const handleCreatePlan = () => {
    setSelectedPlan(null)
    setModalMode("create")
    setIsModalOpen(true)
  }

  // 실사 계획 수정 모달 열기
  const handleEditPlan = (planId: number) => {
    setSelectedPlan(planId)
    setModalMode("edit")
    setIsModalOpen(true)
  }

  // 실사 계획 상세 보기 모달 열기
  const handleViewPlan = (planId: number) => {
    setSelectedPlan(planId)
    setModalMode("view")
    setIsModalOpen(true)
  }

  // 상태에 따른 배지 스타일
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "계획 중":
        return "bg-[#f1f4f3] text-[#5b5c5b]"
      case "진행 중":
        return "bg-[#ecfcf8] text-[#00806a]"
      case "완료":
        return "bg-[#e6f7ff] text-[#0072c6]"
      case "취소":
        return "bg-[#fee6db] text-[#ea2228]"
      default:
        return "bg-[#f1f4f3] text-[#5b5c5b]"
    }
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">실사 계획</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">재고 실사 계획을 수립하고 관리합니다.</p>
      </div>

      {/* 검색 및 필터 영역 */}
      <div className="bg-white border border-[#dde0df] rounded-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-[#5b5c5b]" />
            </div>
            <input
              type="text"
              placeholder="실사명, 담당자, 부서, 위치 검색"
              className="w-full pl-10 pr-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-[#5b5c5b]" />
              </div>
              <select
                className="pl-10 pr-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] appearance-none bg-white"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">모든 상태</option>
                {statuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-[#5b5c5b]" />
              </div>
              <input
                type="date"
                placeholder="시작일"
                className="pl-10 pr-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <span className="text-[#5b5c5b]">~</span>
            <input
              type="date"
              placeholder="종료일"
              className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ml-auto">
            <button
              className="px-3 py-2 bg-white text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("all")
                setStartDate("")
                setEndDate("")
              }}
            >
              초기화
            </button>
            <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795]">검색</button>
          </div>
        </div>
      </div>

      {/* 실사 계획 목록 */}
      <div className="bg-white border border-[#dde0df] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[#dde0df] flex justify-between items-center">
          <h2 className="text-lg font-medium">실사 계획 목록</h2>
          <button
            onClick={handleCreatePlan}
            className="px-3 py-1.5 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />새 실사 계획
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">실사명</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">기간</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상태</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">담당자</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">대상 위치</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">대상 수량</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan) => (
                <tr key={plan.id} className="hover:bg-[#f7f9f8]">
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    <div className="font-medium cursor-pointer" onClick={() => handleViewPlan(plan.id)}>
                      {plan.name}
                    </div>
                    <div className="text-xs text-[#5b5c5b]">생성일: {plan.createdAt}</div>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    {plan.startDate} ~ {plan.endDate}
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(plan.status)}`}>
                      {plan.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    <div>{plan.manager}</div>
                    <div className="text-xs text-[#5b5c5b]">{plan.department}</div>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{plan.targetLocation}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">{plan.targetCount}개</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    <div className="flex justify-center gap-1">
                      <button
                        onClick={() => handleViewPlan(plan.id)}
                        className="p-1.5 text-[#5b5c5b] hover:bg-[#f1f4f3] rounded-md"
                        title="상세보기"
                      >
                        <Eye size={16} />
                      </button>
                      {plan.status !== "완료" && (
                        <>
                          <button
                            onClick={() => handleEditPlan(plan.id)}
                            className="p-1.5 text-[#5b5c5b] hover:bg-[#f1f4f3] rounded-md"
                            title="수정"
                          >
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 text-[#ea2228] hover:bg-[#fee6db] rounded-md" title="삭제">
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                      {plan.status === "계획 중" && (
                        <button className="p-1.5 text-[#00806a] hover:bg-[#ecfcf8] rounded-md" title="실사 시작">
                          <CheckCircle size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 모바일 카드 뷰 */}
      <div className="md:hidden mt-4 space-y-3">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="border border-[#dde0df] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">{plan.name}</div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(plan.status)}`}>
                {plan.status}
              </span>
            </div>
            <div className="text-sm mb-2">
              <div>
                기간: {plan.startDate} ~ {plan.endDate}
              </div>
              <div>담당자: {plan.manager}</div>
              <div>대상 위치: {plan.targetLocation}</div>
              <div>대상 수량: {plan.targetCount}개</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-[#5b5c5b]">생성일: {plan.createdAt}</div>
              <div className="flex gap-1">
                <button
                  onClick={() => handleViewPlan(plan.id)}
                  className="p-1.5 text-[#2d9bb2] hover:bg-[#f1f4f3] rounded-md"
                  title="상세보기"
                >
                  <Eye size={16} />
                </button>
                {plan.status !== "완료" && (
                  <>
                    <button
                      onClick={() => handleEditPlan(plan.id)}
                      className="p-1.5 text-[#5b5c5b] hover:bg-[#f1f4f3] rounded-md"
                      title="수정"
                    >
                      <Edit size={16} />
                    </button>
                    <button className="p-1.5 text-[#ea2228] hover:bg-[#fee6db] rounded-md" title="삭제">
                      <Trash2 size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="mt-4 flex justify-center">
        <div className="flex">
          <button className="w-8 h-8 flex items-center justify-center border border-[#dde0df] rounded-l-md hover:bg-[#f7f9f8]">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center border-t border-b border-[#dde0df] bg-[#2d9bb2] text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border-t border-b border-[#dde0df] hover:bg-[#f7f9f8]">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-[#dde0df] rounded-r-md hover:bg-[#f7f9f8]">
            &gt;
          </button>
        </div>
      </div>

      {/* 실사 계획 모달 */}
      <InspectionPlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        planId={selectedPlan}
      />
    </>
  )
}
