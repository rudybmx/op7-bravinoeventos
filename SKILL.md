---
name: landing-page-pro
description: >
  Skill especialista em landing pages de alta conversão — padrão Framer/Awwwards com GSAP ScrollTrigger,
  hero com vídeo full-bleed, scroll animations cinematográficas, geração de imagens reais via MCP Nano
  Banana (Gemini), e copy otimizado por AIDA. Acione SEMPRE que o usuário pedir: landing page, LP,
  página de vendas, hero section, página institucional, one page, sales page, página de captura, ou
  qualquer interface voltada a conversão. Use em conjunto com o MCP do Context7 para documentação
  atualizada de libs (GSAP, Lenis, Framer Motion) e MCP Nano Banana para geração de imagens
  fotorrealistas (fachada de empresa, produto, hero visual). Stack padrão: Next.js 14 App Router +
  Tailwind CSS v3 + GSAP 3 + @gsap/react + Lenis (smooth scroll) + Framer Motion (micro-interactions).
  Triggers adicionais: "quero uma página bonita", "preciso de algo no nível framer", "LP para clínica /
  restaurante / SaaS / clínica / empresa", "página com efeito parallax / scroll animation / video hero".
---

# Landing Page Pro — Skill de Alta Conversão

## Filosofia Central

> Uma landing page não é um site. É uma máquina de conversão com estética de award-winning design.
> Cada pixel serve ao funil. Cada animação guia o olho. Cada copy remove fricção.

**Anti-padrão primário:** LPs geradas por IA parecem IA. Esta skill existe para quebrar isso sistematicamente.

---

## FASE 0 — PRÉ-VÔOO (obrigatório antes de qualquer código)

Antes de escrever **uma linha de código**, execute este checklist mental e produza um `<design_plan>`:

```
DESIGN_PLAN:
1. NICHO: [clínica / SaaS / restaurante / e-commerce / serviço / produto físico]
2. OBJETIVO PRIMÁRIO: [lead / venda / agendamento / download / cadastro]
3. PÚBLICO: [B2B executivo / B2C massa / nicho especializado]
4. HERO_ASSET: [video externo URL / gerar com Nano Banana / imagem existente]
5. PALETA: [definir 1 cor acento + base neutral — BANIDO: purple/blue genérico AI]
6. TIPOGRAFIA: [Satoshi / Cabinet Grotesk / Geist / Outfit — BANIDO: Inter]
7. MOTION_LEVEL: [1=hover only | 5=scroll triggers | 9=cinematic GSAP full]
8. SECTIONS: [Nav > Hero > Social Proof > Features/Benefits > Proof > CTA > Footer]
9. IMAGENS_NECESSÁRIAS: [listar assets que precisam ser gerados via Nano Banana]
10. PYTHON_RNG_SEED: [len(prompt) % 4] → seleciona layout hero [0=center | 1=split | 2=asymmetric | 3=editorial]
```

**Nunca pule este passo.** Um layout errado não se conserta com animação.

---

## FASE 1 — STACK & SETUP

### Stack Canônica

```bash
# Next.js 14 App Router
npx create-next-app@latest lp-projeto --typescript --tailwind --app --src-dir

# Motion & Scroll
npm install gsap @gsap/react lenis @studio-freight/lenis

# UI & Utils
npm install framer-motion clsx tailwind-merge @phosphor-icons/react

# Fonts (Google Fonts via next/font)
# Satoshi: https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap
# Cabinet Grotesk: https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,400&display=swap
```

```ts
// tailwind.config.ts — extensões obrigatórias
extend: {
  fontFamily: {
    display: ['var(--font-display)'],   // Satoshi ou Cabinet Grotesk
    body: ['var(--font-body)'],         // Geist ou Outfit
  },
  animation: {
    'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    'marquee': 'marquee 25s linear infinite',
  },
  keyframes: {
    fadeUp: {
      '0%': { opacity: '0', transform: 'translateY(24px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    marquee: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  },
}
```

### Lenis Setup (Smooth Scroll Global)

```tsx
// src/app/providers/SmoothScroll.tsx
'use client'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sincroniza Lenis com GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return <>{children}</>
}
```

