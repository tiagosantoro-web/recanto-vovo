/*
  PRÓXIMOS FERIADOS NACIONAIS (com sugestão de estadia: o feriado e o fim de semana colado nele).
  Os que já passaram somem sozinhos do site. Acrescente os do ano seguinte quando quiser.
  Datas conferidas em 23/11/2026 (Páscoa 2027: 28/03).
*/
export type Feriado = {
  nome: string;
  /** Data do feriado (AAAA-MM-DD). */
  data: string;
  /** Sugestão de estadia: primeiro e último dia. */
  de: string;
  ate: string;
};

export const feriados: Feriado[] = [
  { nome: "Natal", data: "2026-12-25", de: "2026-12-25", ate: "2026-12-27" },
  { nome: "Réveillon", data: "2027-01-01", de: "2026-12-31", ate: "2027-01-03" },
  { nome: "Carnaval", data: "2027-02-09", de: "2027-02-06", ate: "2027-02-10" },
  { nome: "Páscoa", data: "2027-03-26", de: "2027-03-26", ate: "2027-03-28" },
  { nome: "Tiradentes", data: "2027-04-21", de: "2027-04-21", ate: "2027-04-21" },
  { nome: "Dia do Trabalho", data: "2027-05-01", de: "2027-05-01", ate: "2027-05-02" },
  { nome: "Corpus Christi", data: "2027-05-27", de: "2027-05-27", ate: "2027-05-30" },
  { nome: "Independência", data: "2027-09-07", de: "2027-09-04", ate: "2027-09-07" },
  { nome: "Nossa Senhora Aparecida", data: "2027-10-12", de: "2027-10-09", ate: "2027-10-12" },
  { nome: "Finados", data: "2027-11-02", de: "2027-10-30", ate: "2027-11-02" },
  { nome: "Proclamação da República", data: "2027-11-15", de: "2027-11-13", ate: "2027-11-15" },
  { nome: "Consciência Negra", data: "2027-11-20", de: "2027-11-20", ate: "2027-11-21" },
  { nome: "Natal", data: "2027-12-25", de: "2027-12-24", ate: "2027-12-26" },
];
