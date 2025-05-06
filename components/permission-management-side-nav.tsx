"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideShield, LucideUsers, LucideUserPlus, LucideSettings } from "lucide-react"

export default function PermissionManagementSideNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      name: "권한 그룹 관리",
      href: "/permission-management",
      icon: <LucideShield className="w-5 h-5" />,
    },
    {
      name: "사용자 권한 관리",
      href: "/permission-management/users",
      icon: <LucideUsers className="w-5 h-5" />,
    },
    {
      name: "사용자 등록",
      href: "/permission-management/registration",
      icon: <LucideUserPlus className="w-5 h-5" />,
    },
    {
      name: "권한 설정",
      href: "/permission-management/settings",
      icon: <LucideSettings className="w-5 h-5" />,
    },
  ]

  return (
    <div className="fixed h-full w-56 border-r bg-white">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">권한관리</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive(item.href) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
