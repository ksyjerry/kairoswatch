"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function InventorySubNav() {
  const pathname = usePathname()
  const [activeCategory, setActiveCategory] = useState(() => {
    if (pathname.includes("/inventory/incoming")) return "incoming"
    if (pathname.includes("/inventory/inquiry")) return "inquiry"
    if (pathname.includes("/inventory/inspection")) return "inspection"
    return "incoming"
  })

  const categories = [
    { id: "incoming", label: "재고 입고", href: "/inventory/incoming" },
    { id: "inquiry", label: "재고 조회", href: "/inventory/inquiry" },
    { id: "inspection", label: "재고 실사", href: "/inventory/inspection" },
  ]

  const subMenus = {
    incoming: [
      { label: "Invoice 등록", href: "/inventory/incoming/invoice" },
      { label: "영업팀 검수", href: "/inventory/incoming/sales-check" },
      { label: "엔지니어팀 검수", href: "/inventory/incoming/engineer-check" },
    ],
    inquiry: [
      { label: "재고 현황", href: "/inventory/inquiry/status" },
      { label: "재고 이력", href: "/inventory/inquiry/history" },
    ],
    inspection: [
      { label: "실사 계획", href: "/inventory/inspection/plan" },
      { label: "실사 진행", href: "/inventory/inspection/progress" },
      { label: "실사 결과", href: "/inventory/inspection/result" },
    ],
  }

  return (
    <div className="bg-white border-b border-[#dde0df] mb-6">
      <div className="max-w-[1600px] mx-auto px-3 md:px-4">
        {/* 메인 카테고리 */}
        <div className="flex overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-3 whitespace-nowrap ${
                activeCategory === category.id
                  ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                  : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 서브 메뉴 */}
        <div className="flex overflow-x-auto border-t border-[#dde0df]">
          {subMenus[activeCategory].map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 whitespace-nowrap text-sm ${
                  isActive ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
