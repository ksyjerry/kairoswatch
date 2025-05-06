import Link from "next/link"

export default function ReceptionPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-6">접수</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/reception/customer-registration">
          <div className="bg-white border border-[#dde0df] rounded-md p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-medium mb-2">고객등록</h2>
            <p className="text-[#5b5c5b]">새로운 고객을 등록합니다.</p>
          </div>
        </Link>

        <Link href="/reception/service-reception">
          <div className="bg-white border border-[#dde0df] rounded-md p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-medium mb-2">AS 접수</h2>
            <p className="text-[#5b5c5b]">새로운 AS 서비스를 접수합니다.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
