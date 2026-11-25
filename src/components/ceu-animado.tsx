/**
 * Céu animado da capa: nuvens passando, rajadas de vento e um bando de pássaros voando.
 * Fica por cima da foto (ou da paisagem) e embaixo do texto. Só CSS, sem JavaScript.
 * Com "reduzir movimento" ligado no aparelho, ficam só as nuvens paradas.
 */

// Nuvens só na faixa de cima, acima do título, para não atrapalhar a leitura.
const NUVENS = [
  { topo: "8svh", largura: 300, duracao: 80, atraso: -10, opacidade: 0.4 },
  { topo: "13svh", largura: 200, duracao: 62, atraso: -40, opacidade: 0.32 },
  { topo: "5svh", largura: 240, duracao: 95, atraso: -70, opacidade: 0.3 },
  { topo: "15svh", largura: 160, duracao: 55, atraso: -22, opacidade: 0.28 },
];

// Vento na parte de baixo, passando pelos morros.
const VENTOS = [
  { topo: "70%", largura: 300, duracao: 7, atraso: 0 },
  { topo: "78%", largura: 240, duracao: 6, atraso: 2.5 },
  { topo: "64%", largura: 200, duracao: 8, atraso: 4.5 },
];

/** Bando: posição de cada pássaro dentro do grupo, tamanho e ritmo da batida de asa. */
const BANDO = [
  { x: 0, y: 0, escala: 1, batida: 0.9 },
  { x: -46, y: 22, escala: 0.8, batida: 1.05 },
  { x: -84, y: -14, escala: 0.7, batida: 0.8 },
  { x: -120, y: 30, escala: 0.6, batida: 1.15 },
  { x: -30, y: -30, escala: 0.65, batida: 0.95 },
];

function Nuvem({ largura }: { largura: number }) {
  return (
    <svg viewBox="0 0 200 70" width={largura} height={largura * 0.35} aria-hidden>
      <g fill="#ffffff">
        <ellipse cx="100" cy="48" rx="95" ry="20" />
        <ellipse cx="70" cy="36" rx="40" ry="26" />
        <ellipse cx="118" cy="30" rx="46" ry="28" />
        <ellipse cx="150" cy="42" rx="32" ry="18" />
      </g>
    </svg>
  );
}

function Passaro({ batida }: { batida: number }) {
  const estilo = { animationDuration: `${batida}s` };
  return (
    <svg viewBox="0 0 40 20" width="40" height="20" className="overflow-visible" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path className="asa asa-esq" style={estilo} d="M20 10 Q12 2 2 6" />
        <path className="asa asa-dir" style={estilo} d="M20 10 Q28 2 38 6" />
      </g>
    </svg>
  );
}

export function CeuAnimado() {
  return (
    <div className="ceu-animado pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {NUVENS.map((n, i) => (
        <div
          key={`n${i}`}
          className="nuvem-passa absolute left-0 blur-[2px]"
          style={
            {
              top: n.topo,
              opacity: n.opacidade,
              animationDuration: `${n.duracao}s`,
              animationDelay: `${n.atraso}s`,
              "--i": i, // posição fixa quando o movimento está desligado
            } as React.CSSProperties
          }
        >
          <Nuvem largura={n.largura} />
        </div>
      ))}

      {VENTOS.map((v, i) => (
        <svg
          key={`v${i}`}
          viewBox="0 0 300 30"
          width={v.largura}
          height={v.largura / 10}
          className="vento absolute left-0"
          style={{ top: v.topo, animationDuration: `${v.duracao}s`, animationDelay: `${v.atraso}s` }}
        >
          <path d="M0 20 C60 20 90 6 150 10 S240 26 300 12" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 26 C100 26 140 16 200 18" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        </svg>
      ))}

      {/* Dois bandos, em alturas e velocidades diferentes. */}
      {[
        { topo: "11svh", duracao: 26, atraso: -6, escala: 0.9 },
        { topo: "18svh", duracao: 34, atraso: -22, escala: 0.6 },
      ].map((b, i) => (
        <div
          key={`b${i}`}
          className="bando absolute left-0"
          style={{ top: b.topo, animationDuration: `${b.duracao}s`, animationDelay: `${b.atraso}s` }}
        >
          <div className="bando-onda text-forest-deep/80" style={{ transform: `scale(${b.escala})` }}>
            {BANDO.map((p, j) => (
              <div key={j} className="absolute" style={{ transform: `translate(${p.x}px, ${p.y}px) scale(${p.escala})` }}>
                <Passaro batida={p.batida} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
