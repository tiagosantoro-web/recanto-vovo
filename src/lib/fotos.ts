import { readdirSync } from "node:fs";
import { join, parse } from "node:path";

const EXTENSOES = [".jpg", ".jpeg", ".png", ".webp"];

/**
 * Fotos salvas em public/fotos/ (ex.: capa.jpg, galeria-01.jpg).
 * Lido na hora de gerar o site: basta salvar o arquivo e gerar de novo.
 */
export function fotosDisponiveis(): Record<string, string> {
  try {
    return Object.fromEntries(
      readdirSync(join(process.cwd(), "public", "fotos"))
        .filter((file) => EXTENSOES.includes(parse(file).ext.toLowerCase()))
        .map((file) => [parse(file).name, `/fotos/${file}`]),
    );
  } catch {
    return {};
  }
}
