import { redirect } from "next/navigation"

export default function InventoryPage() {
  // 재고관리 메인 페이지에 접근하면 재고 입고 페이지로 리다이렉트
  redirect("/inventory/incoming")
}
