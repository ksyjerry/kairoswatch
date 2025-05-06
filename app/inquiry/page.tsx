import { redirect } from "next/navigation"

export default function InquiryPage() {
  // 조회 페이지에 접근하면 고객관리/조회 페이지로 리다이렉트
  redirect("/customer-management/inquiry")
}
