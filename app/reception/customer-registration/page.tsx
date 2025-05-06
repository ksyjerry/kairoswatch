import CustomerForm from "@/components/customer-form"

export default function CustomerRegistrationPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-medium">고객 등록</h1>
        <p className="text-sm text-[#5b5c5b] mt-1">새로운 고객 정보를 등록합니다.</p>
      </div>

      <CustomerForm />
    </>
  )
}
