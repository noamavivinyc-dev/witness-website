'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation({ onCTA }: { onCTA: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '/platform', label: 'Platform' },
    { href: '/for-newsrooms', label: 'Newsrooms' },
    { href: '/for-contributors', label: 'Contributors' },
    { href: '/trust-and-safety', label: 'Trust' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(242,239,233,0.92)] backdrop-blur-lg border-b border-[#CEC9BC]">
      <div className="flex justify-between items-center px-8 md:px-12 h-16">
        {/* Logo - much larger */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-brand text-2xl md:text-3xl font-[800] tracking-tight text-[#2C2820] leading-none">
            W<span className="text-[#E8440A]">·</span>itness
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#4A453F] no-underline hover:text-[#E8440A] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E8440A] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-[#E8440A]">
            <span className="w-2 h-2 bg-[#E8440A] rounded-full animate-pulse"></span>
            Live
          </div>
          <button
            onClick={onCTA}
            className="font-mono text-[10px] tracking-[0.15em] uppercase px-5 py-3 min-h-[44px] bg-[#2E2B26] text-[#F2EFE9] border-none cursor-pointer transition-colors hover:bg-[#E8440A] rounded-sm"
          >
            Get Access
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1 p-3 min-w-[44px] min-h-[44px] items-center justify-center bg-transparent border-none cursor-pointer"
          >
            <span className={`w-5 h-0.5 bg-[#2C2820] transition-transform ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#2C2820] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#2C2820] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#CEC9BC] bg-[rgba(242,239,233,0.98)] backdrop-blur-lg">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-4 min-h-[44px] font-mono text-[11px] tracking-[0.15em] uppercase text-[#4A453F] no-underline hover:text-[#E8440A] hover:bg-[#EAE6DE] transition-colors border-b border-[rgba(206,201,188,0.4)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
