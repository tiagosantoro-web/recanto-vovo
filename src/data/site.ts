/*
  DADOS DO RECANTO VÓ TEREZA
  Edite aqui e gere o site de novo (veja o README). Só entram informações confirmadas:
  não acrescente preços, comodidades ou serviços sem confirmar com os donos.
*/
export const site = {
  nome: "Recanto Vó Tereza",
  descricao:
    "Um espaço reservado e tranquilo em meio à natureza, perfeito para descansar, reunir a família e aproveitar momentos especiais.",

  endereco: {
    rua: "Rua Ayub Abib Riskallah, nº 38",
    bairro: "Bairro Sebandilha",
    cidade: "Mairinque",
    estado: "SP",
    // Texto usado no mapa e no botão de rota. O nome ajuda o Google a achar o ponto exato.
    busca: "Recanto Vó Tereza, Rua Ayub Abib Riskallah, 38 - Sebandilha, Mairinque - SP",
  },

  capacidade: {
    pernoite: 20,
    dia: 30,
  },

  // WhatsApp: DDI 55 + DDD + número, só dígitos.
  whatsapp: "5511989855865",
  whatsappExibicao: "(11) 98985-5865",
  instagram: "chacararecantovotereza",

  // Mensagens que já abrem escritas no WhatsApp.
  mensagens: {
    geral: "Olá! Vim pelo site do Recanto Vó Tereza e gostaria de mais informações.",
    disponibilidade: "Olá! Vim pelo site do Recanto Vó Tereza e gostaria de consultar a disponibilidade de datas.",
  },

  // Nota pública do Google Maps (vista em 23/11/2026: 5,0 com 5 avaliações).
  // Atualize de vez em quando; null esconde o selo.
  avaliacaoGoogle: { nota: "5,0", total: 5 } as { nota: string; total: number } | null,

  // Distância aproximada até a capital (Mairinque fica a cerca de 70 km de São Paulo).
  distanciaSP: "cerca de 70 km de São Paulo",

  // Endereço público do site (sem barra no final). Usado no Google e na prévia de links.
  siteUrl: "https://tiagosantoro-web.github.io/recanto-vo-tereza",
};

export const linkGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Recanto Vó Tereza, Mairinque - SP")}`;

export function linkWhatsapp(mensagem: string = site.mensagens.geral): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const linkInstagram = `https://www.instagram.com/${site.instagram}/`;
export const enderecoCompleto = `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade} – ${site.endereco.estado}`;
export const linkRota = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.endereco.busca)}`;
export const linkMapaEmbutido = `https://maps.google.com/maps?q=${encodeURIComponent(site.endereco.busca)}&z=16&output=embed`;
