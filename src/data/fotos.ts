/*
  ESPAÇOS DE FOTO
  Para colocar uma foto real, salve o arquivo em public/fotos/ com o nome indicado em `arquivo`
  (pode ser .jpg, .jpeg, .png ou .webp) e gere o site de novo. Enquanto o arquivo não existir,
  aparece um espaço reservado identificado, nunca uma imagem quebrada.
*/
export type EspacoDeFoto = {
  /** Nome do arquivo em public/fotos/, sem a extensão. */
  arquivo: string;
  /** Identificação mostrada no espaço reservado. */
  rotulo: string;
  /** Texto alternativo (acessibilidade e Google). */
  alt: string;
};

export const fotoCapa: EspacoDeFoto = {
  arquivo: "capa",
  rotulo: "Foto de capa – vista da chácara",
  alt: "Vista da chácara Recanto Vó Tereza",
};

export const fotoRecanto: EspacoDeFoto = {
  arquivo: "recanto",
  rotulo: "Imagem 01 – Foto da chácara",
  alt: "A chácara Recanto Vó Tereza em meio à natureza",
};

export const galeria: EspacoDeFoto[] = [
  { arquivo: "galeria-01", rotulo: "Foto 01 – Fachada e entrada", alt: "Fachada e entrada do Recanto Vó Tereza" },
  { arquivo: "galeria-02", rotulo: "Foto 02 – Área externa", alt: "Área externa do Recanto Vó Tereza" },
  { arquivo: "galeria-03", rotulo: "Foto 03 – Piscina ou área de lazer", alt: "Área de lazer do Recanto Vó Tereza" },
  { arquivo: "galeria-04", rotulo: "Foto 04 – Área verde e natureza", alt: "Área verde do Recanto Vó Tereza" },
  { arquivo: "galeria-05", rotulo: "Foto 05 – Espaço interno", alt: "Espaço interno do Recanto Vó Tereza" },
  { arquivo: "galeria-06", rotulo: "Foto 06 – Quartos e acomodações", alt: "Quartos e acomodações do Recanto Vó Tereza" },
  { arquivo: "galeria-07", rotulo: "Foto 07 – Outros ambientes", alt: "Outros ambientes do Recanto Vó Tereza" },
];
