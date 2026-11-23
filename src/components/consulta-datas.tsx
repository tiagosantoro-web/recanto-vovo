"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { linkWhatsapp, site } from "@/data/site";
import { dataCompleta, diaCurto, hojeSP, somarDias } from "@/lib/datas";
import { MoonIcon, SunIcon, WhatsappIcon } from "./icons";

type Tipo = "pernoite" | "dia";

const semInscricao = () => () => {};

/** Monta a mensagem do WhatsApp com o que o visitante escolheu. */
function mensagem(tipo: Tipo, chegada: string, saida: string, pessoas: number): string {
  const linhas = ["Olá! Vim pelo site do Recanto Vó Tereza e gostaria de consultar a disponibilidade:", ""];
  linhas.push(`• Tipo: ${tipo === "pernoite" ? "hospedagem (pernoite)" : "passar o dia"}`);
  if (chegada) {
    if (tipo === "pernoite") {
      linhas.push(`• Chegada: ${diaCurto(chegada)} (${dataCompleta(chegada)})`);
      if (saida) linhas.push(`• Saída: ${diaCurto(saida)} (${dataCompleta(saida)})`);
    } else {
      linhas.push(`• Data: ${diaCurto(chegada)} (${dataCompleta(chegada)})`);
    }
  } else {
    linhas.push("• Data: ainda vou definir");
  }
  linhas.push(`• Pessoas: ${pessoas}`);
  return linhas.join("\n");
}

/** Cartão de consulta de datas: o visitante escolhe e o WhatsApp abre com a mensagem pronta. */
export function ConsultaDatas({ className = "" }: { className?: string }) {
  const uid = useId();
  const hoje = useSyncExternalStore(semInscricao, hojeSP, () => "");
  const [tipo, setTipo] = useState<Tipo>("pernoite");
  const [chegada, setChegada] = useState("");
  const [saida, setSaida] = useState("");
  const [pessoas, setPessoas] = useState(10);

  const maximo = tipo === "pernoite" ? site.capacidade.pernoite : site.capacidade.dia;
  const total = Math.min(pessoas, maximo);
  const saidaMinima = chegada ? somarDias(chegada, 1) : hoje;
  const saidaValida = saida && chegada && saida > chegada ? saida : "";

  const rotulo = "mb-1.5 block text-[0.68rem] font-bold tracking-[0.16em] text-muted uppercase";
  const campo =
    "h-12 w-full rounded-xl border border-line bg-mist px-3 text-[15px] text-ink focus:border-lake focus:bg-white focus:outline-none";

  return (
    <div id="reservar" className={`rounded-[1.75rem] bg-white p-5 text-ink shadow-lift sm:p-6 ${className}`}>
      <p className="font-display text-2xl leading-tight font-semibold text-forest">Consulte sua data</p>
      <p className="mt-1 text-sm text-muted">Escolha e receba a resposta pelo WhatsApp.</p>

      <fieldset className="mt-5">
        <legend className="sr-only">Tipo de locação</legend>
        <div className="grid grid-cols-2 gap-1 rounded-2xl bg-sage p-1">
          {[
            { valor: "pernoite" as const, titulo: "Hospedagem", detalhe: `até ${site.capacidade.pernoite} pessoas`, icone: <MoonIcon className="size-4" /> },
            { valor: "dia" as const, titulo: "Passar o dia", detalhe: `até ${site.capacidade.dia} pessoas`, icone: <SunIcon className="size-4" /> },
          ].map((opcao) => (
            <label
              key={opcao.valor}
              className={`flex cursor-pointer flex-col items-center rounded-xl px-2 py-2.5 text-center transition-colors has-focus-visible:outline-2 has-focus-visible:outline-lake ${
                tipo === opcao.valor ? "bg-white text-forest shadow-soft" : "text-muted hover:text-forest"
              }`}
            >
              <input
                type="radio"
                name={`${uid}-tipo`}
                className="sr-only"
                checked={tipo === opcao.valor}
                onChange={() => setTipo(opcao.valor)}
              />
              <span className="inline-flex items-center gap-1.5 text-sm font-bold">
                {opcao.icone}
                {opcao.titulo}
              </span>
              <span className="text-xs">{opcao.detalhe}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={`mt-4 grid gap-3 ${tipo === "pernoite" ? "grid-cols-2" : "grid-cols-1"}`}>
        <div>
          <label htmlFor={`${uid}-chegada`} className={rotulo}>
            {tipo === "pernoite" ? "Chegada" : "Data"}
          </label>
          <input
            id={`${uid}-chegada`}
            type="date"
            min={hoje || undefined}
            value={chegada}
            onChange={(evento) => setChegada(evento.target.value)}
            className={campo}
          />
        </div>
        {tipo === "pernoite" ? (
          <div>
            <label htmlFor={`${uid}-saida`} className={rotulo}>
              Saída
            </label>
            <input
              id={`${uid}-saida`}
              type="date"
              min={saidaMinima || undefined}
              value={saidaValida}
              onChange={(evento) => setSaida(evento.target.value)}
              className={campo}
            />
          </div>
        ) : null}
      </div>

      <div className="mt-4">
        <p id={`${uid}-pessoas`} className={rotulo}>
          Pessoas
        </p>
        <div className="flex h-12 items-center justify-between rounded-xl border border-line bg-mist px-1.5" role="group" aria-labelledby={`${uid}-pessoas`}>
          <button
            type="button"
            onClick={() => setPessoas(Math.max(1, total - 1))}
            disabled={total <= 1}
            aria-label="Menos uma pessoa"
            className="grid size-9 cursor-pointer place-items-center rounded-lg text-xl font-semibold text-forest hover:bg-white disabled:cursor-default disabled:opacity-30"
          >
            −
          </button>
          <span className="text-base font-bold text-forest" aria-live="polite">
            {total} {total === 1 ? "pessoa" : "pessoas"}
          </span>
          <button
            type="button"
            onClick={() => setPessoas(Math.min(maximo, total + 1))}
            disabled={total >= maximo}
            aria-label="Mais uma pessoa"
            className="grid size-9 cursor-pointer place-items-center rounded-lg text-xl font-semibold text-forest hover:bg-white disabled:cursor-default disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>

      <a
        href={linkWhatsapp(mensagem(tipo, chegada, saidaValida, total))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-[15px] font-bold tracking-[0.06em] text-white uppercase shadow-[0_14px_30px_-14px_rgb(18_140_75/0.9)] transition-transform hover:-translate-y-0.5"
      >
        <WhatsappIcon className="size-5" />
        Consultar disponibilidade
      </a>
      <p className="mt-3 text-center text-xs text-muted">Sem compromisso · resposta direto com o Recanto</p>
    </div>
  );
}
