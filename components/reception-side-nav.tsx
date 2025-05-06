"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ReceptionSideNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "고객등록",
      href: "/reception/customer-registration",
      active: pathname === "/reception/customer-registration",
    },
    {
      name: "AS 접수",
      href: "/reception/service-reception",
      active: pathname === "/reception/service-reception",
    },
  ]

  return (
    <div className="fixed left-0 top-[64px] h-[calc(100vh-64px)] w-56 border-r border-[#dde0df] bg-white">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-medium">접수</h2>
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    item.active ? "bg-[#e6f4f7] text-[#2d9bb2] font-medium" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
