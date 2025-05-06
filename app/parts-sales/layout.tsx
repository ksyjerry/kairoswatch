import type React from "react"
import { PartsSalesSideNav } from "@/components/parts-sales-side-nav"
import { PartsSalesMobileNav } from "@/components/parts-sales-mobile-nav"

export default function PartsSalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <PartsSalesSideNav />
      <div className="flex-1 md:ml-56">
        <PartsSalesMobileNav />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
