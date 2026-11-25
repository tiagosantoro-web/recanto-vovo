import { useId } from "react";

/**
 * Paisagem ilustrada (céu, serra, mata e lago) usada enquanto as fotos reais não chegam.
 * É claramente uma ilustração, não uma foto: não representa nenhuma instalação da chácara.
 */
export type Clima = "amanhecer" | "dia" | "entardecer" | "noite";

const PALETAS: Record<
  Clima,
  { ceu: [string, string, string]; sol: string; brilho: string; serra: string; colina: string; mata: string; frente: string; lago: string }
> = {
  amanhecer: {
    ceu: ["#2a5b7a", "#7fb0c9", "#f3d9b8"],
    sol: "#fff1d6",
    brilho: "#ffd9a0",
    serra: "#6f98ad",
    colina: "#4f7d66",
    mata: "#2f5a45",
    frente: "#1d3a2e",
    lago: "#8db8cc",
  },
  dia: {
    ceu: ["#4b8bb0", "#9cc9df", "#e4f1f5"],
    sol: "#ffffff",
    brilho: "#fff6dc",
    serra: "#86aebf",
    colina: "#5f9271",
    mata: "#3d6b50",
    frente: "#24493a",
    lago: "#a9d0e0",
  },
  entardecer: {
    ceu: ["#23435f", "#c9876a", "#f6c58f"],
    sol: "#ffe6bf",
    brilho: "#ffb877",
    serra: "#7c6f86",
    colina: "#4a5f55",
    mata: "#2b4236",
    frente: "#16291f",
    lago: "#d79f7f",
  },
  noite: {
    ceu: ["#0d1b2a", "#1d3a52", "#3c5f78"],
    sol: "#f4f1e6",
    brilho: "#9fc4dc",
    serra: "#2c4a5f",
    colina: "#1f3a33",
    mata: "#16302a",
    frente: "#0c1d17",
    lago: "#2f5470",
  },
};

/** Árvores em posições fixas (sem aleatoriedade, para o desenho ser sempre igual). */
const ARVORES: { x: number; y: number; r: number; tipo: "copa" | "pinheiro" }[] = [
  { x: 60, y: 905, r: 70, tipo: "copa" },
  { x: 150, y: 880, r: 95, tipo: "pinheiro" },
  { x: 245, y: 915, r: 60, tipo: "copa" },
  { x: 330, y: 895, r: 80, tipo: "pinheiro" },
  { x: 1290, y: 900, r: 75, tipo: "pinheiro" },
  { x: 1380, y: 880, r: 90, tipo: "copa" },
  { x: 1480, y: 905, r: 100, tipo: "pinheiro" },
  { x: 1565, y: 915, r: 65, tipo: "copa" },
];

