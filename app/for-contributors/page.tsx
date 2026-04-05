'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ForContributorsPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          For Contributors
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Report. Build trust.<br />Get paid.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Whether you&apos;re a journalist, OSINT analyst, or eyewitness, Witness gives you the tools to report what you see, build a verified reputation, and earn from your content.
        </p>
      </section>

      {/* How You Earn */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Monetization
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Your content, your revenue.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            {
              num: '70%',
              title: 'Content Licensing',
              desc: 'When newsrooms license your photos, videos, or reports, you keep 70% of the revenue. Fair compensation for being where it matters.',
            },
            {
              num: '80%',
              title: 'Subscriber Revenue',
              desc: 'Build an audience and offer paid subscriber tiers. Analysis, early access, exclusive coverage. You keep 80% of subscription revenue.',
            },
            {
              num: '100%',
              title: 'Your Reputation',
              desc: 'Your trust score is yours. Built through accuracy, corroboration, and consistency. It travels with you across the platform.',
            },
          ].map(item => (
            <div key={item.title} className="bg-[#F2EFE9] p-8 hover:bg-[#EAE6DE] transition-colors">
              <div className="font-display text-4xl font-[800] text-[#E8440A] mb-3">{item.num}</div>
              <h3 className="font-display text-xl font-[700] text-[#2C2820] mb-3">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Score System */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Trust System
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Credibility is earned,<br />not granted.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { range: '0–19', label: 'New Account', color: '#8A857D', desc: 'Just getting started. Submit your first reports and begin building your track record.' },
            { range: '20–49', label: 'Reporter', color: '#2B5CE6', desc: 'Active contributor with a growing history. Your reports are being corroborated by the community.' },
            { range: '50–74', label: 'Trusted Reporter', color: '#0F8C44', desc: 'Consistent accuracy and community trust. Your reports carry significant weight.' },
            { range: '75–100', label: 'Verified Correspondent', color: '#E8440A', desc: 'Top-tier credibility. Your reporting is highly valued by the community and newsrooms alike.' },
          ].map(tier => (
            <div key={tier.label} className="bg-[#F2EFE9] p-6 hover:bg-white transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }}></span>
                <span className="font-mono text-[9px] tracking-[0.12em] uppercase" style={{ color: tier.color }}>{tier.range}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-[#2C2820] mb-2">{tier.label}</h3>
              <p className="text-[12px] text-[#4A453F] leading-[1.65] font-light">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Trust Score Changes */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Score Changes
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          How your score moves.
        </h2>
        <div className="two-up-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { event: 'Report corroborated by another user', delta: '+5', positive: true },
            { event: 'Admin manually verifies your report', delta: '+3', positive: true },
            { event: 'Admin actions a flag on your content', delta: '-5', positive: false },
            { event: 'Report marked as Disputed', delta: '-10', positive: false },
          ].map((item, i) => (
            <div key={i} className="bg-[#F2EFE9] p-6 flex items-center justify-between hover:bg-[#EAE6DE] transition-colors">
              <span className="text-[14px] text-[#2C2820] font-light">{item.event}</span>
              <span className={`font-mono text-lg font-semibold ${item.positive ? 'text-[#0F8C44]' : 'text-[#C0392B]'}`}>
                {item.delta}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Contribute */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Who Contributes
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Anyone with a story.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { title: 'Eyewitnesses', desc: 'You were there. You saw it happen. Your geotagged report, photo, or video becomes part of the public record.' },
            { title: 'Journalists', desc: 'Professional reporters covering events. Build audience, license content, offer subscriber analysis. Witness amplifies your work.' },
            { title: 'OSINT Analysts', desc: 'Open-source intelligence researchers verifying and contextualizing events. Your analysis adds crucial context to raw reports.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#F2EFE9] p-7 hover:bg-white transition-colors">
              <h3 className="font-display text-xl font-[700] text-[#2C2820] mb-3">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
