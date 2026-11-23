"use client";

import { useSyncExternalStore } from "react";
import { feriados } from "@/data/feriados";
import { linkWhatsapp } from "@/data/site";
import { dataCompleta, diaCurto, diasEntre, hojeSP } from "@/lib/datas";
import { ArrowRightIcon, CalendarIcon } from "./icons";

const semInscricao = () => () => {};
const QUANTOS = 6;

/** Próximos feriados (os que já passaram somem), cada um com o atalho para consultar no WhatsApp. */
export function ProximosFeriados() {
  // Antes de o navegador saber a data de hoje, usa a data em que o site foi gerado.
  const hoje = useSyncExternalStore(semInscricao, hojeSP, () => "2026-11-23");
  const proximos = feriados.filter((feriado) => feriado.ate >= hoje).slice(0, QUANTOS);
  if (!proximos.length) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {proximos.map((feriado, indice) => {
        const dias = diasEntre(feriado.de, feriado.ate);
        const periodo = dias > 1 ? `${diaCurto(feriado.de)} a ${diaCurto(feriado.ate)}` : diaCurto(feriado.de);
        const texto = `Olá! Vim pelo site do Recanto Vó Tereza e gostaria de consultar a disponibilidade para o feriado de ${feriado.nome} (${dataCompleta(feriado.de)}${dias > 1 ? ` a ${dataCompleta(feriado.ate)}` : ""}).`;
        return (
          <li key={`${feriado.nome}-${feriado.data}`}>
            <a
              href={linkWhatsapp(texto)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-full items-center gap-4 rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                indice === 0 ? "border-forest bg-forest text-white" : "border-line bg-white text-ink hover:border-sage-deep"
              }`}
            >
              <span
                className={`grid size-14 shrink-0 place-items-center rounded-2xl text-center leading-none ${indice === 0 ? "bg-white/12" : "bg-lake-soft text-lake"}`}
              >
                <span>
                  <span className="block font-display text-2xl font-semibold">{feriado.de.slice(8)}</span>
                  <span className="block text-[0.6rem] font-bold tracking-[0.1em] uppercase">
                    {["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"][Number(feriado.de.slice(5, 7)) - 1]}
                  </span>
                </span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xl leading-tight font-semibold">{feriado.nome}</span>
                  {dias >= 3 ? (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.62rem] font-bold tracking-[0.1em] uppercase ${indice === 0 ? "bg-sky/25 text-white" : "bg-sage text-leaf"}`}
                    >
                      Feriadão · {dias} dias
                    </span>
                  ) : null}
                </span>
                <span className={`mt-1 flex items-center gap-1.5 text-sm ${indice === 0 ? "text-white/75" : "text-muted"}`}>
                  <CalendarIcon className="size-4 shrink-0" />
                  {periodo}
                </span>
              </span>
              <ArrowRightIcon className={`size-5 shrink-0 transition-transform group-hover:translate-x-1 ${indice === 0 ? "text-white" : "text-lake"}`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
