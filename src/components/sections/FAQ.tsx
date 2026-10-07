'use client'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'Preciso reservar para o Wine Bar?',
    a: 'Não é obrigatório. Mas recomendamos entrar em contato via WhatsApp, especialmente para quinta e sexta-feira, que costumam ter maior movimento.',
  },
  {
    q: 'O Vinho no Deck acontece com chuva?',
    a: 'O evento é adaptado para o espaço interno em caso de chuva. Acompanhe a confirmação no Instagram @bravinowine.',
  },
  {
    q: 'Como reservo o Mezanino?',
    a: 'Pelo WhatsApp (43) 99123-1069. Nossa equipe elabora uma proposta personalizada de acordo com a sua ocasião.',
  },
  {
    q: 'Vocês entregam fora de Londrina?',
    a: 'Sim, entregamos para todo o Brasil. Frete grátis a partir de R$299 em Londrina e R$499 para outras regiões. Parcelamos em até 6x sem juros.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'Sim, estacionamento gratuito disponível nas duas unidades.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.faq-anim') ?? [],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
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
        backgroundColor: '#7B1F35',
        padding: '100px 32px',
        borderBottom: '1px solid rgba(250,245,238,0.12)',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Heading */}
        <h2
          className="faq-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 700,
            color: '#FAF5EE',
            marginBottom: '56px',
            textAlign: 'center',
            opacity: 0,
          }}
        >
          Perguntas frequentes
        </h2>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-anim"
              style={{
                borderTop: '1px solid rgba(250,245,238,0.15)',
                opacity: 0,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    fontWeight: open === i ? 500 : 400,
                    color: open === i ? '#FAF5EE' : 'rgba(250, 245, 238, 0.75)',
                    lineHeight: 1.4,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: '#C9A46B',
                    fontSize: '20px',
                    flexShrink: 0,
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.35s ease',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(250, 245, 238, 0.65)',
                    paddingBottom: '24px',
                    paddingRight: '40px',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}

          {/* Last border */}
          <div style={{ borderTop: '1px solid rgba(250,245,238,0.15)' }} />
        </div>
      </div>
    </section>
  )
}
