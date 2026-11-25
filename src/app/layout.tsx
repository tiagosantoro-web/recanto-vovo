import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Dancing_Script, Manrope } from "next/font/google";
import { SeletorCores } from "@/components/seletor-cores";
import { site } from "@/data/site";
import { cssPaisagens, temaPadrao, temas } from "@/data/temas";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Letra cursiva para o nome "Vó Tereza" nos temas vivos.
const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
});

// Aplica ?tema=... antes de a página aparecer, sem piscar a paleta padrão.
const scriptTema = `try{var t=new URLSearchParams(location.search).get("tema");if(${JSON.stringify(temas.map((t) => t.id))}.indexOf(t)>-1)document.documentElement.dataset.tema=t}catch(e){}`;

const titulo = `${site.nome} | Chácara para locação em ${site.endereco.cidade} – ${site.endereco.estado}`;
const descricao = `${site.descricao} Hospedagem para até ${site.capacidade.pernoite} pessoas e até ${site.capacidade.dia} pessoas durante o dia, em ${site.endereco.cidade} (SP). Finais de semana e feriados.`;

export const metadata: Metadata = {
  // Só o domínio: os caminhos gerados já incluem a subpasta do GitHub Pages.
  metadataBase: new URL("/", site.siteUrl),
  title: titulo,
  description: descricao,
  keywords: ["chácara", "Mairinque", "locação de chácara", "hospedagem", "final de semana", "feriado", "Sebandilha", site.nome],
  alternates: { canonical: `${site.siteUrl}/` },
  openGraph: {
    title: site.nome,
    description: "Seu refúgio de tranquilidade em meio à natureza. Consulte a disponibilidade pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    url: `${site.siteUrl}/`,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#4a1259",
  width: "device-width",
  initialScale: 1,
};

// Dados estruturados para o Google entender que é uma hospedagem e onde fica.
const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.nome,
  description: site.descricao,
  url: `${site.siteUrl}/`,
  telephone: `+${site.whatsapp}`,
  sameAs: [`https://www.instagram.com/${site.instagram}/`],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Ayub Abib Riskallah, 38",
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.estado,
    addressCountry: "BR",
  },
  maximumAttendeeCapacity: site.capacidade.dia,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-tema={temaPadrao}
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} ${script.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
        <style dangerouslySetInnerHTML={{ __html: cssPaisagens }} />
      </head>
      <body className="min-h-dvh">
        {children}
        <SeletorCores />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }} />
      </body>
    </html>
  );
}
