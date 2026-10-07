'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const diferenciais = [
  {
    num: '01',
    title: 'Curadoria Velho & Novo Mundo',
    body: 'França, Itália, Portugal, Argentina, Chile e Brasil: rótulos selecionados com rigor para cada ocasião.',
  },
  {
    num: '02',
    title: 'Atendimento especializado',
    body: 'Sommeliers prontos para guiar do básico ao premium, sem julgamentos e com genuíno prazer.',
  },
  {
    num: '03',
    title: 'Ambiente & estacionamento',
    body: 'Climatizado, acolhedor e estacionamento gratuito nas duas unidades em Londrina.',
  },
  {
    num: '04',
    title: 'E-commerce & entrega',
    body: 'Frete grátis Londrina R$299 / Brasil R$499. Até 6x sem juros para todo o Brasil.',
  },
]

export default function Diferenciais() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.dif-anim') ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.14,
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
      style={{
        backgroundColor: '#FAF5EE',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(123,31,53,0.07)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <p
          className="dif-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#7B1F35',
            marginBottom: '20px',
            opacity: 0,
          }}
        >
          Por que a BRAVINO
        </p>

        {/* Heading */}
        <h2
          className="dif-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#2D2320',
            marginBottom: '72px',
            maxWidth: '560px',
            opacity: 0,
          }}
        >
          Mais do que uma adega.{' '}
          <em style={{ fontStyle: 'italic', color: 'rgba(45,35,32,0.72)' }}>
            Um Wine Concept.
          </em>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2px',
          }}
        >
          {diferenciais.map((d) => (
            <div
              key={d.num}
              className="dif-anim"
              style={{
                padding: '40px 32px',
                background: 'var(--card-bg, rgba(255, 255, 255, 0.45))',
                backdropFilter: 'blur(12px)',
                borderRadius: '8px',
                border: '1px solid var(--card-border, rgba(123, 31, 53, 0.08))',
                boxShadow: '0 8px 32px rgba(123, 31, 53, 0.01)',
                opacity: 0,
                transition: 'all 0.35s ease',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.setProperty('--card-bg', '#7B1F35')
                el.style.setProperty('--card-border', '#7B1F35')
                el.style.setProperty('--card-text', '#FAF5EE')
                el.style.setProperty('--card-text-sub', 'rgba(250, 245, 238, 0.85)')
                el.style.setProperty('--card-num', 'rgba(250, 245, 238, 0.6)')
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(123, 31, 53, 0.15)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.45)')
                el.style.setProperty('--card-border', 'rgba(123, 31, 53, 0.08)')
                el.style.setProperty('--card-text', '#2D2320')
                el.style.setProperty('--card-text-sub', 'rgba(45, 35, 32, 0.5)')
                el.style.setProperty('--card-num', 'rgba(123, 31, 53, 0.6)')
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 8px 32px rgba(123, 31, 53, 0.01)'
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontStyle: 'italic',
                  color: 'var(--card-num, rgba(123,31,53,0.55))',
                  display: 'block',
                  marginBottom: '20px',
                  letterSpacing: '0.1em',
                  transition: 'color 0.3s ease',
                }}
              >
                {d.num}
              </span>
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--card-text, #2D2320)',
                  marginBottom: '12px',
                  lineHeight: 1.35,
                  transition: 'color 0.3s ease',
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'var(--card-text-sub, rgba(45,35,32,0.5))',
                  transition: 'color 0.3s ease',
                }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
