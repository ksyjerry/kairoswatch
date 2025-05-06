export default function PermissionsManagementPage() {
  const roles = [
    { id: 1, name: "관리자", description: "모든 기능에 접근 가능", userCount: 3 },
    { id: 2, name: "매장", description: "매장 관련 기능에 접근 가능", userCount: 12 },
    { id: 3, name: "영업관리팀", description: "영업 및 매출 관련 기능에 접근 가능", userCount: 8 },
    { id: 4, name: "검수팀", description: "검수 관련 기능에 접근 가능", userCount: 5 },
    { id: 5, name: "일반", description: "기본 기능에만 접근 가능", userCount: 22 },
  ]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">권한 관리</h1>

      <div className="mb-6 flex justify-between">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="권한 그룹 검색"
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
        <button className="rounded-md bg-[#2d9bb2] px-4 py-2 text-white hover:bg-[#268a9f]">권한 그룹 추가</button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#dde0df] bg-white">
        <table className="min-w-full divide-y divide-[#dde0df]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                권한 그룹명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">설명</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                사용자 수
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#dde0df] bg-white">
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-[#f7f9f8]">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{role.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{role.description}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{role.userCount}명</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button className="mr-2 text-[#2d9bb2] hover:text-[#268a9f]">권한 설정</button>
                  <button className="mr-2 text-[#2d9bb2] hover:text-[#268a9f]">수정</button>
                  <button className="text-red-600 hover:text-red-800">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">권한 설정 매트릭스</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#dde0df] rounded-lg border border-[#dde0df] bg-white">
            <thead className="bg-[#f7f9f8]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  기능 / 메뉴
                </th>
                {roles.map((role) => (
                  <th
                    key={role.id}
                    className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    {role.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dde0df] bg-white">
              <tr className="bg-gray-50">
                <td colSpan={roles.length + 1} className="px-6 py-2 text-sm font-medium text-gray-900">
                  고객관리
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm text-gray-900">고객 등록</td>
                {roles.map((role) => (
                  <td key={role.id} className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      defaultChecked={role.name === "관리자" || role.name === "매장" || role.name === "영업관리팀"}
                      className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm text-gray-900">고객 조회</td>
                {roles.map((role) => (
                  <td key={role.id} className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm text-gray-900">고객 수정</td>
                {roles.map((role) => (
                  <td key={role.id} className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      defaultChecked={role.name === "관리자" || role.name === "매장" || role.name === "영업관리팀"}
                      className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
                    />
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td colSpan={roles.length + 1} className="px-6 py-2 text-sm font-medium text-gray-900">
                  재고관리
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm text-gray-900">재고 등록</td>
                {roles.map((role) => (
                  <td key={role.id} className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      defaultChecked={role.name === "관리자" || role.name === "검수팀"}
                      className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm text-gray-900">재고 조회</td>
                {roles.map((role) => (
                  <td key={role.id} className="px-6 py-3 text-center">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="rounded-md bg-[#2d9bb2] px-4 py-2 text-white hover:bg-[#268a9f]">권한 설정 저장</button>
        </div>
      </div>
    </div>
  )
}
