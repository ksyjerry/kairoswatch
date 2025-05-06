"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FileText,
  CheckSquare,
  PenToolIcon as Tool,
  Database,
  Clock,
  CalendarRange,
  ListChecks,
  FileBarChart,
} from "lucide-react"

export default function InventorySideNav() {
  const pathname = usePathname()

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

  return (
    <div className="w-56 bg-white border-r border-[#dde0df] h-[calc(100vh-4rem)] fixed top-16 left-0 overflow-y-auto hidden md:block">
      <div className="p-3 border-b border-[#dde0df]">
        <h2 className="text-base font-medium text-[#1f1f1f]">재고관리</h2>
      </div>
      <nav className="p-2">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="text-sm font-bold text-[#5b5c5b] px-3 py-2">{section.title}</h3>
            <ul className="pl-2">
              {section.items.map((item, itemIdx) => {
                const isActive = pathname === item.href
                return (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-1.5 rounded-md text-sm ${
                        isActive ? "bg-[#ecfcf8] text-[#2d9bb2] font-medium" : "text-[#1f1f1f] hover:bg-[#f7f9f8]"
                      }`}
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
      </nav>
    </div>
  )
}
