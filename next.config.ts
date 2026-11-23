import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site estático: `npm run build` gera a pasta `out/`, pronta para GitHub Pages ou Vercel.
  output: "export",
  // Caminho do site quando publicado em subpasta (ex.: GitHub Pages "/recanto-vo-tereza"). Vazio na Vercel.
  basePath: process.env.BASE_PATH ?? "",
  // Repassado ao navegador para montar o caminho das fotos em /public.
  env: { NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? "" },
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
