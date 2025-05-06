"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "롤렉스", value: 35 },
  { name: "오메가", value: 20 },
  { name: "까르띠에", value: 15 },
  { name: "IWC", value: 10 },
  { name: "태그호이어", value: 8 },
  { name: "기타", value: 12 },
]

const COLORS = ["#2d9bb2", "#4fb3c7", "#7ccbdb", "#a9e0eb", "#d4f0f6", "#f1f4f3"]

export default function BrandSalesCard() {
  return (
    <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6">
      <h2 className="text-lg font-medium mb-4">브랜드별 매출 비중</h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, "비중"]}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #dde0df",
                borderRadius: "4px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span className="text-sm">
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
