export default function WatchSalesRegistrationPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">시계매출등록</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">시계 매출 정보를 등록합니다.</p>
      </div>

      <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">매출 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="saleDate" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                판매일 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="date"
                id="saleDate"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              />
            </div>
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                고객명 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="customerName"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="고객명을 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                연락처
              </label>
              <input
                type="tel"
                id="customerPhone"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="010-0000-0000"
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                브랜드 <span className="text-[#f94b50]">*</span>
              </label>
              <select
                id="brand"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="">선택하세요</option>
                <option value="롤렉스">롤렉스</option>
                <option value="오메가">오메가</option>
                <option value="까르띠에">까르띠에</option>
                <option value="IWC">IWC</option>
                <option value="태그호이어">태그호이어</option>
              </select>
            </div>
            <div>
              <label htmlFor="modelName" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                모델명 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="modelName"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="모델명을 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="serialNumber" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                시리얼번호 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="serialNumber"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="시리얼번호를 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="salePrice" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                판매가격 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="salePrice"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="₩ 0"
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                결제방법 <span className="text-[#f94b50]">*</span>
              </label>
              <select
                id="paymentMethod"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="">선택하세요</option>
                <option value="카드">카드</option>
                <option value="현금">현금</option>
                <option value="계좌이체">계좌이체</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <div>
              <label htmlFor="salesPerson" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                판매담당자 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="salesPerson"
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="판매담당자 이름"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">추가 정보</h2>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-[#5b5c5b] mb-1">
              비고
            </label>
            <textarea
              id="notes"
              rows={4}
              className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              placeholder="추가 정보를 입력하세요"
            ></textarea>
          </div>
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
