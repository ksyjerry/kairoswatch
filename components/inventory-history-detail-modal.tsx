"use client"

import { X, Tag, MapPin, FileText, User, ArrowRight, Truck, ShoppingBag, AlertTriangle } from "lucide-react"

// 더미 데이터 - 이력 상세 정보
const getHistoryDetail = (historyId: number) => {
  // 실제 구현에서는 API 호출 등을 통해 데이터를 가져옴
  return {
    id: historyId,
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
    customerName: "김고객",
    customerPhone: "010-1234-5678",
    reservationDate: "2023-12-20",
    additionalInfo: "고객이 직접 방문하여 제품 확인 후 구매 예정",
  }
}

interface InventoryHistoryDetailModalProps {
  isOpen: boolean
  onClose: () => void
  historyId: number
}

export default function InventoryHistoryDetailModal({ isOpen, onClose, historyId }: InventoryHistoryDetailModalProps) {
  const history = getHistoryDetail(historyId)

  if (!isOpen) return null

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

  // 이력 유형에 따른 아이콘
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "입고":
        return <Truck className="w-5 h-5" />
      case "출고":
        return <ShoppingBag className="w-5 h-5" />
      case "위치 변경":
        return <MapPin className="w-5 h-5" />
      case "상태 변경":
        return <AlertTriangle className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b border-[#dde0df]">
          <div className="flex items-center">
            <div className={`p-2 rounded-full mr-2 ${getTypeBadgeStyle(history.type)}`}>
              {getTypeIcon(history.type)}
            </div>
            <div>
              <h2 className="text-xl font-medium">{history.type} 이력</h2>
              <p className="text-sm text-[#5b5c5b]">
                {history.date} {history.time}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#5b5c5b] hover:text-[#1f1f1f]">
            <X size={20} />
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* 제품 정보 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">제품 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f7f9f8] p-3 rounded-md">
                <div className="flex items-start">
                  <Tag className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-[#5b5c5b]">브랜드 / 모델명</p>
                    <p className="font-medium">
                      {history.brand} {history.modelName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f7f9f8] p-3 rounded-md">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-[#5b5c5b]">모델번호 / 시리얼번호</p>
                    <p className="font-medium">
                      {history.modelNumber} / {history.serialNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f7f9f8] p-3 rounded-md">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm text-[#5b5c5b]">현재 위치</p>
                    <p className="font-medium">{history.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 이력 상세 정보 */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">이력 상세 정보</h3>
            <div className="bg-[#f7f9f8] p-4 rounded-md">
              {history.type === "상태 변경" && (
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-md border border-[#dde0df]">{history.fromStatus}</div>
                  <ArrowRight className="mx-3 text-[#5b5c5b]" />
                  <div className="bg-[#ecfcf8] p-2 rounded-md border border-[#00806a] text-[#00806a]">
                    {history.toStatus}
                  </div>
                </div>
              )}

              {history.type === "위치 변경" && (
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-md border border-[#dde0df]">{history.fromLocation}</div>
                  <ArrowRight className="mx-3 text-[#5b5c5b]" />
                  <div className="bg-[#ecfcf8] p-2 rounded-md border border-[#00806a] text-[#00806a]">
                    {history.toLocation}
                  </div>
                </div>
              )}

              {history.type === "입고" && (
                <div className="mb-4">
                  <p className="text-sm text-[#5b5c5b]">Invoice 번호</p>
                  <p className="font-medium">{history.invoiceNumber}</p>
                </div>
              )}

              <div className="flex items-start mb-4">
                <User className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-[#5b5c5b]">담당자</p>
                  <p className="font-medium">{history.user}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-[#5b5c5b]">메모</p>
                <p className="mt-1 p-2 bg-white border border-[#dde0df] rounded-md">{history.notes}</p>
              </div>

              {history.type === "상태 변경" && history.toStatus === "예약 중" && (
                <div className="border-t border-[#dde0df] pt-4 mt-4">
                  <h4 className="font-medium mb-2">예약 정보</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-[#5b5c5b]">고객명</p>
                      <p className="font-medium">{history.customerName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#5b5c5b]">연락처</p>
                      <p className="font-medium">{history.customerPhone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#5b5c5b]">예약일</p>
                      <p className="font-medium">{history.reservationDate}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-[#5b5c5b]">추가 정보</p>
                    <p className="mt-1 p-2 bg-white border border-[#dde0df] rounded-md">{history.additionalInfo}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 모달 푸터 */}
        <div className="p-4 border-t border-[#dde0df] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-[#1f1f1f] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
