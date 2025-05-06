import SubNav from "@/components/sub-nav"

export default function ServiceRegistrationPage() {
  const subNavItems = [
    { href: "/reception/customer", label: "고객등록" },
    { href: "/reception/service", label: "AS등록" },
  ]

  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <SubNav items={subNavItems} />

      <div className="max-w-[1600px] mx-auto px-3 md:px-4 pb-8">
        <div className="mb-6">
          <h1 className="text-2xl font-medium">AS등록</h1>
          <p className="text-sm text-[#5b5c5b] mt-1">새로운 AS 서비스를 등록합니다.</p>
        </div>

        <div className="bg-white border border-[#dde0df] rounded-md p-6">
          <h2 className="text-xl font-medium mb-6">AS 서비스 등록</h2>
          <p className="text-[#5b5c5b]">AS등록 폼이 여기에 구현될 예정입니다.</p>
        </div>
      </div>
    </div>
  )
}
