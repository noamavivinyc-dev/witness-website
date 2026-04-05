import type { ReactElement } from 'react'
import { siteConfig } from '@/lib/seo'

const background = '#0D0D0D'
const backgroundSoft = '#1A1917'
const ink = '#F2EFE9'
const muted = 'rgba(242,239,233,0.46)'
const subtle = 'rgba(242,239,233,0.14)'
const signal = '#E8440A'
const signalSoft = '#FF6B35'

const mapPaths = [
  'M120 176 C165 143 231 144 284 170 C315 186 334 225 322 264 C308 311 263 338 210 344 C158 350 108 323 88 279 C65 228 77 194 120 176 Z',
  'M230 368 C261 355 303 362 323 392 C344 423 341 473 316 515 C291 557 250 579 221 564 C190 548 176 506 179 466 C183 425 194 388 230 368 Z',
  'M455 150 C488 132 533 137 558 164 C581 189 574 223 545 240 C513 259 469 257 443 233 C419 210 424 170 455 150 Z',
  'M486 267 C534 247 590 262 625 300 C661 340 670 407 646 474 C622 541 572 581 525 576 C481 571 449 531 436 479 C422 423 428 351 486 267 Z',
  'M663 131 C756 93 878 102 974 146 C1021 168 1060 204 1055 250 C1049 300 1002 328 948 346 C896 364 836 370 779 359 C727 348 678 320 651 278 C622 233 617 149 663 131 Z',
  'M936 453 C971 434 1018 436 1057 453 C1088 467 1103 493 1094 519 C1084 548 1047 564 1007 566 C968 568 927 559 902 534 C880 511 895 475 936 453 Z',
]

const pingDots = [
  { x: 235, y: 244, color: signal },
  { x: 520, y: 206, color: signalSoft },
  { x: 746, y: 218, color: '#2B5CE6' },
  { x: 861, y: 256, color: '#0F8C44' },
  { x: 1010, y: 214, color: signal },
]

const chipStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 14px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.04)',
  color: ink,
  fontSize: 16,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  fontFamily: 'monospace',
}

const statLabelStyle = {
  fontFamily: 'monospace',
  fontSize: 14,
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: muted,
}

export function WitnessSocialImage(): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: background,
        color: ink,
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${backgroundSoft} 0%, ${background} 48%, #111111 100%)`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: signal,
        }}
      />

      <svg
        viewBox="0 0 1200 630"
        width="1200"
        height="630"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 1,
        }}
      >
        <rect width="1200" height="630" fill="transparent" />

        <g stroke="rgba(242,239,233,0.08)" strokeWidth="1">
          <line x1="0" y1="210" x2="1200" y2="210" />
          <line x1="0" y1="315" x2="1200" y2="315" />
          <line x1="0" y1="420" x2="1200" y2="420" />
          <line x1="300" y1="0" x2="300" y2="630" />
          <line x1="600" y1="0" x2="600" y2="630" />
          <line x1="900" y1="0" x2="900" y2="630" />
        </g>

        <g fill="none" stroke="rgba(242,239,233,0.14)" strokeWidth="2">
          {mapPaths.map((path) => (
            <path key={path} d={path} />
          ))}
        </g>

        {pingDots.map((dot, index) => (
          <g key={`${dot.x}-${dot.y}-${index}`}>
            <circle cx={dot.x} cy={dot.y} r="26" fill="none" stroke={dot.color} strokeWidth="1.5" opacity="0.18" />
            <circle cx={dot.x} cy={dot.y} r="12" fill="none" stroke={dot.color} strokeWidth="1" opacity="0.28" />
            <circle cx={dot.x} cy={dot.y} r="5" fill={dot.color} />
          </g>
        ))}
      </svg>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.78) 46%, rgba(13,13,13,0.38) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          padding: '54px 62px 58px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 770,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: 'monospace',
                fontSize: 14,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: signal,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: signal,
                  boxShadow: `0 0 0 6px rgba(232,68,10,0.12)`,
                }}
              />
              Real-time citizen journalism
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 6,
                fontSize: 76,
                lineHeight: 0.95,
                letterSpacing: '-0.05em',
                fontWeight: 800,
                color: ink,
                marginBottom: 16,
              }}
            >
              <span>W</span>
              <span style={{ color: signal }}>·</span>
              <span>itness</span>
            </div>

            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 13,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(242,239,233,0.34)',
              }}
            >
              History is happening now
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760 }}>
            <div
              style={{
                fontSize: 64,
                lineHeight: 0.96,
                letterSpacing: '-0.05em',
                fontWeight: 800,
                color: ink,
                marginBottom: 20,
              }}
            >
              The real-time world events map.
            </div>

            <div
              style={{
                fontSize: 24,
                lineHeight: 1.45,
                color: muted,
                fontWeight: 400,
                maxWidth: 700,
                marginBottom: 26,
              }}
            >
              Witness turns eyewitness reporting into a live map of world events, with transparency,
              corroboration, and newsroom-ready context.
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <div style={chipStyle}>Live world events map</div>
              <div style={chipStyle}>Eyewitness reporting</div>
              <div style={chipStyle}>Transparent trust</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: 320,
            textAlign: 'right' as const,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              width: '100%',
              padding: '20px 22px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={statLabelStyle}>Witness App</div>
            <div style={{ fontSize: 30, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.04em' }}>
              Map-native news.
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.5, color: muted }}>
              Live reports, real places, visible trust.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 20,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <div style={statLabelStyle}>Category</div>
              <div style={{ fontSize: 46, lineHeight: 0.95, fontWeight: 800, letterSpacing: '-0.04em' }}>
                Live Map
              </div>
              <div style={{ fontSize: 24, lineHeight: 1, color: muted }}>of the world</div>
            </div>

            <div
              style={{
                width: 1,
                height: 54,
                background: subtle,
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <div style={statLabelStyle}>Visit</div>
              <div
                style={{
                  fontSize: 27,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: signal,
                }}
              >
                {siteConfig.url.replace('https://', '')}
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.2, color: muted }}>Request early access</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: `linear-gradient(90deg, ${signal} 0%, rgba(232,68,10,0.48) 36%, rgba(232,68,10,0) 100%)`,
        }}
      />
    </div>
  )
}
