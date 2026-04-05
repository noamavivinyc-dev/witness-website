'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2E2B26] text-[#F2EFE9]">
      <div className="px-8 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[rgba(255,255,255,0.08)]">
        <div>
          <Link href="/" className="no-underline">
            <span className="font-brand text-2xl font-[800] tracking-tight text-[#F2EFE9]">
              W<span className="text-[#E8440A]">·</span>itness
            </span>
          </Link>
          <p className="mt-3 text-[13px] text-[rgba(242,239,233,0.5)] font-light leading-relaxed">
            A real-time, map-based citizen journalism platform.
          </p>
        </div>
        <div>
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.35)] mb-4">Platform</div>
          <div className="flex flex-col gap-2">
            <Link href="/platform" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">The Platform</Link>
            <Link href="/trust-and-safety" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">Trust & Safety</Link>
            <Link href="/pricing" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">Pricing</Link>
          </div>
        </div>
        <div>
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.35)] mb-4">For</div>
          <div className="flex flex-col gap-2">
            <Link href="/for-newsrooms" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">Newsrooms</Link>
            <Link href="/for-contributors" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">Contributors</Link>
            <Link href="/about" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">About</Link>
          </div>
        </div>
        <div>
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(242,239,233,0.35)] mb-4">Contact</div>
          <div className="flex flex-col gap-2">
            <a href="mailto:contact@thewitnessapp.com" className="text-[13px] text-[rgba(242,239,233,0.6)] no-underline hover:text-[#E8440A] transition-colors">contact@thewitnessapp.com</a>
          </div>
        </div>
      </div>
      <div className="px-8 md:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(242,239,233,0.25)]">
          © 2025 Witness · All rights reserved
        </div>
        <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(242,239,233,0.25)]">
          History is happening now.
        </div>
      </div>
    </footer>
  )
}
