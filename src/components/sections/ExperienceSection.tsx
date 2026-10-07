'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceSectionProps {
  id: string
  tag: string
  tagSub?: string
  heading: string
  body: string
  tags: string[]
  ctaText: string
  ctaHref: string
  flipLayout?: boolean
  glyphLetter: string
  extraContent?: React.ReactNode
  bgImage?: string
}

export function ExperienceSection({
  id,
  tag,
  tagSub,
  heading,
  body,
  tags,
  ctaText,
  ctaHref,
  flipLayout = false,
  glyphLetter,
  extraContent,
  bgImage,
}: ExperienceSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    const textCol = ref.current?.querySelector('.exp-text')
    const visualCol = ref.current?.querySelector('.exp-visual')

    if (textCol) {
      gsap.fromTo(
        textCol,
        { opacity: 0, x: flipLayout ? 24 : -24 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: '100px bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    if (visualCol) {
      gsap.fromTo(
        visualCol,
        { opacity: 0, x: flipLayout ? -24 : 24 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: '100px bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, { scope: ref })

  const textCol = (
    <div
      className="exp-text"
      style={{
        flex: '1 1 480px',
        maxWidth: '520px',
        opacity: 0,
      }}
    >
      {/* Tag pill */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '28px',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#7B1F35',
            padding: '5px 14px',
            border: '1px solid rgba(123,31,53,0.45)',
            borderRadius: '100px',
          }}
        >
          {tag}
        </span>
        {tagSub && (
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: 'rgba(45,35,32,0.38)',
              textTransform: 'uppercase',
            }}
          >
            {tagSub}
          </span>
        )}
      </div>

      <h2
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          color: '#2D2320',
          marginBottom: '22px',
          maxWidth: '420px',
        }}
      >
        {heading}
      </h2>

      {/* Body */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          fontWeight: 300,
          lineHeight: 1.85,
          color: 'rgba(45,35,32,0.62)',
          marginBottom: '28px',
        }}
      >
        {body}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '36px',
        }}
      >
        {tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(45,35,32,0.5)',
              padding: '5px 12px',
              background: 'rgba(45,35,32,0.04)',
              border: '1px solid rgba(45,35,32,0.08)',
              borderRadius: '100px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        target={ctaHref.startsWith('http') ? '_blank' : undefined}
        rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.05em',
          color: '#7B1F35',
          textDecoration: 'none',
          transition: 'gap 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = '14px' }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
      >
        {ctaText}
        <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
      </a>

      {/* Extra content (for Mezanino grid) */}
      {extraContent}
    </div>
  )

  const visualCol = (
    <div
      className="exp-visual"
      style={{
        flex: '1 1 340px',
        minHeight: '380px',
        background: bgImage
          ? `url(${bgImage}) center center / cover no-repeat`
          : 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(16px)',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: bgImage ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(123,31,53,0.1)',
        boxShadow: bgImage
          ? '0 16px 48px rgba(45, 35, 32, 0.15)'
          : '0 12px 40px rgba(123, 31, 53, 0.04)',
      }}
    >
      {/* Warm ambient glow */}
      {!bgImage && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(123,31,53,0.07) 0%, transparent 70%)',
          }}
        />
      )}
      {/* Typographic glyph */}
      {!bgImage && (
        <span
          aria-hidden
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(140px, 20vw, 250px)',
            fontWeight: 800,
            color: 'rgba(123,31,53,0.06)',
            lineHeight: 1,
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          {glyphLetter}
        </span>
      )}
      {/* Subtle blend overlay for image */}
      {bgImage && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(45, 35, 32, 0) 60%, rgba(45, 35, 32, 0.3) 100%)',
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Gold corner accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
          width: '40px',
          height: '40px',
          borderRight: bgImage ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(123,31,53,0.3)',
          borderBottom: bgImage ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(123,31,53,0.3)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          width: '40px',
          height: '40px',
          borderLeft: bgImage ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(123,31,53,0.3)',
          borderTop: bgImage ? '2px solid rgba(255,255,255,0.85)' : '1px solid rgba(123,31,53,0.3)',
        }}
      />
    </div>
  )

  return (
    <section
      ref={ref}
      id={id}
      style={{
        backgroundColor: '#FAF5EE',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(123,31,53,0.07)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'center',
          flexDirection: flipLayout ? 'row-reverse' : 'row',
        }}
      >
        {textCol}
        {visualCol}
      </div>
    </section>
  )
}
