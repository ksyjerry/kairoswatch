import { redirect } from "next/navigation"

export default function WatchSalesPage() {
  // 시계매출 메인 페이지에 접근하면 시계매출등록 페이지로 리다이렉트
  redirect("/watch-sales/registration")
}
