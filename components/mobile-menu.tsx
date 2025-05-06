"use client"

import { useEffect } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  tabs: { id: string; label: string }[]
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function MobileMenu({ isOpen, onClose, tabs, activeTab, setActiveTab }: MobileMenuProps) {
  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#dde0df]">
          <h2 className="text-lg font-semibold text-[#2d9bb2]">KAIROS 메뉴</h2>
          <button onClick={onClose} className="text-[#5b5c5b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeTab === tab.id
                      ? "bg-[#ecfcf8] text-[#2d9bb2] font-medium"
                      : "text-[#5b5c5b] hover:bg-[#f7f9f8]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
