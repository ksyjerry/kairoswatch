import { redirect } from "next/navigation"

export default function CustomerManagementPage() {
  // 고객관리 메인 페이지에 접근하면 고객등록 페이지로 리다이렉트
  redirect("/customer-management/registration")
}
