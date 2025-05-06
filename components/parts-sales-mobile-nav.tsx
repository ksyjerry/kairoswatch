"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, BarChart2 } from "lucide-react"

export function PartsSalesMobileNav() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "부품 매출",
      items: [
        { label: "부품매출등록", href: "/parts-sales/registration", icon: <FileText size={16} /> },
        { label: "매출현황조회", href: "/parts-sales/status", icon: <BarChart2 size={16} /> },
      ],
    },
  ]

  return (
    <div className="md:hidden">
      <div className="flex overflow-x-auto scrollbar-hide border-b border-[#dde0df]">
        {menuItems.flatMap((section) =>
          section.items.map((item, idx) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center px-4 py-2 whitespace-nowrap text-sm ${
                  isActive
                    ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2] font-medium"
                    : "text-[#5b5c5b] hover:text-[#2d9bb2]"
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            )
          }),
        )}
      </div>
    </div>
  )
}
