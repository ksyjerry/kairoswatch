export default function ProgressTable() {
  return (
    <div className="border border-[#dde0df] rounded-md overflow-hidden">
      <table className="w-full min-w-[768px]">
        <thead className="bg-[#f7f9f8]">
          <tr>
            <th className="w-16 text-center font-medium text-[#1f1f1f] py-2 px-4">Status</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">처리 담당자</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">1차 검토담당자</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">2차 검토담당자</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">작업담당자</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">처리 예정 날짜</th>
            <th className="font-medium text-[#1f1f1f] py-2 px-4 text-left">기타</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4 border-t border-[#dde0df]">1</td>
            <td className="py-2 px-4 border-t border-[#dde0df]">처리 대기</td>
            <td className="py-2 px-4 border-t border-[#dde0df]">최종우</td>
            <td className="py-2 px-4 border-t border-[#dde0df]">이승희</td>
            <td className="py-2 px-4 border-t border-[#dde0df]">김영훈</td>
            <td className="py-2 px-4 border-t border-[#dde0df]">2023-05-12</td>
            <td className="py-2 px-4 border-t border-[#dde0df]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
