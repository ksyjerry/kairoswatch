import { redirect } from "next/navigation"

export default function InventoryInquiryPage() {
  // 재고 조회 메인 페이지에 접근하면 재고 현황 페이지로 리다이렉트
  redirect("/inventory/inquiry/status")
}
