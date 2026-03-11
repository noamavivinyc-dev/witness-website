'use client'

export default function Ticker() {
  const items = [
    { location: 'Kyiv', event: 'Air Alert', time: '2m ago', color: '#E8440A' },
    { location: 'Tbilisi', event: 'Protest', time: '7m ago', color: '#C47900' },
    { location: 'Dhaka', event: 'Flooding', time: '12m ago', color: '#4A90E8' },
    { location: 'Caracas', event: 'Election', time: '18m ago', color: '#0D7C3D' },
    { location: 'Tehran', event: 'Infrastructure', time: '24m ago', color: '#E8440A' },
    { location: 'Lagos', event: 'Crime', time: '31m ago', color: '#C47900' },
  ]

  return (
    <div className="bg-[#2E2B26] text-[#F2EFE9] h-9 overflow-hidden flex items-center border-y border-[#333]">
      <div className="font-mono text-[10px] tracking-widest uppercase bg-[#E8440A] text-white px-4 h-full flex items-center flex-shrink-0">
        Live
      </div>
      <div className="overflow-hidden flex-1">
        <div className="flex gap-0 whitespace-nowrap ticker-scroll">
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="font-mono text-[11px] tracking-tight text-[rgba(242,239,233,0.7)] px-8 h-9 flex items-center gap-2 flex-shrink-0"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.location} · {item.event} · {item.time}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
