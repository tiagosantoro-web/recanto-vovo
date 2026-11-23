import { Foto } from "@/components/foto";
import { Galeria } from "@/components/galeria";
import { Header, WhatsappFlutuante } from "@/components/header";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CalendarIcon,
  InstagramIcon,
  LeafIcon,
  MoonIcon,
  PinIcon,
  RouteIcon,
  StarIcon,
  SunIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Emblema, Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { fotoCapa, fotoRecanto, galeria } from "@/data/fotos";
import { enderecoCompleto, linkInstagram, linkMapaEmbutido, linkRota, linkWhatsapp, site } from "@/data/site";
import { fotosDisponiveis } from "@/lib/fotos";

const destaques = [
  {
    icone: <MoonIcon className="size-6" />,
    titulo: `Hospedagem para até ${site.capacidade.pernoite} pessoas`,
    texto: "Pernoite com espaço para reunir a família ou o grupo de amigos.",
  },
  {
    icone: <SunIcon className="size-6" />,
    titulo: `Até ${site.capacidade.dia} pessoas durante o dia`,
    texto: "Ideal para passar o dia em boa companhia, ao ar livre.",
  },
  {
    icone: <CalendarIcon className="size-6" />,
    titulo: "Locação para finais de semana",
    texto: "Seu fim de semana de descanso, longe da correria.",
  },
  {
    icone: <StarIcon className="size-6" />,
    titulo: "Disponível em feriados",
    texto: "Aproveite os feriados para celebrar e descansar.",
  },
  {
    icone: <LeafIcon className="size-6" />,
    titulo: "Ambiente reservado e tranquilo",
    texto: "Privacidade e sossego, cercados pela natureza.",
  },
];

const botaoPrincipal =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 text-[15px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_14px_30px_-14px_rgb(18_140_75/0.9)] transition-transform hover:-translate-y-0.5";

