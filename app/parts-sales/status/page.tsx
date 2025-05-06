export default function PartsSalesStatusPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">매출현황조회</h1>
        <p className="text-sm text-gray-500 mt-1">부품 판매 현황을 조회합니다.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1">
            <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">
              기간 선택
            </label>
            <div className="flex items-center space-x-2">
              <input type="date" id="startDate" className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
              <span>~</span>
              <input type="date" id="endDate" className="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div>
            <label htmlFor="searchType" className="block text-sm font-medium text-gray-700 mb-1">
              검색 조건
            </label>
            <select id="searchType" className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="all">전체</option>
              <option value="partName">부품명</option>
              <option value="partCode">부품코드</option>
              <option value="customerName">고객명</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="searchKeyword" className="block text-sm font-medium text-gray-700 mb-1">
              검색어
            </label>
            <input
              type="text"
              id="searchKeyword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="검색어를 입력하세요"
            />
          </div>
          <div>
            <button type="button" className="w-full px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#268a9e]">
              검색
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  판매번호
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  판매일
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  고객명
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  부품수
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  총 금액
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  결제방법
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  결제상태
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PS-2023-0001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">홍길동</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150,000원</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">신용카드</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">결제완료</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="button" className="px-2 py-1 bg-[#2d9bb2] text-white rounded-md text-xs">
                    상세
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PS-2023-0002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-16</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">김철수</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">75,000원</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">현금</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">결제대기</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="button" className="px-2 py-1 bg-[#2d9bb2] text-white rounded-md text-xs">
                    상세
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">이전</button>
            <button className="px-3 py-1 bg-[#2d9bb2] text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">다음</button>
          </nav>
        </div>
      </div>
    </div>
  )
}
