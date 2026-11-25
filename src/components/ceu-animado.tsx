/**
 * Céu animado da capa: sol com brilho e raios em movimento, nuvens passando, rajadas de vento
 * e bandos de pássaros voando. Fica por cima da foto (ou da paisagem) e embaixo do texto.
 * Só CSS, sem JavaScript: tudo anima com transform/opacity (fluido, feito pela placa de vídeo).
 * Com "reduzir movimento" ligado no aparelho, fica só o sol e as nuvens, parados.
 */
import type { CSSProperties } from "react";

// Nuvens só na faixa de cima, acima do título, para não atrapalhar a leitura.
const NUVENS = [
  { topo: "8svh", largura: 320, duracao: 85, atraso: -10, opacidade: 0.55, flutua: 11 },
  { topo: "13svh", largura: 210, duracao: 66, atraso: -40, opacidade: 0.45, flutua: 9 },
  { topo: "4svh", largura: 260, duracao: 100, atraso: -70, opacidade: 0.4, flutua: 13 },
  { topo: "16svh", largura: 170, duracao: 58, atraso: -22, opacidade: 0.38, flutua: 8 },
];

// Vento na parte de baixo, passando pelos morros.
const VENTOS = [
  { topo: "68%", largura: 340, duracao: 6.5, atraso: 0 },
  { topo: "77%", largura: 260, duracao: 5.5, atraso: 2.2 },
  { topo: "62%", largura: 220, duracao: 7.5, atraso: 4.1 },
];

/** Bando: posição de cada pássaro dentro do grupo, tamanho e ritmo da batida de asa. */
const BANDO = [
  { x: 0, y: 0, escala: 1, batida: 1.1, atraso: 0 },
  { x: -46, y: 22, escala: 0.8, batida: 1.25, atraso: -0.3 },
  { x: -84, y: -14, escala: 0.7, batida: 1.0, atraso: -0.6 },
  { x: -120, y: 30, escala: 0.6, batida: 1.35, atraso: -0.2 },
  { x: -30, y: -30, escala: 0.65, batida: 1.15, atraso: -0.8 },
];

function Nuvem({ largura, id }: { largura: number; id: string }) {
  // Bordas suaves com degradê radial (sem filtro de desfoque, que pesa na animação).
  return (
    <svg viewBox="0 0 220 90" width={largura} height={largura * 0.41} aria-hidden>
      <defs>
        <radialGradient id={id}>
          <stop offset="0.55" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill={`url(#${id})`}>
        <ellipse cx="110" cy="62" rx="105" ry="26" />
        <ellipse cx="78" cy="46" rx="48" ry="34" />
        <ellipse cx="128" cy="38" rx="56" ry="38" />
        <ellipse cx="166" cy="54" rx="40" ry="26" />
      </g>
    </svg>
  );
}

function Passaro({ batida, atraso }: { batida: number; atraso: number }) {
  const estilo = { animationDuration: `${batida}s`, animationDelay: `${atraso}s` };
  return (
    <svg viewBox="0 0 40 20" width="40" height="20" className="overflow-visible" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path className="asa asa-esq" style={estilo} d="M20 10 Q12 3 2 7" />
        <path className="asa asa-dir" style={estilo} d="M20 10 Q28 3 38 7" />
      </g>
    </svg>
  );
}

function Sol() {
  return (
    <div className="sol" aria-hidden>
      <div className="sol-halo" />
      <div className="sol-raios" />
      <div className="sol-disco" />
    </div>
  );
}

export function CeuAnimado() {
  return (
    <div className="ceu-animado pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <Sol />

      {NUVENS.map((n, i) => (
        <div
          key={`n${i}`}
          className="nuvem-passa absolute left-0"
          style={
            {
              top: n.topo,
              opacity: n.opacidade,
              animationDuration: `${n.duracao}s`,
              animationDelay: `${n.atraso}s`,
              "--i": i, // posição fixa quando o movimento está desligado
            } as CSSProperties
          }
        >
          <div className="nuvem-flutua" style={{ animationDuration: `${n.flutua}s`, animationDelay: `${-i * 2}s` }}>
            <Nuvem largura={n.largura} id={`nuvem-grad-${i}`} />
          </div>
        </div>
      ))}

      {VENTOS.map((v, i) => (
        <svg
          key={`v${i}`}
          viewBox="0 0 300 30"
          width={v.largura}
          height={v.largura / 10}
          className="vento absolute"
          style={{ top: v.topo, left: `${8 + i * 27}%`, animationDuration: `${v.duracao}s`, animationDelay: `${v.atraso}s` }}
        >
          <g fill="none" stroke="#ffffff" strokeLinecap="round" style={{ animationDuration: `${v.duracao}s`, animationDelay: `${v.atraso}s` }}>
            <path className="vento-traco" pathLength={1} d="M0 20 C60 20 90 6 150 10 S240 26 300 12" strokeWidth="2" style={{ animationDuration: `${v.duracao}s`, animationDelay: `${v.atraso}s` }} />
            <path className="vento-traco" pathLength={1} d="M40 27 C100 27 140 17 200 19" strokeWidth="1.4" opacity="0.7" style={{ animationDuration: `${v.duracao}s`, animationDelay: `${v.atraso + 0.35}s` }} />
          </g>
        </svg>
      ))}

      {/* Dois bandos, em alturas e velocidades diferentes. */}
      {[
        { topo: "11svh", duracao: 30, atraso: -6, escala: 0.9, onda: 7 },
        { topo: "18svh", duracao: 40, atraso: -24, escala: 0.6, onda: 9 },
      ].map((b, i) => (
        <div
          key={`b${i}`}
          className="bando absolute left-0"
          style={{ top: b.topo, animationDuration: `${b.duracao}s`, animationDelay: `${b.atraso}s` }}
        >
          <div className="bando-onda text-forest-deep/80" style={{ animationDuration: `${b.onda}s` }}>
            <div style={{ transform: `scale(${b.escala})` }}>
              {BANDO.map((p, j) => (
                <div key={j} className="absolute" style={{ transform: `translate(${p.x}px, ${p.y}px) scale(${p.escala})` }}>
                  <Passaro batida={p.batida} atraso={p.atraso} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
