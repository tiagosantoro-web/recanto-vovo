/*
  ESPAÇOS DE FOTO
  Para colocar uma foto real, salve o arquivo em public/fotos/ com o nome indicado em `arquivo`
  (pode ser .jpg, .jpeg, .png ou .webp) e gere o site de novo. Enquanto o arquivo não existir,
  aparece uma paisagem ilustrada com a identificação da foto no canto, nunca uma imagem quebrada.
*/
import type { Clima } from "@/components/paisagem";

export type EspacoDeFoto = {
  /** Nome do arquivo em public/fotos/, sem a extensão. */
  arquivo: string;
  /** Identificação mostrada no espaço reservado. */
  rotulo: string;
  /** Texto alternativo (acessibilidade e Google). */
  alt: string;
  /** Horário da paisagem ilustrada que aparece enquanto não há foto. */
  clima: Clima;
};

export const fotoCapa: EspacoDeFoto = {
  arquivo: "capa",
  rotulo: "Foto de capa – vista da chácara",
  alt: "Vista da chácara Recanto Vó Tereza",
  clima: "amanhecer",
};

export const fotoRecanto: EspacoDeFoto = {
  arquivo: "recanto",
  rotulo: "Imagem 01 – Foto da chácara",
  alt: "A chácara Recanto Vó Tereza em meio à natureza",
  clima: "dia",
};

export const galeria: EspacoDeFoto[] = [
  { arquivo: "galeria-01", rotulo: "Foto 01 – Fachada e entrada", alt: "Fachada e entrada do Recanto Vó Tereza", clima: "dia" },
  { arquivo: "galeria-02", rotulo: "Foto 02 – Área externa", alt: "Área externa do Recanto Vó Tereza", clima: "amanhecer" },
  { arquivo: "galeria-03", rotulo: "Foto 03 – Piscina ou área de lazer", alt: "Área de lazer do Recanto Vó Tereza", clima: "entardecer" },
  { arquivo: "galeria-04", rotulo: "Foto 04 – Área verde e natureza", alt: "Área verde do Recanto Vó Tereza", clima: "dia" },
  { arquivo: "galeria-05", rotulo: "Foto 05 – Espaço interno", alt: "Espaço interno do Recanto Vó Tereza", clima: "noite" },
  { arquivo: "galeria-06", rotulo: "Foto 06 – Quartos e acomodações", alt: "Quartos e acomodações do Recanto Vó Tereza", clima: "entardecer" },
  { arquivo: "galeria-07", rotulo: "Foto 07 – Outros ambientes", alt: "Outros ambientes do Recanto Vó Tereza", clima: "amanhecer" },
];
