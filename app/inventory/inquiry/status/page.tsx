"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, BarChart4 } from "lucide-react"
import InventoryDetailModal from "@/components/inventory-detail-modal"

// 더미 데이터 - 재고 목록
const inventoryData = [
  {
    id: 1,
    brand: "롤렉스",
    modelNumber: "126610LN",
    modelName: "서브마리너 데이트",
    serialNumber: "7DX92R5J",
    purchaseDate: "2023-12-05",
    invoiceNumber: "INV-2023-001",
    status: "판매 가능",
    location: "본사 금고",
    price: "₩15,300,000",
  },
  {
    id: 2,
    brand: "롤렉스",
    modelNumber: "126711CHNR",
    modelName: "GMT-마스터 II",
    serialNumber: "9FT81L3K",
    purchaseDate: "2023-12-05",
    invoiceNumber: "INV-2023-001",
    status: "판매 가능",
    location: "본사 금고",
    price: "₩18,500,000",
  },
  {
    id: 3,
    brand: "롤렉스",
    modelNumber: "126334",
    modelName: "데이트저스트 41",
    serialNumber: "5HN43P7M",
    purchaseDate: "2023-12-05",
    invoiceNumber: "INV-2023-001",
    status: "판매 가능",
    location: "본사 금고",
    price: "₩12,000,000",
  },
  {
    id: 4,
    brand: "오메가",
    modelNumber: "310.30.42.50.01.001",
    modelName: "스피드마스터 문워치",
    serialNumber: "8KL72P9N",
    purchaseDate: "2023-12-07",
    invoiceNumber: "INV-2023-002",
    status: "판매 가능",
    location: "강남점",
    price: "₩9,800,000",
  },
  {
    id: 5,
    brand: "오메가",
    modelNumber: "210.30.42.20.03.001",
    modelName: "씨마스터 다이버 300M",
    serialNumber: "3JM56R2T",
    purchaseDate: "2023-12-07",
    invoiceNumber: "INV-2023-002",
    status: "예약 중",
    location: "강남점",
    price: "₩8,700,000",
  },
  {
    id: 6,
    brand: "까르띠에",
    modelNumber: "WSSA0018",
    modelName: "산토스 드 까르띠에",
    serialNumber: "2PQ47L8S",
    purchaseDate: "2023-12-10",
    invoiceNumber: "INV-2023-003",
    status: "판매 가능",
    location: "본사 금고",
    price: "₩9,200,000",
  },
  {
    id: 7,
    brand: "까르띠에",
    modelNumber: "WSBB0046",
    modelName: "발롱 블루 드 까르띠에",
    serialNumber: "6TN39K4R",
    purchaseDate: "2023-12-10",
    invoiceNumber: "INV-2023-003",
    status: "판매 완료",
    location: "본사 금고",
    price: "₩8,500,000",
  },
  {
    id: 8,
    brand: "IWC",
    modelNumber: "IW371617",
    modelName: "포르투기저 크로노그래프",
    serialNumber: "4HL63M2P",
    purchaseDate: "2023-12-12",
    invoiceNumber: "INV-2023-004",
    status: "판매 가능",
    location: "강남점",
    price: "₩10,200,000",
  },
  {
    id: 9,
    brand: "IWC",
    modelNumber: "IW501001",
    modelName: "빅 파일럿 워치",
    serialNumber: "1KJ94N7L",
    purchaseDate: "2023-12-12",
    invoiceNumber: "INV-2023-004",
    status: "AS 중",
    location: "서비스 센터",
    price: "₩14,300,000",
  },
  {
    id: 10,
    brand: "태그호이어",
    modelNumber: "CBN2A1B.BA0643",
    modelName: "카레라 크로노그래프",
    serialNumber: "5RP28S9Q",
    purchaseDate: "2023-12-15",
    invoiceNumber: "INV-2023-005",
    status: "판매 가능",
    location: "강남점",
    price: "₩6,800,000",
  },
]

