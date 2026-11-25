import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Necessário para o site estático (output: "export").
export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Manifesto do app: nome, cores e ícones quando o site é salvo na tela inicial do celular. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.nome,
    short_name: "Vó Tereza",
    description: `Chácara para locação em ${site.endereco.cidade} (SP). Consulte datas pelo WhatsApp.`,
    lang: "pt-BR",
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    background_color: "#fff5e1",
    theme_color: "#4a1259",
    icons: [
      { src: `${base}/icon.svg`, sizes: "any", type: "image/svg+xml" },
      { src: `${base}/apple-icon.png`, sizes: "180x180", type: "image/png" },
    ],
  };
}
