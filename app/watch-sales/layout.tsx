import type React from "react"
import WatchSalesSideNav from "@/components/watch-sales-side-nav"
import WatchSalesMobileNav from "@/components/watch-sales-mobile-nav"
import Breadcrumb from "@/components/breadcrumb"

export default function WatchSalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <div className="hidden md:block">
        <WatchSalesSideNav />
      </div>
      <div className="md:ml-56 pt-16">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 pb-8">
          <Breadcrumb />
          <WatchSalesMobileNav />
          {children}
        </div>
      </div>
    </div>
  )
}
