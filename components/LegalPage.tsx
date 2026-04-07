'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface LegalPageProps {
  category: string
  title: string
  subtitle?: string
  effectiveDate: string
  body: string
}

function isSectionHeading(line: string) {
  return (
    /^\d+(\.\d+)?\.?\s+[A-Z]/.test(line) ||
    /^[A-Z][A-Z0-9 /&(),.'"-]+$/.test(line)
  )
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizeBlocks(body: string) {
  const blocks = body
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.filter((block, index) => {
    if (index === 0 && block.includes('WITNESS')) return false
    if (index === 1 && block.startsWith('Last updated:')) return false
    return true
  })
}

function renderBlock(block: string, keyPrefix: string) {
  const lines = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  const nodes: React.ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    if (lines[index].startsWith('- ')) {
      const items: string[] = []
      while (index < lines.length && lines[index].startsWith('- ')) {
        items.push(lines[index].slice(2))
        index += 1
      }

      nodes.push(
        <ul key={`${keyPrefix}-list-${index}`} className="list-disc space-y-2 pl-5 text-[14px] text-[#4A453F] leading-[1.85] font-light">
          {items.map((item, itemIndex) => (
            <li key={`${keyPrefix}-item-${itemIndex}`}>{item}</li>
          ))}
        </ul>,
      )
      continue
    }

    nodes.push(
      <p key={`${keyPrefix}-p-${index}`} className="whitespace-pre-wrap text-[14px] text-[#4A453F] leading-[1.85] font-light">
        {lines[index]}
      </p>,
    )
    index += 1
  }

  return nodes
}

export default function LegalPage({ category, title, subtitle, effectiveDate, body }: LegalPageProps) {
  const blocks = normalizeBlocks(body)
  const headings = blocks
    .filter((block) => !block.includes('\n') && isSectionHeading(block))
    .map((block) => ({
      label: block,
      id: slugify(block),
      isSubsection: /^\d+\.\d+\s/.test(block),
    }))

  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <Navigation onCTA={() => {}} />

      <section className="pt-28 pb-12 px-8 md:px-12 lg:px-16 border-b border-[#CEC9BC]">
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#E8440A]">
          <span className="w-5 h-px bg-[#E8440A]"></span>
          <Link href="/legal" className="hover:opacity-70 transition-opacity no-underline text-[#E8440A]">Legal</Link>
          <span className="text-[#CEC9BC]">/</span>
          <span>{category}</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-[800] leading-[1.05] tracking-tight text-[#2C2820] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base leading-relaxed text-[#4A453F] max-w-2xl font-light mb-5">{subtitle}</p>
        )}
        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8A857D]">
          Effective {effectiveDate}
        </div>
      </section>

      <div className="px-8 md:px-12 lg:px-16 py-12">
        <div className="max-w-3xl">
          {headings.length > 0 ? (
            <nav className="mb-12 p-6 bg-[#EAE6DE] border border-[#CEC9BC]" aria-label="Table of contents">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#8A857D] mb-3">Contents</div>
              <ol className="list-none p-0 m-0 space-y-1.5">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block no-underline transition-colors ${
                        heading.isSubsection
                          ? 'pl-4 text-[12px] text-[#6A655E] hover:text-[#E8440A]'
                          : 'text-[13px] text-[#4A453F] hover:text-[#E8440A] font-light'
                      }`}
                    >
                      {heading.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="space-y-14">
            {blocks.map((block, index) => {
              const isHeading = !block.includes('\n') && isSectionHeading(block)

              if (isHeading) {
                const id = slugify(block)
                const isSubsection = /^\d+\.\d+\s/.test(block)

                return isSubsection ? (
                  <section key={id} id={id} className="scroll-mt-24">
                    <h3 className="font-mono text-[12px] tracking-[0.12em] uppercase text-[#8A857D] mb-5">
                      {block}
                    </h3>
                  </section>
                ) : (
                  <section key={id} id={id} className="scroll-mt-24 border-b border-[#CEC9BC] pb-14 last:border-b-0 last:pb-0">
                    <h2 className="font-display text-2xl md:text-3xl font-[800] tracking-tight text-[#2C2820] mb-6">
                      {block}
                    </h2>
                  </section>
                )
              }

              return (
                <div key={`block-${index}`} className="space-y-4">
                  {renderBlock(block, `block-${index}`)}
                </div>
              )
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-[#CEC9BC]">
            <p className="text-[13px] text-[#8A857D] font-light">
              Questions about this document?{' '}
              <a href="mailto:legal@thewitnessapp.com" className="text-[#E8440A] hover:underline">
                legal@thewitnessapp.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
