'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { LEGAL_DOCUMENTS } from '@/lib/legal'

export default function LegalIndexPage() {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      <section className="pt-28 pb-16 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          Legal
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-[800] leading-[1.02] tracking-tight text-[#2C2820] mb-6">
          Legal documents.
        </h1>
        <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light">
          Witness is built on transparency. These documents govern your use of the platform, explain how we handle your data, and set the standards for what is and is not permitted.
        </p>
      </section>

      <section className="p-8 md:p-12 lg:p-16 border-b border-[#CEC9BC]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#CEC9BC] border border-[#CEC9BC] max-w-4xl">
          {LEGAL_DOCUMENTS.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="bg-[#F2EFE9] p-6 hover:bg-[#EAE6DE] transition-colors no-underline group"
            >
              <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#8A857D] mb-3">
                Last updated {doc.date}
              </div>
              <h2 className="font-display text-xl font-[800] tracking-tight text-[#2C2820] mb-2 group-hover:text-[#E8440A] transition-colors">
                {doc.title}
              </h2>
              <p className="text-[13px] text-[#4A453F] leading-[1.65] font-light">{doc.description}</p>
              <div className="mt-4 font-mono text-[10px] tracking-[0.15em] uppercase text-[#E8440A]">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-12 lg:px-16 py-10">
        <p className="text-[13px] text-[#8A857D] font-light max-w-2xl">
          Questions about our legal documents?{' '}
          <a href="mailto:legal@thewitnessapp.com" className="text-[#E8440A] hover:underline">
            legal@thewitnessapp.com
          </a>
          {'. '}
          For urgent safety matters:{' '}
          <a href="mailto:safety@thewitnessapp.com" className="text-[#E8440A] hover:underline">
            safety@thewitnessapp.com
          </a>
          .
        </p>
      </section>

      <Footer />
    </div>
  )
}
