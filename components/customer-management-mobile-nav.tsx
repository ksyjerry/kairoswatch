"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

export function CustomerManagementMobileNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      href: "/customer-management/registration",
      label: "고객 등록",
    },
    {
      href: "/customer-management/inquiry",
      label: "고객 조회",
    },
  ]

  // 현재 선택된 메뉴 항목 찾기
  const currentMenuItem = menuItems.find((item) => pathname === item.href) || menuItems[0]

  const handleMenuItemClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden border-b border-[#dde0df] bg-white">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{currentMenuItem.label}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="border-t border-[#dde0df]">
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  className={`w-full text-left px-4 py-3 ${
                    pathname === item.href ? "bg-[#ecfcf8] text-[#2d9bb2]" : "text-[#5b5c5b]"
                  }`}
                  onClick={() => handleMenuItemClick(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
