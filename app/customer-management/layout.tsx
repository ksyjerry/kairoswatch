import type React from "react"
import CustomerManagementSideNav from "@/components/customer-management-side-nav"
import { CustomerManagementMobileNav } from "@/components/customer-management-mobile-nav"
import Breadcrumb from "@/components/breadcrumb"

export default function CustomerManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <div className="hidden md:block">
        <CustomerManagementSideNav />
      </div>
      <div className="md:ml-56 pt-16">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 pb-8">
          <Breadcrumb />
          <CustomerManagementMobileNav />
          {children}
        </div>
      </div>
    </div>
  )
}
