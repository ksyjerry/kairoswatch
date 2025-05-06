import { LucideShield, LucideEdit, LucideTrash2 } from "lucide-react"

export default function PermissionManagementPage() {
  // 권한 그룹 데이터 (실제로는 API에서 가져올 것입니다)
  const permissionGroups = [
    {
      id: 1,
      name: "관리자",
      description: "모든 기능에 접근 가능한 최고 권한",
      userCount: 5,
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      name: "매장",
      description: "매장 관련 기능에 접근 가능",
      userCount: 12,
      createdAt: "2023-01-20",
    },
    {
      id: 3,
      name: "영업관리팀",
      description: "영업 및 매출 관련 기능에 접근 가능",
      userCount: 8,
      createdAt: "2023-02-05",
    },
    {
      id: 4,
      name: "검수팀",
      description: "제품 검수 관련 기능에 접근 가능",
      userCount: 6,
      createdAt: "2023-02-10",
    },
    {
      id: 5,
      name: "일반",
      description: "기본 기능에만 접근 가능",
      userCount: 20,
      createdAt: "2023-01-10",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">권한 그룹 관리</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          새 권한 그룹 추가
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <LucideShield className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-medium">권한 그룹 목록</h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">시스템에 등록된 권한 그룹을 관리합니다.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  그룹명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">설명</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  사용자 수
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  생성일
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {permissionGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{group.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{group.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{group.userCount}명</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{group.createdAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <LucideEdit className="w-4 h-4 inline" />
                      <span className="ml-1">수정</span>
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <LucideTrash2 className="w-4 h-4 inline" />
                      <span className="ml-1">삭제</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
