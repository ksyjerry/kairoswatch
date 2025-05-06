import type React from "react"
import InventorySideNav from "@/components/inventory-side-nav"
import InventoryMobileNav from "@/components/inventory-mobile-nav"
import Breadcrumb from "@/components/breadcrumb"

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <div className="hidden md:block">
        <InventorySideNav />
      </div>
      <div className="md:ml-56 pt-16">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 pb-8">
          <Breadcrumb />
          <InventoryMobileNav />
          {children}
        </div>
      </div>
    </div>
  )
}
