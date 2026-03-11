'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Business Model
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Revenue that aligns<br />with the mission.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Witness is free for users. Revenue comes from content licensing, creator subscriptions, transparent advertising, and institutional data products — never from compromising truth.
        </p>
      </section>

      {/* Revenue Streams */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Revenue Streams
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Four streams.<br />All mission-aligned.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            {
              num: '01',
              phase: 'Primary',
              title: 'Content Licensing Marketplace',
              desc: 'High-value eyewitness content licensed to news orgs, NGOs, and researchers. 70% goes to the creator who was there.',
              highlight: true,
            },
            {
              num: '02',
              phase: 'Creator Revenue',
              title: 'Creator Subscriptions',
              desc: 'Journalists and analysts offer paid subscriber tiers. 80/20 split tied to trust score and accuracy.',
              highlight: false,
            },
            {
              num: '03',
              phase: 'Growth Phase',
              title: 'Transparent Advertising',
              desc: 'Clearly labelled. No political ads. No influence over credibility systems. Never targeted based on user behavior.',
              highlight: false,
            },
            {
              num: '04',
              phase: 'At Scale',
              title: 'Institutional Data Products',
              desc: 'Real-time event API and historical archives for newsrooms, governments, and risk analysis firms.',
              highlight: false,
            },
          ].map(item => (
            <div key={item.num} className={`p-7 hover:bg-[#EAE6DE] transition-colors ${item.highlight ? 'bg-[#2E2B26]' : 'bg-[#F2EFE9]'}`}>
              <div className={`font-display text-5xl font-[800] mb-3 ${item.highlight ? 'text-[rgba(255,255,255,0.08)]' : 'text-[#DEDAD1]'}`}>{item.num}</div>
              <div className={`font-mono text-[9px] tracking-[0.15em] uppercase mb-2 ${item.highlight ? 'text-[#E8440A]' : 'text-[#E8440A]'}`}>{item.phase}</div>
              <h3 className={`text-[14px] font-semibold mb-2 ${item.highlight ? 'text-[#F2EFE9]' : 'text-[#2C2820]'}`}>{item.title}</h3>
              <p className={`text-[12.5px] leading-[1.65] font-light ${item.highlight ? 'text-[rgba(242,239,233,0.6)]' : 'text-[#4A453F]'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Economics */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Creator Economics
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Creators earn more.<br />Always.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { label: 'Content Licensing', creator: '70%', platform: '30%', bar: 70 },
            { label: 'Subscriptions', creator: '80%', platform: '20%', bar: 80 },
            { label: 'Reputation & Trust', creator: '100%', platform: '—', bar: 100 },
          ].map(item => (
            <div key={item.label} className="bg-[#F2EFE9] p-7">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#8A857D] mb-3">{item.label}</div>
              <div className="flex items-end gap-3 mb-4">
                <span className="font-display text-4xl font-[800] text-[#2C2820] leading-none">{item.creator}</span>
                <span className="font-mono text-[10px] text-[#8A857D] pb-1">to creator</span>
              </div>
              <div className="h-2 rounded-full bg-[#EAE6DE] overflow-hidden">
                <div className="h-full rounded-full bg-[#E8440A] transition-all" style={{ width: `${item.bar}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Won't Do */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#2E2B26]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.4)]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Revenue Principles
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#F2EFE9] mb-10 leading-[1.05]">
          Lines we will<br />never cross.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {[
            'No paid placement in trust or credibility systems',
            'No political advertising — ever',
            'No algorithmic boosting for paid content',
            'No selling user data or behavioral profiles',
            'No engagement-maximizing feed manipulation',
            'No hidden monetization of user-generated content',
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#E8440A] font-mono text-sm flex-shrink-0 mt-0.5">✕</span>
              <p className="text-[13px] text-[rgba(242,239,233,0.7)] leading-[1.5] font-light">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
