import type { EspacoDeFoto } from "@/data/fotos";
import { publicPath } from "@/lib/paths";
import { CameraIcon } from "./icons";

type Props = {
  espaco: EspacoDeFoto;
  /** Caminho da foto real em /public, ou undefined enquanto ela não existir. */
  src?: string;
  className?: string;
  /** Fundo escuro no espaço reservado (para a capa). */
  escuro?: boolean;
  prioridade?: boolean;
};

/**
 * Foto real quando existir em public/fotos/; senão, um espaço reservado bonito e identificado,
 * para nunca aparecer imagem quebrada.
 */
export function Foto({ espaco, src, className = "", escuro = false, prioridade = false }: Props) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- site estático, foto em /public
      <img
        src={publicPath(src)}
        alt={espaco.alt}
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : "auto"}
        decoding="async"
        className={`size-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${espaco.rotulo}`}
      className={`relative flex size-full items-center justify-center overflow-hidden ${escuro ? "placeholder-photo-dark" : "placeholder-photo"} ${className}`}
    >
      {/* Linhas de relevo: serra e horizonte */}
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/2 w-full" aria-hidden>
        <path d="M0 150 70 95l45 35 70-75 75 60 50-30 90 70v45H0Z" fill={escuro ? "rgb(255 255 255 / 0.05)" : "rgb(61 107 80 / 0.12)"} />
        <path d="M0 175 90 135l70 25 85-45 80 40 75-20v65H0Z" fill={escuro ? "rgb(255 255 255 / 0.06)" : "rgb(42 91 122 / 0.1)"} />
      </svg>
      {/* Na capa, a etiqueta fica no canto para não cobrir o título. */}
      <span
        className={`inline-flex flex-col items-center gap-2 rounded-2xl px-4 py-3 text-center ${
          escuro
            ? "absolute top-24 right-5 max-w-[14rem] border border-white/15 bg-white/[0.06] text-white/75 sm:right-8"
            : "relative mx-3 max-w-[90%] bg-white/70 text-forest backdrop-blur-sm"
        }`}
      >
        <CameraIcon className="size-6 opacity-70" />
        <span className="text-[0.66rem] leading-snug font-bold tracking-[0.14em] uppercase">{espaco.rotulo}</span>
        <span className={`hidden text-[0.7rem] sm:block ${escuro ? "text-white/55" : "text-muted"}`}>Espaço reservado para a fotografia</span>
      </span>
    </div>
  );
}
