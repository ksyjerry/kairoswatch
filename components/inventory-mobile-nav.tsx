"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  FileText,
  CheckSquare,
  PenToolIcon as Tool,
  Database,
  Clock,
  CalendarRange,
  ListChecks,
  FileBarChart,
  ChevronDown,
} from "lucide-react"

export default function InventoryMobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      title: "재고 입고",
      items: [
        { label: "Invoice 등록", href: "/inventory/incoming/invoice", icon: <FileText size={16} /> },
        { label: "영업팀 검수", href: "/inventory/incoming/sales-check", icon: <CheckSquare size={16} /> },
        { label: "엔지니어팀 검수", href: "/inventory/incoming/engineer-check", icon: <Tool size={16} /> },
      ],
    },
    {
      title: "재고 조회",
      items: [
        { label: "재고 현황", href: "/inventory/inquiry/status", icon: <Database size={16} /> },
        { label: "재고 이력", href: "/inventory/inquiry/history", icon: <Clock size={16} /> },
      ],
    },
    {
      title: "재고 실사",
      items: [
        { label: "실사 계획", href: "/inventory/inspection/plan", icon: <CalendarRange size={16} /> },
        { label: "실사 진행", href: "/inventory/inspection/progress", icon: <ListChecks size={16} /> },
        { label: "실사 결과", href: "/inventory/inspection/result", icon: <FileBarChart size={16} /> },
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
    return "재고관리"
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
