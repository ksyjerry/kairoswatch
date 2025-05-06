"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  href?: string
  label: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps = {}) {
  const pathname = usePathname()

  // 경로를 세그먼트로 분할
  const segments = pathname.split("/").filter(Boolean)

  // 경로 세그먼트에 대한 레이블 매핑
  const pathLabels: Record<string, string> = {
    inventory: "재고관리",
    incoming: "재고 입고",
    inquiry: "재고 조회",
    inspection: "재고 실사",
    invoice: "Invoice 등록",
    "sales-check": "영업팀 검수",
    "engineer-check": "엔지니어팀 검수",
    status: "재고 현황",
    history: "재고 이력",
    plan: "실사 계획",
    progress: "실사 진행",
    result: "실사 결과",
    registration: "등록",
    users: "사용자 관리",
    permissions: "권한 관리",
    settings: "시스템 설정",
    code: "코드 관리",
    reception: "접수",
    "customer-registration": "고객등록",
    "service-reception": "AS 접수",
    master: "마스터관리",
    "parts-sales": "부품매출",
    "watch-sales": "시계매출",
  }

  // 브레드크럼 아이템 생성
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const label = pathLabels[segment] || segment
    return { href, label }
  })

  return (
    <nav className="flex items-center text-sm mb-4">
      <Link href="/" className="text-[#5b5c5b] hover:text-[#2d9bb2]">
        홈
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="mx-2 text-[#5b5c5b]">/</span>
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-[#2d9bb2] font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="text-[#5b5c5b] hover:text-[#2d9bb2]">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
