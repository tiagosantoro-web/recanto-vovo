# Recanto Vó Tereza

Site de apresentação da chácara **Recanto Vó Tereza** (Rua Ayub Abib Riskallah, nº 38, Bairro Sebandilha, Mairinque – SP). O objetivo é apresentar o espaço e levar o visitante a consultar datas pelo WhatsApp.

Página única, responsiva, pensada para vender pelos olhos e converter no WhatsApp:

1. **Capa** com paisagem (ou a foto de capa), selo "Reservas abertas", título, "Consultar disponibilidade" e "Conheça nosso espaço", nota do Google e o cartão **Consulte sua data**. Nesse cartão o visitante escolhe hospedagem (até 20) ou passar o dia (até 30), as datas e o número de pessoas, e o WhatsApp abre com tudo escrito.
2. **Faixa de números**: 20 para dormir, 30 para o dia, cerca de 70 km de São Paulo e a nota 5,0 no Google.
3. **Conheça o Recanto**: foto (Imagem 01), texto, lista de destaques e "Quero reservar".
4. **Nosso espaço**: cards de hospedagem, dia, finais de semana, feriados e ambiente reservado.
5. **Para cada ocasião**: encontro de família, fim de semana com amigos, aniversários e comemorações, e feriadão. Cada um abre o WhatsApp com a ocasião escrita.
6. **Galeria** com 7 espaços de foto em mosaico; as fotos reais abrem ampliadas.
7. **Capacidade e locação**: 20 e 30 em destaque, "Como reservar" em 3 passos e "Consultar datas disponíveis".
8. **Próximos feriados** ([src/data/feriados.ts](src/data/feriados.ts)): os 6 próximos, com o período do feriadão. Os que já passaram somem sozinhos. Tocar num feriado abre o WhatsApp com a data.
9. **Localização**: endereço, distância, mapa do Google (o pino cai no Recanto Vó Tereza) e rota.
10. **Contato e reservas**: WhatsApp e Instagram.
11. **Rodapé**: nome, endereço, WhatsApp, Instagram e direitos reservados.

No celular, depois da capa, uma barra fixa embaixo mostra "Consultar datas" e o WhatsApp; antes dela, e no computador, fica o botão flutuante do WhatsApp. Também tem menu fixo, rolagem suave, animações leves, identidade visual própria (logotipo em SVG) e SEO básico. O SEO inclui título, descrição, imagem de prévia, dados estruturados `LodgingBusiness`, `sitemap.xml` e `robots.txt`.

**Enquanto não há fotos reais**, cada espaço mostra uma **paisagem ilustrada** (céu, serra, mata e lago, em horários diferentes) com a etiqueta da foto no canto, por exemplo "Foto 01 – Fachada e entrada". É claramente uma ilustração e não mostra nenhuma instalação da chácara. Ao salvar a foto real, ela entra no lugar.

**Só informações confirmadas**: não há preços nem comodidades inventadas. Fora do briefing entraram três dados públicos, que dá para mudar em [src/data/site.ts](src/data/site.ts):
- a nota do Google, 5,0 com 5 avaliações, vista em 23/11/2026; `avaliacaoGoogle: null` esconde o selo;
- a distância aproximada de São Paulo;
- os feriados nacionais.

## Onde editar

| O quê | Arquivo |
|---|---|
| Nome, descrição, endereço, capacidade, WhatsApp, Instagram, mensagens prontas, nota do Google, distância | [src/data/site.ts](src/data/site.ts) |
| Lista dos espaços de foto (nomes dos arquivos e legendas) | [src/data/fotos.ts](src/data/fotos.ts) |
| Próximos feriados | [src/data/feriados.ts](src/data/feriados.ts) |
| Textos e seções | [src/app/page.tsx](src/app/page.tsx) |
| Cores e fontes | [src/app/globals.css](src/app/globals.css) |
| Logotipo | [src/components/logo.tsx](src/components/logo.tsx) e [src/app/icon.svg](src/app/icon.svg) (ícone da aba) |

## Como colocar as fotos reais

Salve as fotos em `public/fotos/` com estes nomes (pode ser `.jpg`, `.jpeg`, `.png` ou `.webp`) e gere o site de novo. Enquanto uma foto não existir, aparece a paisagem ilustrada com a etiqueta da foto, nunca uma imagem quebrada.

| Arquivo | Onde aparece | Formato sugerido |
|---|---|---|
| `capa.jpg` | Fundo da capa | Horizontal, 1920 × 1280 ou maior |
| `recanto.jpg` | Imagem 01, seção "Conheça o Recanto" | Vertical, 1200 × 1500 |
| `galeria-01.jpg` | Foto 01 – Fachada e entrada (destaque grande) | Quadrada ou horizontal, 1600 px |
| `galeria-02.jpg` | Foto 02 – Área externa | Horizontal, 1200 px |
| `galeria-03.jpg` | Foto 03 – Piscina ou área de lazer | Horizontal, 1200 px |
| `galeria-04.jpg` | Foto 04 – Área verde e natureza (faixa larga) | Horizontal, 1600 px |
| `galeria-05.jpg` | Foto 05 – Espaço interno | Horizontal, 1200 px |
| `galeria-06.jpg` | Foto 06 – Quartos e acomodações | Horizontal, 1200 px |
| `galeria-07.jpg` | Foto 07 – Outros ambientes (faixa larga) | Horizontal, 1600 px |

Dica: fotos com até 300–400 KB carregam rápido no celular. Se o local não tiver piscina, troque a legenda da Foto 03 em `src/data/fotos.ts`.

## Rodar e publicar

```bash
npm install
npm run dev          # visualizar em http://localhost:3000
npm run build        # gera a pasta out/ (site estático)
```

Para o GitHub Pages (repositório `recanto-vo-tereza`), gere com o caminho do repositório:

```bash
BASE_PATH=/recanto-vo-tereza npm run build
```

No Git Bash do Windows, prefixe com `MSYS_NO_PATHCONV=1`. Depois copie o conteúdo de `out/` para o ramo `gh-pages`, junto com um arquivo vazio `.nojekyll`, e envie. Se o site ganhar um domínio próprio, troque `siteUrl` em `src/data/site.ts` e gere sem `BASE_PATH`.

## Validação (23/11/2026)

- `tsc`, ESLint e `next build` sem erros.
- No Chrome: sem erros no console e sem requisições com falha. Sem rolagem horizontal em 320, 360, 375, 414, 768, 1024, 1280 e 1920 px.
- Estrutura: um H1, títulos sem saltos de nível, nenhum id repetido, nenhuma âncora quebrada, todos os links externos com `noopener`.
- Os 20 botões e links de WhatsApp vão para `wa.me/5511989855865` com mensagem pronta. O Instagram vai para `instagram.com/chacararecantovotereza`.
- Menu de celular abre e fecha ao escolher uma seção. A galeria foi testada com duas fotos temporárias: amplia, passa com as setas e com o teclado, e fecha com Esc.
- O mapa carrega com o pino em "Recanto Vó Tereza".
- Cartão de reserva: limita a 20 pessoas na hospedagem e 30 no dia, e a mensagem sai com tipo, datas (com dia da semana) e pessoas. Os feriados abrem o WhatsApp com o período, e a barra fixa do celular aparece depois da capa.
