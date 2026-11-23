/**
 * Identidade visual do Recanto Vó Tereza: um selo redondo com serra (azul), árvore (verde)
 * e um traço de água, ao lado do nome. Desenhado em SVG para ficar nítido em qualquer tamanho.
 */
type Tom = "claro" | "escuro";

export function Emblema({ tom = "escuro", className = "" }: { tom?: Tom; className?: string }) {
  const linha = tom === "claro" ? "#ffffff" : "#1d3a2e";
  const serra = tom === "claro" ? "#9cc3d8" : "#2a5b7a";
  const arvore = tom === "claro" ? "#b9d3bf" : "#3d6b50";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="29.5" fill="none" stroke={linha} strokeWidth="1.6" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke={linha} strokeWidth="0.6" opacity="0.5" />
      {/* Serra ao fundo */}
      <path d="M11 40 22.5 27l6 6.5L37 22l16 18" fill="none" stroke={serra} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      {/* Árvore */}
      <path d="M23 44V36" stroke={linha} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M23 25.5c-4.2 0-6.8 3.5-6.8 7 0 3.2 2.6 5 6.8 5s6.8-1.8 6.8-5c0-3.5-2.6-7-6.8-7Z" fill={arvore} />
      {/* Horizonte e água */}
      <path d="M12 44.5h40" stroke={linha} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 49h26M25 53h14" stroke={serra} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tom = "escuro", className = "" }: { tom?: Tom; className?: string }) {
  const claro = tom === "claro";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Emblema tom={tom} className="size-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[0.62rem] font-bold tracking-[0.42em] uppercase ${claro ? "text-white/75" : "text-leaf"}`}>Recanto</span>
        <span className={`mt-1 font-display text-[1.55rem] font-semibold tracking-tight ${claro ? "text-white" : "text-forest"}`}>
          Vó Tereza
        </span>
      </span>
    </span>
  );
}
