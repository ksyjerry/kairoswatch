"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideShield, LucideUsers, LucideUserPlus, LucideSettings, LucideMenu, LucideX } from "lucide-react"

export default function PermissionManagementMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700"
      >
        {isOpen ? <LucideX className="w-5 h-5 mr-2" /> : <LucideMenu className="w-5 h-5 mr-2" />}
        권한관리 메뉴
      </button>

      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive(item.href) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