---

## FASE 2 — GERAÇÃO DE IMAGENS (MCP Nano Banana)

### Quando usar Nano Banana

Toda LP precisa de imagens que **não pareçam stock photo**. Use Nano Banana para:

| Caso de Uso | Prompt Template |
|-------------|----------------|
| Fachada real da empresa | ver seção abaixo |
| Hero background fotorrealista | ver seção abaixo |
| Produto em contexto | ver seção abaixo |
| Team / founder photo | ver seção abaixo |
| Before/after resultado | ver seção abaixo |

### Instalação do MCP Nano Banana

```json
// claude_desktop_config.json ou .claude/mcp.json
{
  "mcpServers": {
    "nanobanana": {
      "command": "uvx",
      "args": ["nanobanana-mcp-server@latest"],
      "env": {
        "GEMINI_API_KEY": "sua-chave-google-ai-studio",
        "IMAGE_OUTPUT_DIR": "/caminho/para/projeto/public/images"
      }
    }
  }
}
```

> **Alternativa hosted (sem instalação):**
> `https://nanobanana.mcp.acedata.cloud/mcp` — conecta via Claude.ai Settings → Integrations

### Prompts Otimizados por Categoria

#### FACHADA DE EMPRESA (fotorrealista)

```
Prompt base para fachada:
"Exterior photograph of a modern [TIPO_NEGOCIO] in Brazil, [CIDADE] neighborhood,
daytime with soft golden hour light, architectural photography style,
[DETALHES_ESTILO: glass facade / minimalist concrete / warm wood accents],
brand colors [COR_PRIMARIA] visible in signage,
professional DSLR camera, 16:9, hyperrealistic, --ar 16:9 --quality high"

Exemplo clínica odontológica:
"Exterior photograph of a modern dental clinic in São Paulo Jardins neighborhood,
daytime with soft natural light, clean white minimalist facade with brushed steel
signage reading 'Clínica Sorriso', large glass windows showing warm interior,
architectural photography, Sony A7R, 4K, hyperrealistic"

Exemplo restaurante:
"Exterior storefront photography of an upscale Brazilian restaurant in Curitiba,
warm evening light, wooden facade with ambient lighting, chalkboard menu visible,
food photography aesthetic, bokeh background with street activity"
```

#### HERO BACKGROUND (abstrato / atmosférico)

```
"[ESTILO] abstract background for a [NICHO] landing page hero section,
[PALETA_CORES], minimal geometric shapes with depth,
professional graphic design, 16:9 aspect ratio, no text, no people,
high-end brand aesthetic similar to Apple/Linear/Vercel website"

Exemplo SaaS:
"Dark abstract technology background, deep navy and electric teal gradient,
soft particle mesh, minimal circuit-like lines, premium SaaS aesthetic,
4K, no text, cinematic depth of field"
```

#### PRODUTO EM CONTEXTO

```
"Product photography of [PRODUTO] in [CONTEXTO_USO],
lifestyle photography, [LUZ: soft window light / studio lighting],
[ESTILO_MARCA: minimalist white / warm earthy tones / bold dark],
high-end commercial photography, 3:2 aspect ratio, no watermarks"
```

#### SOCIAL PROOF / RESULTADOS

```
"Split comparison image: LEFT side shows [SITUAÇÃO_ANTES] with muted desaturated
colors, RIGHT side shows [SITUAÇÃO_DEPOIS] with vibrant realistic result,
photorealistic, professional photography, clear visual contrast between states"
```

### Uso via Context7 MCP (documentação sempre atualizada)

```
Quando precisar de docs atualizadas de GSAP, Lenis, Framer Motion:
→ Use Context7 para resolver: resolve_library_id("gsap") → então query_docs()
→ Nunca confie em training data para APIs de animação — versões mudam
```

---

## FASE 3 — ARQUITETURA DE SECTIONS (AIDA)

### Ordem Canônica das Sections

