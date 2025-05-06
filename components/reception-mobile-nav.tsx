"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ReceptionMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className="md:hidden">
      <button
        className="flex w-full items-center justify-between rounded-md border border-[#dde0df] bg-white px-4 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{navItems.find((item) => item.active)?.name || "접수 메뉴"}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-1 rounded-md border border-[#dde0df] bg-white">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${
                      item.active ? "bg-[#e6f4f7] text-[#2d9bb2] font-medium" : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
