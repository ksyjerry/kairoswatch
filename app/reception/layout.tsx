import type React from "react"
import ReceptionSideNav from "@/components/reception-side-nav"
import ReceptionMobileNav from "@/components/reception-mobile-nav"
import Breadcrumb from "@/components/breadcrumb"

export default function ReceptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <div className="hidden md:block">
        <ReceptionSideNav />
      </div>
      <div className="md:ml-56 pt-16">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 pb-8">
          <Breadcrumb />
          <ReceptionMobileNav />
          {children}
        </div>
      </div>
    </div>
  )
}
