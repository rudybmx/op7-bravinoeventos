import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BRAVINO | Wine Concept em Londrina",
  description:
    "Wine Bar, Vinho no Deck e Mezanino. A BRAVINO é o wine concept de Londrina onde cada taça tem uma história para contar. Mais de 500 rótulos, duas unidades, consultoria especializada.",
  keywords: "vinho londrina, wine bar londrina, adega londrina, bravino, mezanino, vinho no deck, enoturismo londrina",
  openGraph: {
    title: "BRAVINO | Wine Concept em Londrina",
    description: "Cada taça tem uma história para contar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={dmSans.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
