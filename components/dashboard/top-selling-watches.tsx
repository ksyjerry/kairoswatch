export default function TopSellingWatches() {
  const watches = [
    {
      name: "롤렉스 서브마리너",
      price: "15,800,000",
      sales: 12,
      image: "/placeholder.svg?key=y95vb",
    },
    {
      name: "오메가 스피드마스터",
      price: "8,500,000",
      sales: 9,
      image: "/placeholder.svg?key=8d11c",
    },
    {
      name: "까르띠에 발롱블루",
      price: "12,300,000",
      sales: 7,
      image: "/placeholder.svg?key=0xxph",
    },
    {
      name: "IWC 포르투기저",
      price: "9,700,000",
      sales: 6,
      image: "/placeholder.svg?key=7mldy",
    },
    {
      name: "태그호이어 카레라",
      price: "5,200,000",
      sales: 5,
      image: "/placeholder.svg?key=j5mi1",
    },
  ]

  return (
    <div className="bg-white border border-[#dde0df] rounded-lg p-4 md:p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#333]">인기 판매 시계</h2>
        <p className="text-sm text-[#777] mt-1">2023년 가장 많이 판매된 시계</p>
      </div>

      <div className="space-y-4">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="flex items-center p-3 hover:bg-[#f7f9f8] rounded-lg transition-all duration-200 border border-transparent hover:border-[#eaeaea]"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-[#f1f4f3] rounded-lg overflow-hidden shadow-sm">
              <img src={watch.image || "/placeholder.svg"} alt={watch.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-medium text-[#333]">{watch.name}</h3>
              <p className="text-sm text-[#5b5c5b]">₩{watch.price}</p>
            </div>
            <div className="text-right">
              <span className="bg-[#ecfcf8] text-[#00806a] px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                {watch.sales}대 판매
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2.5 text-[#2d9bb2] border border-[#2d9bb2] rounded-md hover:bg-[#f1f4f3] transition-colors duration-200 font-medium">
        더 보기
      </button>
    </div>
  )
}
