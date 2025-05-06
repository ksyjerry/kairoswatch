"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SubNavProps {
  items: {
    href: string
    label: string
  }[]
}

export default function SubNav({ items }: SubNavProps) {
  const pathname = usePathname()

  return (
    <div className="bg-white border-b border-[#dde0df] mb-6">
      <div className="max-w-[1600px] mx-auto px-3 md:px-4">
        <div className="flex overflow-x-auto">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 whitespace-nowrap ${
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
