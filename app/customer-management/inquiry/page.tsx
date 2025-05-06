import CustomerListTable from "@/components/customer-list-table"

export default function CustomerInquiryPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">고객 조회</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">등록된 고객 정보를 조회합니다.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md border border-[#dde0df] shadow-sm">
          <p className="text-sm text-[#5b5c5b]">총 고객 수</p>
          <p className="text-xl font-medium mt-1">152명</p>
          <p className="text-xs text-[#2d9bb2] mt-1">+12명 (전월 대비)</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-[#dde0df] shadow-sm">
          <p className="text-sm text-[#5b5c5b]">이번 달 신규 고객</p>
          <p className="text-xl font-medium mt-1">24명</p>
          <p className="text-xs text-[#2d9bb2] mt-1">+8명 (전월 대비)</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-[#dde0df] shadow-sm">
          <p className="text-sm text-[#5b5c5b]">활성 고객</p>
          <p className="text-xl font-medium mt-1">128명</p>
          <p className="text-xs text-[#2d9bb2] mt-1">84.2%</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-[#dde0df] shadow-sm">
          <p className="text-sm text-[#5b5c5b]">휴면 고객</p>
          <p className="text-xl font-medium mt-1">24명</p>
          <p className="text-xs text-[#5b5c5b] mt-1">15.8%</p>
        </div>
      </div>

      {/* 고객 리스트 테이블 */}
      <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6 mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">고객 리스트</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-[#f1f4f3] text-[#5b5c5b] border border-[#dde0df] rounded-md hover:bg-[#ebeeed] text-sm flex items-center">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              엑셀 다운로드
            </button>
            <button className="px-3 py-1.5 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] text-sm flex items-center">
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
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              신규 고객 등록
            </button>
          </div>
        </div>
        <CustomerListTable />
      </div>
    </>
  )
}
