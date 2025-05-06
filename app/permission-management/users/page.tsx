import { LucideUsers, LucideEdit, LucideUserCheck } from "lucide-react"

export default function UserPermissionsPage() {
  // 사용자 데이터 (실제로는 API에서 가져올 것입니다)
  const users = [
    {
      id: 1,
      name: "김관리",
      email: "admin@kairos.com",
      department: "경영지원팀",
      permissionGroup: "관리자",
      lastLogin: "2023-05-15 14:30",
    },
    {
      id: 2,
      name: "이매장",
      email: "store@kairos.com",
      department: "강남점",
      permissionGroup: "매장",
      lastLogin: "2023-05-14 09:15",
    },
    {
      id: 3,
      name: "박영업",
      email: "sales@kairos.com",
      department: "영업1팀",
      permissionGroup: "영업관리팀",
      lastLogin: "2023-05-15 11:45",
    },
    {
      id: 4,
      name: "최검수",
      email: "inspection@kairos.com",
      department: "품질관리팀",
      permissionGroup: "검수팀",
      lastLogin: "2023-05-13 16:20",
    },
    {
      id: 5,
      name: "정일반",
      email: "general@kairos.com",
      department: "고객지원팀",
      permissionGroup: "일반",
      lastLogin: "2023-05-12 10:30",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">사용자 권한 관리</h1>
        <div>
          <input type="text" placeholder="사용자 검색..." className="px-4 py-2 border rounded-md mr-2" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            검색
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <LucideUsers className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-medium">사용자 목록</h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">사용자별 권한 그룹을 관리합니다.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이메일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">부서</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  권한 그룹
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  마지막 로그인
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        user.permissionGroup === "관리자"
                          ? "bg-red-100 text-red-800"
                          : user.permissionGroup === "매장"
                            ? "bg-green-100 text-green-800"
                            : user.permissionGroup === "영업관리팀"
                              ? "bg-blue-100 text-blue-800"
                              : user.permissionGroup === "검수팀"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.permissionGroup}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.lastLogin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <LucideEdit className="w-4 h-4 inline" />
                      <span className="ml-1">수정</span>
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <LucideUserCheck className="w-4 h-4 inline" />
                      <span className="ml-1">권한변경</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">
            총 <span className="font-medium">{users.length}</span>명의 사용자
          </div>
          <div className="flex-1 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                이전
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                다음
              </a>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
