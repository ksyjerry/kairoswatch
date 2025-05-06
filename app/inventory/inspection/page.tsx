import { redirect } from "next/navigation"

export default function InventoryInspectionPage() {
  // 재고 실사 메인 페이지에 접근하면 실사 계획 페이지로 리다이렉트
  redirect("/inventory/inspection/plan")
}
