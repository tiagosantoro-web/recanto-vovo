/*
  PALETAS DE CORES
  As cores da interface de cada tema ficam em src/app/globals.css (blocos [data-tema="..."]);
  as da paisagem ilustrada ficam aqui embaixo (`paisagens`).
  O tema publicado é o `temaPadrao`. Para mostrar as opções ao cliente, abra o site com
  ?cores no endereço (ex.: .../recanto-vovo/?cores): aparece o seletor de cores.
  Um tema também pode ser aberto direto: ?tema=chita
*/
export const temas = [
  { id: "original", nome: "Original", descricao: "Verde da mata e azul do lago, tons suaves", amostra: ["#1d3a2e", "#3d6b50", "#2a5b7a", "#9cc3d8"] },
  { id: "chita", nome: "Chita da Vó", descricao: "Vinho, rosa, turquesa e amarelo, como tecido de chita", amostra: ["#5e1027", "#c92a66", "#0e8577", "#ffc93c"] },
  { id: "por-do-sol", nome: "Pôr do sol", descricao: "Magenta, laranja, amarelo-sol e roxo: alegre e vibrante", amostra: ["#7b1fa2", "#c2185b", "#ff5a1f", "#ffd23f"] },
  { id: "mata-viva", nome: "Mata viva", descricao: "Verde intenso, azul piscina e amarelo sol", amostra: ["#063b26", "#0b7f41", "#0a7cc2", "#ffd23f"] },
] as const;

export type TemaId = (typeof temas)[number]["id"];

/** Tema que aparece para todos os visitantes. Troque aqui quando o cliente escolher. */
export const temaPadrao: TemaId = "por-do-sol"; // escolhido pelo cliente em 25/11/2026

/* Cores da paisagem ilustrada em cada tema (o "original" usa as de src/components/paisagem.tsx). */
type Campo = "ceu0" | "ceu1" | "ceu2" | "sol" | "brilho" | "serra" | "colina" | "mata" | "frente" | "lago";
type Clima = "amanhecer" | "dia" | "entardecer" | "noite";
type PaletaTema = { terra: Partial<Record<Campo, string>> } & Record<Clima, Partial<Record<Campo, string>>>;

const paisagens: Partial<Record<TemaId, PaletaTema>> = {
  chita: {
    terra: { colina: "#4fa86a", mata: "#2c7d55", frente: "#5e1027" },
    amanhecer: { ceu0: "#c92a66", ceu1: "#f28fad", ceu2: "#ffd39a", sol: "#fff3d6", brilho: "#ffc93c", serra: "#e0789a", lago: "#f6b3c6" },
    dia: { ceu0: "#1fa39a", ceu1: "#8fdad0", ceu2: "#fff0c9", sol: "#ffffff", brilho: "#ffe08a", serra: "#5bbcb0", lago: "#9fe3da" },
    entardecer: { ceu0: "#5e1027", ceu1: "#e0457b", ceu2: "#ffc93c", sol: "#fff0c2", brilho: "#ffb03c", serra: "#a4345e", lago: "#f08aa5" },
    noite: { ceu0: "#1d0a1a", ceu1: "#4a1235", ceu2: "#7a2450", sol: "#fff3e0", brilho: "#ffc93c", serra: "#3a0f2c", lago: "#6e1f45", colina: "#2a0d22", mata: "#200a1a", frente: "#14060f" },
  },
  "por-do-sol": {
    terra: { colina: "#f0631c", mata: "#c2185b", frente: "#4a1259" },
    amanhecer: { ceu0: "#ff3d7f", ceu1: "#ff9a3c", ceu2: "#ffe066", sol: "#fffbe0", brilho: "#ffd23f", serra: "#ff6f91", lago: "#ffc48a" },
    dia: { ceu0: "#ff7a00", ceu1: "#ffc425", ceu2: "#fff6a8", sol: "#ffffff", brilho: "#fff176", serra: "#ff8a50", lago: "#ffe082" },
    entardecer: { ceu0: "#6a1b9a", ceu1: "#ff2e63", ceu2: "#ffb300", sol: "#fff3c4", brilho: "#ff9100", serra: "#c2185b", lago: "#ff8a65" },
    noite: { ceu0: "#2a0845", ceu1: "#6a1b9a", ceu2: "#d81b60", sol: "#fff3e0", brilho: "#ffd23f", serra: "#4a148c", lago: "#8e24aa", colina: "#3a0d4a", mata: "#2a0838", frente: "#1a0524" },
  },
  "mata-viva": {
    terra: { colina: "#22b05a", mata: "#0f8a45", frente: "#063b26" },
    amanhecer: { ceu0: "#0a72b5", ceu1: "#5ec2f0", ceu2: "#ffe58a", sol: "#fffbe0", brilho: "#ffd23f", serra: "#4aa3d6", lago: "#7fd0f5" },
    dia: { ceu0: "#0a8fe0", ceu1: "#6fd0ff", ceu2: "#e6f8ff", sol: "#ffffff", brilho: "#fff2a8", serra: "#48b0e0", lago: "#7fdcff" },
    entardecer: { ceu0: "#0a4d80", ceu1: "#ff8a3d", ceu2: "#ffd23f", sol: "#fff2c0", brilho: "#ffb03c", serra: "#3a7fb0", lago: "#ffb070" },
    noite: { ceu0: "#021526", ceu1: "#063a5e", ceu2: "#0a5a8a", sol: "#f4f1e6", brilho: "#9fd8ff", serra: "#05304c", lago: "#0a4a70", colina: "#04301e", mata: "#03251a", frente: "#021710" },
  },
};

/** CSS com as variáveis da paisagem de cada tema (lidas por src/components/paisagem.tsx). */
export const cssPaisagens = Object.entries(paisagens)
  .map(([tema, paleta]) => {
    const { terra, ...climas } = paleta as PaletaTema;
    const vars = Object.entries(climas).flatMap(([clima, cores]) =>
      Object.entries({ ...terra, ...cores }).map(([campo, cor]) => `--pz-${clima}-${campo}:${cor}`),
    );
    return `[data-tema="${tema}"]{${vars.join(";")}}`;
  })
  .join("\n");
