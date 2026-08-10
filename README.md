# SNOOL — Site institucional

Site oficial da SNOOL: soluções digitais (landing pages, sites institucionais,
identidade digital e automações) para MEIs e pequenos negócios, com foco
inicial em Joinville/SC.

## Stack

HTML5 + CSS3 + JavaScript (ES Modules), sem frameworks. Sem dependências
externas de build — abra `index.html` direto no navegador ou sirva com
qualquer servidor estático.

## Estrutura

```
/snool
├── index.html
├── css/
│   ├── reset.css        → normalização básica
│   ├── variables.css    → tokens de design (cor, tipografia, espaçamento)
│   ├── global.css       → estilos base e utilitários
│   ├── components.css   → botões, header, cards, accordion, footer, cursor…
│   ├── sections.css     → layout de cada seção da página
│   └── responsive.css   → ajustes finos de responsividade
├── js/
│   ├── main.js          → ponto de entrada, inicializa tudo
│   ├── navigation.js     → header sticky + menu mobile
│   ├── animations.js     → reveal on scroll + cursor customizado
│   ├── portfolio.js      → dados dos projetos (array editável) + render
│   ├── faq.js             → accordion do FAQ
│   └── contact.js         → geração do link do WhatsApp + formulário
├── assets/
│   ├── images/            → mockups dos projetos conceituais (SVG)
│   ├── icons/              → (reservado para ícones extras)
│   └── logos/               → favicon e marca
└── README.md
```

## Como editar o WhatsApp

Abra `js/contact.js` e edite:

```js
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
```

Use o formato `55` + DDD + número, sem espaços ou símbolos.

## Como adicionar um novo projeto ao portfólio

Edite o array `PROJECTS` em `js/portfolio.js`, seguindo o mesmo formato dos
projetos existentes. Os projetos atuais (Barbearia Noir, Forza Detailing e
Massa House) são **conceituais** — marcados como tal na própria interface —
até que a SNOOL tenha projetos reais para substituí-los.

## Analytics

Os pontos de inserção para Google Analytics, Google Tag Manager e Meta Pixel
já estão comentados no `<head>` de `index.html`. Basta colar os snippets
oficiais quando os IDs existirem — nenhum ID fictício foi incluído.

## Acessibilidade e performance

- Navegação por teclado, foco visível e `aria-expanded` no menu e no FAQ.
- `prefers-reduced-motion` respeitado em todas as animações.
- Sem bibliotecas externas de animação — apenas CSS transitions e
  `IntersectionObserver`, priorizando performance sobre efeito.
- Mockups dos projetos em SVG (leves, nítidos em qualquer resolução);
  substitua por fotos reais em WebP/AVIF quando disponíveis.

## Publicando o site

Este projeto já está pronto para deploy em qualquer hospedagem estática
(Netlify, Vercel, GitHub Pages, Cloudflare Pages). Inclui `netlify.toml`
para deploy sem configuração na Netlify.

Antes de publicar, troque `snool.com.br` (usado como placeholder) pelo
domínio real em: `index.html` (canonical, Open Graph), `robots.txt` e
`sitemap.xml`.

## Pendências antes de publicar

- [ ] Definir número real de WhatsApp em `js/contact.js`.
- [ ] Substituir mockups conceituais por projetos reais (à medida que surgirem).
- [ ] Adicionar depoimentos reais na seção de prova social.
- [ ] Definir domínio final e atualizar `canonical`/Open Graph em `index.html`.
- [ ] Inserir IDs de Analytics/GTM/Meta Pixel quando definidos.
