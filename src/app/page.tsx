import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import Mezanino from '@/components/sections/Mezanino'
import Diferenciais from '@/components/sections/Diferenciais'
import Unidades from '@/components/sections/Unidades'
import FAQ from '@/components/sections/FAQ'
import FooterCTA from '@/components/sections/FooterCTA'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MetricsStrip />

      {/* WINE BAR */}
      <ExperienceSection
        id="wine-bar"
        tag="Wine Bar"
        tagSub="Seg–Sex · 18h–22h"
        heading="O seu ritual de fim de tarde merece uma taça à altura."
        body="Esqueça o happy hour comum. Na BRAVINO, você escolhe o rótulo diretamente da prateleira, e ele chega à sua taça na temperatura exata, com atendimento de quem realmente entende do assunto. Ambiente climatizado, petiscos selecionados e uma conversa que vale o horário."
        tags={['Vinhos em taça', 'Temperatura ideal', 'Petiscos', 'Seg–Sex 18h–22h', 'Climatizado']}
        ctaText="Quero ir esta semana"
        ctaHref="https://wa.me/5543991231069"
        glyphLetter="W"
        flipLayout={false}
        bgImage="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/confra_eventos_bravino.png"
      />

      {/* VINHO NO DECK */}
      <ExperienceSection
        id="vinho-no-deck"
        tag="Vinho no Deck"
        tagSub="Todo sábado"
        heading="O sábado mais gostoso de Londrina começa aqui."
        body="Ao ar livre, com boa música e a taça certa na mão, o Vinho no Deck é o evento que virou tradição entre quem ama vinho em Londrina. A vibe é descontraída, o público é animado e o cardápio é dominado por brancos vibrantes e rosés refrescantes."
        tags={['Ao ar livre', 'Brancos & rosés', 'Música ao vivo', 'Todo sábado']}
        ctaText="Ver próxima edição"
        ctaHref="https://instagram.com/bravinowine"
        glyphLetter="D"
        flipLayout={true}
        bgImage="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/boamusica_evento_bravino.png"
      />

      <Mezanino />
      <Diferenciais />
      <Unidades />
      <FAQ />
      <FooterCTA />
    </main>
  )
}
