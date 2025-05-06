"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "롤렉스", value: 35 },
  { name: "오메가", value: 20 },
  { name: "까르띠에", value: 15 },
  { name: "IWC", value: 10 },
  { name: "태그호이어", value: 8 },
  { name: "기타", value: 12 },
]

// 세련된 색상 팔레트
const COLORS = [
  "#2d9bb2", // 메인 브랜드 컬러
  "#34c3b5", // 청록색
  "#5d9cec", // 밝은 파랑
  "#7986cb", // 라벤더 블루
  "#9575cd", // 보라색
  "#4db6ac", // 청록색 (밝은)
]

export default function BrandPieChart() {
  return (
    <div className="bg-white border border-[#dde0df] rounded-lg p-4 md:p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#333]">브랜드별 매출 비중</h2>
        <p className="text-sm text-[#777] mt-1">브랜드별 매출 분포</p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-2 rounded-md hover:bg-[#f7f9f8] transition-colors duration-200 cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span className="text-sm font-medium">
              {item.name}: <span className="text-[#2d9bb2]">{item.value}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
