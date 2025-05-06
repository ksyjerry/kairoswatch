"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const monthlyData = [
  { name: "1월", 매출액: 4000, 목표액: 4500 },
  { name: "2월", 매출액: 3000, 목표액: 4500 },
  { name: "3월", 매출액: 5000, 목표액: 4500 },
  { name: "4월", 매출액: 2780, 목표액: 4500 },
  { name: "5월", 매출액: 5890, 목표액: 4500 },
  { name: "6월", 매출액: 4390, 목표액: 4500 },
]

const quarterlyData = [
  { name: "1분기", 매출액: 12000, 목표액: 13500 },
  { name: "2분기", 매출액: 13060, 목표액: 13500 },
  { name: "3분기", 매출액: 15800, 목표액: 13500 },
  { name: "4분기", 매출액: 17990, 목표액: 13500 },
]

const yearlyData = [
  { name: "2019", 매출액: 42000, 목표액: 45000 },
  { name: "2020", 매출액: 38000, 목표액: 45000 },
  { name: "2021", 매출액: 48000, 목표액: 45000 },
  { name: "2022", 매출액: 52000, 목표액: 54000 },
  { name: "2023", 매출액: 58850, 목표액: 54000 },
]

export default function SalesChart() {
  const [period, setPeriod] = useState("monthly")

  const getChartData = () => {
    switch (period) {
      case "quarterly":
        return quarterlyData
      case "yearly":
        return yearlyData
      default:
        return monthlyData
    }
  }

  return (
    <div className="bg-white border border-[#dde0df] rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-[#333]">시계 매출 현황</h2>
          <p className="text-sm text-[#777] mt-1">기간별 매출 및 목표 달성 현황</p>
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
              period === "monthly"
                ? "bg-[#2d9bb2] text-white shadow-md"
                : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#e5e8e7]"
            }`}
            onClick={() => setPeriod("monthly")}
          >
            월별
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
              period === "quarterly"
                ? "bg-[#2d9bb2] text-white shadow-md"
                : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#e5e8e7]"
            }`}
            onClick={() => setPeriod("quarterly")}
          >
            분기별
          </button>
          <button
            className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
              period === "yearly"
                ? "bg-[#2d9bb2] text-white shadow-md"
                : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#e5e8e7]"
            }`}
            onClick={() => setPeriod("yearly")}
          >
            연간
          </button>
        </div>
      </div>

      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getChartData()}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f4f3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="매출액" fill="#2d9bb2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="목표액" fill="#a9e0eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-gradient-to-br from-[#f7f9f8] to-[#edf5f7] p-4 rounded-lg shadow-sm">
          <p className="text-sm text-[#5b5c5b] font-medium">총 매출액</p>
          <p className="text-xl font-semibold mt-1 text-[#333]">₩58,850,000</p>
          <div className="flex items-center mt-2 text-[#2d9bb2]">
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
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span className="text-xs font-medium">+12.5% 전년 대비</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#f7f9f8] to-[#edf5f7] p-4 rounded-lg shadow-sm">
          <p className="text-sm text-[#5b5c5b] font-medium">평균 매출액</p>
          <p className="text-xl font-semibold mt-1 text-[#333]">₩4,904,167</p>
          <div className="flex items-center mt-2 text-[#2d9bb2]">
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
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span className="text-xs font-medium">+8.3% 전년 대비</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#f7f9f8] to-[#edf5f7] p-4 rounded-lg shadow-sm">
          <p className="text-sm text-[#5b5c5b] font-medium">최고 매출월</p>
          <p className="text-xl font-semibold mt-1 text-[#333]">12월</p>
          <div className="flex items-center mt-2 text-[#2d9bb2]">
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
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-xs font-medium">₩8,100,000</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#f7f9f8] to-[#edf5f7] p-4 rounded-lg shadow-sm">
          <p className="text-sm text-[#5b5c5b] font-medium">목표 달성률</p>
          <p className="text-xl font-semibold mt-1 text-[#333]">108.9%</p>
          <div className="flex items-center mt-2 text-[#2d9bb2]">
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-xs font-medium">+4.2% 전년 대비</span>
          </div>
        </div>
      </div>
    </div>
  )
}
