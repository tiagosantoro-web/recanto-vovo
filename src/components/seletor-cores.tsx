"use client";

import { useEffect, useState } from "react";
import { temaPadrao, temas, type TemaId } from "@/data/temas";

/**
 * Seletor de paletas para mostrar as opções ao cliente. Só aparece quando o endereço tem
 * ?cores ou ?tema=... — os visitantes comuns não veem. Troca as cores na hora e atualiza
 * o endereço, para o link da opção escolhida poder ser enviado.
 */
export function SeletorCores() {
  const [visivel, setVisivel] = useState(false);
  const [atual, setAtual] = useState<TemaId>(temaPadrao);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("cores") && !params.has("tema")) return;
    const tema = document.documentElement.dataset.tema as TemaId | undefined;
    // Leitura única do estado inicial vindo do endereço.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisivel(true);
    if (tema && temas.some((t) => t.id === tema)) setAtual(tema);
  }, []);

  if (!visivel) return null;

  function escolher(id: TemaId) {
    document.documentElement.setAttribute("data-tema", id);
    setAtual(id);
    const params = new URLSearchParams(window.location.search);
    params.set("cores", "");
    params.set("tema", id);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString().replace("cores=", "cores")}`);
  }

  const escolhido = temas.find((t) => t.id === atual) ?? temas[0];

  return (
    <div
      className="fixed bottom-24 left-3 z-50 w-[calc(100%-6rem)] max-w-sm sm:bottom-6 sm:left-6"
      role="region"
      aria-label="Escolha das cores do site"
    >
      <div className="rounded-3xl border border-black/10 bg-white/95 p-3 text-ink shadow-lift backdrop-blur">
        <div className="flex items-center justify-between gap-3 px-1">
          <p className="text-xs font-bold tracking-[0.16em] uppercase">
            Cores: <span className="text-leaf">{escolhido.nome}</span>
          </p>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            className="min-h-9 cursor-pointer rounded-full px-3 text-xs font-semibold text-muted hover:text-ink"
          >
            {aberto ? "Recolher" : "Trocar cores"}
          </button>
        </div>
        {aberto ? (
          <>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {temas.map((tema) => (
                <li key={tema.id}>
                  <button
                    type="button"
                    onClick={() => escolher(tema.id)}
                    aria-pressed={tema.id === atual}
                    title={tema.descricao}
                    className={`flex w-full cursor-pointer flex-col items-start gap-2 rounded-2xl border-2 p-2.5 text-left transition-colors ${
                      tema.id === atual ? "border-ink bg-black/[0.04]" : "border-transparent hover:bg-black/[0.04]"
                    }`}
                  >
                    <span className="flex w-full overflow-hidden rounded-lg">
                      {tema.amostra.map((cor) => (
                        <span key={cor} className="h-6 flex-1" style={{ background: cor }} />
                      ))}
                    </span>
                    <span className="text-sm font-semibold leading-tight">{tema.nome}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-2 px-1 text-xs text-muted">{escolhido.descricao}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
