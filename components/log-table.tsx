export default function LogTable() {
  const logs = [
    { date: "2023-06-09 13:01:01", action: "작업 파일 업로드", user: "민수현" },
    { date: "2023-06-07 13:45:59", action: "처리 파일 수정", user: "민수현" },
    { date: "2023-06-01 17:15:00", action: "처리 파일 업로드", user: "민수현" },
  ]

  return (
    <>
      {/* Desktop Table */}
      <div className="border border-[#dde0df] rounded-md overflow-hidden hidden md:block">
        <table className="w-full min-w-[500px]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">일자</th>
              <th className="w-16 text-center font-medium text-[#1f1f1f] py-2 px-4">구분</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">내용</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">담당자</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-t border-[#dde0df]">{log.date}</td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">T</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{log.action}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{log.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-2">
        {logs.map((log, index) => (
          <div key={index} className="border border-[#dde0df] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">{log.date}</span>
              <span className="text-xs bg-[#f1f4f3] px-2 py-0.5 rounded-full">T</span>
            </div>
            <p className="text-sm mb-1">{log.action}</p>
            <div className="text-xs text-[#5b5c5b]">담당자: {log.user}</div>
          </div>
        ))}
      </div>
    </>
  )
}
