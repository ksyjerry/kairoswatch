import { redirect } from "next/navigation"

export default function InventoryIncomingPage() {
  // 재고 입고 메인 페이지에 접근하면 Invoice 등록 페이지로 리다이렉트
  redirect("/inventory/incoming/invoice")
}
