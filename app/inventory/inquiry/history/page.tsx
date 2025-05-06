"use client"

import { useState } from "react"
import { Search, Filter, Download, Calendar, Clock, Info } from "lucide-react"
import InventoryHistoryDetailModal from "@/components/inventory-history-detail-modal"

// 더미 데이터 - 재고 이력 목록
const historyData = [
  {
    id: 1,
    date: "2023-12-15",
    time: "14:30:25",
    type: "상태 변경",
    brand: "태그호이어",
    modelNumber: "CBN2A1B.BA0643",
    modelName: "카레라 크로노그래프",
    serialNumber: "5RP28S9Q",
    fromStatus: "판매 가능",
    toStatus: "예약 중",
    location: "강남점",
    user: "박상담",
    notes: "고객 방문 예약으로 인한 상태 변경",
  },
  {
    id: 2,
    date: "2023-12-14",
    time: "11:15:42",
    type: "위치 변경",
    brand: "IWC",
    modelNumber: "IW501001",
    modelName: "빅 파일럿 워치",
    serialNumber: "1KJ94N7L",
    fromLocation: "본사 금고",
    toLocation: "서비스 센터",
    status: "AS 중",
    user: "김기술",
    notes: "무브먼트 점검을 위한 서비스 센터 이동",
  },
  {
    id: 3,
    date: "2023-12-12",
    time: "16:45:10",
    type: "입고",
    brand: "IWC",
    modelNumber: "IW371617",
    modelName: "포르투기저 크로노그래프",
    serialNumber: "4HL63M2P",
    invoiceNumber: "INV-2023-004",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 4,
    date: "2023-12-12",
    time: "16:45:10",
    type: "입고",
    brand: "IWC",
    modelNumber: "IW501001",
    modelName: "빅 파일럿 워치",
    serialNumber: "1KJ94N7L",
    invoiceNumber: "INV-2023-004",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 5,
    date: "2023-12-10",
    time: "10:20:35",
    type: "입고",
    brand: "까르띠에",
    modelNumber: "WSSA0018",
    modelName: "산토스 드 까르띠에",
    serialNumber: "2PQ47L8S",
    invoiceNumber: "INV-2023-003",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 6,
    date: "2023-12-10",
    time: "10:20:35",
    type: "입고",
    brand: "까르띠에",
    modelNumber: "WSBB0046",
    modelName: "발롱 블루 드 까르띠에",
    serialNumber: "6TN39K4R",
    invoiceNumber: "INV-2023-003",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 7,
    date: "2023-12-08",
    time: "15:30:22",
    type: "위치 변경",
    brand: "오메가",
    modelNumber: "310.30.42.50.01.001",
    modelName: "스피드마스터 문워치",
    serialNumber: "8KL72P9N",
    fromLocation: "본사 금고",
    toLocation: "강남점",
    status: "판매 가능",
    user: "정매니저",
    notes: "강남점 전시 요청에 따른 이동",
  },
  {
    id: 8,
    date: "2023-12-07",
    time: "14:10:05",
    type: "입고",
    brand: "오메가",
    modelNumber: "310.30.42.50.01.001",
    modelName: "스피드마스터 문워치",
    serialNumber: "8KL72P9N",
    invoiceNumber: "INV-2023-002",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 9,
    date: "2023-12-07",
    time: "14:10:05",
    type: "입고",
    brand: "오메가",
    modelNumber: "210.30.42.20.03.001",
    modelName: "씨마스터 다이버 300M",
    serialNumber: "3JM56R2T",
    invoiceNumber: "INV-2023-002",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 10,
    date: "2023-12-06",
    time: "09:45:30",
    type: "상태 변경",
    brand: "까르띠에",
    modelNumber: "WSBB0046",
    modelName: "발롱 블루 드 까르띠에",
    serialNumber: "6TN39K4R",
    fromStatus: "판매 가능",
    toStatus: "판매 완료",
    location: "본사 금고",
    user: "박판매",
    notes: "고객 구매 완료",
  },
  {
    id: 11,
    date: "2023-12-05",
    time: "13:25:18",
    type: "입고",
    brand: "롤렉스",
    modelNumber: "126610LN",
    modelName: "서브마리너 데이트",
    serialNumber: "7DX92R5J",
    invoiceNumber: "INV-2023-001",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 12,
    date: "2023-12-05",
    time: "13:25:18",
    type: "입고",
    brand: "롤렉스",
    modelNumber: "126711CHNR",
    modelName: "GMT-마스터 II",
    serialNumber: "9FT81L3K",
    invoiceNumber: "INV-2023-001",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
  {
    id: 13,
    date: "2023-12-05",
    time: "13:25:18",
    type: "입고",
    brand: "롤렉스",
    modelNumber: "126334",
    modelName: "데이트저스트 41",
    serialNumber: "5HN43P7M",
    invoiceNumber: "INV-2023-001",
    location: "본사 금고",
    status: "판매 가능",
    user: "이입고",
    notes: "신규 입고 제품",
  },
]

export default function InventoryHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [brandFilter, setBrandFilter] = useState("all")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [selectedHistory, setSelectedHistory] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 이력 유형 목록 추출
  const types = Array.from(new Set(historyData.map((item) => item.type)))

  // 브랜드 목록 추출
  const brands = Array.from(new Set(historyData.map((item) => item.brand)))

  // 검색 및 필터링 로직
  const filteredHistory = historyData.filter((item) => {
    const matchesSearch =
      item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = typeFilter === "all" || item.type === typeFilter
    const matchesBrand = brandFilter === "all" || item.brand === brandFilter

    // 날짜 필터링
    const itemDate = new Date(item.date)
    const matchesStartDate = !startDate || new Date(startDate) <= itemDate
    const matchesEndDate = !endDate || new Date(endDate) >= itemDate

    return matchesSearch && matchesType && matchesBrand && matchesStartDate && matchesEndDate
  })

  // 이력 선택 및 모달 열기
  const handleHistorySelect = (historyId: number) => {
    setSelectedHistory(historyId)
    setIsModalOpen(true)
  }

  // 이력 유형에 따른 배지 스타일
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "입고":
        return "bg-[#ecfcf8] text-[#00806a]"
      case "출고":
        return "bg-[#e6f7ff] text-[#0072c6]"
      case "위치 변경":
        return "bg-[#fff8cd] text-[#b78803]"
      case "상태 변경":
        return "bg-[#f1f4f3] text-[#5b5c5b]"
      default:
        return "bg-[#f1f4f3] text-[#5b5c5b]"
    }
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">재고 이력</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">재고 변동 이력을 조회합니다.</p>
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
              placeholder="모델명, 모델번호, 시리얼번호 검색"
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
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">모든 유형</option>
                {types.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <select
              className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] appearance-none bg-white"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option value="all">모든 브랜드</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
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
                setTypeFilter("all")
                setBrandFilter("all")
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

      {/* 이력 목록 테이블 */}
      <div className="bg-white border border-[#dde0df] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[#dde0df] flex justify-between items-center">
          <h2 className="text-lg font-medium">재고 이력 목록</h2>
          <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
            <Download size={16} className="mr-1" />
            엑셀 다운로드
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">날짜/시간</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">유형</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">브랜드</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">모델명</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">시리얼번호</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">담당자</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상세</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((item) => (
                <tr key={item.id} className="hover:bg-[#f7f9f8] cursor-pointer">
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-[#5b5c5b]" />
                      <div>
                        <p>{item.date}</p>
                        <p className="text-xs text-[#5b5c5b]">{item.time}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getTypeBadgeStyle(item.type)}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.brand}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.modelName}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.serialNumber}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.user}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <button
                      onClick={() => handleHistorySelect(item.id)}
                      className="px-3 py-1.5 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-sm rounded-md hover:bg-[#f1f4f3] flex items-center mx-auto"
                    >
                      <Info size={16} className="mr-1" />
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 모바일 카드 뷰 */}
      <div className="md:hidden mt-4 space-y-3">
        {filteredHistory.map((item) => (
          <div
            key={item.id}
            className="border border-[#dde0df] rounded-md p-3 bg-white"
            onClick={() => handleHistorySelect(item.id)}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#5b5c5b]" />
                <div>
                  <p className="text-sm">{item.date}</p>
                  <p className="text-xs text-[#5b5c5b]">{item.time}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getTypeBadgeStyle(item.type)}`}>{item.type}</span>
            </div>
            <div className="mb-2">
              <p className="font-medium">
                {item.brand} {item.modelName}
              </p>
              <p className="text-sm text-[#5b5c5b]">{item.serialNumber}</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>담당자: {item.user}</span>
              <button className="px-2 py-1 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-xs rounded-md hover:bg-[#f1f4f3]">
                상세보기
              </button>
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

      {/* 이력 상세 모달 */}
      {selectedHistory && (
        <InventoryHistoryDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          historyId={selectedHistory}
        />
      )}
    </>
  )
}
