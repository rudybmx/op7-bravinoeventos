'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mezItems = [
  {
    num: 'I.',
    title: 'Degustações guiadas',
    body: 'Imersão com sommelier, terroirs e harmonizações',
  },
  {
    num: 'II.',
    title: 'Cursos de vinho',
    body: 'Do iniciante ao avançado',
  },
  {
    num: 'III.',
    title: 'Jantares harmonizados',
    body: 'Menu autoral para potencializar cada rótulo',
  },
  {
    num: 'IV.',
    title: 'Eventos privados',
    body: 'Corporativo ou celebração, proposta personalizada',
  },
]

export default function Mezanino() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.mez-anim') ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: '80px bottom',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: ref })

  return (
    <section
      ref={ref}
      id="mezanino"
      style={{
        backgroundColor: '#7B1F35',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(250,245,238,0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          className="mez-anim"
          style={{ marginBottom: '16px', opacity: 0 }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FAF5EE',
              padding: '5px 14px',
              border: '1px solid rgba(250,245,238,0.45)',
              borderRadius: '100px',
            }}
          >
            Mezanino · Espaço exclusivo
          </span>
        </div>

        {/* Top row: text + image */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'stretch',
            marginTop: '28px',
            marginBottom: '48px',
          }}
        >
          {/* Left: text & CTAs */}
          <div style={{ flex: '1 1 360px', maxWidth: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2
              className="mez-anim"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#FAF5EE',
                marginBottom: '22px',
                opacity: 0,
              }}
            >
              Para quem quer ir além da taça.
            </h2>
            <p
              className="mez-anim"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'rgba(250, 245, 238, 0.75)',
                marginBottom: '40px',
                opacity: 0,
              }}
            >
              O Mezanino é o espaço mais intimista da BRAVINO. Degustações guiadas, cursos, jantares harmonizados e eventos privados com alto padrão de atendimento.
            </p>

            {/* CTAs */}
            <div
              className="mez-anim"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                opacity: 0,
              }}
            >
              <a
                href="https://wa.me/5543991231069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: '#7B1F35',
                  textDecoration: 'none',
                  padding: '12px 26px',
                  background: '#FAF5EE',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #FAF5EE',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#C9A46B'
                  e.currentTarget.style.borderColor = '#C9A46B'
                  e.currentTarget.style.color = '#FAF5EE'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FAF5EE'
                  e.currentTarget.style.borderColor = '#FAF5EE'
                  e.currentTarget.style.color = '#7B1F35'
                }}
              >
                Reservar o Mezanino
              </a>
              <a
                href="https://wa.me/5543991231069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: 'rgba(250, 245, 238, 0.8)',
                  textDecoration: 'none',
                  padding: '12px 26px',
                  border: '1px solid rgba(250, 245, 238, 0.25)',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FAF5EE'
                  e.currentTarget.style.borderColor = 'rgba(250, 245, 238, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(250, 245, 238, 0.8)'
                  e.currentTarget.style.borderColor = 'rgba(250, 245, 238, 0.25)'
                }}
              >
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Right: Premium image box */}
          <div
            className="mez-anim"
            style={{
              flex: '1 1 360px',
              minHeight: '380px',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              opacity: 0,
            }}
          >
            {/* Cantoneiras decorativas */}
            {[
              { top: 12, left: 12, borderTop: '2px solid rgba(255,255,255,0.85)', borderLeft: '2px solid rgba(255,255,255,0.85)' },
              { top: 12, right: 12, borderTop: '2px solid rgba(255,255,255,0.85)', borderRight: '2px solid rgba(255,255,255,0.85)' },
              { bottom: 12, left: 12, borderBottom: '2px solid rgba(255,255,255,0.85)', borderLeft: '2px solid rgba(255,255,255,0.85)' },
              { bottom: 12, right: 12, borderBottom: '2px solid rgba(255,255,255,0.85)', borderRight: '2px solid rgba(255,255,255,0.85)' },
            ].map((style, i) => (
              <div
                key={i}
                aria-hidden
                style={{
                  position: 'absolute',
                  width: '22px',
                  height: '22px',
                  zIndex: 3,
                  ...style,
                }}
              />
            ))}

            {/* Photo */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: "url('https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/mezanino_quadrada.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            />

            {/* Bottom gradient overlay */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(to top, rgba(45,35,32,0.6), transparent)',
                zIndex: 2,
              }}
            />
          </div>
        </div>

        {/* Bottom row: 4 cards full width */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
          }}
        >
          {mezItems.map((item) => (
            <div
              key={item.title}
              className="mez-anim"
              style={{
                padding: '30px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                borderRadius: '8px',
                border: '1px solid rgba(250, 245, 238, 0.12)',
                boxShadow: '0 8px 32px rgba(14, 12, 9, 0.05)',
                opacity: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontStyle: 'italic',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#C9A46B',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                {item.num}
              </span>
              <h4
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FAF5EE',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(250, 245, 238, 0.65)',
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
