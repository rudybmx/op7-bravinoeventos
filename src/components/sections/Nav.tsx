'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.5s ease, backdrop-filter 0.5s ease',
        background: scrolled ? 'rgba(250, 245, 238, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(123,31,53,0.08)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <a href="#" className="nav-logo-link">
          <img
            src={
              scrolled
                ? 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/logo_bravino_vermelha.svg'
                : 'https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/logo_bravino_branca.svg'
            }
            alt="Bravino"
            className="nav-logo-img"
          />
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav">
          {['Wine Bar', 'Vinho no Deck', 'Mezanino'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className={scrolled ? 'nav-link nav-link--scrolled' : 'nav-link nav-link--top'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Reservar */}
        <a
          href="https://wa.me/5543991231069"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Reservar
        </a>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ background: scrolled ? '#2D2320' : '#FAF5EE' }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {['Wine Bar', 'Vinho no Deck', 'Mezanino'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5543991231069"
            className="mobile-menu-cta"
          >
            Reservar
          </a>
        </div>
      )}

      <style>{`
        /* Logo */
        .nav-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-img {
          height: 36px;
          width: auto;
          display: block;
          object-fit: contain;
          flex-shrink: 0;
        }

        /* Desktop nav links */
        .desktop-nav {
          display: flex;
          gap: 40px;
          align-items: center;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-decoration: none;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .nav-link:hover { opacity: 0.65; }
        .nav-link--top {
          background-image: linear-gradient(135deg, #FFE2B7 0%, #C9A46B 100%);
        }
        .nav-link--scrolled {
          background-image: linear-gradient(135deg, #A37E44 0%, #765727 100%);
        }

        /* CTA button */
        .nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2D2320;
          text-decoration: none;
          padding: 9px 22px;
          background: linear-gradient(135deg, #C9A46B 0%, #A37E44 100%);
          border: none;
          border-radius: 100px;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(201, 164, 107, 0.2);
          flex-shrink: 0;
        }
        .nav-cta:hover {
          background: linear-gradient(135deg, #FFE2B7 0%, #C9A46B 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(201, 164, 107, 0.35);
        }

        /* Hamburger */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 1.5px;
          border-radius: 2px;
          transition: background 0.3s ease;
        }

        /* Mobile menu */
        .mobile-menu {
          background: rgba(250, 245, 238, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(123,31,53,0.08);
          padding: 24px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-menu-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: rgba(45,35,32,0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mobile-menu-link:hover { color: #2D2320; }
        .mobile-menu-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #2D2320;
          text-decoration: none;
          padding: 12px 20px;
          background: linear-gradient(135deg, #C9A46B 0%, #A37E44 100%);
          border-radius: 100px;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-cta { display: none; }
        }
      `}</style>
    </header>
  )
}
