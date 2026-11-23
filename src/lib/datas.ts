/** Datas "AAAA-MM-DD" tratadas sem fuso, para não trocar de dia. */
function utc(data: string): Date {
  const [ano, mes, dia] = data.split("-").map(Number);
  return new Date(Date.UTC(ano, mes - 1, dia));
}

const SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

/** "sex, 25/12" */
export function diaCurto(data: string): string {
  const d = utc(data);
  return `${SEMANA[d.getUTCDay()]}, ${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

/** "25/12/2026" */
export function dataCompleta(data: string): string {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

/** Número de dias entre duas datas, contando os dois. */
export function diasEntre(de: string, ate: string): number {
  return Math.round((utc(ate).getTime() - utc(de).getTime()) / 86_400_000) + 1;
}

/** Hoje em São Paulo, no formato AAAA-MM-DD. */
export function hojeSP(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
}

export function somarDias(data: string, dias: number): string {
  const d = utc(data);
  d.setUTCDate(d.getUTCDate() + dias);
  return d.toISOString().slice(0, 10);
}
