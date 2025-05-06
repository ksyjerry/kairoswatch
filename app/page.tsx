import SalesChart from "@/components/dashboard/sales-chart"
import BrandPieChart from "@/components/dashboard/brand-pie-chart"
import TopSellingWatches from "@/components/dashboard/top-selling-watches"
import RegionLineChart from "@/components/dashboard/region-line-chart"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f9f8] pt-16">
      <main className="w-full py-4 md:py-8 px-3 md:px-4 max-w-[1600px] mx-auto">
        {/* 요약 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-[#dde0df] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#5b5c5b] font-medium">총 매출액</p>
              <div className="w-8 h-8 rounded-full bg-[#ecfcf8] flex items-center justify-center text-[#2d9bb2]">
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
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-2 text-[#333]">₩58,850,000</p>
            <div className="flex items-center mt-2 text-[#2d9bb2]">
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span className="text-xs font-medium">+11.5% 전년 대비</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#dde0df] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#5b5c5b] font-medium">판매 시계 수</p>
              <div className="w-8 h-8 rounded-full bg-[#ecfcf8] flex items-center justify-center text-[#2d9bb2]">
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
                >
                  <circle cx="12" cy="12" r="7"></circle>
                  <polyline points="12 9 12 12 13.5 13.5"></polyline>
                  <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-2 text-[#333]">124대</p>
            <div className="flex items-center mt-2 text-[#2d9bb2]">
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span className="text-xs font-medium">+8.7% 전년 대비</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#dde0df] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#5b5c5b] font-medium">평균 판매가</p>
              <div className="w-8 h-8 rounded-full bg-[#ecfcf8] flex items-center justify-center text-[#2d9bb2]">
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
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-2 text-[#333]">₩4,746,000</p>
            <div className="flex items-center mt-2 text-[#2d9bb2]">
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span className="text-xs font-medium">+3.2% 전년 대비</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#dde0df] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#5b5c5b] font-medium">신규 고객 수</p>
              <div className="w-8 h-8 rounded-full bg-[#ecfcf8] flex items-center justify-center text-[#2d9bb2]">
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
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-2 text-[#333]">78명</p>
            <div className="flex items-center mt-2 text-[#2d9bb2]">
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span className="text-xs font-medium">+15.3% 전년 대비</span>
            </div>
          </div>
        </div>

        {/* 매출 개요 차트 */}
        <div className="mb-6">
          <SalesChart />
        </div>

        {/* 그리드 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BrandPieChart />
          <TopSellingWatches />
        </div>

        {/* 지역별 매출 */}
        <div className="mb-6">
          <RegionLineChart />
        </div>

        {/* 버튼 그룹 */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="px-4 py-2.5 bg-gradient-to-r from-[#2d9bb2] to-[#34c3b5] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
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
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            매출 보고서 다운로드
          </button>
          <button className="px-4 py-2.5 bg-white text-[#5b5c5b] border border-[#dde0df] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
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
              className="mr-2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            브랜드별 분석
          </button>
          <button className="px-4 py-2.5 bg-white text-[#5b5c5b] border border-[#dde0df] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
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
              className="mr-2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            고객 분석
          </button>
          <button className="px-4 py-2.5 bg-white text-[#5b5c5b] border border-[#dde0df] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
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
              className="mr-2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            엑셀 내보내기
          </button>
        </div>
      </main>
    </div>
  )
}
