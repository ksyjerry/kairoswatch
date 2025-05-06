import PdfUploader from "@/components/pdf-uploader"

export default function InvoiceRegistrationPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">Invoice 등록</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">입고된 제품의 Invoice를 등록합니다.</p>
      </div>

      <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="invoiceNumber" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                Invoice 번호 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="invoiceNumber"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="INV-2023-001"
              />
            </div>
            <div>
              <label htmlFor="invoiceDate" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                Invoice 날짜 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="date"
                id="invoiceDate"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              />
            </div>
            <div>
              <label htmlFor="supplier" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                공급업체 <span className="text-[#f94b50]">*</span>
              </label>
              <select
                id="supplier"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="">선택하세요</option>
                <option value="supplier1">롤렉스 코리아</option>
                <option value="supplier2">오메가 코리아</option>
                <option value="supplier3">까르띠에 코리아</option>
                <option value="supplier4">IWC 코리아</option>
              </select>
            </div>
            <div>
              <label htmlFor="totalAmount" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                총 금액 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="totalAmount"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="₩ 0"
              />
            </div>
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                통화
              </label>
              <select
                id="currency"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="KRW">KRW (원)</option>
                <option value="USD">USD (달러)</option>
                <option value="EUR">EUR (유로)</option>
                <option value="JPY">JPY (엔)</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                상태
              </label>
              <select
                id="status"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="draft">임시 저장</option>
                <option value="submitted">제출됨</option>
                <option value="approved">승인됨</option>
                <option value="rejected">반려됨</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Invoice 파일 업로드</h2>
          <PdfUploader />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">메모</h2>
          <textarea
            className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2] h-24"
            placeholder="추가 정보를 입력하세요"
          ></textarea>
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-white text-[#1f1f1f] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]">
            취소
          </button>
          <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            등록
          </button>
        </div>
      </div>
    </>
  )
}
