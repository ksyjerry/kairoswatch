import { redirect } from "next/navigation"

export default function CustomerRegistrationPage() {
  // 기존 고객등록 페이지에 접근하면 새 고객관리/등록 페이지로 리다이렉트
  redirect("/customer-management/registration")
}
