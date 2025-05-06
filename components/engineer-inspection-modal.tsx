"use client"

import { useState } from "react"
import {
  X,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Camera,
  Upload,
  Clock,
  Droplets,
  Gauge,
  Wrench,
  Shield,
} from "lucide-react"

// 더미 데이터 - Invoice 상세 정보
const getInvoiceDetail = (invoiceId: string) => {
  return {
    id: invoiceId,
    date: "2023-12-05",
    supplier: "롤렉스 코리아",
    totalAmount: "₩45,800,000",
    currency: "KRW",
    status: "검수 대기",
    memo: "12월 입고 물량입니다. 특별 주문 제품 포함.",
    salesInspector: "김영업",
    salesInspectionDate: "2023-12-06",
    salesInspectionNotes: "모든 제품 외관 상태 양호, 구매 서류 확인 완료",
    items: [
      {
        id: 1,
        modelNumber: "126610LN",
        name: "서브마리너 데이트",
        quantity: 1,
        price: "₩15,300,000",
        serialNumber: "7DX92R5J",
        status: "검수 대기",
        salesStatus: "승인",
      },
      {
        id: 2,
        modelNumber: "126711CHNR",
        name: "GMT-마스터 II",
        quantity: 1,
        price: "₩18,500,000",
        serialNumber: "9FT81L3K",
        status: "검수 대기",
        salesStatus: "승인",
      },
      {
        id: 3,
        modelNumber: "126334",
        name: "데이트저스트 41",
        quantity: 1,
        price: "₩12,000,000",
        serialNumber: "5HN43P7M",
        status: "검수 대기",
        salesStatus: "승인",
      },
    ],
  }
}

interface EngineerInspectionModalProps {
  isOpen: boolean
  onClose: () => void
  invoiceId: string
}

