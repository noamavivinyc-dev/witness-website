'use client'

import Link from 'next/link'

const mapDots = [
  { cx: 420, cy: 140, color: '#E8440A', label: 'Kyiv', delay: '0s', delay2: '0.4s' },
  { cx: 380, cy: 180, color: '#C47900', label: 'Istanbul', delay: '0.5s', delay2: '0.9s' },
  { cx: 520, cy: 200, color: '#2B5CE6', label: 'Delhi', delay: '1s', delay2: '1.4s' },
  { cx: 200, cy: 220, color: '#0F8C44', label: 'Caracas', delay: '1.5s', delay2: '1.9s' },
  { cx: 350, cy: 280, color: '#E8440A', label: 'Lagos', delay: '2s', delay2: '2.4s' },
  { cx: 620, cy: 250, color: '#C47900', label: 'Manila', delay: '0.3s', delay2: '0.7s' },
  { cx: 160, cy: 160, color: '#2B5CE6', label: 'NYC', delay: '0.8s', delay2: '1.2s' },
  { cx: 340, cy: 155, color: '#0F8C44', label: 'Berlin', delay: '1.3s', delay2: '1.7s' },
  { cx: 450, cy: 280, color: '#E8440A', label: 'Nairobi', delay: '1.8s', delay2: '2.2s' },
  { cx: 580, cy: 170, color: '#C47900', label: 'Beijing', delay: '0.6s', delay2: '1.0s' },
]

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 relative z-10 lg:border-r border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-8 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Next-Gen News Platform
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-[800] leading-[1.02] mb-7 text-[#2C2820] tracking-tight">
          History<br />
          is <span style={{ WebkitTextStroke: '1.5px #2C2820', color: 'transparent' }}>happening</span><br />
          now.
        </h1>

        <p className="text-base leading-relaxed text-[#4A453F] max-w-xl mb-12 font-light">
          A real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. The truth emerges through transparency — not editorial authority.
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <Link
            href="/platform"
            className="font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-[#2E2B26] text-[#F2EFE9] no-underline cursor-pointer transition-colors hover:bg-[#E8440A]"
          >
            View Platform
          </Link>
          <Link
            href="/about"
            className="font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-transparent text-[#2C2820] no-underline border border-[#CEC9BC] cursor-pointer transition-colors hover:border-[#E8440A] hover:text-[#E8440A]"
          >
            Read Overview
          </Link>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A857D]">
          <span className="w-px h-8 bg-[#CEC9BC]"></span>
          Scroll to explore
        </div>
      </div>

      {/* Right side - Animated Map */}
      <div className="relative overflow-hidden bg-[#EAE6DE] min-h-[400px] lg:min-h-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dot grid background */}
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="0.8" fill="#C8C3B8" opacity="0.4" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="800" height="500" fill="url(#dotgrid)" />

          {/* Simplified continent outlines */}
          <g opacity="0.12" stroke="#8A857D" strokeWidth="0.8" fill="none">
            {/* North America */}
            <path d="M80,80 Q120,60 180,75 Q200,80 210,100 Q220,120 200,150 Q190,170 170,180 Q150,200 120,210 Q100,220 80,200 Q60,180 70,150 Q75,120 80,80Z" />
            {/* South America */}
            <path d="M160,230 Q180,220 200,230 Q220,250 230,280 Q235,310 220,340 Q200,370 180,380 Q160,370 155,340 Q150,310 145,280 Q150,250 160,230Z" />
            {/* Europe */}
            <path d="M310,80 Q340,70 370,80 Q390,90 380,110 Q370,130 350,140 Q330,150 310,140 Q300,130 305,110 Q308,90 310,80Z" />
            {/* Africa */}
            <path d="M330,170 Q360,160 390,175 Q410,190 420,220 Q425,260 410,300 Q390,330 370,340 Q350,330 340,300 Q335,270 330,240 Q325,210 328,190 Q329,180 330,170Z" />
            {/* Asia */}
            <path d="M400,60 Q460,50 530,70 Q580,90 620,80 Q650,90 660,120 Q650,150 620,160 Q580,170 540,180 Q500,190 460,180 Q430,170 410,150 Q400,130 395,110 Q398,80 400,60Z" />
            {/* Australia */}
            <path d="M580,300 Q620,290 660,300 Q680,310 680,330 Q670,350 640,355 Q610,350 590,340 Q575,325 580,300Z" />
          </g>

          {/* Connection lines between dots */}
          <g opacity="0.08" stroke="#E8440A" strokeWidth="0.5">
            <line x1="420" y1="140" x2="380" y2="180" />
            <line x1="380" y1="180" x2="340" y2="155" />
            <line x1="520" y1="200" x2="580" y2="170" />
            <line x1="160" y1="160" x2="200" y2="220" />
            <line x1="350" y1="280" x2="450" y2="280" />
            <line x1="420" y1="140" x2="520" y2="200" />
          </g>

          {/* Pulsing event dots */}
          {mapDots.map((dot, i) => (
            <g key={i}>
              {/* Ping ring */}
              <circle cx={dot.cx} cy={dot.cy} r="3" fill="none" stroke={dot.color} strokeWidth="0.5" opacity="0.6">
                <animate attributeName="r" values="3;18" dur="2.5s" begin={dot.delay} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2.5s" begin={dot.delay} repeatCount="indefinite" />
              </circle>
              {/* Second ping ring */}
              <circle cx={dot.cx} cy={dot.cy} r="3" fill="none" stroke={dot.color} strokeWidth="0.3" opacity="0.3">
                <animate attributeName="r" values="3;28" dur="2.5s" begin={dot.delay2} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0" dur="2.5s" begin={dot.delay2} repeatCount="indefinite" />
              </circle>
              {/* Core dot */}
              <circle cx={dot.cx} cy={dot.cy} r="3" fill={dot.color} filter="url(#glow)">
                <animate attributeName="r" values="2.5;3.5;2.5" dur="2s" begin={dot.delay} repeatCount="indefinite" />
              </circle>
              {/* Label */}
              <text x={dot.cx + 8} y={dot.cy + 3} fontSize="7" fontFamily="JetBrains Mono, monospace" fill="#4A453F" opacity="0.6">{dot.label}</text>
            </g>
          ))}
        </svg>

        {/* Floating event cards */}
        <div className="absolute top-8 right-8 flex flex-col gap-2 z-10">
          <div className="bg-[rgba(242,239,233,0.9)] backdrop-blur-sm border border-[#CEC9BC] px-3 py-2 flex items-center gap-2 animate-pulse" style={{ animationDuration: '3s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8440A]"></span>
            <span className="font-mono text-[9px] tracking-wide uppercase text-[#4A453F]">Kyiv · Air Alert · 2m</span>
          </div>
          <div className="bg-[rgba(242,239,233,0.9)] backdrop-blur-sm border border-[#CEC9BC] px-3 py-2 flex items-center gap-2 animate-pulse" style={{ animationDuration: '4s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47900]"></span>
            <span className="font-mono text-[9px] tracking-wide uppercase text-[#4A453F]">Tbilisi · Protest · 7m</span>
          </div>
          <div className="bg-[rgba(242,239,233,0.9)] backdrop-blur-sm border border-[#CEC9BC] px-3 py-2 flex items-center gap-2 animate-pulse" style={{ animationDuration: '5s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B5CE6]"></span>
            <span className="font-mono text-[9px] tracking-wide uppercase text-[#4A453F]">Dhaka · Flooding · 12m</span>
          </div>
        </div>
      </div>
    </section>
  )
}
