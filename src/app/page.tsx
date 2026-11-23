import { ConsultaDatas } from "@/components/consulta-datas";
import { ProximosFeriados } from "@/components/feriados";
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
  UsersIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Emblema, Logo } from "@/components/logo";
import { Paisagem, type Clima } from "@/components/paisagem";
import { Reveal } from "@/components/reveal";
import { fotoCapa, fotoRecanto, galeria } from "@/data/fotos";
import { enderecoCompleto, linkGoogleMaps, linkInstagram, linkMapaEmbutido, linkRota, linkWhatsapp, site } from "@/data/site";
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

const ocasioes: { titulo: string; texto: string; clima: Clima }[] = [
  { titulo: "Encontro de família", texto: "Avós, filhos e netos reunidos, sem pressa de ir embora.", clima: "dia" },
  { titulo: "Fim de semana com os amigos", texto: "Dois dias de conversa boa, risada e descanso.", clima: "amanhecer" },
  { titulo: "Aniversários e comemorações", texto: "Celebre as datas importantes num lugar só de vocês.", clima: "entardecer" },
  { titulo: "Feriadão longe da cidade", texto: "Troque o trânsito pelo silêncio e pelo verde.", clima: "noite" },
];

const passos = [
  { titulo: "Escolha a data", texto: "Fim de semana, feriado ou um dia especial." },
  { titulo: "Chame no WhatsApp", texto: "A mensagem já vai pronta com data e número de pessoas." },
  { titulo: "Confirme e aproveite", texto: "Combine os detalhes direto com o Recanto e venha descansar." },
];

const botaoWhats =
  "inline-flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-6 text-sm font-bold tracking-[0.06em] text-white uppercase shadow-[0_14px_30px_-14px_rgb(18_140_75/0.9)] transition-transform hover:-translate-y-0.5 sm:text-[15px]";

