'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const els = contentRef.current?.querySelectorAll('.hero-anim')
    if (!els) return

    gsap.fromTo(
      els,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.18,
        delay: 0.25,
      }
    )
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: "url('https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/hero_bravino_eventos_mezanino.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Premium responsive gradient overlay */}
      <div className="hero-overlay" />

      {/* Subtle grain texture overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="hero-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#C9A46B',
            marginBottom: '32px',
            opacity: 0,
          }}
        >
          Londrina · Wine Concept
        </p>

        {/* H1 */}
        <h1
          className="hero-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(2.8rem, 6.5vw, 5.6rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #FFE2B7 0%, #C9A46B 50%, #8C6A35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '820px',
            marginBottom: '28px',
            opacity: 0,
          }}
        >
          Cada taça tem uma história para contar.
        </h1>

        {/* Sub italic */}
        <p
          className="hero-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(250, 245, 238, 0.8)',
            maxWidth: '520px',
            marginBottom: '52px',
            opacity: 0,
          }}
        >
          Na BRAVINO, o vinho é o ponto de partida, e a celebração é o destino.
        </p>

        {/* CTAs */}
        <div
          className="hero-anim"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            opacity: 0,
          }}
        >
          <a
            href="#wine-bar"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, #C9A46B 0%, #A37E44 100%)',
              color: '#2D2320',
              textDecoration: 'none',
              padding: '14px 32px',
              border: 'none',
              borderRadius: '100px',
              transition: 'all 0.35s ease',
              boxShadow: '0 4px 15px rgba(201, 164, 107, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFE2B7 0%, #C9A46B 100%)'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(201, 164, 107, 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #C9A46B 0%, #A37E44 100%)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(201, 164, 107, 0.15)'
            }}
          >
            Explorar experiências
          </a>

          <a
            href="#vinho-no-deck"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#C9A46B',
              textDecoration: 'none',
              padding: '14px 32px',
              border: '1px solid #C9A46B',
              borderRadius: '100px',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201, 164, 107, 0.08)'
              e.currentTarget.style.borderColor = '#FFE2B7'
              e.currentTarget.style.color = '#FFE2B7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#C9A46B'
              e.currentTarget.style.color = '#C9A46B'
            }}
          >
            Ver programação
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-anim"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: 0,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(250, 245, 238, 0.4)',
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '48px',
            background:
              'linear-gradient(to bottom, rgba(250, 245, 238, 0.7), transparent)',
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '180px',
          background:
            'linear-gradient(to bottom, transparent, #FAF5EE)',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