```
Nav (floating/sticky)
└── Hero (acima da dobra — 100dvh — video ou imagem gerada)
└── Social Proof Strip (logos de clientes / números)
└── Problem/Agitation (o que dói sem sua solução)
└── Features/Benefits (bento grid ou zig-zag)
└── How it Works (timeline ou steps animados)
└── Testimonials (carousel ou masonry)
└── Pricing / Oferta (se aplicável)
└── FAQ (accordion)
└── Final CTA (máximo contraste, proposta irresistível)
└── Footer
```

**Regra AIDA aplicada:**
- **A**tenção → Hero cinematic + headline irresistível
- **I**nteresse → Problem + Features com animações que revelam valor
- **D**esejo → Social proof + resultados + before/after
- **A**ção → CTA com urgência ou garantia, máximo contraste visual

---

## FASE 4 — HERO SECTION (componente mais crítico)

### Hero com Vídeo Full-Bleed

```tsx
// src/components/sections/HeroVideo.tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroVideoProps {
  videoSrc: string        // URL do vídeo (local /public ou CDN)
  headline: string        // máximo 6 palavras
  subheadline: string
  ctaText: string
  ctaHref: string
}

export function HeroVideo({ videoSrc, headline, subheadline, ctaText, ctaHref }: HeroVideoProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Parallax suave no vídeo ao scrollar
    gsap.to(videoRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Clip-path morph ao sair do hero (efeito Zentry)
    gsap.from('#hero-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    })
    gsap.set('#hero-frame', {
      clipPath: 'polygon(14% 0, 86% 0, 100% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
    })

    // Entrada do conteúdo (stagger)
    gsap.from(contentRef.current?.children ?? [], {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3,
    })
  }, { scope: heroRef })

  return (
    // NUNCA use h-screen — use min-h-[100dvh] (iOS Safari bug)
    <section ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Video Layer */}
      <div id="hero-frame" className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient — escurece sem apagar o vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content Layer */}
      <div
        ref={contentRef}
        className="relative z-10 flex min-h-[100dvh] flex-col items-start justify-center
                   max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
          {/* Eyebrow — categoria ou proposta em 3 palavras */}
        </p>
        {/* H1: MÁXIMO 2-3 linhas. Use max-w-4xl para forçar quebra horizontal */}
        <h1
          className="max-w-4xl font-display text-5xl font-bold leading-none
                     tracking-tighter text-white md:text-6xl lg:text-7xl"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          {headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={ctaHref}
            className="group relative inline-flex items-center gap-2 rounded-full
                       bg-white px-8 py-4 text-sm font-semibold text-zinc-900
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       active:scale-[0.98]"
          >
            {ctaText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full border border-white/20
                       px-8 py-4 text-sm font-semibold text-white
                       backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            Ver demonstração
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
```

### Prompts para Vídeo do Hero

#### VEO 3 (Google) — Geração de vídeo por prompt

```
Prompt para VEO 3:
"[CENA_DESCRITA], cinematic camera movement, [golden hour | blue hour | overcast soft light],
hyperrealistic, 4K, [slow zoom in | slow pan left | drone pullback],
loopable seamlessly, no text, no watermarks, professional commercial video,
[DURAÇÃO: 8 seconds], [ESTILO: documentary / lifestyle / architectural]"

Exemplo clínica:
"Modern dental clinic interior, warm soft light through large windows, 
gentle slow zoom into a clean white consultation room with modern equipment,
cinematic 4K, loopable, professional medical commercial, no people, no text"

Exemplo SaaS/Tech:
"Abstract data visualization floating in dark space, particle streams forming 
geometric connections, deep navy background with electric teal light trails,
slow orbital camera movement, 4K cinematic, loopable, no text"

Exemplo restaurante:
"Close-up cinematic of Brazilian food being plated in a restaurant kitchen,
steam rising, warm golden lighting, slow push-in on beautiful dish,
food commercial quality, 4K, loopable"
```

#### Kling / Sora / Runway (fallback)

```
Se VEO 3 não disponível, use o mesmo prompt em:
- Kling 1.6 (melhor para movimento realista)
- Runway Gen-3 (melhor para estilos específicos)  
- Sora (melhor para coherência temporal longa)

Parâmetros universais:
- Aspect ratio: 16:9 (landscape) ou 9:16 (mobile-first)
- Duration: 8-12s para loop perfeito
- Motion: "gentle, slow, cinematic" — evite cortes abruptos
```

