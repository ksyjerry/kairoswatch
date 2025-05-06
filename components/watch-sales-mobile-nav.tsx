"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FileText, BarChart2, ChevronDown } from "lucide-react"

export default function WatchSalesMobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "시계 매출",
      items: [
        { label: "시계매출등록", href: "/watch-sales/registration", icon: <FileText size={16} /> },
        { label: "매출현황조회", href: "/watch-sales/status", icon: <BarChart2 size={16} /> },
      ],
    },
  ]

  // 현재 활성화된 메뉴 찾기
  const getCurrentMenuTitle = () => {
    for (const section of menuItems) {
      for (const item of section.items) {
        if (pathname === item.href) {
          return `${section.title} - ${item.label}`
        }
      }
    }
    return "시계 매출"
  }

  // 현재 활성화된 메뉴의 아이콘 찾기
  const getCurrentMenuIcon = () => {
    for (const section of menuItems) {
      for (const item of section.items) {
        if (pathname === item.href) {
          return item.icon
        }
      }
    }
    return null
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border-b border-[#dde0df]"
      >
        <div className="flex items-center">
          <span className="mr-2">{getCurrentMenuIcon()}</span>
          <span className="font-medium">{getCurrentMenuTitle()}</span>
        </div>
        <ChevronDown size={18} className={`transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="bg-white border-b border-[#dde0df]">
          {menuItems.map((section, idx) => (
            <div key={idx} className="px-4 py-2">
              <h3 className="text-sm font-bold text-[#5b5c5b] mb-1">{section.title}</h3>
              <ul className="ml-2 border-l border-[#dde0df]">
                {section.items.map((item, itemIdx) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-1.5 text-sm ${
                          isActive ? "text-[#2d9bb2] font-medium" : "text-[#1f1f1f]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mr-2 text-[#5b5c5b]">{item.icon}</span>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
