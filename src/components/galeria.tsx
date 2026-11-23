"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { EspacoDeFoto } from "@/data/fotos";
import { publicPath } from "@/lib/paths";
import { Foto } from "./foto";
import { ChevronIcon, CloseIcon, ExpandIcon } from "./icons";

type Props = {
  espacos: EspacoDeFoto[];
  fotos: Record<string, string>;
};

// Mosaico: a primeira e a quarta fotos ocupam mais espaço no computador.
// No celular: 2 colunas, com a 1ª, a 4ª e a 7ª fotos na largura toda.
const LAYOUT = ["col-span-2 sm:row-span-2", "", "", "col-span-2", "", "", "col-span-2"];

/** Galeria em mosaico. Fotos reais abrem ampliadas; espaços reservados ficam só identificados. */
export function Galeria({ espacos, fotos }: Props) {
  const reais = espacos.filter((espaco) => fotos[espaco.arquivo]);
  const [aberta, setAberta] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (aberta !== null && !dialog.open) dialog.showModal();
    if (aberta === null && dialog.open) dialog.close();
  }, [aberta]);

  const passar = useCallback(
    (passo: number) => setAberta((atual) => (atual === null ? null : (atual + passo + reais.length) % reais.length)),
    [reais.length],
  );

  useEffect(() => {
    if (aberta === null) return;
    const aoTeclar = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") passar(1);
      if (event.key === "ArrowLeft") passar(-1);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberta, passar]);

  const atual = aberta !== null ? reais[aberta] : null;

  return (
    <>
      <ul className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[230px] lg:grid-cols-4">
        {espacos.map((espaco, indice) => {
          const src = fotos[espaco.arquivo];
          return (
            <li key={espaco.arquivo} className={`overflow-hidden rounded-3xl bg-sage ${LAYOUT[indice] ?? ""}`}>
              {src ? (
                <button
                  type="button"
                  onClick={() => setAberta(reais.indexOf(espaco))}
                  className="group relative block size-full cursor-zoom-in"
                  aria-label={`Ampliar: ${espaco.alt}`}
                >
                  <Foto espaco={espaco} src={src} className="transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-white/85 text-forest opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ExpandIcon className="size-5" />
                  </span>
                </button>
              ) : (
                <Foto espaco={espaco} />
              )}
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={atual?.alt ?? "Foto ampliada"}
        onCancel={(event) => {
          event.preventDefault();
          setAberta(null);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) setAberta(null);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-transparent"
      >
        {atual ? (
          <div className="lightbox-in relative flex h-dvh w-screen items-center justify-center p-4 sm:p-10" onClick={() => setAberta(null)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- site estático, foto em /public */}
            <img
              src={publicPath(fotos[atual.arquivo])}
              alt={atual.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-lift"
            />
            <p className="absolute inset-x-0 bottom-4 text-center text-sm text-white/80">
              {atual.alt}
              {reais.length > 1 ? ` · ${aberta! + 1} de ${reais.length}` : ""}
            </p>
            <button
              type="button"
              onClick={() => setAberta(null)}
              aria-label="Fechar foto"
              className="absolute top-4 right-4 grid size-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <CloseIcon className="size-6" />
            </button>
            {reais.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    passar(-1);
                  }}
                  aria-label="Foto anterior"
                  className="absolute top-1/2 left-3 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronIcon direction="left" className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    passar(1);
                  }}
                  aria-label="Próxima foto"
                  className="absolute top-1/2 right-3 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronIcon className="size-6" />
                </button>
              </>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