---

## FASE 5 — GSAP SCROLL ANIMATIONS (biblioteca de padrões)

### 5.1 Text Reveal por Palavra (Zentry-style)

```tsx
// src/components/ui/AnimatedTitle.tsx
'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedTitle({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.word-reveal',
        {
          opacity: 0,
          rotateX: 90,
          y: 20,
          transformPerspective: 800,
        },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.03,
          scrollTrigger: {
            trigger: ref.current,
            start: '80px bottom',
            end: 'center bottom',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={className}>
      {title.split(' ').map((word, i) => (
        <span
          key={i}
          className="word-reveal inline-block mr-[0.25em] opacity-0"
          dangerouslySetInnerHTML={{ __html: word }}
        />
      ))}
    </div>
  )
}
```

### 5.2 Horizontal Scroll Section (galeria/features)

```tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function HorizontalScrollSection({ items }: { items: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth - track.offsetWidth

    gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-6 w-max px-6">
        {items.map((item, i) => (
          <div key={i} className="w-[400px] flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 5.3 Card Stack (sticky overlap)

```tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function CardStack({ cards }: { cards: { title: string; content: string; color: string }[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cardEls = gsap.utils.toArray<HTMLElement>('.stack-card')

    cardEls.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top ${80 + i * 20}px`,
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      })
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`stack-card relative min-h-[70vh] rounded-3xl p-12 mb-6 ${card.color}`}
          style={{ top: `${80 + i * 20}px` }}
        >
          <h3 className="text-3xl font-bold">{card.title}</h3>
          <p className="mt-4 text-lg opacity-80">{card.content}</p>
        </div>
      ))}
    </section>
  )
}
```

### 5.4 Zoom Parallax (imagem com escala no scroll)

```tsx
useGSAP(() => {
  gsap.fromTo(
    imageRef.current,
    { scale: 1.2 },
    {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  )
}, { scope: sectionRef })
```

### 5.5 Scrub Text Opacity (palavras reveladas pelo scroll)

```tsx
useGSAP(() => {
  const words = gsap.utils.toArray<HTMLElement>('.scrub-word')
  gsap.fromTo(
    words,
    { opacity: 0.1 },
    {
      opacity: 1,
      stagger: { each: 0.1 },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    }
  )
}, { scope: sectionRef })
```

### 5.6 Mesh Gradient Animado (fundo orgânico)

```tsx
// Background de bolhas de cor animadas — alternativa ao vídeo
export function MeshGradient({ colors }: { colors: [string, string, string] }) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] animate-[mesh1_8s_ease-in-out_infinite]"
        style={{ background: colors[0] }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px] animate-[mesh2_10s_ease-in-out_infinite_reverse]"
        style={{ background: colors[1] }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[80px] animate-[mesh3_12s_ease-in-out_infinite]"
        style={{ background: colors[2] }}
      />
    </div>
  )
}
```

```css
/* globals.css — adicione os keyframes */
@keyframes mesh1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(80px, -60px) scale(1.1); }
}
@keyframes mesh2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-60px, 40px) scale(0.95); }
}
@keyframes mesh3 {
  0%, 100% { transform: translate(-50%, 0) scale(1); }
  50% { transform: translate(-50%, -40px) scale(1.05); }
}
```

---

## FASE 6 — SEÇÕES DE ALTA CONVERSÃO

### 6.1 Social Proof Strip (Marquee de logos)

```tsx
export function LogoMarquee({ logos }: { logos: string[] }) {
  const doubled = [...logos, ...logos] // duplicar para loop seamless

  return (
    <section className="py-16 overflow-hidden border-y border-zinc-100">
      <p className="text-center text-sm uppercase tracking-widest text-zinc-400 mb-10">
        Empresas que confiam
      </p>
      <div className="flex gap-16 animate-marquee">
        {doubled.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-8 object-contain opacity-50 grayscale hover:opacity-100 
                       hover:grayscale-0 transition-all duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </section>
  )
}
```

### 6.2 Bento Grid de Features (gapless obrigatório)

```tsx
// Regra: use grid-flow-dense + validar que col/row spans não deixam vazios
// Padrão 4-coluna: card grande (col-span-2 row-span-2) + cards menores ao redor

export function FeaturesBento() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 grid-flow-dense">
        
        {/* Card destaque — col-span-2 row-span-2 */}
        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-zinc-900 text-white p-10 
                        flex flex-col justify-end overflow-hidden relative group">
          {/* imagem gerada via Nano Banana como background */}
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <img src="/images/feature-main.webp" alt="" className="h-full w-full object-cover opacity-60" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold">Feature Principal</h3>
            <p className="mt-2 text-white/70">Descrição curta e direta. Máximo 2 linhas.</p>
          </div>
        </div>

        {/* Cards menores — preencher matematicamente */}
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 
                       flex flex-col justify-between hover:border-zinc-200 transition-colors"
          >
            <f.icon size={28} className="text-zinc-400" />
            <div>
              <h4 className="font-semibold text-zinc-900">{f.title}</h4>
              <p className="mt-1 text-sm text-zinc-500">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

### 6.3 Testimonials (prova social com foto gerada)

```tsx
// Fotos de clientes: gerar via Nano Banana
// Prompt: "Professional headshot of a [Brazilian] [profession] person, 
// confident smile, neutral background, LinkedIn profile photo style, 4K"

export function TestimonialCard({ quote, name, role, company, avatar }: TestimonialProps) {
  return (
    <div className="rounded-2xl bg-white border border-zinc-100 shadow-sm p-8
                    hover:shadow-md transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-amber-400" />
        ))}
      </div>
      
      {/* Quote — sem aspas duplas genericas */}
      <blockquote className="text-zinc-700 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-3 mt-6">
        <img
          src={avatar}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-zinc-900">{name}</p>
          <p className="text-sm text-zinc-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}
```

### 6.4 CTA Section (máxima conversão)

```tsx
// Princípio: máximo contraste, proposta clara, remover fricção
// Nunca: "Fale conosco" / "Saiba mais" / "Clique aqui"
// Sempre: ação específica + benefício + redução de risco

export function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline: deve completar o desejo que o hero criou */}
        <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900">
          Pronto para [resultado específico]?
        </h2>
        
        {/* Subheadline: remove a última objeção */}
        <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto">
          [X] empresas já [resultado]. Sem contrato. Cancele quando quiser.
        </p>
        
        {/* CTA principal: verbo forte + benefício imediato */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 rounded-full
                       bg-zinc-900 px-10 py-5 text-white font-semibold
                       hover:bg-zinc-700 transition-all duration-300
                       hover:scale-105 hover:shadow-xl active:scale-[0.98]"
          >
            Agendar demonstração gratuita
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        {/* Garantia ou prova de segurança */}
        <p className="mt-6 text-sm text-zinc-400 flex items-center justify-center gap-2">
          <ShieldCheck size={16} />
          Sem cartão de crédito · Resposta em até 2 horas
        </p>
      </div>
    </section>
  )
}
```

### 6.5 Numbers / Stats Section

```tsx
// Use react-countup para contadores animados
// Números: orgânicos, não redondos (47.3%, não 50%)
// Sempre acompanha contexto ("empresas atendidas", não apenas "1.200")

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true })
  
  const stats = [
    { value: 1247, suffix: '+', label: 'Clientes ativos', decimal: 0 },
    { value: 94.7, suffix: '%', label: 'Taxa de satisfação', decimal: 1 },
    { value: 3.2, suffix: 'x', label: 'Aumento médio em conversão', decimal: 1 },
  ]

  return (
    <section ref={ref} className="py-20 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="space-y-2">
            <div className="font-display text-5xl font-bold tracking-tighter">
              {inView ? (
                <CountUp end={s.value} decimals={s.decimal} duration={2.5} />
              ) : '0'}
              {s.suffix}
            </div>
            <p className="text-zinc-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## FASE 7 — NAV FLUTUANTE (Framer Quality)

```tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingNav({ links }: { links: { label: string; href: string }[] }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
                  ${scrolled ? 'py-3' : 'py-6'}`}
    >
      <motion.nav
        className={`max-w-5xl mx-auto px-6 flex items-center justify-between
                    rounded-full transition-all duration-500
                    ${scrolled
                      ? 'bg-white/80 backdrop-blur-xl border border-zinc-200/50 shadow-lg shadow-black/5'
                      : 'bg-transparent'
                    }`}
        style={{ padding: scrolled ? '12px 24px' : '16px 24px' }}
      >
        {/* Logo */}
        <a href="/" className={`font-display font-bold text-lg 
                                 ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
          Logo
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-200
                            ${scrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5
                      text-sm font-medium transition-all duration-300
                      ${scrolled
                        ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                        : 'bg-white text-zinc-900 hover:bg-white/90'
                      }`}
        >
          Começar agora
        </a>
      </motion.nav>
    </motion.header>
  )
}
```

---

## FASE 8 — DESIGN TOKENS & FORBIDDEN PATTERNS

### Paletas Validadas por Nicho

| Nicho | Base | Acento | Neutros |
|-------|------|--------|---------|
| Clínica / Saúde | Zinc-950 dark ou White | Emerald-500 | Zinc-100/400/600 |
| SaaS Tech | Zinc-950 | Electric Blue (#0EA5E9) | Slate-700/400 |
| Restaurante / Food | Warm Stone | Amber-600 | Warm Zinc |
| Imobiliária | Off-white | Deep Rose (#E11D48) | Zinc |
| Fitness / Academia | Zinc-950 | Lime-400 | Zinc |
| Advocacia / B2B | White | Zinc-900 (monochrome) | Zinc |

### Tipografia

```tsx
// layout.tsx — setup com Fontshare (sem depender do Google Fonts)
import localFont from 'next/font/local'

