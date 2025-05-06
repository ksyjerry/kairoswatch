"use client"

import { useState } from "react"
import { Search, Filter, Calendar, Download, Eye } from "lucide-react"

// 더미 데이터 - 매출 목록
const salesData = [
  {
    id: 1,
    date: "2023-12-15",
    customerName: "김고객",
    brand: "롤렉스",
    modelName: "서브마리너 데이트",
    serialNumber: "7DX92R5J",
    price: "₩15,300,000",
    paymentMethod: "카드",
    salesPerson: "박판매",
  },
  {
    id: 2,
    date: "2023-12-10",
    customerName: "이구매",
    brand: "오메가",
    modelName: "스피드마스터 문워치",
    serialNumber: "8KL72P9N",
    price: "₩9,800,000",
    paymentMethod: "현금",
    salesPerson: "김상담",
  },
  {
    id: 3,
    date: "2023-12-05",
    customerName: "최시계",
    brand: "까르띠에",
    modelName: "산토스 드 까르띠에",
    serialNumber: "2PQ47L8S",
    price: "₩9,200,000",
    paymentMethod: "계좌이체",
    salesPerson: "박판매",
  },
  {
    id: 4,
    date: "2023-11-28",
    customerName: "정명품",
    brand: "IWC",
    modelName: "포르투기저 크로노그래프",
    serialNumber: "4HL63M2P",
    price: "₩10,200,000",
    paymentMethod: "카드",
    salesPerson: "김상담",
  },
  {
    id: 5,
    date: "2023-11-20",
    customerName: "박럭셔리",
    brand: "태그호이어",
    modelName: "카레라 크로노그래프",
    serialNumber: "5RP28S9Q",
    price: "₩6,800,000",
    paymentMethod: "카드",
    salesPerson: "이매니저",
  },
]

export default function WatchSalesStatusPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [brandFilter, setBrandFilter] = useState("all")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  // 브랜드 목록 추출
  const brands = Array.from(new Set(salesData.map((item) => item.brand)))

  // 검색 및 필터링 로직
  const filteredSales = salesData.filter((item) => {
    const matchesSearch =
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBrand = brandFilter === "all" || item.brand === brandFilter

    // 날짜 필터링
    const itemDate = new Date(item.date)
    const matchesStartDate = !startDate || new Date(startDate) <= itemDate
    const matchesEndDate = !endDate || new Date(endDate) >= itemDate

    return matchesSearch && matchesBrand && matchesStartDate && matchesEndDate
  })

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">매출현황조회</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">시계 매출 현황을 조회합니다.</p>
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
              placeholder="고객명, 모델명, 시리얼번호 검색"
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

      {/* 매출 목록 테이블 */}
      <div className="bg-white border border-[#dde0df] rounded-md overflow-hidden">
        <div className="p-4 border-b border-[#dde0df] flex justify-between items-center">
          <h2 className="text-lg font-medium">매출 목록</h2>
          <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
            <Download size={16} className="mr-1" />
            엑셀 다운로드
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">판매일</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">고객명</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">브랜드</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">모델명</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">시리얼번호</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">판매가격</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">결제방법</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">판매담당자</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상세</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((item) => (
                <tr key={item.id} className="hover:bg-[#f7f9f8]">
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.date}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.customerName}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.brand}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.modelName}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.serialNumber}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.price}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.paymentMethod}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{item.salesPerson}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <button className="px-3 py-1.5 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-sm rounded-md hover:bg-[#f1f4f3] flex items-center mx-auto">
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
        {filteredSales.map((item) => (
          <div key={item.id} className="border border-[#dde0df] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">
                {item.brand} {item.modelName}
              </div>
              <span className="text-xs text-[#5b5c5b]">{item.date}</span>
            </div>
            <div className="text-sm mb-2">
              <div>고객명: {item.customerName}</div>
              <div>시리얼번호: {item.serialNumber}</div>
              <div>판매가격: {item.price}</div>
              <div>결제방법: {item.paymentMethod}</div>
              <div>판매담당자: {item.salesPerson}</div>
            </div>
            <div className="flex justify-end">
              <button className="px-2 py-1 bg-white text-[#2d9bb2] border border-[#2d9bb2] text-xs rounded-md hover:bg-[#f1f4f3] flex items-center">
                <Eye size={12} className="mr-1" />
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
    </>
  )
}
