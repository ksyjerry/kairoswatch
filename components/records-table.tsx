export default function RecordsTable() {
  const records = [
    { id: 5, date: "2023-05-10", message: "2명이 처리 완료 검토되었습니다.", processor: "최종우", count: 15 },
    { id: 4, date: "2023-05-11", message: "2명이 처리 완료 검토되었습니다.", processor: "최종우", count: 30 },
    { id: 3, date: "2023-05-21", message: "2명이 처리 완료 검토되었습니다.", processor: "김기현", count: 115 },
  ]

  return (
    <>
      {/* Desktop Table */}
      <div className="border border-[#dde0df] rounded-md overflow-hidden hidden md:block">
        <table className="w-full min-w-[768px]">
          <thead className="bg-[#f7f9f8]">
            <tr>
              <th className="w-16 text-center font-medium text-[#1f1f1f] py-2 px-4">번호</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">작성/수정일자</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">내용</th>
              <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">담당자</th>
              <th className="w-16 text-center font-medium text-[#1f1f1f] py-2 px-4">조회수</th>
              <th className="w-24 text-center font-medium text-[#1f1f1f] py-2 px-4">수정</th>
              <th className="w-24 text-center font-medium text-[#1f1f1f] py-2 px-4">삭제</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">{record.id}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{record.date}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{record.message}</td>
                <td className="py-2 px-4 border-t border-[#dde0df]">{record.processor}</td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">{record.count}</td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">
                  <button className="h-7 px-3 text-xs bg-white text-[#2d9bb2] border border-[#2d9bb2] rounded-md hover:bg-[#f1f4f3]">
                    Edit
                  </button>
                </td>
                <td className="text-center py-2 px-4 border-t border-[#dde0df]">
                  <button className="h-7 px-3 text-xs bg-white text-[#f94b50] border border-[#f94b50] rounded-md hover:bg-[#fee6db]">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {records.map((record) => (
          <div key={record.id} className="border border-[#dde0df] rounded-md p-3 bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">#{record.id}</span>
              <span className="text-xs text-[#5b5c5b]">{record.date}</span>
            </div>
            <p className="text-sm mb-2">{record.message}</p>
            <div className="flex justify-between items-center text-xs text-[#5b5c5b]">
              <div className="flex items-center gap-2">
                <span>담당자: {record.processor}</span>
                <span>조회수: {record.count}</span>
              </div>
              <div className="flex gap-1">
                <button className="px-2 py-1 bg-white text-[#2d9bb2] border border-[#2d9bb2] rounded-md">Edit</button>
                <button className="px-2 py-1 bg-white text-[#f94b50] border border-[#f94b50] rounded-md">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
