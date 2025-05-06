"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "1월", 매출액: 4000, 목표액: 4500 },
  { name: "2월", 매출액: 3000, 목표액: 4500 },
  { name: "3월", 매출액: 5000, 목표액: 4500 },
  { name: "4월", 매출액: 2780, 목표액: 4500 },
  { name: "5월", 매출액: 5890, 목표액: 4500 },
  { name: "6월", 매출액: 4390, 목표액: 4500 },
  { name: "7월", 매출액: 6490, 목표액: 4500 },
  { name: "8월", 매출액: 5300, 목표액: 4500 },
  { name: "9월", 매출액: 4900, 목표액: 4500 },
  { name: "10월", 매출액: 7200, 목표액: 4500 },
  { name: "11월", 매출액: 6800, 목표액: 4500 },
  { name: "12월", 매출액: 8100, 목표액: 4500 },
]

export default function SalesOverviewCard() {
  const [period, setPeriod] = useState("yearly")

  return (
    <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">시계 매출 현황</h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              period === "monthly" ? "bg-[#2d9bb2] text-white" : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#ebeeed]"
            }`}
            onClick={() => setPeriod("monthly")}
          >
            월별
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              period === "quarterly" ? "bg-[#2d9bb2] text-white" : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#ebeeed]"
            }`}
            onClick={() => setPeriod("quarterly")}
          >
            분기별
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${
              period === "yearly" ? "bg-[#2d9bb2] text-white" : "bg-[#f1f4f3] text-[#5b5c5b] hover:bg-[#ebeeed]"
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
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f4f3" />
            <XAxis dataKey="name" tick={{ fill: "#5b5c5b" }} />
            <YAxis tick={{ fill: "#5b5c5b" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #dde0df",
                borderRadius: "4px",
              }}
            />
            <Bar dataKey="매출액" fill="#2d9bb2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="목표액" fill="#f1f4f3" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-[#f7f9f8] p-3 rounded-md">
          <p className="text-sm text-[#5b5c5b]">총 매출액</p>
          <p className="text-xl font-medium mt-1">₩58,850,000</p>
          <p className="text-xs text-[#2d9bb2] mt-1">+12.5% 전년 대비</p>
        </div>
        <div className="bg-[#f7f9f8] p-3 rounded-md">
          <p className="text-sm text-[#5b5c5b]">평균 매출액</p>
          <p className="text-xl font-medium mt-1">₩4,904,167</p>
          <p className="text-xs text-[#2d9bb2] mt-1">+8.3% 전년 대비</p>
        </div>
        <div className="bg-[#f7f9f8] p-3 rounded-md">
          <p className="text-sm text-[#5b5c5b]">최고 매출월</p>
          <p className="text-xl font-medium mt-1">12월</p>
          <p className="text-xs text-[#2d9bb2] mt-1">₩8,100,000</p>
        </div>
        <div className="bg-[#f7f9f8] p-3 rounded-md">
          <p className="text-sm text-[#5b5c5b]">목표 달성률</p>
          <p className="text-xl font-medium mt-1">108.9%</p>
          <p className="text-xs text-[#2d9bb2] mt-1">+4.2% 전년 대비</p>
        </div>
      </div>
    </div>
  )
}
