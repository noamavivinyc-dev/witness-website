'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      {/* Hero */}
      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Trust & Safety
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Truth through<br />transparency.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Witness doesn&apos;t decide what&apos;s true. The community does, through corroboration, transparent trust scores, and visible debate. Here&apos;s how the system works.
        </p>
      </section>

      {/* Trust Tiers */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Report Trust Tiers
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Every report has<br />a trust status.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            {
              tier: 'Unverified',
              color: '#8A857D',
              desc: 'Default state for all new reports. The report has been submitted but not yet corroborated by other users.',
              icon: '○',
            },
            {
              tier: 'Corroborated',
              color: '#E8440A',
              desc: 'At least 10 independent users have confirmed this report from the same location. High confidence.',
              icon: '◉',
            },
            {
              tier: 'Verified',
              color: '#0F8C44',
              desc: 'An admin or institutional partner has independently verified this report. Highest tier of trust.',
              icon: '◆',
            },
            {
              tier: 'Disputed',
              color: '#C0392B',
              desc: 'Multiple users have flagged this report. Under community review. Context is attached visibly.',
              icon: '⚠',
            },
          ].map(item => (
            <div key={item.tier} className="bg-[#F2EFE9] p-6 hover:bg-[#EAE6DE] transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl" style={{ color: item.color }}>{item.icon}</span>
              </div>
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase mb-2" style={{ color: item.color }}>{item.tier}</div>
              <p className="text-[13px] text-[#4A453F] leading-[1.65] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Verification Works */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Verification Process
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Community-driven<br />verification.
        </h2>
        <div className="max-w-3xl">
          <div className="space-y-0">
            {[
              { step: '01', title: 'Report Submitted', desc: 'A user submits a geotagged report with text, photo, and category. It appears on the map immediately as "unverified".' },
              { step: '02', title: 'Community Corroboration', desc: 'Other users in the area can corroborate the report. Each corroboration increases the report\'s trust signal.' },
              { step: '03', title: 'Trust Threshold', desc: 'At 10+ corroborations from distinct users, the report automatically moves to "corroborated" tier. The original reporter earns +5 trust score.' },
              { step: '04', title: 'Flagging & Dispute', desc: 'If 5+ distinct users flag a report, it\'s automatically marked "disputed". Context from both sides is visible. Admins review the queue.' },
              { step: '05', title: 'Admin Review', desc: 'Admins can verify reports independently, dismiss flags, or take action. All moderation is transparent, never silent deletion.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 py-6 border-b border-[#CEC9BC] last:border-b-0">
                <div className="font-display text-3xl font-[800] text-[#DEDAD1] flex-shrink-0 w-12">{item.step}</div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#2C2820] mb-1">{item.title}</h3>
                  <p className="text-[13px] text-[#4A453F] leading-[1.7] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Trust Scores */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8A857D]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          User Trust Scores
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#2C2820] mb-10 leading-[1.05]">
          Reputation built<br />on accuracy.
        </h2>

        {/* Visual trust score bar */}
        <div className="max-w-3xl mb-10">
          <div className="h-3 rounded-full bg-[#EAE6DE] overflow-hidden flex">
            <div className="h-full bg-[#8A857D]" style={{ width: '20%' }}></div>
            <div className="h-full bg-[#2B5CE6]" style={{ width: '30%' }}></div>
            <div className="h-full bg-[#0F8C44]" style={{ width: '25%' }}></div>
            <div className="h-full bg-[#E8440A]" style={{ width: '25%' }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#8A857D]">0 - New</span>
            <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#2B5CE6]">20 - Reporter</span>
            <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#0F8C44]">50 - Trusted</span>
            <span className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#E8440A]">75 - Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { event: 'Report corroborated by another user', delta: '+5', positive: true },
            { event: 'Admin manually verifies report', delta: '+3', positive: true },
            { event: 'Admin actions a flag on your content', delta: '-5', positive: false },
            { event: 'Report marked as Disputed', delta: '-10', positive: false },
          ].map((item, i) => (
            <div key={i} className="bg-[#F2EFE9] p-5 flex items-center justify-between hover:bg-[#EAE6DE] transition-colors">
              <span className="text-[13px] text-[#2C2820] font-light">{item.event}</span>
              <span className={`font-mono text-base font-semibold flex-shrink-0 ml-4 ${item.positive ? 'text-[#0F8C44]' : 'text-[#C0392B]'}`}>
                {item.delta}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Moderation Approach */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#2E2B26]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.4)]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Moderation Philosophy
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#F2EFE9] mb-10 leading-[1.05]">
          Transparency over<br />suppression.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {[
            { title: 'No Silent Deletion', desc: 'Content is never quietly removed. Disputed content is flagged with visible context. Users see why something is disputed.' },
            { title: 'Soft Delete Only', desc: 'Even when content is removed, the record exists. No hard deletes. Transparency in every action.' },
            { title: 'Community First', desc: 'The community flags and corroborates. Admins review. Algorithms never decide what you see. Chronological feeds only.' },
            { title: 'Reporter Safety', desc: 'GPS coordinates are never shown publicly. Only reverse-geocoded location names. Identity modes protect contributors.' },
            { title: 'No Facial Recognition', desc: 'Ever. Under any circumstances. This is a non-negotiable principle of the platform.' },
            { title: 'Accountable Identity', desc: 'No truly anonymous posting. Identity modes provide privacy while maintaining internal accountability.' },
          ].map((item, i) => (
            <div key={i} className="border border-[rgba(255,255,255,0.08)] p-5 hover:border-[rgba(255,255,255,0.15)] transition-colors">
              <h3 className="text-[14px] font-semibold text-[#F2EFE9] mb-2">{item.title}</h3>
              <p className="text-[12px] text-[rgba(242,239,233,0.6)] leading-[1.65] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
