import type { EspacoDeFoto } from "@/data/fotos";
import { publicPath } from "@/lib/paths";
import { CameraIcon } from "./icons";
import { Paisagem } from "./paisagem";

type Props = {
  espaco: EspacoDeFoto;
  /** Caminho da foto real em /public, ou undefined enquanto ela não existir. */
  src?: string;
  className?: string;
  prioridade?: boolean;
  /** Paisagem com nuvens e brilho em movimento (só na capa). */
  animada?: boolean;
  /** Onde fica a etiqueta "foto em breve": no canto de baixo (padrão) ou escondida. */
  etiqueta?: "canto" | "nenhuma";
};

/**
 * Foto real quando existir em public/fotos/; senão, uma paisagem ilustrada com a identificação
 * da foto no canto, para nunca aparecer imagem quebrada.
 */
export function Foto({ espaco, src, className = "", prioridade = false, animada = false, etiqueta = "canto" }: Props) {
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
    <div role="img" aria-label={`Ilustração. ${espaco.rotulo} (foto em breve)`} className={`relative size-full overflow-hidden ${className}`}>
      <Paisagem clima={espaco.clima} animada={animada} className="absolute inset-0 size-full" />
      {etiqueta === "canto" ? (
        <span className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-[0.62rem] font-bold tracking-[0.12em] text-white/90 uppercase backdrop-blur-sm">
          <CameraIcon className="size-3.5 shrink-0" />
          <span className="truncate">{espaco.rotulo}</span>
        </span>
      ) : null}
    </div>
  );
}
