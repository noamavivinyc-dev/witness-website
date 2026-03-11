'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          About Witness
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          The world deserves<br />witnesses.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Witness is a real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. The truth emerges through transparency — not editorial authority.
        </p>
      </section>

      {/* Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#E8440A] mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-[#E8440A]"></span>
            Our Belief
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-[800] leading-[1.05] tracking-tight text-[#2C2820] mb-0">
            History is<br />
            happening <span style={{ WebkitTextStroke: '1.5px #2C2820', color: 'transparent' }}>now.</span><br />
          </h2>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-l border-[#CEC9BC]">
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-5">
            Modern history is no longer written years later by institutions. It is recorded live, by millions of people everywhere. But today that record is fragmented, shaped by algorithms, filtered by editors, and monetized by intermediaries — not the people who created it.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-6">
            Witness exists to fix that. A live public record of the present. A social platform grounded in reality. A marketplace for authentic information. A system where the world explains itself to itself.
          </p>
          <div className="pt-5 border-t border-[#CEC9BC] font-mono text-[10px] tracking-[0.25em] uppercase text-[#8A857D]">
            Unfiltered &nbsp;·&nbsp; Uncentralized &nbsp;·&nbsp; Unignorable
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          The Problem
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Four failures.<br />One platform that fixes them.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { num: '01', title: 'Speed', desc: 'Traditional media is too slow. By the time a story is verified and published, the world has moved on. Witness shows events as they unfold.' },
            { num: '02', title: 'Access', desc: 'Editorial gatekeeping limits who can report. Witness is open to anyone with a phone and a story — credibility is earned, not granted.' },
            { num: '03', title: 'Context', desc: 'Social media fragments information. Witness anchors every report to a location, time, and event thread — creating structured context.' },
            { num: '04', title: 'Trust', desc: 'Algorithms optimize for engagement, not truth. Witness uses community corroboration and transparent trust scores — no hidden ranking.' },
          ].map(item => (
            <div key={item.num} className="bg-[#F2EFE9] p-8 hover:bg-[#EAE6DE] transition-colors">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A] mb-3">{item.num}</div>
              <h3 className="font-display text-xl font-[700] text-[#2C2820] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Product Principles
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Non-negotiable.<br />Every feature answers to these.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { num: '01', title: 'Reality First', desc: 'The map and report come before narrative. Information organized by where and when — not by engagement.' },
            { num: '02', title: 'Credibility is Earned', desc: 'No automatic trust. Credibility is a dynamic score from accuracy history, corroboration, and community signals.' },
            { num: '03', title: 'Transparency Over Suppression', desc: "We don't quietly erase falsehoods. Context is attached visibly. Users see the debate." },
            { num: '04', title: 'The Map is the Product', desc: 'Every feature must improve the map or feed it. The app is the interface around the map.' },
            { num: '05', title: 'Incentives Align with Truth', desc: 'Monetization rewards accuracy and proximity to events — not virality or sensationalism.' },
            { num: '06', title: 'Global by Default', desc: 'Built for authoritarian environments, conflict zones, and limited connectivity from day one.' },
          ].map(item => (
            <div key={item.num} className="bg-[#F2EFE9] p-7 hover:bg-[#EAE6DE] transition-colors">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#8A857D] mb-2">{item.num}</div>
              <h3 className="text-[15px] font-semibold text-[#2C2820] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.65] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Witness Is Not */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#2E2B26] border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.4)]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          What We Are Not
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#F2EFE9] mb-10 leading-[1.05]">
          Clear boundaries.<br />No exceptions.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Not a fact-checker — we create conditions for the community to determine truth',
            'Not a social media platform — social features serve reporting, not engagement',
            'Not a news aggregator — no scraping, users report directly',
            'Not engagement-ranked — all feeds are chronological only, always',
            'No facial recognition — ever, under any circumstances',
            'No paid placement in credibility or trust systems',
          ].map((item, i) => (
            <div key={i} className="border border-[rgba(255,255,255,0.08)] p-5">
              <div className="flex gap-3">
                <span className="text-[#E8440A] font-mono text-sm flex-shrink-0">✕</span>
                <p className="text-[13px] text-[rgba(242,239,233,0.7)] leading-[1.65] font-light">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
