'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ForNewsroomsPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          For Newsrooms
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Verified eyewitness<br />content, licensed.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Access real-time, geotagged reports from the ground. License verified content through a transparent marketplace. Get the story before anyone else — directly from the people who are there.
        </p>
      </section>

      {/* Why Witness for Newsrooms */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Why Witness
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Your audience expects<br />real-time coverage.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            {
              num: '01',
              title: 'Real-Time Access',
              desc: 'Events appear on the map as they happen. No delay from editorial review. Filter by region, category, or trust tier to find what matters.',
            },
            {
              num: '02',
              title: 'Verified Sources',
              desc: 'Every report has a trust score based on the reporter\'s accuracy history and community corroboration. Know the credibility before you publish.',
            },
            {
              num: '03',
              title: 'Licensed Content',
              desc: 'Photos, videos, and written reports available through a transparent licensing marketplace. 70% goes directly to the creator who was there.',
            },
          ].map(item => (
            <div key={item.num} className="bg-[#F2EFE9] p-8 hover:bg-[#EAE6DE] transition-colors">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A] mb-3">{item.num}</div>
              <h3 className="font-display text-xl font-[700] text-[#2C2820] mb-3">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          How It Works
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          From ground report<br />to published story.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { step: '01', title: 'Monitor', desc: 'Set up alerts for regions and categories. Get notified when events unfold in your coverage area.' },
            { step: '02', title: 'Verify', desc: 'Check trust scores, corroboration counts, and community signals. Cross-reference multiple eyewitness accounts.' },
            { step: '03', title: 'License', desc: 'Request content through the marketplace. Fair pricing, instant access, transparent creator compensation.' },
            { step: '04', title: 'Publish', desc: 'Use Witness content with proper attribution. Your audience gets authentic, verified eyewitness reporting.' },
          ].map(item => (
            <div key={item.step} className="bg-[#F2EFE9] p-6 hover:bg-white transition-colors">
              <div className="font-display text-4xl font-[800] text-[#DEDAD1] mb-3">{item.step}</div>
              <h3 className="text-[14px] font-semibold text-[#2C2820] mb-2">{item.title}</h3>
              <p className="text-[12px] text-[#4A453F] leading-[1.65] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Use Cases
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Built for how<br />newsrooms actually work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { title: 'Breaking News Desks', desc: 'Monitor global events in real-time. Get alerts for your regions. Access eyewitness content before wire services.' },
            { title: 'Investigative Teams', desc: 'Track ongoing events over time. Access historical data and reporter networks. Build stories from multiple corroborated sources.' },
            { title: 'Foreign Correspondents', desc: 'Access ground-level reporting from areas without bureau presence. Verify local claims against community corroboration.' },
            { title: 'Digital-First Publishers', desc: 'Rapid content licensing for real-time coverage. Embed Witness reports directly. Authentic content your audience trusts.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#F2EFE9] p-7 hover:bg-[#EAE6DE] transition-colors">
              <h3 className="font-display text-lg font-[700] text-[#2C2820] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#2E2B26] border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-2xl">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#E8440A] mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-[#E8440A]"></span>
            Get Started
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#F2EFE9] mb-5 leading-[1.05]">
            Ready to access<br />real-time reporting?
          </h2>
          <p className="text-[15px] leading-[1.8] text-[rgba(242,239,233,0.6)] font-light mb-8">
            Join the Witness platform and get access to verified eyewitness content from around the world. Institutional accounts include priority licensing, API access, and dedicated support.
          </p>
          <a href="mailto:contact@thewitnessapp.com" className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-[#E8440A] text-[#F2EFE9] no-underline cursor-pointer transition-opacity hover:opacity-90">
            Request Newsroom Access
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