// Opção 1: Satoshi (versátil, premium)
// Download: https://www.fontshare.com/fonts/satoshi
const satoshi = localFont({
  src: [
    { path: '../fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: '../fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: '../fonts/Satoshi-Bold.woff2', weight: '700' },
    { path: '../fonts/Satoshi-Black.woff2', weight: '900' },
  ],
  variable: '--font-display',
})
```

### Forbidden Patterns (anti-IA slop)

```
BANIDO — Fontes:
✗ Inter (clichê AI)
✗ Poppins (clichê agências baratas)
✗ Roboto (Google padrão)

BANIDO — Cores:
✗ Gradiente purple/blue (#6366f1 → #8b5cf6) — "AI purple"
✗ Pure black #000000 — use Zinc-950
✗ Oversaturated gradients no header

BANIDO — Copy:
✗ "Eleve seu negócio" / "Transforme sua empresa"
✗ "Solução inovadora" / "Next-gen" / "State-of-the-art"
✗ "Seamless" / "Unleash" / "Empodere"
✗ CTAs genéricos: "Saiba mais" / "Clique aqui" / "Fale conosco"

BANIDO — Layout:
✗ 3 cards iguais em linha (use bento assimétrico)
✗ Hero com texto centralizado E fundo genérico (use split ou left-aligned)
✗ h-screen (use min-h-[100dvh])
✗ Emojis em código ou UI

BANIDO — Animações:
✗ animate-bounce em CTAs
✗ box-shadow neon/glow externo
✗ window.addEventListener('scroll') — use GSAP ScrollTrigger
✗ Misturar GSAP + Framer Motion no mesmo componente
```

---

## FASE 9 — PERFORMANCE & SEO

```tsx
// Checklist obrigatório antes de deploy

// 1. Imagens: sempre use next/image com lazy loading
import Image from 'next/image'
<Image src="/hero.webp" alt="..." width={1920} height={1080} priority={isHero} />

// 2. Vídeo hero: preload metadata only para não bloquear render
<video preload="metadata" ... />

// 3. GSAP: sempre limpar contexto no unmount
useGSAP(() => {
  // animações
  return () => { /* cleanup automático com useGSAP */ }
}, { scope: ref, revertOnUpdate: true })

// 4. Grain/noise: SEMPRE em pseudo-elemento fixed, NUNCA em container scrollável
// (previne GPU repaint contínuo)

// 5. will-change: usar com parcimônia — só em elementos ativamente animados
// Remover após animação: element.style.willChange = 'auto'

// 6. Viewport meta obrigatório
// <meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

## FASE 10 — ESTRUTURA DE ARQUIVOS

```
src/
├── app/
│   ├── layout.tsx          # fonts + SmoothScroll provider
│   ├── page.tsx            # composição das sections
│   └── providers/
│       └── SmoothScroll.tsx
├── components/
│   ├── sections/           # seções da LP
│   │   ├── HeroVideo.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FeaturesBento.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/                 # componentes reutilizáveis
│   │   ├── AnimatedTitle.tsx
│   │   ├── FloatingNav.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── MeshGradient.tsx
│   │   └── LogoMarquee.tsx
│   └── layout/
│       └── Footer.tsx
├── lib/
│   └── gsap.ts             # registro de plugins centralizado
public/
├── images/                 # imagens geradas via Nano Banana (salvas aqui)
│   ├── hero-bg.webp
│   ├── facade.webp
│   └── team/
└── videos/
    └── hero.mp4            # vídeo hero (local) ou referenciar CDN
```

---

## FASE 11 — COPY DE ALTA CONVERSÃO

### Fórmula por Section

```
HERO HEADLINE: [Resultado desejado] + [Tempo/Facilidade] + [Sem dor]
Exemplo: "Sua clínica lotada em 60 dias — sem esforço de marketing"

SUBHEADLINE: Explica o COMO em 1-2 frases. Tangível, não vago.
Exemplo: "Sistema completo de captação via WhatsApp, automação de agendamentos
e reativação de pacientes inativos. Plug-and-play."

FEATURES: Benefício → Feature (não Feature → Benefício)
❌ "Integração com WhatsApp Business API"
✅ "Pacientes respondem 3x mais rápido — via WhatsApp que eles já usam"

CTA: Verbo de ação + Benefício imediato + Redução de risco
❌ "Fale conosco"
✅ "Ver demonstração gratuita — sem compromisso"

SOCIAL PROOF: Específico e credível
❌ "Clientes satisfeitos"
✅ "+847 clínicas ativas | Avaliação 4.9/5 no Google"
```

---

## CHECKLIST FINAL PRÉ-ENTREGA

```
□ min-h-[100dvh] no hero (não h-screen)
□ overflow-x-hidden no <main> (previne scroll horizontal de animações)
□ Nenhum useEffect com window.addEventListener('scroll') — apenas GSAP
□ GSAP context.revert() em todos os useEffect/useGSAP
□ Lenis sincronizado com GSAP ScrollTrigger
□ Fontes: Satoshi/Cabinet Grotesk/Geist — não Inter
□ Imagens hero geradas via Nano Banana (não picsum/unsplash genérico)
□ Vídeo com autoPlay muted loop playsInline (sem esse combo, não toca no mobile)
□ next/image com priority=true apenas no hero (primeiro LCP)
□ CTAs: verbo específico + benefício, não "Saiba mais"
□ Bento grid: grid-flow-dense, sem células vazias
□ Mobile: layout single-column abaixo de md, sem scroll horizontal
□ Paleta: 1 cor acento, base neutral zinc/slate, sem purple AI
□ Animações: transform/opacity apenas (nunca top/left/width/height)
□ H1: máximo 3 linhas, container max-w-4xl ou maior
□ Sem emojis na UI
□ Grain/noise em pseudo-elemento fixed pointer-events-none
```

---

## REFERÊNCIAS DE NÍVEL

Sites para benchmarking antes de entregar:
- https://linear.app — minimalismo de alta conversão
- https://vercel.com — hero video + scroll animation padrão
- https://stripe.com — copy + hierarquia visual
- https://framer.com — motion + hero
- https://clearpath-template.framer.website — layout assimétrico
- https://mysticflow.framer.website — dark premium
- https://plat-form.framer.ai — bento moderno

**Pergunta de validação:** Se este site aparecesse no Awwwards, passaria pelo menos no review inicial?
Se não — revise design antes de entregar.
