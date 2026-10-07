'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FooterCTA() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll('.footer-anim') ?? [],
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.16,
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
    <footer ref={ref}>
      {/* Main CTA block */}
      <div
        style={{
          backgroundColor: '#FAF5EE',
          padding: '120px 32px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(123,31,53,0.1)',
        }}
      >
        {/* Warm glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(123,31,53,0.07) 0%, transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <p
          className="footer-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(123,31,53,0.7)',
            marginBottom: '36px',
            opacity: 0,
          }}
        >
          Você já sabe o que quer. A BRAVINO também.
        </p>

        <h2
          className="footer-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: '#2D2320',
            marginBottom: '28px',
            position: 'relative',
            opacity: 0,
          }}
        >
          Escolha a sua
          <br />
          experiência
          <br />
          <em style={{ fontStyle: 'italic', color: 'rgba(45,35,32,0.68)' }}>
            e venha brindar.
          </em>
        </h2>

        <p
          className="footer-anim"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(45,35,32,0.5)',
            maxWidth: '480px',
            margin: '0 auto 52px',
            opacity: 0,
          }}
        >
          Wine Bar, Vinho no Deck ou Mezanino, cada uma conta uma história diferente.
        </p>

        {/* CTAs */}
        <div
          className="footer-anim"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            opacity: 0,
          }}
        >
          <a
            href="https://wa.me/5543991231069"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#FAF5EE',
              textDecoration: 'none',
              padding: '16px 36px',
              background: '#7B1F35',
              borderRadius: '100px',
              transition: 'all 0.35s ease',
              border: '1px solid #7B1F35',
              boxShadow: '0 0 0 0 rgba(123,31,53,0)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#C9A46B'
              el.style.boxShadow = '0 8px 40px rgba(123,31,53,0.3)'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#7B1F35'
              el.style.boxShadow = '0 0 0 0 rgba(123,31,53,0)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Falar no WhatsApp →
          </a>

          <a
            href="https://bravino.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: 'rgba(45,35,32,0.58)',
              textDecoration: 'none',
              padding: '16px 36px',
              border: '1px solid rgba(45,35,32,0.12)',
              borderRadius: '100px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = '#2D2320'
              el.style.borderColor = 'rgba(45,35,32,0.28)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'rgba(45,35,32,0.58)'
              el.style.borderColor = 'rgba(45,35,32,0.12)'
            }}
          >
            Visitar loja online
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          backgroundColor: '#2D2320',
          borderTop: '1px solid rgba(123,31,53,0.12)',
          padding: '48px 32px 36px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Top Row: Logo & Contact Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <img
              src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/logo_bravino_branca.svg"
              alt="Bravino"
              style={{
                height: '24px',
                width: 'auto',
                opacity: 0.85,
              }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              {[
                { label: 'bravino.com.br', href: 'https://bravino.com.br' },
                { label: '(43) 3321-0036', href: 'tel:+554333210036' },
                { label: 'contato@bravino.com.br', href: 'mailto:contato@bravino.com.br' },
                { label: '@bravinowine', href: 'https://instagram.com/bravinowine' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: 'rgba(250, 245, 238, 0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FAF5EE' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(250, 245, 238, 0.55)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Elegant thin divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(250, 245, 238, 0.08)',
              width: '100%',
            }}
          />

          {/* Bottom Row: Copyright & OP7 Attribution */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                color: 'rgba(250, 245, 238, 0.35)',
              }}
            >
              &copy; {new Date().getFullYear()} Bravino. Todos os direitos reservados.
            </span>

            {/* OP7 Developer Signature */}
            <a
              href="https://www.op7.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const text = e.currentTarget.querySelector('span')
                const img = e.currentTarget.querySelector('img')
                if (text) text.style.color = 'rgba(250, 245, 238, 0.85)'
                if (img) img.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                const text = e.currentTarget.querySelector('span')
                const img = e.currentTarget.querySelector('img')
                if (text) text.style.color = 'rgba(250, 245, 238, 0.45)'
                if (img) img.style.opacity = '0.5'
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: 'rgba(250, 245, 238, 0.45)',
                  transition: 'color 0.3s ease',
                }}
              >
                Desenvolvido por:
              </span>
              <img
                src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/logo/op7/logo.svg"
                alt="OP7"
                style={{
                  height: '14px',
                  width: 'auto',
                  opacity: 0.5,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
