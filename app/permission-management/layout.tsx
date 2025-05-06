import type React from "react"
import PermissionManagementSideNav from "@/components/permission-management-side-nav"
import PermissionManagementMobileNav from "@/components/permission-management-mobile-nav"
import { Breadcrumb } from "@/components/breadcrumb"

export default function PermissionManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <PermissionManagementSideNav />
      </div>
      <div className="flex-1 md:ml-56">
        <div className="p-4">
          <PermissionManagementMobileNav />
          <Breadcrumb
            items={[
              { label: "홈", href: "/" },
              { label: "권한관리", href: "/permission-management" },
            ]}
          />
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
