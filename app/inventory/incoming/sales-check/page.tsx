"use client"

import { useState } from "react"
import { Search, Filter, FileText } from "lucide-react"
import InvoiceDetailModal from "@/components/invoice-detail-modal"

// 더미 데이터 - 검수 대상 Invoice 목록
const invoiceData = [
  {
    id: "INV-2023-001",
    date: "2023-12-05",
    supplier: "롤렉스 코리아",
    totalAmount: "₩45,800,000",
    itemCount: 3,
    status: "검수 대기",
  },
  {
    id: "INV-2023-002",
    date: "2023-12-07",
    supplier: "오메가 코리아",
    totalAmount: "₩28,500,000",
    itemCount: 2,
    status: "검수 중",
  },
  {
    id: "INV-2023-003",
    date: "2023-12-10",
    supplier: "까르띠에 코리아",
    totalAmount: "₩32,700,000",
    itemCount: 4,
    status: "검수 완료",
  },
  {
    id: "INV-2023-004",
    date: "2023-12-12",
    supplier: "IWC 코리아",
    totalAmount: "₩19,500,000",
    itemCount: 2,
    status: "검수 대기",
  },
  {
    id: "INV-2023-005",
    date: "2023-12-15",
    supplier: "태그호이어 코리아",
    totalAmount: "₩15,200,000",
    itemCount: 3,
    status: "검수 대기",
  },
]

export default function SalesCheckPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 검색 및 필터링 로직
  const filteredInvoices = invoiceData.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.supplier.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Invoice 선택 및 모달 열기
  const handleInvoiceSelect = (invoiceId: string) => {
    setSelectedInvoice(invoiceId)
    setIsModalOpen(true)
  }

  // 상태에 따른 배지 스타일
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "검수 대기":
        return "bg-[#fff8cd] text-[#b78803]"
      case "검수 중":
        return "bg-[#ecfcf8] text-[#00806a]"
      case "검수 완료":
        return "bg-[#e6f7ff] text-[#0072c6]"
      default:
        return "bg-[#f1f4f3] text-[#5b5c5b]"
    }
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">영업팀 검수</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">입고된 제품의 영업팀 검수를 진행합니다.</p>
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
              placeholder="Invoice 번호 또는 공급업체 검색"
              className="w-full pl-10 pr-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
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
                <option value="검수 대기">검수 대기</option>
                <option value="검수 중">검수 중</option>
                <option value="검수 완료">검수 완료</option>
              </select>
            </div>
            <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795]">검색</button>
          </div>
        </div>
      </div>

      {/* Invoice 목록 테이블 */}
      <div className="bg-white border border-[#dde0df] rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">Invoice 번호</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">날짜</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">공급업체</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-left">총 금액</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">품목 수</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">상태</th>
                <th className="font-medium text-[#1f1f1f] py-3 px-4 text-center">검수</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-[#f7f9f8] cursor-pointer">
                  <td className="py-3 px-4 border-t border-[#dde0df]">
                    <div className="flex items-center">
                      <FileText size={16} className="mr-2 text-[#5b5c5b]" />
                      {invoice.id}
                    </div>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{invoice.date}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{invoice.supplier}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df]">{invoice.totalAmount}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">{invoice.itemCount}</td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(invoice.status)}`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-t border-[#dde0df] text-center">
                    <button
                      onClick={() => handleInvoiceSelect(invoice.id)}
                      className="px-3 py-1.5 bg-[#2d9bb2] text-white text-sm rounded-md hover:bg-[#1f7795]"
                    >
                      검수하기
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
        {filteredInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="border border-[#dde0df] rounded-md p-3 bg-white"
            onClick={() => handleInvoiceSelect(invoice.id)}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <FileText size={16} className="mr-2 text-[#5b5c5b]" />
                <span className="font-medium">{invoice.id}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(invoice.status)}`}>
                {invoice.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <p className="text-[#5b5c5b]">날짜</p>
                <p>{invoice.date}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">공급업체</p>
                <p>{invoice.supplier}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">총 금액</p>
                <p>{invoice.totalAmount}</p>
              </div>
              <div>
                <p className="text-[#5b5c5b]">품목 수</p>
                <p>{invoice.itemCount}개</p>
              </div>
            </div>
            <button className="w-full px-3 py-1.5 bg-[#2d9bb2] text-white text-sm rounded-md hover:bg-[#1f7795]">
              검수하기
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

      {/* Invoice 상세 및 검수 모달 */}
      {selectedInvoice && (
        <InvoiceDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} invoiceId={selectedInvoice} />
      )}
    </>
  )
}
