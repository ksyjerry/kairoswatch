"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MasterSideNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "기본 설정", href: "/master" },
    { name: "코드 관리", href: "/master/code" },
    { name: "사용자 관리", href: "/master/users" },
    { name: "권한 관리", href: "/master/permissions" },
    { name: "시스템 설정", href: "/master/system" },
  ]

  return (
    <div className="fixed h-[calc(100vh-4rem)] w-56 border-r border-[#dde0df] bg-white">
      <div className="flex h-14 items-center border-b border-[#dde0df] px-4">
        <h2 className="text-lg font-medium">마스터관리</h2>
      </div>
      <nav className="flex flex-col p-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`my-1 flex items-center rounded-md px-3 py-2 text-sm ${
              isActive(item.href) ? "bg-[#e6f4f1] text-[#2d9bb2]" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