function Estrelas({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-[#f5b301] ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  const fotos = fotosDisponiveis();
  const disponibilidade = linkWhatsapp(site.mensagens.disponibilidade);
  const nota = site.avaliacaoGoogle;

  return (
    <>
      <Header />
      <main>
        {/* SEÇÃO 1 – CAPA */}
        <section id="inicio" className="relative isolate overflow-hidden bg-forest-deep text-white">
          <div className="hero-zoom absolute inset-0 -z-20">
            <Foto espaco={fotoCapa} src={fotos[fotoCapa.arquivo]} prioridade animada etiqueta="nenhuma" />
          </div>
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/55 via-forest-deep/25 to-forest-deep/85 lg:bg-gradient-to-r lg:from-forest-deep/85 lg:via-forest-deep/45 lg:to-forest-deep/10"
            aria-hidden
          />
          <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pt-28 pb-14 sm:px-8 lg:grid-cols-[1.25fr_minmax(0,25rem)] lg:gap-14 lg:pt-32 lg:pb-20">
            <div>
              <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-[0.16em] uppercase backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7be3a5] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#7be3a5]" />
                </span>
                Reservas abertas · fins de semana e feriados
              </p>
              <h1
                className="animate-rise mt-6 font-display text-[2.9rem] leading-[0.98] font-semibold text-balance drop-shadow-[0_2px_20px_rgb(0_0_0/0.25)] sm:text-7xl lg:text-[5.4rem]"
                style={{ animationDelay: "100ms" }}
              >
                Seu refúgio de tranquilidade em meio à natureza.
              </h1>
              <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl" style={{ animationDelay: "200ms" }}>
                Desfrute de momentos especiais com sua família e amigos no {site.nome}.
              </p>
              <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "300ms" }}>
                <a href={disponibilidade} target="_blank" rel="noopener noreferrer" className={botaoWhats}>
                  <WhatsappIcon className="size-5" />
                  Consultar disponibilidade
                </a>
                <a
                  href="#recanto"
                  className="inline-flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 bg-white/10 px-6 text-sm font-bold tracking-[0.06em] text-white uppercase backdrop-blur transition-colors hover:bg-white/20 sm:text-[15px]"
                >
                  Conheça nosso espaço
                  <ArrowDownIcon className="size-4" />
                </a>
              </div>
              {nota ? (
                <a
                  href={linkGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-rise mt-8 inline-flex items-center gap-3 text-sm text-white/85 hover:text-white"
                  style={{ animationDelay: "400ms" }}
                >
                  <Estrelas />
                  <span>
                    <strong className="font-bold text-white">{nota.nota}</strong> no Google · {nota.total} avaliações
                  </span>
                </a>
              ) : null}
            </div>
            <div className="animate-rise" style={{ animationDelay: "350ms" }}>
              <ConsultaDatas />
            </div>
          </div>
        </section>

        {/* Faixa de números */}
        <section aria-label="O Recanto em números" className="border-b border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 divide-line px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
            {[
              { valor: String(site.capacidade.pernoite), rotulo: "pessoas para dormir", icone: <MoonIcon className="size-5" /> },
              { valor: String(site.capacidade.dia), rotulo: "pessoas para passar o dia", icone: <SunIcon className="size-5" /> },
              { valor: "70 km", rotulo: "de São Paulo, aproximadamente", icone: <PinIcon className="size-5" /> },
              nota
                ? { valor: `${nota.nota}★`, rotulo: "de nota no Google", icone: <StarIcon className="size-5" /> }
                : { valor: "100%", rotulo: "reservado para o seu grupo", icone: <LeafIcon className="size-5" /> },
            ].map((item) => (
              <li key={item.rotulo} className="flex items-center gap-3 py-6 lg:justify-center lg:px-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lake-soft text-lake">{item.icone}</span>
                <span>
                  <span className="block font-display text-3xl leading-none font-semibold text-forest">{item.valor}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">{item.rotulo}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* SEÇÃO 2 – CONHEÇA O RECANTO */}
        <section id="recanto" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
                <Foto espaco={fotoRecanto} src={fotos[fotoRecanto.arquivo]} />
              </div>
              {nota ? (
                <a
                  href={linkGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -right-2 -bottom-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lift sm:right-6 lg:-right-8"
                >
                  <span className="font-display text-4xl leading-none font-semibold text-forest">{nota.nota}</span>
                  <span className="text-sm leading-snug text-muted">
                    <Estrelas />
                    <span className="block">no Google</span>
                  </span>
                </a>
              ) : null}
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <p className="eyebrow">Conheça o Recanto</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest text-balance sm:text-6xl">
                Um lugar especial para viver bons momentos.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">{site.descricao}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Ambiente reservado", "Cercado de natureza", "Fins de semana e feriados", `${site.distanciaSP[0].toUpperCase()}${site.distanciaSP.slice(1)}`].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold text-forest">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sage text-leaf">
                      <LeafIcon className="size-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={disponibilidade} target="_blank" rel="noopener noreferrer" className={`${botaoWhats} mt-10`}>
                <WhatsappIcon className="size-5" />
                Quero reservar
              </a>
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 3 – NOSSO ESPAÇO */}
        <section id="espaco" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Nosso espaço</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest sm:text-6xl">Pensado para reunir e descansar.</h2>
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
                <div className="relative isolate flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-3xl p-7 text-white">
                  <Paisagem clima="entardecer" className="absolute inset-0 -z-10 size-full" />
                  <div className="absolute inset-0 -z-10 bg-forest-deep/45" />
                  <p className="font-display text-3xl leading-tight font-semibold">Sua próxima reunião de família começa aqui.</p>
                  <a
                    href={disponibilidade}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-forest transition-colors hover:bg-sage"
                  >
                    <WhatsappIcon className="size-4 text-whatsapp" />
                    Consultar datas
                  </a>
                </div>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* Ocasiões */}
        <section aria-labelledby="ocasioes" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Para cada ocasião</p>
              <h2 id="ocasioes" className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest sm:text-6xl">
                Todo motivo é bom para reunir quem você ama.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ocasioes.map((ocasiao, indice) => (
                <Reveal as="li" key={ocasiao.titulo} delay={indice * 90}>
                  <a
                    href={linkWhatsapp(`Olá! Vim pelo site do Recanto Vó Tereza e gostaria de consultar a disponibilidade para: ${ocasiao.titulo.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-white shadow-soft sm:aspect-[4/5]"
                  >
                    <Paisagem clima={ocasiao.clima} className="absolute inset-0 -z-20 size-full transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
                    <h3 className="font-display text-3xl leading-tight font-semibold">{ocasiao.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{ocasiao.texto}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white">
                      Consultar datas
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* SEÇÃO 4 – GALERIA */}
        <section id="galeria" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Galeria</p>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest sm:text-6xl">Conheça cada cantinho.</h2>
              </div>
              <a
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-forest transition-colors hover:border-forest"
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
        <section id="capacidade" className="relative isolate overflow-hidden bg-forest py-20 text-white sm:py-28">
          <Paisagem clima="noite" className="absolute inset-0 -z-20 size-full opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/95 via-forest/80 to-forest/95" />
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-sky">Capacidade e locação</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">O espaço ideal para reunir quem você ama.</h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { numero: site.capacidade.pernoite, texto: "Capacidade para dormir", icone: <MoonIcon className="size-6" /> },
                { numero: site.capacidade.dia, texto: "Capacidade para passar o dia", icone: <SunIcon className="size-6" /> },
              ].map((item, indice) => (
                <Reveal key={item.texto} delay={indice * 120}>
                  <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-8 backdrop-blur-sm sm:p-10">
                    <span className="text-sky">{item.icone}</span>
                    <p className="mt-4 flex items-baseline gap-3">
                      <span className="font-display text-8xl leading-none font-semibold sm:text-9xl">{item.numero}</span>
                      <span className="text-xl text-white/75">pessoas</span>
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white/90">{item.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <p className="text-xs font-bold tracking-[0.22em] text-sky uppercase">Como reservar</p>
              <ol className="mt-6 grid gap-4 md:grid-cols-3">
                {passos.map((passo, indice) => (
                  <li key={passo.titulo} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/30 font-display text-2xl font-semibold">
                      {indice + 1}
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-semibold">{passo.titulo}</span>
                      <span className="mt-1 block leading-relaxed text-white/75">{passo.texto}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-12 flex flex-col gap-6 border-t border-white/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-2">
                {["Finais de semana", "Feriados", "Momentos especiais em família e entre amigos"].map((item) => (
                  <li key={item} className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
              <a href={disponibilidade} target="_blank" rel="noopener noreferrer" className={`${botaoWhats} shrink-0`}>
                <WhatsappIcon className="size-5" />
                Consultar datas disponíveis
              </a>
            </Reveal>
          </div>
        </section>

        {/* Próximos feriados */}
        <section id="feriados" aria-labelledby="feriados-titulo" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Próximos feriados</p>
                <h2 id="feriados-titulo" className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest sm:text-6xl">
                  Já pensou onde vai passar o próximo feriadão?
                </h2>
              </div>
              <p className="max-w-xs text-muted">Planeje com antecedência: toque no feriado e consulte a data pelo WhatsApp.</p>
            </Reveal>
            <Reveal className="mt-10">
              <ProximosFeriados />
            </Reveal>
          </div>
        </section>

        {/* SEÇÃO 6 – LOCALIZAÇÃO */}
        <section id="localizacao" className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Localização</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-forest sm:text-6xl">Estamos esperando por você!</h2>
              <address className="mt-6 flex items-start gap-3 text-lg leading-relaxed text-muted not-italic">
                <PinIcon className="mt-1 size-6 shrink-0 text-lake" />
                <span>
                  {site.endereco.rua}
                  <br />
                  {site.endereco.bairro}, {site.endereco.cidade} – {site.endereco.estado}
                </span>
              </address>
              <p className="mt-3 flex items-center gap-3 text-muted">
                <RouteIcon className="size-6 shrink-0 text-lake" />
                {site.distanciaSP[0].toUpperCase() + site.distanciaSP.slice(1)}.
              </p>
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
        <section id="contato" className="px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-white sm:px-12 sm:py-24">
              <Paisagem clima="entardecer" animada className="absolute inset-0 -z-20 size-full" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/70 via-forest-deep/45 to-forest-deep/80" />
              <UsersIcon className="mx-auto size-9 text-white/80" />
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
                Vamos planejar seu próximo momento especial?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
                Entre em contato conosco, consulte a disponibilidade e venha aproveitar momentos inesquecíveis no {site.nome}.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <a
                  href={linkWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-full bg-whatsapp px-8 text-base font-bold tracking-[0.08em] text-white uppercase shadow-lift transition-transform hover:-translate-y-0.5 sm:text-lg"
                >
                  <WhatsappIcon className="size-6" />
                  Fale conosco pelo WhatsApp
                </a>
                <p className="text-white/85">WhatsApp: {site.whatsappExibicao}</p>
                <a
                  href={linkInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  <InstagramIcon className="size-5" />@{site.instagram}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* SEÇÃO 8 – RODAPÉ */}
      <footer className="bg-forest-deep pb-20 text-white sm:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tom="claro" />
            <p className="mt-5 max-w-xs leading-relaxed text-white/65">{site.descricao}</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-sky uppercase">Endereço</p>
            <p className="mt-3 leading-relaxed text-white/80">{enderecoCompleto}</p>
            <a href={linkRota} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sky hover:text-white">
              <RouteIcon className="size-4" />
              Como chegar
            </a>
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
          <p className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-6 pr-24 text-sm text-white/50 sm:px-8">
            <Emblema tom="claro" className="size-6 opacity-60" />© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsappFlutuante />
    </>
  );
}
