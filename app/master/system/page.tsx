export default function SystemSettingsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">시스템 설정</h1>

      <div className="rounded-lg border border-[#dde0df] bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">일반 설정</h2>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">회사명</label>
            <input
              type="text"
              defaultValue="KAIROS"
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">시스템 이름</label>
            <input
              type="text"
              defaultValue="재고관리 디지털 플랫폼"
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">관리자 이메일</label>
            <input
              type="email"
              defaultValue="admin@kairos.com"
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">시스템 언어</label>
            <select className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none">
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="jp">日本語</option>
              <option value="cn">中文</option>
            </select>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">보안 설정</h2>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">비밀번호 만료 기간 (일)</label>
            <input
              type="number"
              defaultValue={90}
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">로그인 실패 허용 횟수</label>
            <input
              type="number"
              defaultValue={5}
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">세션 타임아웃 (분)</label>
            <input
              type="number"
              defaultValue={30}
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <input
              id="two-factor"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[#2d9bb2] focus:ring-[#2d9bb2]"
            />
            <label htmlFor="two-factor" className="ml-2 block text-sm font-medium text-gray-700">
              2단계 인증 활성화
            </label>
          </div>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-semibold">백업 설정</h2>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">자동 백업 주기</label>
            <select className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none">
              <option value="daily">매일</option>
              <option value="weekly">매주</option>
              <option value="monthly">매월</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">백업 보관 기간 (일)</label>
            <input
              type="number"
              defaultValue={30}
              className="w-full rounded-md border border-[#dde0df] px-4 py-2 focus:border-[#2d9bb2] focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="mr-2 rounded-md border border-[#dde0df] bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
            취소
          </button>
          <button className="rounded-md bg-[#2d9bb2] px-4 py-2 text-white hover:bg-[#268a9f]">설정 저장</button>
        </div>
      </div>
    </div>
  )
}
