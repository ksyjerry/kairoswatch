"use client"

import type React from "react"

import { useState, useRef } from "react"

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    // 고객정보입력
    registrationDate: new Date().toISOString().split("T")[0],
    name: "",
    phone: "",
    birthDate: "",
    nationality: "대한민국",
    gender: "",
    address: "",
    cashReceipt: "",
    pointName: "",
    pointNumber: "",

    // 약관 동의
    termsAgreed: false,

    // 기타
    referrerName: "",
    referrerPhone: "",
    relationship: "",
    notes: "",
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 필수 항목 검증
    if (!formData.termsAgreed) {
      alert("약관 및 개인정보 수집 제공에 동의해주세요.")
      return
    }

    // 여기에 폼 제출 로직 추가
    console.log("Form submitted:", formData)
    alert("고객 정보가 등록되었습니다.")

    // 폼 초기화 (등록일은 현재 날짜로 유지)
    setFormData({
      registrationDate: new Date().toISOString().split("T")[0],
      name: "",
      phone: "",
      birthDate: "",
      nationality: "대한민국",
      gender: "",
      address: "",
      cashReceipt: "",
      pointName: "",
      pointNumber: "",
      termsAgreed: false,
      referrerName: "",
      referrerPhone: "",
      relationship: "",
      notes: "",
    })
    setFileName("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="bg-white border border-[#dde0df] rounded-md p-6">
      <form onSubmit={handleSubmit}>
        {/* 고객정보입력 섹션 */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 pb-2 border-b border-[#dde0df]">고객정보입력</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            <div>
              <label htmlFor="registrationDate" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                등록일 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="date"
                id="registrationDate"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                고객명 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="홍길동"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                연락처 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="010-1234-5678"
                required
              />
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                생년월일 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                required
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                국적 <span className="text-[#f94b50]">*</span>
              </label>
              <select
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                required
              >
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="일본">일본</option>
                <option value="중국">중국</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                성별 <span className="text-[#f94b50]">*</span>
              </label>
              <div className="flex gap-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="남성"
                    checked={formData.gender === "남성"}
                    onChange={handleChange}
                    className="mr-1"
                    required
                  />
                  <span>남성</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="여성"
                    checked={formData.gender === "여성"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  <span>여성</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <label htmlFor="address" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                주소 <span className="text-[#f94b50]">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="서울특별시 강남구 테헤란로 123"
                required
              />
            </div>

            <div>
              <label htmlFor="cashReceipt" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                현금영수증
              </label>
              <input
                type="text"
                id="cashReceipt"
                name="cashReceipt"
                value={formData.cashReceipt}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="현금영수증 번호"
              />
            </div>

            <div>
              <label htmlFor="pointName" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                포인트명의
              </label>
              <input
                type="text"
                id="pointName"
                name="pointName"
                value={formData.pointName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="포인트 명의자"
              />
            </div>

            <div>
              <label htmlFor="pointNumber" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                포인트번호
              </label>
              <input
                type="text"
                id="pointNumber"
                name="pointNumber"
                value={formData.pointNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="포인트 번호"
              />
            </div>
          </div>
        </div>

        {/* 약관 및 개인정보 수집 제공 동의 섹션 */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 pb-2 border-b border-[#dde0df]">약관 및 개인정보 수집 제공 동의</h2>

          <div className="bg-[#f7f9f8] p-4 rounded-md mb-4 max-h-40 overflow-y-auto text-sm">
            <p>
              1. 개인정보 수집 및 이용 목적: 고객 관리, 서비스 제공, 마케팅 및 광고에 활용
              <br />
              2. 수집하는 개인정보 항목: 이름, 연락처, 생년월일, 성별, 주소 등<br />
              3. 개인정보 보유 및 이용 기간: 회원 탈퇴 시까지 (단, 관계 법령에 따라 필요한 경우 해당 법령에서 정한
              기간까지)
              <br />
              4. 동의 거부 권리: 개인정보 수집 및 이용 동의를 거부할 권리가 있으며, 동의 거부 시 서비스 이용이 제한될 수
              있습니다.
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAgreed"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="termsAgreed" className="text-sm font-medium">
              판매 약관 및 개인정보 수집 이용 제공에 동의합니다. <span className="text-[#f94b50]">*</span>
            </label>
          </div>
        </div>

        {/* 기타 섹션 */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 pb-2 border-b border-[#dde0df]">기타</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                소개자명
              </label>
              <input
                type="text"
                id="referrerName"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="소개자 이름"
              />
            </div>

            <div>
              <label htmlFor="referrerPhone" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                소개자 연락처
              </label>
              <input
                type="tel"
                id="referrerPhone"
                name="referrerPhone"
                value={formData.referrerPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="010-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="relationship" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                소개자와의 관계
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
              >
                <option value="">선택하세요</option>
                <option value="가족">가족</option>
                <option value="친척">친척</option>
                <option value="지인">지인</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <label htmlFor="notes" className="block text-sm font-medium text-[#5b5c5b] mb-1">
                비고
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
                placeholder="추가 정보를 입력하세요"
              ></textarea>
            </div>
          </div>
        </div>

        {/* 첨부파일 섹션 */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4 pb-2 border-b border-[#dde0df]">첨부파일</h2>

          <div className="flex items-center">
            <input
              type="file"
              id="attachment"
              name="attachment"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-[#f1f4f3] border border-[#dde0df] text-[#5b5c5b] rounded-md hover:bg-[#ebeeed]"
            >
              파일 선택
            </button>
            <span className="ml-3 text-sm text-[#5b5c5b]">{fileName ? fileName : "선택된 파일 없음"}</span>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-white text-[#1f1f1f] border border-[#dde0df] rounded-md hover:bg-[#f7f9f8]"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795] flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            등록
          </button>
        </div>
      </form>
    </div>
  )
}
