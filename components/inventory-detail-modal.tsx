"use client"

import { useState } from "react"
import {
  X,
  Clock,
  Tag,
  MapPin,
  FileText,
  Truck,
  ShoppingBag,
  History,
  Camera,
  Edit,
  Trash2,
  Download,
} from "lucide-react"

// 더미 데이터 - 재고 상세 정보
const getInventoryDetail = (inventoryId: number) => {
  return {
    id: inventoryId,
    brand: "롤렉스",
    modelNumber: "126610LN",
    modelName: "서브마리너 데이트",
    serialNumber: "7DX92R5J",
    purchaseDate: "2023-12-05",
    invoiceNumber: "INV-2023-001",
    status: "판매 가능",
    location: "본사 금고",
    price: "₩15,300,000",
    description:
      "블랙 세라믹 베젤과 블랙 다이얼이 특징인 스테인리스 스틸 케이스의 서브마리너 데이트. 오이스터 브레이슬릿과 함께 제공됩니다.",
    specifications: {
      case: "오이스터, 41mm, 오이스터스틸",
      movement: "칼리버 3235, 자동",
      dial: "블랙",
      bracelet: "오이스터, 폴딩 오이스터클라스프",
      waterResistance: "300m",
    },
    history: [
      {
        date: "2023-12-05",
        action: "입고",
        user: "김영업",
        notes: "Invoice INV-2023-001로 입고됨",
      },
      {
        date: "2023-12-06",
        action: "검수 완료",
        user: "김엔지니어",
        notes: "모든 기능 정상 작동 확인",
      },
      {
        date: "2023-12-07",
        action: "위치 변경",
        user: "이관리",
        notes: "본사 금고로 이동",
      },
    ],
    images: ["/placeholder.svg?key=oocnj", "/placeholder.svg?key=llnnd", "/placeholder.svg?key=ztzz2"],
  }
}

interface InventoryDetailModalProps {
  isOpen: boolean
  onClose: () => void
  inventoryId: number
}

export default function InventoryDetailModal({ isOpen, onClose, inventoryId }: InventoryDetailModalProps) {
  const inventory = getInventoryDetail(inventoryId)
  const [activeTab, setActiveTab] = useState("info")
  const [activeImage, setActiveImage] = useState(0)

  if (!isOpen) return null

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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b border-[#dde0df]">
          <div className="flex items-center">
            <h2 className="text-xl font-medium">
              {inventory.brand} {inventory.modelName}
            </h2>
            <span
              className={`ml-3 inline-block px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(inventory.status)}`}
            >
              {inventory.status}
            </span>
          </div>
          <button onClick={onClose} className="text-[#5b5c5b] hover:text-[#1f1f1f]">
            <X size={20} />
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="flex-grow overflow-y-auto">
          {/* 탭 메뉴 */}
          <div className="flex border-b border-[#dde0df]">
            <button
              className={`px-4 py-2 ${
                activeTab === "info"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("info")}
            >
              기본 정보
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "specs"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("specs")}
            >
              제품 사양
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "history"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("history")}
            >
              이력
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "images"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("images")}
            >
              이미지
            </button>
          </div>

          {/* 기본 정보 탭 */}
          {activeTab === "info" && (
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">제품 정보</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Tag className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">모델번호</p>
                        <p className="font-medium">{inventory.modelNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">시리얼번호</p>
                        <p className="font-medium">{inventory.serialNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">구매일</p>
                        <p className="font-medium">{inventory.purchaseDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Truck className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">Invoice 번호</p>
                        <p className="font-medium">{inventory.invoiceNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">현재 위치</p>
                        <p className="font-medium">{inventory.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ShoppingBag className="w-5 h-5 text-[#5b5c5b] mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm text-[#5b5c5b]">가격</p>
                        <p className="font-medium">{inventory.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">제품 설명</h3>
                  <p className="text-sm leading-relaxed">{inventory.description}</p>
                  <div className="mt-4">
                    <img
                      src={inventory.images[0] || "/placeholder.svg"}
                      alt={`${inventory.brand} ${inventory.modelName}`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 제품 사양 탭 */}
          {activeTab === "specs" && (
            <div className="p-4">
              <h3 className="text-lg font-medium mb-3">제품 사양</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">케이스</p>
                  <p className="font-medium">{inventory.specifications.case}</p>
                </div>
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">무브먼트</p>
                  <p className="font-medium">{inventory.specifications.movement}</p>
                </div>
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">다이얼</p>
                  <p className="font-medium">{inventory.specifications.dial}</p>
                </div>
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">브레이슬릿</p>
                  <p className="font-medium">{inventory.specifications.bracelet}</p>
                </div>
                <div className="bg-[#f7f9f8] p-4 rounded-md">
                  <p className="text-sm text-[#5b5c5b]">방수</p>
                  <p className="font-medium">{inventory.specifications.waterResistance}</p>
                </div>
              </div>
            </div>
          )}

          {/* 이력 탭 */}
          {activeTab === "history" && (
            <div className="p-4">
              <h3 className="text-lg font-medium mb-3">재고 이력</h3>
              <div className="relative border-l-2 border-[#dde0df] pl-6 ml-2 space-y-6">
                {inventory.history.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-[#2d9bb2]"></div>
                    <div className="bg-[#f7f9f8] p-4 rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <History className="w-4 h-4 text-[#5b5c5b] mr-2" />
                          <span className="font-medium">{item.action}</span>
                        </div>
                        <span className="text-sm text-[#5b5c5b]">{item.date}</span>
                      </div>
                      <p className="text-sm mb-1">{item.notes}</p>
                      <p className="text-xs text-[#5b5c5b]">담당자: {item.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 이미지 탭 */}
          {activeTab === "images" && (
            <div className="p-4">
              <h3 className="text-lg font-medium mb-3">제품 이미지</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="bg-[#f7f9f8] p-2 rounded-md mb-4">
                    <img
                      src={inventory.images[activeImage] || "/placeholder.svg"}
                      alt={`${inventory.brand} ${inventory.modelName}`}
                      className="w-full h-64 object-contain rounded-md"
                    />
                  </div>
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
                      <Camera size={16} className="mr-1" />
                      사진 추가
                    </button>
                    <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
                      <Download size={16} className="mr-1" />
                      다운로드
                    </button>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-2">
                    {inventory.images.map((image, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer p-1 rounded-md ${
                          activeImage === index ? "border-2 border-[#2d9bb2]" : "border border-[#dde0df]"
                        }`}
                        onClick={() => setActiveImage(index)}
                      >
                        <img src={image || "/placeholder.svg"} alt="" className="w-full h-20 object-cover rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 모달 푸터 */}
        <div className="p-4 border-t border-[#dde0df] flex justify-between">
          <div>
            <button className="px-3 py-1.5 bg-[#fee6db] text-[#ea2228] border border-[#ea2228] rounded-md hover:bg-[#fda293] text-sm flex items-center">
              <Trash2 size={16} className="mr-1" />
              삭제
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-[#1f1f1f] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]"
            >
              닫기
            </button>
            <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] flex items-center">
              <Edit size={16} className="mr-1" />
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
