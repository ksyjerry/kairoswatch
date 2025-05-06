export default function PartsRegistrationPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">부품매출 등록</h1>
        <p className="text-sm text-gray-500 mt-1">부품 판매 정보를 등록합니다.</p>
      </div>

      <form className="space-y-6">
        {/* 판매 기본 정보 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-base font-medium text-gray-800">기본 정보</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="saleDate" className="block text-sm font-medium text-gray-700 mb-1">
                  판매일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="saleDate"
                  name="saleDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                  required
                />
              </div>
              <div>
                <label htmlFor="saleNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  판매번호
                </label>
                <input
                  type="text"
                  id="saleNumber"
                  name="saleNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  readOnly
                  value="PS-2023-0001"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 고객 정보 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-base font-medium text-gray-800">고객 정보</h2>
          </div>
          <div className="p-6">
            {/* 수정된 가로 레이아웃: 고객명(+검색 버튼), 연락처, 이메일 */}
            <div className="grid grid-cols-12 gap-4">
              {/* 고객명 (4/12 너비) */}
              <div className="col-span-12 sm:col-span-4">
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                  고객명 <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                    required
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-[#2d9bb2] text-white rounded-r-md hover:bg-[#268a9e] transition-colors"
                  >
                    검색
                  </button>
                </div>
              </div>
              {/* 연락처 (4/12 너비) */}
              <div className="col-span-12 sm:col-span-4">
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  연락처
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                  placeholder="010-0000-0000"
                />
              </div>
              {/* 이메일 (4/12 너비) */}
              <div className="col-span-12 sm:col-span-4">
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 부품 정보 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-base font-medium text-gray-800">부품 정보</h2>
          </div>
          <div className="p-4">
            <div className="mb-4">
              {/* 부품코드 입력 및 검색 (왼쪽 정렬) */}
              <div className="flex items-center mb-4">
                <div className="w-3/12 pr-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">부품코드</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                      placeholder="부품코드"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-[#2d9bb2] text-white rounded-r-md hover:bg-[#268a9e] transition-colors"
                    >
                      검색
                    </button>
                  </div>
                </div>
              </div>

              {/* 부품 정보 테이블 */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="w-3/12 px-4 py-3 text-left text-sm font-medium text-gray-700">부품명</th>
                      <th className="w-2/12 px-4 py-3 text-left text-sm font-medium text-gray-700">단가</th>
                      <th className="w-2/12 px-4 py-3 text-left text-sm font-medium text-gray-700">수량</th>
                      <th className="w-2/12 px-4 py-3 text-left text-sm font-medium text-gray-700">금액</th>
                      <th className="w-3/12 px-4 py-3 text-left text-sm font-medium text-gray-700">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                          placeholder="부품명"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                          placeholder="단가"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                          placeholder="수량"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                          placeholder="금액"
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 부품 추가 버튼 */}
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full px-3 py-3 border border-dashed border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 transition-colors"
                >
                  + 부품 추가
                </button>
              </div>

              {/* 총 금액 */}
              <div className="mt-4 text-right">
                <span className="text-base font-medium mr-2">총 금액:</span>
                <span className="text-lg font-bold">0 원</span>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 정보 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-base font-medium text-gray-800">결제 정보</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                  결제 방법 <span className="text-red-500">*</span>
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                  required
                >
                  <option value="">선택하세요</option>
                  <option value="card">신용카드</option>
                  <option value="cash">현금</option>
                  <option value="transfer">계좌이체</option>
                </select>
              </div>
              <div>
                <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  결제 상태 <span className="text-red-500">*</span>
                </label>
                <select
                  id="paymentStatus"
                  name="paymentStatus"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                  required
                >
                  <option value="">선택하세요</option>
                  <option value="completed">결제완료</option>
                  <option value="pending">결제대기</option>
                </select>
              </div>
              <div>
                <label htmlFor="receiptNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  영수증 번호
                </label>
                <input
                  type="text"
                  id="receiptNumber"
                  name="receiptNumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 메모 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-base font-medium text-gray-800">추가 정보</h2>
          </div>
          <div className="p-6">
            <div>
              <label htmlFor="memo" className="block text-sm font-medium text-gray-700 mb-1">
                메모
              </label>
              <textarea
                id="memo"
                name="memo"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d9bb2]"
                placeholder="추가 정보를 입력하세요"
              ></textarea>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#268a9e] transition-colors"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  )
}
