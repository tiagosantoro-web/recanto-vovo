# Recanto Vó Tereza

Site de apresentação da chácara **Recanto Vó Tereza** (Rua Ayub Abib Riskallah, nº 38, Bairro Sebandilha, Mairinque – SP). O objetivo é apresentar o espaço e levar o visitante a consultar datas pelo WhatsApp.

Página única, responsiva, com:

1. **Capa** com foto de fundo, título, "Conheça nosso espaço" e "Consultar disponibilidade" (WhatsApp).
2. **Conheça o Recanto**: texto e foto (Imagem 01).
3. **Nosso espaço**: cards com hospedagem para até 20 pessoas, até 30 pessoas durante o dia, finais de semana, feriados e ambiente reservado.
4. **Galeria** com 7 espaços de foto em mosaico; as fotos reais abrem ampliadas, com setas e teclado.
5. **Capacidade e locação**: 20 pessoas para dormir e 30 para passar o dia, com "Consultar datas disponíveis".
6. **Localização**: endereço, mapa do Google (o pino cai no próprio Recanto Vó Tereza) e "Abrir rota no Google Maps".
7. **Contato e reservas**: botão grande do WhatsApp e link do Instagram.
8. **Rodapé** com nome, endereço, WhatsApp, Instagram e direitos reservados.

Também tem menu fixo (com menu de celular), rolagem suave, animações leves, botão flutuante do WhatsApp, identidade visual própria (logotipo em SVG: serra, árvore e água) e SEO básico. O SEO inclui título e descrição, imagem de prévia para WhatsApp e redes sociais, dados estruturados de hospedagem (schema.org `LodgingBusiness`), `sitemap.xml` e `robots.txt`.

Não há preços, comodidades nem serviços inventados: só o que foi informado (capacidade, locação em fins de semana e feriados, endereço e contatos).

## Onde editar

| O quê | Arquivo |
|---|---|
| Nome, descrição, endereço, capacidade, WhatsApp, Instagram, mensagens prontas do WhatsApp | [src/data/site.ts](src/data/site.ts) |
| Lista dos espaços de foto (nomes dos arquivos e legendas) | [src/data/fotos.ts](src/data/fotos.ts) |
| Textos e seções | [src/app/page.tsx](src/app/page.tsx) |
| Cores e fontes | [src/app/globals.css](src/app/globals.css) |
| Logotipo | [src/components/logo.tsx](src/components/logo.tsx) e [src/app/icon.svg](src/app/icon.svg) (ícone da aba) |

## Como colocar as fotos reais

Salve as fotos em `public/fotos/` com estes nomes (pode ser `.jpg`, `.jpeg`, `.png` ou `.webp`) e gere o site de novo. Enquanto uma foto não existir, aparece um espaço reservado identificado, nunca uma imagem quebrada.

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
- Os 8 botões e links de WhatsApp vão para `wa.me/5511989855865` com mensagem pronta. O Instagram vai para `instagram.com/chacararecantovotereza`.
- Menu de celular abre e fecha ao escolher uma seção. A galeria foi testada com duas fotos temporárias: amplia, passa com as setas e com o teclado, e fecha com Esc.
- O mapa carrega com o pino em "Recanto Vó Tereza".
