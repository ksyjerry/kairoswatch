"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MasterMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-[#dde0df] bg-white p-4"
      >
        <span className="text-lg font-medium">마스터관리</span>
        <svg
          className={`h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="border-b border-[#dde0df] bg-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block p-4 text-sm ${isActive(item.href) ? "bg-[#e6f4f1] text-[#2d9bb2]" : "text-[#5b5c5b]"}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
