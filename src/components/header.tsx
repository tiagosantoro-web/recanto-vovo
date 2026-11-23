"use client";

import { useEffect, useState } from "react";
import { linkWhatsapp, site } from "@/data/site";
import { CloseIcon, MenuIcon, WhatsappIcon } from "./icons";
import { Logo } from "./logo";

const LINKS = [
  { href: "#recanto", rotulo: "O Recanto" },
  { href: "#espaco", rotulo: "Nosso espaço" },
  { href: "#galeria", rotulo: "Galeria" },
  { href: "#capacidade", rotulo: "Capacidade" },
  { href: "#localizacao", rotulo: "Localização" },
  { href: "#contato", rotulo: "Contato" },
];

/** Cabeçalho fixo: transparente sobre a capa e branco depois de rolar. */
export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (event: KeyboardEvent) => event.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  const solido = rolou || aberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        solido ? "bg-white/95 shadow-[0_1px_0_rgb(23_37_30/0.08)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" aria-label={`${site.nome}, voltar ao início`} onClick={() => setAberto(false)}>
          <Logo tom={solido ? "escuro" : "claro"} />
        </a>

        <nav aria-label="Seções do site" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${solido ? "text-ink/75 hover:text-forest" : "text-white/85 hover:text-white"}`}
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsapp(site.mensagens.disponibilidade)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-white transition-colors hover:bg-leaf sm:inline-flex"
          >
            <WhatsappIcon className="size-4" />
            Reservar
          </a>
          <button
            type="button"
            onClick={() => setAberto((valor) => !valor)}
            aria-expanded={aberto}
            aria-controls="menu-celular"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className={`grid size-11 cursor-pointer place-items-center rounded-full border transition-colors lg:hidden ${
              solido ? "border-line text-forest" : "border-white/30 text-white"
            }`}
          >
            {aberto ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {aberto ? (
        <nav id="menu-celular" aria-label="Seções do site" className="border-t border-line bg-white px-5 pb-6 lg:hidden">
          <ul className="divide-y divide-line">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setAberto(false)} className="flex min-h-13 items-center text-base font-semibold text-forest">
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={linkWhatsapp(site.mensagens.disponibilidade)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-13 items-center justify-center gap-2 rounded-full bg-whatsapp text-base font-semibold text-white"
          >
            <WhatsappIcon className="size-5" />
            Consultar disponibilidade
          </a>
        </nav>
      ) : null}
    </header>
  );
}

/** Botão flutuante do WhatsApp, sempre visível. */
export function WhatsappFlutuante() {
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com o ${site.nome} pelo WhatsApp`}
      className="whatsapp-pulse fixed right-4 bottom-4 z-30 grid size-15 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-8" />
    </a>
  );
}
