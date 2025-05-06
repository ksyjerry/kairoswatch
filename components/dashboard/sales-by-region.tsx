"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "1월", 서울: 1200, 부산: 800, 대구: 600, 인천: 400, 기타: 700 },
  { name: "2월", 서울: 1100, 부산: 750, 대구: 650, 인천: 450, 기타: 650 },
  { name: "3월", 서울: 1300, 부산: 820, 대구: 700, 인천: 500, 기타: 680 },
  { name: "4월", 서울: 900, 부산: 700, 대구: 550, 인천: 380, 기타: 620 },
  { name: "5월", 서울: 1500, 부산: 850, 대구: 720, 인천: 520, 기타: 750 },
  { name: "6월", 서울: 1400, 부산: 900, 대구: 680, 인천: 490, 기타: 710 },
]

const COLORS = ["#2d9bb2", "#4fb3c7", "#7ccbdb", "#a9e0eb", "#d4f0f6"]

export default function SalesByRegion() {
  return (
    <div className="bg-white border border-[#dde0df] rounded-md p-4 md:p-6">
      <h2 className="text-lg font-medium mb-4">지역별 매출 추이</h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Legend />
            {Object.keys(data[0])
              .filter((key) => key !== "name")
              .map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={COLORS[index % COLORS.length]}
                  activeDot={{ r: 8 }}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.keys(data[0])
          .filter((key) => key !== "name")
          .map((region, index) => {
            // 각 지역의 총 매출액 계산
            const totalSales = data.reduce((sum, item) => sum + item[region], 0)
            return (
              <div key={index} className="bg-[#f7f9f8] p-3 rounded-md">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <p className="text-sm text-[#5b5c5b]">{region}</p>
                </div>
                <p className="text-lg font-medium mt-1">₩{totalSales.toLocaleString()}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
