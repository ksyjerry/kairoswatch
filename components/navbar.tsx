"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import MobileMenu from "./mobile-menu"

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // 현재 경로에 따라 활성 탭 설정
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home")
    } else if (pathname.startsWith("/customer-management")) {
      setActiveTab("customer-management")
    } else if (pathname.startsWith("/inventory")) {
      setActiveTab("inventory")
    } else if (pathname.startsWith("/watch-sales")) {
      setActiveTab("watch-sales")
    } else if (pathname.startsWith("/parts-sales")) {
      setActiveTab("parts-sales")
    } else if (pathname.startsWith("/master")) {
      setActiveTab("master")
    } else if (pathname.startsWith("/reception")) {
      setActiveTab("reception")
    }
  }, [pathname])

  const tabs = [
    { id: "home", label: "홈" },
    { id: "reception", label: "접수" },
    { id: "customer-management", label: "고객관리" },
    { id: "inventory", label: "재고관리" },
    { id: "watch-sales", label: "시계매출" },
    { id: "parts-sales", label: "부품매출" },
    { id: "master", label: "마스터관리" },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)

    // 탭에 따라 다른 페이지로 이동
    switch (tabId) {
      case "home":
        router.push("/")
        break
      case "reception":
        router.push("/reception")
        break
      case "customer-management":
        router.push("/customer-management/registration")
        break
      case "inventory":
        router.push("/inventory/incoming/invoice")
        break
      case "watch-sales":
        router.push("/watch-sales")
        break
      case "parts-sales":
        router.push("/parts-sales/registration")
        break
      case "master":
        router.push("/master")
        break
      default:
        router.push("/")
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[#dde0df] bg-white md:min-w-[768px]">
        <div className="flex items-center">
          <button className="p-3 text-[#2d9bb2]" onClick={() => setMobileMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
            </svg>
          </button>
          <div className="flex items-center ml-2">
            <h1 className="text-[#2d9bb2] font-bold text-xl">KAIROS</h1>
            <div className="ml-2 md:ml-5 text-xs text-[#5b5c5b] leading-tight hidden sm:block">
              <div className="text-[#2d9bb2] font-bold text-xm">재고관리 디지털 플랫폼</div>
              <div>Inventory Management Digital Platform</div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="hidden lg:flex h-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 ${
                  activeTab === tab.id
                    ? "text-[#2d9bb2] border-b-2 border-[#2d9bb2]"
                    : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center px-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="ml-2 text-sm">김재동</span>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab)
          setMobileMenuOpen(false)
          handleTabClick(tab)
        }}
      />
    </>
  )
}
