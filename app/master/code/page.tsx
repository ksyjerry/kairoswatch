export default function CodeManagementPage() {
  const codeGroups = [
    { id: "CG001", name: "제품 카테고리", count: 12 },
    { id: "CG002", name: "브랜드", count: 24 },
    { id: "CG003", name: "지역", count: 8 },
    { id: "CG004", name: "고객 등급", count: 5 },
    { id: "CG005", name: "결제 방법", count: 6 },
    { id: "CG006", name: "배송 상태", count: 7 },
  ]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">코드 관리</h1>

      <div className="mb-6 flex justify-between">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="코드 그룹 검색"
            className="w-full rounded-md border border-[#dde0df] px-4 py-2 pr-10 focus:border-[#2d9bb2] focus:outline-none"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button className="rounded-md bg-[#2d9bb2] px-4 py-2 text-white hover:bg-[#268a9f]">코드 그룹 추가</button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#dde0df] bg-white">
        <table className="min-w-full divide-y divide-[#dde0df]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                코드 그룹 ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                코드 그룹명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                코드 수
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dde0df] bg-white">
            {codeGroups.map((group) => (
              <tr key={group.id} className="hover:bg-[#f7f9f8]">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{group.id}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{group.name}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{group.count}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button className="mr-2 text-[#2d9bb2] hover:text-[#268a9f]">상세</button>
                  <button className="mr-2 text-[#2d9bb2] hover:text-[#268a9f]">수정</button>
                  <button className="text-red-600 hover:text-red-800">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">총 {codeGroups.length}개 항목</div>
        <div className="flex">
          <button className="mx-1 rounded-md border border-[#dde0df] px-3 py-1 text-sm">이전</button>
          <button className="mx-1 rounded-md border border-[#dde0df] bg-[#2d9bb2] px-3 py-1 text-sm text-white">
            1
          </button>
          <button className="mx-1 rounded-md border border-[#dde0df] px-3 py-1 text-sm">다음</button>
        </div>
      </div>
    </div>
  )
}
