'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          The Platform
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Four layers.<br />One coherent system.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Witness combines a live global map, citizen reporting, a real-time feed, and structured public discourse into a single platform designed to surface truth through transparency.
        </p>
      </section>

      {/* Layer 1 - The Live Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#8A857D] mb-4">Layer 01</div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-5 leading-[1.05]">The Live Map</h2>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-4">
            The primary interface. Every report, event, and data feed is anchored to a real location and time. The world becomes the UI. Zoom into any region and see what&apos;s happening right now.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-6">
            Events are categorized and color-coded: protests in amber, conflicts in red, disasters in blue, politics in green. Each pin represents a verified or community-reviewed report from someone on the ground.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { color: '#E8440A', label: 'Conflict' },
              { color: '#C47900', label: 'Protest' },
              { color: '#2B5CE6', label: 'Disaster' },
              { color: '#0F8C44', label: 'Politics' },
            ].map(cat => (
              <span key={cat.label} className="flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] uppercase text-[#4A453F]">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></span> {cat.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative bg-[#2E2B26] min-h-[350px] overflow-hidden border-t lg:border-t-0 border-[#CEC9BC]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="rgba(242,239,233,0.15)" />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#mapgrid1)" />
            <g opacity="0.15" stroke="rgba(242,239,233,0.4)" strokeWidth="0.5" fill="none">
              <path d="M60,60 Q100,45 140,55 Q160,60 165,80 Q170,100 155,120 Q140,140 120,150 Q100,160 80,150 Q60,140 55,120 Q50,100 55,80Z" />
              <path d="M130,180 Q150,170 165,180 Q175,195 180,220 Q182,245 170,270 Q155,290 140,295 Q130,290 125,270 Q120,250 118,225 Q120,200 130,180Z" />
              <path d="M250,60 Q270,52 290,60 Q300,70 295,85 Q290,100 275,108 Q260,115 250,108 Q242,100 245,85Z" />
              <path d="M265,130 Q285,122 305,135 Q318,148 322,170 Q325,200 315,235 Q300,260 285,268 Q270,260 262,235 Q258,210 255,185 Q253,160 258,145Z" />
              <path d="M310,45 Q360,38 420,52 Q450,65 470,58 Q490,65 495,90 Q490,115 470,125 Q450,135 420,140 Q390,148 360,140 Q340,132 325,118 Q315,105 312,85Z" />
              <path d="M440,240 Q465,232 490,240 Q505,250 505,265 Q500,280 480,285 Q460,280 445,270 Q435,260 440,240Z" />
            </g>
            {[
              { cx: 310, cy: 100, color: '#E8440A' },
              { cx: 290, cy: 135, color: '#C47900' },
              { cx: 400, cy: 150, color: '#2B5CE6' },
              { cx: 150, cy: 120, color: '#0F8C44' },
              { cx: 275, cy: 220, color: '#E8440A' },
              { cx: 470, cy: 180, color: '#C47900' },
              { cx: 120, cy: 100, color: '#2B5CE6' },
            ].map((dot, i) => (
              <g key={i}>
                <circle cx={dot.cx} cy={dot.cy} r="3" fill="none" stroke={dot.color} strokeWidth="0.5" opacity="0.5">
                  <animate attributeName="r" values="3;15" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={dot.cx} cy={dot.cy} r="3" fill={dot.color} />
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* Layer 2 - Citizen Reporting */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="relative bg-[#EAE6DE] min-h-[350px] overflow-hidden flex items-center justify-center order-2 lg:order-1 border-t lg:border-t-0 border-[#CEC9BC]">
          <div className="p-8 space-y-3 w-full max-w-sm">
            <div className="bg-[#F2EFE9] border border-[#CEC9BC] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E8440A]"></span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A]">Conflict</span>
                <span className="font-mono text-[9px] tracking-[0.1em] text-[#8A857D] ml-auto">2m ago</span>
              </div>
              <div className="font-display text-[15px] font-[700] text-[#2C2820] mb-1">Air Alert in Kyiv Oblast</div>
              <div className="text-[12px] text-[#4A453F] font-light leading-relaxed">Multiple reports of incoming threats. Sirens activated across central districts.</div>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#CEC9BC]">
                <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#8A857D]">Trust: Corroborated</span>
                <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#0F8C44]">+12 corroborations</span>
              </div>
            </div>
            <div className="bg-[#F2EFE9] border border-[#CEC9BC] p-4 opacity-70">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C47900]"></span>
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#C47900]">Protest</span>
                <span className="font-mono text-[9px] tracking-[0.1em] text-[#8A857D] ml-auto">7m ago</span>
              </div>
              <div className="font-display text-[15px] font-[700] text-[#2C2820] mb-1">Large Gathering in Tbilisi</div>
              <div className="text-[12px] text-[#4A453F] font-light">Thousands gathering near Parliament building...</div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#8A857D] mb-4">Layer 02</div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-5 leading-[1.05]">Citizen Reporting</h2>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-4">
            Anyone can submit geotagged reports tied to their location. Reports appear on the map instantly, tagged by category and trust tier. Credibility is earned through accuracy and community corroboration.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light">
            Each report starts as &quot;unverified&quot; and moves through trust tiers as other witnesses corroborate the event. No editorial gatekeeping. The community determines truth.
          </p>
        </div>
      </section>

      {/* Layer 3 - Short-Form Feed */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#8A857D] mb-4">Layer 03</div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-5 leading-[1.05]">Short-Form Feed</h2>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-4">
            A Twitter-style forum feed anchored to real-world events. On-the-ground clips, commentary, and analysis, all chronologically sorted and never algorithmically ranked.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light">
            Posts can be linked to map reports, creating a bidirectional connection between geographic events and social discourse.
          </p>
        </div>
        <div className="relative bg-[#EAE6DE] min-h-[350px] overflow-hidden flex items-center justify-center border-t lg:border-t-0 border-[#CEC9BC]">
          <div className="p-8 space-y-2 w-full max-w-sm">
            {[
              { user: '@sarah_k', text: 'Massive crowd forming at Freedom Square. Estimated 15k+ people.', time: '3m', likes: 42 },
              { user: '@osint_watch', text: 'Confirmed: second wave arriving from metro stations.', time: '8m', likes: 127 },
              { user: '@local_reporter', text: 'Road closures now in effect around Parliament.', time: '14m', likes: 23 },
            ].map((post, i) => (
              <div key={i} className={`bg-[#F2EFE9] border border-[#CEC9BC] p-3 ${i > 0 ? 'opacity-70' : ''}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#DEDAD1]"></div>
                  <span className="font-mono text-[10px] font-medium text-[#2C2820]">{post.user}</span>
                  <span className="font-mono text-[9px] text-[#8A857D] ml-auto">{post.time}</span>
                </div>
                <div className="text-[12px] text-[#4A453F] font-light leading-relaxed mb-2">{post.text}</div>
                <span className="font-mono text-[9px] text-[#8A857D]">♡ {post.likes}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layer 4 - Public Discourse */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="relative bg-[#2E2B26] min-h-[350px] overflow-hidden flex items-center justify-center order-2 lg:order-1 border-t lg:border-t-0 border-[#CEC9BC]">
          <div className="p-8 w-full max-w-sm">
            <div className="border border-[rgba(255,255,255,0.1)] p-4 mb-3">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A] mb-2">Event Thread</div>
              <div className="font-display text-[16px] font-[700] text-[#F2EFE9] mb-2">Tbilisi Protests: Day 3</div>
              <div className="text-[12px] text-[rgba(242,239,233,0.6)] font-light mb-3">47 reports · 312 posts · 1.2k participants</div>
              <div className="space-y-2">
                <div className="border-l-2 border-[#0F8C44] pl-3 py-1">
                  <div className="text-[11px] text-[rgba(242,239,233,0.8)]">Verified: Police have not deployed tear gas.</div>
                  <div className="font-mono text-[8px] text-[rgba(242,239,233,0.4)] mt-0.5">Corroborated by 23 witnesses</div>
                </div>
                <div className="border-l-2 border-[#C47900] pl-3 py-1">
                  <div className="text-[11px] text-[rgba(242,239,233,0.8)]">Disputed: Claims of 50k+ attendance unverified.</div>
                  <div className="font-mono text-[8px] text-[rgba(242,239,233,0.4)] mt-0.5">5 reports · under review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#8A857D] mb-4">Layer 04</div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-5 leading-[1.05]">Public Discourse</h2>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-4">
            Every event anchors a conversation. Users debate, add context, and challenge reports openly. Truth emerges through visible argument, not suppression or algorithmic filtering.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light">
            Verified claims are highlighted. Disputed information is flagged with context. The community sees the full picture, including disagreements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