export default function Home() {
  const fotos = fotosDisponiveis();
  const disponibilidade = linkWhatsapp(site.mensagens.disponibilidade);

  return (
    <>
      <Header />
      <main>
        {/* SEÇÃO 1 – CAPA */}
        <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-deep text-white">
          <div className="hero-zoom absolute inset-0 -z-20">
            <Foto espaco={fotoCapa} src={fotos[fotoCapa.arquivo]} escuro prioridade />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep/90 via-forest-deep/35 to-forest-deep/50" aria-hidden />
          <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pb-24">
            <p className="animate-rise text-xs font-bold tracking-[0.3em] text-white/80 uppercase">
              {site.endereco.cidade} · {site.endereco.estado}
            </p>
            <h1
              className="animate-rise mt-4 max-w-3xl font-display text-[2.7rem] leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              Seu refúgio de tranquilidade em meio à natureza.
            </h1>
            <p className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl" style={{ animationDelay: "200ms" }}>
              Desfrute de momentos especiais com sua família e amigos no {site.nome}.
            </p>
            <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
              <a
                href="#recanto"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-[15px] font-bold tracking-[0.08em] text-white uppercase backdrop-blur transition-colors hover:bg-white/20"
              >
                Conheça nosso espaço
                <ArrowDownIcon className="size-4" />
              </a>
              <a href={disponibilidade} target="_blank" rel="noopener noreferrer" className={botaoPrincipal}>
                <WhatsappIcon className="size-5" />
                Consultar disponibilidade
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 – CONHEÇA O RECANTO */}
        <section id="recanto" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Conheça o Recanto</p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-forest text-balance sm:text-5xl">
                Um lugar especial para viver bons momentos.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">{site.descricao}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Aqui o tempo passa mais devagar: um ambiente reservado, cercado de verde, para descansar, conversar sem pressa e
                reunir quem você ama.
              </p>
              <a
                href={disponibilidade}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-2 font-semibold text-lake underline decoration-lake/30 underline-offset-[6px] hover:decoration-lake"
              >
                Consultar datas pelo WhatsApp
                <ArrowRightIcon className="size-4" />
              </a>
            </Reveal>
            <Reveal delay={120} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
                <Foto espaco={fotoRecanto} src={fotos[fotoRecanto.arquivo]} />
              </div>
              <div className="absolute -bottom-6 -left-2 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft sm:flex lg:-left-8">
                <Emblema className="size-10" />
                <p className="text-sm leading-snug text-muted">
                  <span className="block font-semibold text-forest">Natureza e sossego</span>
                  {site.endereco.bairro}, {site.endereco.cidade}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 3 – NOSSO ESPAÇO */}
        <section id="espaco" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Nosso espaço</p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-forest sm:text-5xl">
                Pensado para reunir e descansar.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destaques.map((item, indice) => (
                <Reveal as="li" key={item.titulo} delay={(indice % 3) * 90} className="h-full">
                  <div className="group flex h-full flex-col rounded-3xl border border-line bg-mist p-7 transition duration-300 hover:-translate-y-1 hover:border-sage-deep hover:bg-white hover:shadow-soft">
                    <span className="grid size-13 place-items-center rounded-2xl bg-lake-soft text-lake transition-colors group-hover:bg-forest group-hover:text-white">
                      {item.icone}
                    </span>
                    <h3 className="mt-6 font-display text-2xl leading-snug font-semibold text-forest">{item.titulo}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.texto}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal as="li" delay={180} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl bg-forest p-7 text-white">
                  <p className="font-display text-2xl leading-snug font-semibold">Quer saber mais sobre o espaço?</p>
                  <a
                    href={linkWhatsapp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-forest transition-colors hover:bg-sage"
                  >
                    <WhatsappIcon className="size-4 text-whatsapp" />
                    Fale com a gente
                  </a>
                </div>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* SEÇÃO 4 – GALERIA */}
        <section id="galeria" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Galeria</p>
                <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-forest sm:text-5xl">Conheça cada cantinho.</h2>
              </div>
              <a
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lake hover:text-forest"
              >
                <InstagramIcon className="size-5" />
                Mais fotos no @{site.instagram}
              </a>
            </Reveal>
            <Reveal className="mt-10">
              <Galeria espacos={galeria} fotos={fotos} />
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 5 – CAPACIDADE E LOCAÇÃO */}
        <section id="capacidade" className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
          <Emblema tom="claro" className="pointer-events-none absolute -right-24 -bottom-24 size-[26rem] opacity-[0.06]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-sky">Capacidade e locação</p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-balance sm:text-5xl">
                O espaço ideal para reunir quem você ama.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { numero: site.capacidade.pernoite, legenda: "pessoas", texto: "Capacidade para dormir", icone: <MoonIcon className="size-6" /> },
                { numero: site.capacidade.dia, legenda: "pessoas", texto: "Capacidade para passar o dia", icone: <SunIcon className="size-6" /> },
              ].map((item, indice) => (
                <Reveal key={item.texto} delay={indice * 120}>
                  <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 sm:p-10">
                    <span className="text-sky">{item.icone}</span>
                    <p className="mt-4 flex items-baseline gap-3">
                      <span className="font-display text-7xl leading-none font-semibold sm:text-8xl">{item.numero}</span>
                      <span className="text-lg text-white/70">{item.legenda}</span>
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white/90">{item.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-2">
                {["Finais de semana", "Feriados", "Momentos especiais em família e entre amigos"].map((item) => (
                  <li key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
              <a href={disponibilidade} target="_blank" rel="noopener noreferrer" className={`${botaoPrincipal} shrink-0`}>
                <WhatsappIcon className="size-5" />
                Consultar datas disponíveis
              </a>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 6 – LOCALIZAÇÃO */}
        <section id="localizacao" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-forest sm:text-5xl">Estamos esperando por você!</h2>
              <address className="mt-6 flex items-start gap-3 text-lg leading-relaxed text-muted not-italic">
                <PinIcon className="mt-1 size-6 shrink-0 text-lake" />
                <span>
                  {site.endereco.rua}
                  <br />
                  {site.endereco.bairro}, {site.endereco.cidade} – {site.endereco.estado}
                </span>
              </address>
              <a
                href={linkRota}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-lake px-7 text-[15px] font-bold tracking-[0.08em] text-white uppercase transition-transform hover:-translate-y-0.5"
              >
                <RouteIcon className="size-5" />
                Abrir rota no Google Maps
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-sage shadow-soft sm:aspect-[16/10]">
                <iframe
                  title={`Mapa: ${site.nome}`}
                  src={linkMapaEmbutido}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 7 – CONTATO E RESERVAS */}
        <section id="contato" className="px-5 pb-20 sm:px-8 sm:pb-28">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-lake px-6 py-16 text-center text-white sm:px-12 sm:py-20">
              <Emblema tom="claro" className="pointer-events-none absolute -top-20 -left-20 size-80 opacity-[0.07]" />
              <h2 className="relative mx-auto max-w-3xl font-display text-4xl leading-tight font-semibold text-balance sm:text-6xl">
                Vamos planejar seu próximo momento especial?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
                Entre em contato conosco, consulte a disponibilidade e venha aproveitar momentos inesquecíveis no {site.nome}.
              </p>
              <div className="relative mt-10 flex flex-col items-center gap-4">
                <a
                  href={linkWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-full bg-whatsapp px-8 text-base font-bold tracking-[0.08em] text-white uppercase shadow-lift transition-transform hover:-translate-y-0.5 sm:text-lg"
                >
                  <WhatsappIcon className="size-6" />
                  Fale conosco pelo WhatsApp
                </a>
                <p className="text-white/80">WhatsApp: {site.whatsappExibicao}</p>
                <a
                  href={linkInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <InstagramIcon className="size-5" />@{site.instagram}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* SEÇÃO 8 – RODAPÉ */}
      <footer className="bg-forest-deep text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tom="claro" />
            <p className="mt-5 max-w-xs leading-relaxed text-white/65">{site.descricao}</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-sky uppercase">Endereço</p>
            <p className="mt-3 leading-relaxed text-white/80">{enderecoCompleto}</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-sky uppercase">Contato</p>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>
                <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                  <WhatsappIcon className="size-4" />
                  {site.whatsappExibicao}
                </a>
              </li>
              <li>
                <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                  <InstagramIcon className="size-4" />@{site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-5 py-6 pr-24 text-sm text-white/50 sm:px-8">
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsappFlutuante />
    </>
  );
}
