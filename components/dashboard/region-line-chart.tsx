"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1월", 서울: 1200, 부산: 800, 대구: 600, 인천: 400, 기타: 700 },
  { name: "2월", 서울: 1100, 부산: 750, 대구: 650, 인천: 450, 기타: 650 },
  { name: "3월", 서울: 1300, 부산: 820, 대구: 700, 인천: 500, 기타: 680 },
  { name: "4월", 서울: 900, 부산: 700, 대구: 550, 인천: 380, 기타: 620 },
  { name: "5월", 서울: 1500, 부산: 850, 대구: 720, 인천: 520, 기타: 750 },
  { name: "6월", 서울: 1400, 부산: 900, 대구: 680, 인천: 490, 기타: 710 },
];

// 세련된 색상 팔레트
const COLORS = [
  "#2d9bb2", // 메인 브랜드 컬러
  "#34c3b5", // 청록색
  "#5d9cec", // 밝은 파랑
  "#7986cb", // 라벤더 블루
  "#4db6ac", // 청록색 (밝은)
];

// 각 지역별 고정 성장률
const growthRates = {
  서울: 8,
  부산: 7,
  대구: 9,
  인천: 6,
  기타: 10,
};

export default function RegionLineChart() {
  return (
    <div className="bg-white border border-[#dde0df] rounded-lg p-4 md:p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#333]">지역별 매출 추이</h2>
        <p className="text-sm text-[#777] mt-1">
          2023년 상반기 지역별 매출 현황
        </p>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f4f3"
              vertical={false}
            />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
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
                  strokeWidth={2}
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
            const totalSales = data.reduce(
              (sum, item) => sum + item[region],
              0
            );
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#f7f9f8] to-[#edf5f7] p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <p className="text-sm text-[#5b5c5b] font-medium">{region}</p>
                </div>
                <p className="text-lg font-semibold mt-1 text-[#333]">
                  ₩{totalSales.toLocaleString()}
                </p>
                <div className="flex items-center mt-1 text-xs text-[#2d9bb2]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
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
                  <span>+{growthRates[region]}%</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
