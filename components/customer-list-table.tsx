"use client"

import { useState } from "react"

// 더미 데이터 생성
const dummyCustomers = [
  {
    id: 1,
    name: "김지훈",
    phone: "010-1234-5678",
    birthDate: "1985-03-15",
    address: "서울특별시 강남구 테헤란로 123",
    registrationDate: "2023-05-10",
    gender: "남성",
    lastVisit: "2023-11-15",
    status: "정상",
  },
  {
    id: 2,
    name: "이미영",
    phone: "010-2345-6789",
    birthDate: "1990-07-22",
    address: "서울특별시 서초구 서초대로 456",
    registrationDate: "2023-06-05",
    gender: "여성",
    lastVisit: "2023-12-01",
    status: "정상",
  },
  {
    id: 3,
    name: "박준호",
    phone: "010-3456-7890",
    birthDate: "1978-11-30",
    address: "경기도 성남시 분당구 판교로 789",
    registrationDate: "2023-04-20",
    gender: "남성",
    lastVisit: "2023-10-25",
    status: "휴면",
  },
  {
    id: 4,
    name: "최수진",
    phone: "010-4567-8901",
    birthDate: "1995-02-10",
    address: "서울특별시 마포구 홍대로 101",
    registrationDate: "2023-07-15",
    gender: "여성",
    lastVisit: "2023-12-10",
    status: "정상",
  },
  {
    id: 5,
    name: "정민석",
    phone: "010-5678-9012",
    birthDate: "1982-09-05",
    address: "경기도 고양시 일산동구 중앙로 234",
    registrationDate: "2023-03-30",
    gender: "남성",
    lastVisit: "2023-09-18",
    status: "정상",
  },
  {
    id: 6,
    name: "강지영",
    phone: "010-6789-0123",
    birthDate: "1988-12-15",
    address: "서울특별시 송파구 올림픽로 567",
    registrationDate: "2023-08-22",
    gender: "여성",
    lastVisit: "2023-11-30",
    status: "정상",
  },
  {
    id: 7,
    name: "윤성민",
    phone: "010-7890-1234",
    birthDate: "1975-05-20",
    address: "인천광역시 연수구 센트럴로 890",
    registrationDate: "2023-02-10",
    gender: "남성",
    lastVisit: "2023-08-05",
    status: "휴면",
  },
  {
    id: 8,
    name: "한지원",
    phone: "010-8901-2345",
    birthDate: "1992-01-25",
    address: "서울특별시 강서구 공항대로 321",
    registrationDate: "2023-09-15",
    gender: "여성",
    lastVisit: "2023-12-05",
    status: "정상",
  },
  {
    id: 9,
    name: "송민준",
    phone: "010-9012-3456",
    birthDate: "1980-08-12",
    address: "경기도 수원시 팔달구 인계로 432",
    registrationDate: "2023-01-20",
    gender: "남성",
    lastVisit: "2023-07-15",
    status: "휴면",
  },
  {
    id: 10,
    name: "임서연",
    phone: "010-0123-4567",
    birthDate: "1993-04-30",
    address: "서울특별시 용산구 이태원로 654",
    registrationDate: "2023-10-05",
    gender: "여성",
    lastVisit: "2023-12-12",
    status: "정상",
  },
]

export default function CustomerListTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // 검색 및 필터링 로직
  const filteredCustomers = dummyCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.includes(searchTerm) || customer.phone.includes(searchTerm) || customer.address.includes(searchTerm)

    const matchesStatus = statusFilter === "all" || customer.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div>
      {/* 검색 및 필터 영역 */}
      <div className="mb-4 flex flex-col md:flex-row gap-3">
        <div className="flex-grow">
          <input
            type="text"
            placeholder="이름, 연락처, 주소로 검색"
            className="w-full px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="px-3 py-2 border border-[#dde0df] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d9bb2]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">모든 상태</option>
            <option value="정상">정상</option>
            <option value="휴면">휴면</option>
          </select>
          <button className="px-4 py-2 bg-[#2d9bb2] text-white rounded-md hover:bg-[#1f7795]">검색</button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="border border-[#dde0df] rounded-md overflow-hidden hidden md:block">
        <table className="w-full min-w-[768px]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="w-16 text-center font-medium text-[#1f1f1f] py-2 px-4">번호</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">고객명</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">연락처</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">생년월일</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">주소</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">등록일</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">최근 방문일</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-center">상태</th>
              <th className="w-24 text-center font-medium text-[#1f1f1f] py-2 px-4">상세</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">{customer.id}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{customer.name}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{customer.phone}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{customer.birthDate}</td>
                <td className="py-2 px-4 border-t border-[#dde0df] truncate max-w-[200px]">{customer.address}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{customer.registrationDate}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{customer.lastVisit}</td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      customer.status === "정상" ? "bg-[#ecfcf8] text-[#00806a]" : "bg-[#f1f4f3] text-[#5b5c5b]"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">
                  <button className="h-7 px-3 text-xs bg-white text-[#2d9bb2] border border-[#2d9bb2] rounded-md hover:bg-[#f1f4f3]">
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="border border-[#dde0df] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">#{customer.id}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  customer.status === "정상" ? "bg-[#ecfcf8] text-[#00806a]" : "bg-[#f1f4f3] text-[#5b5c5b]"
                }`}
              >
                {customer.status}
              </span>
            </div>
            <h3 className="text-base font-medium mb-1">{customer.name}</h3>
            <p className="text-sm mb-2">{customer.phone}</p>
            <p className="text-xs text-[#5b5c5b] mb-1 truncate">{customer.address}</p>
            <div className="flex justify-between items-center text-xs text-[#5b5c5b] mt-2">
              <div>
                <span>등록: {customer.registrationDate}</span>
              </div>
              <button className="px-2 py-1 bg-white text-[#2d9bb2] border border-[#2d9bb2] rounded-md">상세보기</button>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="mt-4 flex justify-center">
        <div className="flex">
          <button className="w-8 h-8 flex items-center justify-center border border-[#dde0df] rounded-l-md hover:bg-[#f7f9f8]">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center border-t border-b border-[#dde0df] bg-[#2d9bb2] text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border-t border-b border-[#dde0df] hover:bg-[#f7f9f8]">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center border-t border-b border-[#dde0df] hover:bg-[#f7f9f8]">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-[#dde0df] rounded-r-md hover:bg-[#f7f9f8]">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
