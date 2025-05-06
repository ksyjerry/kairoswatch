import type React from "react"
import MasterSideNav from "@/components/master-side-nav"
import MasterMobileNav from "@/components/master-mobile-nav"
import Breadcrumb from "@/components/breadcrumb"

export default function MasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <div className="hidden lg:block">
        <MasterSideNav />
      </div>
      <div className="lg:pl-56">
        <MasterMobileNav />
        <div className="p-4 md:p-6">
          <Breadcrumb />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
