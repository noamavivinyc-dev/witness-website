'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import WaitlistForm from '@/components/forms/WaitlistForm'
import NewsroomForm from '@/components/forms/NewsroomForm'
import ContactForm from '@/components/forms/ContactForm'
import Footer from '@/components/Footer'
import FormModal from '@/components/FormModal'

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => setActiveModal('waitlist')} />
      <Hero />
      <Ticker />

      {/* Problem Statement */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          The Problem
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-[800] leading-[1.05] tracking-tight text-[#2C2820] mb-6">
          Four failures.<br />One platform that fixes them.
        </h2>
        <p className="text-[15px] leading-[1.8] text-[#4A453F] max-w-2xl font-light mb-10">
          Witness addresses four structural failures in how the world currently receives and processes real-time information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { num: '01', title: 'Speed', desc: 'Traditional media is too slow. Events happen in real-time — reporting should too.' },
            { num: '02', title: 'Access', desc: 'Editorial gatekeeping limits who can report. Anyone with a phone should be heard.' },
            { num: '03', title: 'Context', desc: 'Social media fragments information. Reports need location, time, and structure.' },
            { num: '04', title: 'Trust', desc: 'Algorithms optimize for engagement, not truth. Credibility should be earned.' },
          ].map(item => (
            <div key={item.num} className="bg-[#F2EFE9] p-6 hover:bg-[#EAE6DE] transition-colors">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A] mb-3">{item.num}</div>
              <h3 className="font-display text-lg font-[700] text-[#2C2820] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.65] font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Overview — 4 Layers */}
      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          The Platform
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-[800] leading-[1.05] tracking-tight text-[#2C2820] mb-6">
          Four layers.<br />One coherent system.
        </h2>
        <p className="text-[15px] leading-[1.8] text-[#4A453F] max-w-2xl font-light mb-10">
          A live map, citizen reporting, a real-time feed, and structured public discourse — unified in one platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { num: '01', title: 'The Live Map', desc: 'The primary interface. Every report anchored to real location and time. The world becomes the UI.', featured: true },
            { num: '02', title: 'Citizen Reporting', desc: 'Anyone can submit geotagged reports. Credibility is earned through accuracy and community corroboration.', featured: false },
            { num: '03', title: 'Short-Form Feed', desc: 'On-the-ground clips, commentary, analysis. Chronologically sorted, never algorithmically ranked.', featured: false },
            { num: '04', title: 'Public Discourse', desc: 'Every event anchors a conversation. Truth emerges through visible argument, not suppression.', featured: true },
          ].map(item => (
            <div key={item.num} className={`p-8 hover:opacity-90 transition-opacity ${item.featured ? 'bg-[#2E2B26]' : 'bg-[#F2EFE9]'}`}>
              <div className={`font-mono text-[9px] tracking-[0.2em] uppercase mb-4 ${item.featured ? 'text-[rgba(242,239,233,0.4)]' : 'text-[#8A857D]'}`}>Layer {item.num}</div>
              <h3 className={`font-display text-xl font-[700] mb-3 leading-[1.2] ${item.featured ? 'text-[#F2EFE9]' : 'text-[#2C2820]'}`}>{item.title}</h3>
              <p className={`text-[14px] leading-[1.7] font-light ${item.featured ? 'text-[rgba(242,239,233,0.65)]' : 'text-[#4A453F]'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/platform"
            className="font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-transparent text-[#2C2820] no-underline border border-[#CEC9BC] cursor-pointer transition-colors hover:border-[#E8440A] hover:text-[#E8440A] inline-block"
          >
            Explore the Platform →
          </Link>
        </div>
      </section>

      {/* Manifesto */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#CEC9BC]">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A] mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#E8440A]"></span>
            Our Belief
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-[800] leading-[1.05] tracking-tight text-[#2C2820]">
            History is<br />
            happening <span style={{ WebkitTextStroke: '1.5px #2C2820', color: 'transparent' }}>now.</span><br />
            The world<br />
            deserves witnesses.
          </h2>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:border-l border-[#CEC9BC]">
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-5">
            Modern history is no longer written years later by institutions. It is recorded live, by millions of people everywhere. But today that record is fragmented, shaped by algorithms, filtered by editors, and monetized by intermediaries.
          </p>
          <p className="text-[15px] leading-[1.8] text-[#4A453F] font-light mb-8">
            Witness exists to fix that. A live public record of the present. A social platform grounded in reality. A marketplace for authentic information.
          </p>
          <div className="pt-5 border-t border-[#CEC9BC] font-mono text-[10px] tracking-[0.25em] uppercase text-[#8A857D]">
            Unfiltered &nbsp;·&nbsp; Uncentralized &nbsp;·&nbsp; Unignorable
          </div>
        </div>
      </section>

      {/* Audience Quick View */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#EAE6DE] border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Built For
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CEC9BC] border border-[#CEC9BC]">
          {[
            { tag: 'Primary', title: 'News Consumers', desc: 'Politically engaged people who already monitor breaking news across multiple platforms.', link: null },
            { tag: 'Newsrooms', title: 'Media Organizations', desc: 'Access verified eyewitness content and license it through a transparent marketplace.', link: '/for-newsrooms' },
            { tag: 'Creators', title: 'Contributors', desc: 'Journalists, OSINT analysts, eyewitnesses. Build audience and monetize through accuracy.', link: '/for-contributors' },
            { tag: 'Institutions', title: 'Partners', desc: 'NGOs, researchers, safety organizations. Access real-time event data and archives.', link: null },
          ].map(item => (
            <div key={item.title} className="bg-[#F2EFE9] p-6 hover:bg-white transition-colors">
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#E8440A] mb-3">{item.tag}</div>
              <h3 className="font-display text-lg font-[700] text-[#2C2820] mb-2 leading-[1.2]">{item.title}</h3>
              <p className="text-[13px] text-[#4A453F] leading-[1.65] font-light mb-3">{item.desc}</p>
              {item.link && (
                <Link href={item.link} className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#E8440A] no-underline hover:opacity-70 transition-opacity">
                  Learn more →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 md:p-12 lg:p-16 bg-[#2E2B26]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A] mb-6">
            Join the Movement
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-[800] tracking-tight text-[#F2EFE9] mb-5 leading-[1.05]">
            The world needs witnesses.
          </h2>
          <p className="text-[15px] leading-[1.8] text-[rgba(242,239,233,0.6)] font-light mb-8">
            Be among the first to access the platform. Join the waitlist for early access to Witness.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveModal('waitlist')}
              className="font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-[#E8440A] text-[#F2EFE9] border-none cursor-pointer transition-opacity hover:opacity-90"
            >
              Join the Waitlist
            </button>
            <button
              onClick={() => setActiveModal('contact')}
              className="font-mono text-[11px] tracking-[0.12em] uppercase px-7 py-3 bg-transparent text-[#F2EFE9] border border-[rgba(255,255,255,0.2)] cursor-pointer transition-colors hover:border-[#E8440A] hover:text-[#E8440A]"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Form Modals */}
      <FormModal
        isOpen={activeModal === 'waitlist'}
        onClose={() => setActiveModal(null)}
        title="Join the Witness Waitlist"
      >
        <WaitlistForm onSuccess={() => setActiveModal(null)} />
      </FormModal>

      <FormModal
        isOpen={activeModal === 'newsroom'}
        onClose={() => setActiveModal(null)}
        title="Newsroom Access Request"
      >
        <NewsroomForm onSuccess={() => setActiveModal(null)} />
      </FormModal>

      <FormModal
        isOpen={activeModal === 'contact'}
        onClose={() => setActiveModal(null)}
        title="Get in Touch"
      >
        <ContactForm onSuccess={() => setActiveModal(null)} />
      </FormModal>
    </div>
  )
}