export default function EngineerInspectionModal({ isOpen, onClose, invoiceId }: EngineerInspectionModalProps) {
  const invoice = getInvoiceDetail(invoiceId)
  const [activeTab, setActiveTab] = useState("items")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [inspectionNotes, setInspectionNotes] = useState("")
  const [inspectionResult, setInspectionResult] = useState<"승인" | "조건부 승인" | "반려" | "">("")

  // 기술 검사 항목
  const [technicalChecks, setTechnicalChecks] = useState({
    accuracy: false,
    waterResistance: false,
    powerReserve: false,
    movement: false,
    authenticity: false,
  })

  // 검수 결과 제출 핸들러
  const handleSubmitInspection = () => {
    if (!inspectionResult) {
      alert("검수 결과를 선택해주세요.")
      return
    }

    // 여기에 검수 결과 제출 로직 구현
    console.log("검수 결과 제출:", {
      invoiceId,
      itemId: selectedItem,
      result: inspectionResult,
      notes: inspectionNotes,
      technicalChecks,
    })

    // 성공 메시지 표시 후 모달 닫기
    alert("검수 결과가 저장되었습니다.")
    onClose()
  }

  // 기술 검사 항목 토글 핸들러
  const handleTechnicalCheckToggle = (key: keyof typeof technicalChecks) => {
    setTechnicalChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b border-[#dde0df]">
          <div className="flex items-center">
            <FileText size={20} className="mr-2 text-[#2d9bb2]" />
            <h2 className="text-xl font-medium">{invoice.id} 기술 검수</h2>
          </div>
          <button onClick={onClose} className="text-[#5b5c5b] hover:text-[#1f1f1f]">
            <X size={20} />
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="flex-grow overflow-y-auto">
          {/* Invoice 기본 정보 */}
          <div className="p-4 border-b border-[#dde0df] bg-[#f7f9f8]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-[#5b5c5b]">공급업체</p>
                <p className="font-medium">{invoice.supplier}</p>
              </div>
              <div>
                <p className="text-sm text-[#5b5c5b]">날짜</p>
                <p className="font-medium">{invoice.date}</p>
              </div>
              <div>
                <p className="text-sm text-[#5b5c5b]">총 금액</p>
                <p className="font-medium">{invoice.totalAmount}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-[#5b5c5b]">영업팀 검수 정보</p>
              <div className="mt-1 p-2 bg-white border border-[#dde0df] rounded-md">
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="text-[#5b5c5b]">검수자: {invoice.salesInspector}</span>
                  <span className="text-[#5b5c5b]">|</span>
                  <span className="text-[#5b5c5b]">검수일: {invoice.salesInspectionDate}</span>
                  <span className="text-[#5b5c5b]">|</span>
                  <span className="text-[#5b5c5b]">비고: {invoice.salesInspectionNotes}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 탭 메뉴 */}
          <div className="flex border-b border-[#dde0df]">
            <button
              className={`px-4 py-2 ${
                activeTab === "items"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("items")}
            >
              제품 목록
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "document"
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveTab("document")}
            >
              Invoice 문서
            </button>
          </div>

          {/* 제품 목록 탭 */}
          {activeTab === "items" && (
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[768px]">
                  <thead className="bg-[#f7f9f8]">
                    <tr>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">모델번호</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">제품명</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-center">수량</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">가격</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">시리얼번호</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-center">영업팀</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-center">상태</th>
                      <th className="font-medium text-[#1f1f1f] py-2 px-4 text-center">검수</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item) => (
                      <tr key={item.id} className={selectedItem === item.id ? "bg-[#ecfcf8]" : "hover:bg-[#f7f9f8]"}>
                        <td className="py-2 px-4 border-t border-[#dde0df]">{item.modelNumber}</td>
                        <td className="py-2 px-4 border-t border-[#dde0df]">{item.name}</td>
                        <td className="py-2 px-4 border-t border-[#dde0df] text-center">{item.quantity}</td>
                        <td className="py-2 px-4 border-t border-[#dde0df]">{item.price}</td>
                        <td className="py-2 px-4 border-t border-[#dde0df]">{item.serialNumber}</td>
                        <td className="py-2 px-4 border-t border-[#dde0df] text-center">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              item.salesStatus === "승인"
                                ? "bg-[#ecfcf8] text-[#00806a]"
                                : item.salesStatus === "조건부 승인"
                                  ? "bg-[#fff8cd] text-[#b78803]"
                                  : "bg-[#fee6db] text-[#ea2228]"
                            }`}
                          >
                            {item.salesStatus}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-t border-[#dde0df] text-center">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              item.status === "검수 대기"
                                ? "bg-[#fff8cd] text-[#b78803]"
                                : item.status === "검수 완료"
                                  ? "bg-[#e6f7ff] text-[#0072c6]"
                                  : "bg-[#f1f4f3] text-[#5b5c5b]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-t border-[#dde0df] text-center">
                          <button
                            onClick={() => setSelectedItem(item.id)}
                            className={`px-3 py-1 text-xs rounded-md ${
                              selectedItem === item.id
                                ? "bg-[#2d9bb2] text-white"
                                : "bg-white text-[#2d9bb2] border border-[#2d9bb2] hover:bg-[#f1f4f3]"
                            }`}
                          >
                            {selectedItem === item.id ? "선택됨" : "선택"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 선택된 제품 검수 폼 */}
              {selectedItem && (
                <div className="mt-6 border border-[#dde0df] rounded-md p-4">
                  <h3 className="text-lg font-medium mb-4">기술 검수 정보 입력</h3>

                  {/* 기술 검사 항목 */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#5b5c5b] mb-2">
                      기술 검사 항목 <span className="text-[#f94b50]">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div
                        className={`flex items-center p-3 rounded-md border cursor-pointer ${
                          technicalChecks.accuracy
                            ? "border-[#2d9bb2] bg-[#ecfcf8] text-[#2d9bb2]"
                            : "border-[#dde0df] hover:bg-[#f7f9f8]"
                        }`}
                        onClick={() => handleTechnicalCheckToggle("accuracy")}
                      >
                        <Clock size={18} className="mr-2" />
                        <div>
                          <p className="font-medium">정확도 테스트</p>
                          <p className="text-xs text-[#5b5c5b]">시간 정확도 측정</p>
                        </div>
                        {technicalChecks.accuracy && <CheckCircle size={18} className="ml-auto" />}
                      </div>
                      <div
                        className={`flex items-center p-3 rounded-md border cursor-pointer ${
                          technicalChecks.waterResistance
                            ? "border-[#2d9bb2] bg-[#ecfcf8] text-[#2d9bb2]"
                            : "border-[#dde0df] hover:bg-[#f7f9f8]"
                        }`}
                        onClick={() => handleTechnicalCheckToggle("waterResistance")}
                      >
                        <Droplets size={18} className="mr-2" />
                        <div>
                          <p className="font-medium">방수 테스트</p>
                          <p className="text-xs text-[#5b5c5b]">방수 기능 확인</p>
                        </div>
                        {technicalChecks.waterResistance && <CheckCircle size={18} className="ml-auto" />}
                      </div>
                      <div
                        className={`flex items-center p-3 rounded-md border cursor-pointer ${
                          technicalChecks.powerReserve
                            ? "border-[#2d9bb2] bg-[#ecfcf8] text-[#2d9bb2]"
                            : "border-[#dde0df] hover:bg-[#f7f9f8]"
                        }`}
                        onClick={() => handleTechnicalCheckToggle("powerReserve")}
                      >
                        <Gauge size={18} className="mr-2" />
                        <div>
                          <p className="font-medium">파워 리저브</p>
                          <p className="text-xs text-[#5b5c5b]">동력 보존 시간 확인</p>
                        </div>
                        {technicalChecks.powerReserve && <CheckCircle size={18} className="ml-auto" />}
                      </div>
                      <div
                        className={`flex items-center p-3 rounded-md border cursor-pointer ${
                          technicalChecks.movement
                            ? "border-[#2d9bb2] bg-[#ecfcf8] text-[#2d9bb2]"
                            : "border-[#dde0df] hover:bg-[#f7f9f8]"
                        }`}
                        onClick={() => handleTechnicalCheckToggle("movement")}
                      >
                        <Wrench size={18} className="mr-2" />
                        <div>
                          <p className="font-medium">무브먼트 검사</p>
                          <p className="text-xs text-[#5b5c5b]">기계 작동 상태 확인</p>
                        </div>
                        {technicalChecks.movement && <CheckCircle size={18} className="ml-auto" />}
                      </div>
                      <div
                        className={`flex items-center p-3 rounded-md border cursor-pointer ${
                          technicalChecks.authenticity
                            ? "border-[#2d9bb2] bg-[#ecfcf8] text-[#2d9bb2]"
                            : "border-[#dde0df] hover:bg-[#f7f9f8]"
                        }`}
                        onClick={() => handleTechnicalCheckToggle("authenticity")}
                      >
                        <Shield size={18} className="mr-2" />
                        <div>
                          <p className="font-medium">진품 확인</p>
                          <p className="text-xs text-[#5b5c5b]">정품 여부 확인</p>
                        </div>
                        {technicalChecks.authenticity && <CheckCircle size={18} className="ml-auto" />}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5b5c5b] mb-1">
                        검수 결과 <span className="text-[#f94b50]">*</span>
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setInspectionResult("승인")}
                          className={`flex items-center px-3 py-2 rounded-md ${
                            inspectionResult === "승인"
                              ? "bg-[#ecfcf8] text-[#00806a] border border-[#00806a]"
                              : "bg-white border border-[#dde0df]"
                          }`}
                        >
                          <CheckCircle size={16} className="mr-1" />
                          승인
                        </button>
                        <button
                          type="button"
                          onClick={() => setInspectionResult("조건부 승인")}
                          className={`flex items-center px-3 py-2 rounded-md ${
                            inspectionResult === "조건부 승인"
                              ? "bg-[#fff8cd] text-[#b78803] border border-[#b78803]"
                              : "bg-white border border-[#dde0df]"
                          }`}
                        >
                          <AlertCircle size={16} className="mr-1" />
                          조건부 승인
                        </button>
                        <button
                          type="button"
                          onClick={() => setInspectionResult("반려")}
                          className={`flex items-center px-3 py-2 rounded-md ${
                            inspectionResult === "반려"
                              ? "bg-[#fee6db] text-[#ea2228] border border-[#ea2228]"
                              : "bg-white border border-[#dde0df]"
                          }`}
                        >
                          <XCircle size={16} className="mr-1" />
                          반려
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#5b5c5b] mb-1">검수자</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                        value="김엔지니어"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#5b5c5b] mb-1">기술 검수 내용</label>
                    <textarea
                      className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] h-24"
                      placeholder="기술 검수 중 발견한 특이사항이나 확인 내용을 입력하세요."
                      value={inspectionNotes}
                      onChange={(e) => setInspectionNotes(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#5b5c5b] mb-1">사진 첨부</label>
                    <div className="flex gap-2">
                      <button className="flex items-center px-3 py-2 bg-[#f1f4f3] border border-[#dde0df] text-[#5b5c5b] rounded-md hover:bg-[#ebeeed]">
                        <Camera size={16} className="mr-1" />
                        사진 촬영
                      </button>
                      <button className="flex items-center px-3 py-2 bg-[#f1f4f3] border border-[#dde0df] text-[#5b5c5b] rounded-md hover:bg-[#ebeeed]">
                        <Upload size={16} className="mr-1" />
                        파일 업로드
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Invoice 문서 탭 */}
          {activeTab === "document" && (
            <div className="p-4">
              <div className="border border-[#dde0df] rounded-md h-[400px] flex items-center justify-center bg-[#f7f9f8]">
                <div className="text-center">
                  <FileText size={48} className="mx-auto mb-2 text-[#5b5c5b]" />
                  <p className="text-[#5b5c5b]">Invoice 문서 미리보기</p>
                  <button className="mt-2 px-3 py-1.5 bg-[#2d9bb2] text-white text-sm rounded-md hover:bg-[#1f7795]">
                    문서 보기
                  </button>
                </div>
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
            취소
          </button>
          <button
            onClick={handleSubmitInspection}
            className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] flex items-center"
          >
            <CheckCircle size={16} className="mr-1" />
            검수 완료
          </button>
        </div>
      </div>
    </div>
  )
}
