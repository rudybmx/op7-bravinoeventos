'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { value: '+500', label: 'Rótulos' },
  { value: '2',    label: 'Unidades' },
  { value: '3',    label: 'Experiências' },
  { value: '4.7★', label: 'Google' },
]

export default function MetricsStrip() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.metric-item') ?? [],
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
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
        background: '#7B1F35',
        borderTop: '1px solid rgba(250,245,238,0.15)',
        borderBottom: '1px solid rgba(250,245,238,0.15)',
        padding: '36px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0',
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="metric-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              opacity: 0,
            }}
          >
            <div
              style={{
                textAlign: 'center',
                padding: '0 40px',
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 700,
                  color: '#FAF5EE',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250, 245, 238, 0.7)',
                }}
              >
                {m.label}
              </p>
            </div>

            {/* Divider between items */}
            {i < metrics.length - 1 && (
              <div
                style={{
                  width: '1px',
                  height: '36px',
                  background: 'rgba(250,245,238,0.2)',
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