export function Paisagem({ clima = "amanhecer", className = "", animada = false }: { clima?: Clima; className?: string; animada?: boolean }) {
  const base = PALETAS[clima];
  // Cada cor pode ser trocada pelo tema ativo (variáveis --pz-... geradas em src/data/temas.ts).
  const v = (campo: string, padrao: string) => `var(--pz-${clima}-${campo}, ${padrao})`;
  const p = {
    ceu: [v("ceu0", base.ceu[0]), v("ceu1", base.ceu[1]), v("ceu2", base.ceu[2])],
    sol: v("sol", base.sol),
    brilho: v("brilho", base.brilho),
    serra: v("serra", base.serra),
    colina: v("colina", base.colina),
    mata: v("mata", base.mata),
    frente: v("frente", base.frente),
    lago: v("lago", base.lago),
  };
  // Id único por desenho: a mesma paisagem aparece várias vezes na página.
  const id = `p-${clima}-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const noite = clima === "noite";
  return (
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-ceu`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: p.ceu[0] }} />
          <stop offset="0.55" style={{ stopColor: p.ceu[1] }} />
          <stop offset="0.78" style={{ stopColor: p.ceu[2] }} />
        </linearGradient>
        <radialGradient id={`${id}-brilho`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" style={{ stopColor: p.brilho }} stopOpacity="0.85" />
          <stop offset="1" style={{ stopColor: p.brilho }} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-lago`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: p.lago }} />
          <stop offset="1" style={{ stopColor: p.serra }} />
        </linearGradient>
        <linearGradient id={`${id}-nevoa`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: p.ceu[2] }} stopOpacity="0" />
          <stop offset="1" style={{ stopColor: p.ceu[2] }} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Céu e sol */}
      <rect width="1600" height="1000" fill={`url(#${id}-ceu)`} />
      {noite
        ? [120, 260, 410, 530, 690, 820, 980, 1120, 1260, 1390, 1500].map((x, i) => (
            <circle key={x} cx={x} cy={80 + ((i * 97) % 300)} r={i % 3 === 0 ? 2.4 : 1.4} fill="#ffffff" opacity={0.5 + (i % 4) * 0.12} />
          ))
        : null}
      <circle cx="1120" cy="560" r="420" fill={`url(#${id}-brilho)`} className={animada ? "sol-respira" : undefined} />
      <circle cx="1120" cy="560" r={noite ? 46 : 64} style={{ fill: p.sol }} opacity={noite ? 0.9 : 0.95} />

      {/* Nuvens */}
      {!noite ? (
        <g className={animada ? "nuvens" : undefined} fill="#ffffff" opacity="0.5">
          <ellipse cx="300" cy="230" rx="170" ry="26" />
          <ellipse cx="380" cy="212" rx="90" ry="24" />
          <ellipse cx="1300" cy="170" rx="150" ry="20" />
          <ellipse cx="760" cy="330" rx="120" ry="16" opacity="0.7" />
        </g>
      ) : null}

      {/* Pássaros parados (na capa, os pássaros voando vêm de ceu-animado.tsx) */}
      {!noite && !animada ? (
        <g fill="none" style={{ stroke: p.frente }} strokeWidth="3" strokeLinecap="round" opacity="0.45">
          <path d="M860 300q12-12 24 0q12-12 24 0" />
          <path d="M920 340q9-9 18 0q9-9 18 0" />
          <path d="M800 350q8-8 16 0q8-8 16 0" />
        </g>
      ) : null}

      {/* Serra ao fundo */}
      <path d="M0 640 180 520 300 585 470 450 640 590 780 520 930 600 1100 470 1280 590 1440 510 1600 600V1000H0Z" style={{ fill: p.serra }} opacity="0.85" />
      <rect y="560" width="1600" height="200" fill={`url(#${id}-nevoa)`} />

      {/* Colinas */}
      <path d="M0 720C180 650 330 690 500 660S820 600 1000 655 1340 640 1600 690V1000H0Z" style={{ fill: p.colina }} />

      {/* Lago com reflexo */}
      <path d="M380 800C600 770 1000 770 1240 800 1180 850 460 860 380 800Z" fill={`url(#${id}-lago)`} opacity="0.95" />
      <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.45" className={animada ? "brilho-agua" : undefined}>
        <path d="M640 800h120M820 812h90M700 826h150M960 806h70" />
      </g>

      {/* Mata */}
      <path d="M0 790C200 750 300 800 420 790S520 840 380 860 0 880 0 880Z" style={{ fill: p.mata }} />
      <path d="M1600 780C1420 750 1320 800 1220 795S1140 850 1260 865 1600 880 1600 880Z" style={{ fill: p.mata }} />
      <path d="M0 900C300 850 520 880 800 870S1300 850 1600 890V1000H0Z" style={{ fill: p.frente }} />

      {/* Árvores */}
      <g style={{ fill: p.frente }}>
        {ARVORES.map((a) =>
          a.tipo === "copa" ? (
            <g key={a.x} className={animada ? "balanca" : undefined}>
              <rect x={a.x - 5} y={a.y - a.r * 0.4} width="10" height={a.r * 0.9} />
              <circle cx={a.x} cy={a.y - a.r * 0.7} r={a.r * 0.55} />
              <circle cx={a.x - a.r * 0.35} cy={a.y - a.r * 0.45} r={a.r * 0.4} />
              <circle cx={a.x + a.r * 0.35} cy={a.y - a.r * 0.45} r={a.r * 0.42} />
            </g>
          ) : (
            <path key={a.x} className={animada ? "balanca" : undefined} d={`M${a.x} ${a.y - a.r * 1.9}L${a.x + a.r * 0.5} ${a.y}H${a.x - a.r * 0.5}Z`} />
          ),
        )}
      </g>
    </svg>
  );
}
