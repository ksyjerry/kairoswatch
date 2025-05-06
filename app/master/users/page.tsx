export default function UsersManagementPage() {
  const users = [
    { id: 1, name: "김재동", email: "kim@example.com", department: "영업팀", role: "관리자", status: "활성" },
    { id: 2, name: "이지은", email: "lee@example.com", department: "마케팅팀", role: "일반", status: "활성" },
    { id: 3, name: "박민수", email: "park@example.com", department: "개발팀", role: "매장", status: "활성" },
    { id: 4, name: "최영희", email: "choi@example.com", department: "인사팀", role: "영업관리팀", status: "비활성" },
    { id: 5, name: "정성훈", email: "jung@example.com", department: "고객지원팀", role: "검수팀", status: "활성" },
  ]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">사용자 관리</h1>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="사용자 검색"
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

          <select className="rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none">
            <option value="">모든 부서</option>
            <option value="영업팀">영업팀</option>
            <option value="마케팅팀">마케팅팀</option>
            <option value="개발팀">개발팀</option>
            <option value="인사팀">인사팀</option>
            <option value="고객지원팀">고객지원팀</option>
          </select>

          <select className="rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none">
            <option value="">모든 권한</option>
            <option value="관리자">관리자</option>
            <option value="매장">매장</option>
            <option value="영업관리팀">영업관리팀</option>
            <option value="검수팀">검수팀</option>
            <option value="일반">일반</option>
          </select>
        </div>

        <button className="rounded-md bg-[#2d9bb2] px-4 py-2 text-white hover:bg-[#268a9f]">사용자 추가</button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#dde0df] bg-white">
        <table className="min-w-full divide-y divide-[#dde0df]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">이메일</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">부서</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">권한</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">상태</th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dde0df] bg-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#f7f9f8]">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.email}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.department}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{user.role}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      user.status === "활성" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button className="mr-2 text-[#2d9bb2] hover:text-[#268a9f]">수정</button>
                  <button className="text-red-600 hover:text-red-800">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">총 {users.length}명</div>
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
