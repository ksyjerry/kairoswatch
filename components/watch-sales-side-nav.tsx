"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, BarChart2 } from "lucide-react"

export default function WatchSalesSideNav() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "시계 매출",
      items: [
        { label: "시계매출등록", href: "/watch-sales/registration", icon: <FileText size={16} /> },
        { label: "매출현황조회", href: "/watch-sales/status", icon: <BarChart2 size={16} /> },
      ],
    },
  ]

  return (
    <div className="w-56 bg-white border-r border-[#dde0df] h-[calc(100vh-4rem)] fixed top-16 left-0 overflow-y-auto hidden md:block">
      <div className="p-3 border-b border-[#dde0df]">
        <h2 className="text-base font-medium text-[#1f1f1f]">시계 매출</h2>
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
