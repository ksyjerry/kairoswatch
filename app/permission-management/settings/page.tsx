"use client"

import { useState } from "react"
import { LucideSettings, LucideSave } from "lucide-react"

export default function PermissionSettingsPage() {
  // 권한 그룹 및 기능 목록 (실제로는 API에서 가져올 것입니다)
  const permissionGroups = ["관리자", "매장", "영업관리팀", "검수팀", "일반"]

  const featureCategories = [
    {
      id: "dashboard",
      name: "대시보드",
      features: [
        { id: "dashboard_view", name: "대시보드 조회" },
        { id: "dashboard_export", name: "대시보드 데이터 내보내기" },
      ],
    },
    {
      id: "inventory",
      name: "재고관리",
      features: [
        { id: "inventory_view", name: "재고 조회" },
        { id: "inventory_add", name: "재고 등록" },
        { id: "inventory_edit", name: "재고 수정" },
        { id: "inventory_delete", name: "재고 삭제" },
      ],
    },
    {
      id: "sales",
      name: "시계매출",
      features: [
        { id: "sales_view", name: "매출 조회" },
        { id: "sales_add", name: "매출 등록" },
        { id: "sales_edit", name: "매출 수정" },
        { id: "sales_delete", name: "매출 삭제" },
        { id: "sales_report", name: "매출 보고서 생성" },
      ],
    },
    {
      id: "customer",
      name: "고객관리",
      features: [
        { id: "customer_view", name: "고객 조회" },
        { id: "customer_add", name: "고객 등록" },
        { id: "customer_edit", name: "고객 수정" },
        { id: "customer_delete", name: "고객 삭제" },
      ],
    },
    {
      id: "user",
      name: "사용자 관리",
      features: [
        { id: "user_view", name: "사용자 조회" },
        { id: "user_add", name: "사용자 등록" },
        { id: "user_edit", name: "사용자 수정" },
        { id: "user_delete", name: "사용자 삭제" },
      ],
    },
  ]

  // 권한 설정 상태 (실제로는 API에서 가져올 것입니다)
  const [permissions, setPermissions] = useState({
    관리자: {
      dashboard_view: true,
      dashboard_export: true,
      inventory_view: true,
      inventory_add: true,
      inventory_edit: true,
      inventory_delete: true,
      sales_view: true,
      sales_add: true,
      sales_edit: true,
      sales_delete: true,
      sales_report: true,
      customer_view: true,
      customer_add: true,
      customer_edit: true,
      customer_delete: true,
      user_view: true,
      user_add: true,
      user_edit: true,
      user_delete: true,
    },
    매장: {
      dashboard_view: true,
      dashboard_export: false,
      inventory_view: true,
      inventory_add: false,
      inventory_edit: false,
      inventory_delete: false,
      sales_view: true,
      sales_add: true,
      sales_edit: true,
      sales_delete: false,
      sales_report: false,
      customer_view: true,
      customer_add: true,
      customer_edit: true,
      customer_delete: false,
      user_view: false,
      user_add: false,
      user_edit: false,
      user_delete: false,
    },
    영업관리팀: {
      dashboard_view: true,
      dashboard_export: true,
      inventory_view: true,
      inventory_add: false,
      inventory_edit: false,
      inventory_delete: false,
      sales_view: true,
      sales_add: true,
      sales_edit: true,
      sales_delete: true,
      sales_report: true,
      customer_view: true,
      customer_add: false,
      customer_edit: false,
      customer_delete: false,
      user_view: false,
      user_add: false,
      user_edit: false,
      user_delete: false,
    },
    검수팀: {
      dashboard_view: false,
      dashboard_export: false,
      inventory_view: true,
      inventory_add: true,
      inventory_edit: true,
      inventory_delete: false,
      sales_view: false,
      sales_add: false,
      sales_edit: false,
      sales_delete: false,
      sales_report: false,
      customer_view: false,
      customer_add: false,
      customer_edit: false,
      customer_delete: false,
      user_view: false,
      user_add: false,
      user_edit: false,
      user_delete: false,
    },
    일반: {
      dashboard_view: true,
      dashboard_export: false,
      inventory_view: true,
      inventory_add: false,
      inventory_edit: false,
      inventory_delete: false,
      sales_view: true,
      sales_add: false,
      sales_edit: false,
      sales_delete: false,
      sales_report: false,
      customer_view: true,
      customer_add: false,
      customer_edit: false,
      customer_delete: false,
      user_view: false,
      user_add: false,
      user_edit: false,
      user_delete: false,
    },
  })

  const [selectedGroup, setSelectedGroup] = useState("관리자")

  const handlePermissionChange = (featureId: string, value: boolean) => {
    setPermissions({
      ...permissions,
      [selectedGroup]: {
        ...permissions[selectedGroup as keyof typeof permissions],
        [featureId]: value,
      },
    })
  }

  const handleSavePermissions = () => {
    // 여기서 API 호출을 통해 권한 설정 저장
    console.log("저장된 권한 설정:", permissions)
    // 성공 메시지 표시 등의 처리
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">권한 설정</h1>
        <p className="text-gray-500 mt-1">권한 그룹별 기능 접근 권한을 설정합니다.</p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <LucideSettings className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-medium">권한 그룹 설정</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="permissionGroup" className="block text-sm font-medium text-gray-700 mb-1">
              권한 그룹 선택
            </label>
            <select
              id="permissionGroup"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {permissionGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-8">
            {featureCategories.map((category) => (
              <div key={category.id} className="border rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h3 className="text-md font-medium">{category.name}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.features.map((feature) => (
                      <div key={feature.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${selectedGroup}_${feature.id}`}
                          checked={
                            permissions[selectedGroup as keyof typeof permissions][
                              feature.id as keyof typeof permissions.관리자
                            ] || false
                          }
                          onChange={(e) => handlePermissionChange(feature.id, e.target.checked)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`${selectedGroup}_${feature.id}`} className="ml-2 block text-sm text-gray-900">
                          {feature.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={handleSavePermissions}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <LucideSave className="w-4 h-4 inline mr-1" />
              설정 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