export default function InventoryStatusPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [brandFilter, setBrandFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [selectedInventory, setSelectedInventory] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 브랜드 목록 추출
  const brands = Array.from(new Set(inventoryData.map((item) => item.brand)))

  // 상태 목록 추출
  const statuses = Array.from(new Set(inventoryData.map((item) => item.status)))

  // 위치 목록 추출
  const locations = Array.from(new Set(inventoryData.map((item) => item.location)))

  // 검색 및 필터링 로직
  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBrand = brandFilter === "all" || item.brand === brandFilter
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesLocation = locationFilter === "all" || item.location === locationFilter

    return matchesSearch && matchesBrand && matchesStatus && matchesLocation
  })

  // 재고 선택 및 모달 열기
  const handleInventorySelect = (inventoryId: number) => {
    setSelectedInventory(inventoryId)
    setIsModalOpen(true)
  }

  // 상태에 따른 배지 스타일
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "판매 가능":
        return "bg-[#ecfcf8] text-[#00806a]"
      case "예약 중":
        return "bg-[#fff8cd] text-[#b78803]"
      case "판매 완료":
        return "bg-[#e6f7ff] text-[#0072c6]"
      case "AS 중":
        return "bg-[#fee6db] text-[#ea2228]"
      default:
        return "bg-[#f1f4f3] text-[#5b5c5b]"
    }
  }

  // 브랜드별 재고 통계 계산
  const brandStats = brands.map((brand) => {
    const count = inventoryData.filter((item) => item.brand === brand).length
    return { brand, count }
  })

  // 상태별 재고 통계 계산
  const statusStats = statuses.map((status) => {
    const count = inventoryData.filter((item) => item.status === status).length
    return { status, count }
  })

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">재고 현황</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">현재 보유 중인 재고 현황을 조회합니다.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* 브랜드별 통계 */}
        <div className="bg-white border border-[#dde0df] rounded-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">브랜드별 재고</h2>
            <BarChart4 size={20} className="text-[#5b5c5b]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {brandStats.map((stat, index) => (
              <div key={index} className="bg-[#f7f9f8] p-3 rounded-md">
                <p className="text-sm text-[#5b5c5b]">{stat.brand}</p>
                <p className="text-xl font-medium mt-1">{stat.count}개</p>
              </div>
            ))}
            <div className="bg-[#ecfcf8] p-3 rounded-md">
              <p className="text-sm text-[#00806a]">총 재고</p>
              <p className="text-xl font-medium mt-1">{inventoryData.length}개</p>
            </div>
          </div>
        </div>

        {/* 상태별 통계 */}
        <div className="bg-white border border-[#dde0df] rounded-md p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">상태별 재고</h2>
            <BarChart4 size={20} className="text-[#5b5c5b]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {statusStats.map((stat, index) => (
              <div key={index} className={`p-3 rounded-md ${getStatusBadgeStyle(stat.status)}`}>
                <p className="text-sm">{stat.status}</p>
                <p className="text-xl font-medium mt-1">{stat.count}개</p>
                <p className="text-xs mt-1">{Math.round((stat.count / inventoryData.length) * 100)}% 비율</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 검색 및 필터 영역 */}
      <div className="bg-white border border-[#dde0df] rounded-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
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
            <select
              className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] appearance-none bg-white"
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
            <select
              className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] appearance-none bg-white"
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
            <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795]">검색</button>
          </div>
        </div>
      </div>

      {/* 재고 목록 테이블 */}
      <div className="bg-white border border-[#dde0df] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[#dde0df] flex justify-between items-center">
          <h2 className="text-lg font-medium">재고 목록</h2>
          <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
            <Download size={16} className="mr-1" />
            엑셀 다운로드
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">브랜드</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">모델번호</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">모델명</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">시리얼번호</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">위치</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">가격</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상태</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상세</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-[#f7f9f8] cursor-pointer">
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.brand}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.modelNumber}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.modelName}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.serialNumber}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.location}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.price}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <button
                      onClick={() => handleInventorySelect(item.id)}
                      className="px-3 py-1.5 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-sm rounded-md hover:bg-[#f1f4f3] flex items-center mx-auto"
                    >
                      <Eye size={16} className="mr-1" />
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
        {filteredInventory.map((item) => (
          <div
            key={item.id}
            className="border border-[#dde0df] rounded-md p-3 bg-white"
            onClick={() => handleInventorySelect(item.id)}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="font-medium">{item.brand}</span>
                <span className="mx-2 text-[#5b5c5b]">|</span>
                <span>{item.modelNumber}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(item.status)}`}>
                {item.status}
              </span>
            </div>
            <h3 className="text-base font-medium mb-1">{item.modelName}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <p className="text-[#5b5c5b]">시리얼번호</p>
                <p>{item.serialNumber}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">위치</p>
                <p>{item.location}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">가격</p>
                <p>{item.price}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">구매일</p>
                <p>{item.purchaseDate}</p>
              </div>
            </div>
            <button className="w-full px-3 py-1.5 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-sm rounded-md hover:bg-[#f1f4f3] flex items-center justify-center">
              <Eye size={16} className="mr-1" />
              상세보기
            </button>
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

      {/* 재고 상세 모달 */}
      {selectedInventory && (
        <InventoryDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          inventoryId={selectedInventory}
        />
      )}
    </>
  )
}
