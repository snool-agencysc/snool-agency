const PROJECTS = [
  {
    name: "Barbearia Noir",
    category: "Landing Page",
    description:
      "Página criada para apresentar serviços, estilo e facilitar agendamentos direto pelo WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/projeto-barbearia-noir.svg",
    conceptual: true,
  },
  {
    name: "Forza Detailing",
    category: "Landing Page",
    description:
      "Presença digital para estética automotiva, com foco em antes/depois e orçamento rápido.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/projeto-forza-detailing.svg",
    conceptual: true,
  },
  {
    name: "Massa House",
    category: "Site institucional",
    description:
      "Site para pizzaria e restaurante com cardápio, localização e pedidos via WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/projeto-massa-house.svg",
    conceptual: true,
  },
];

function renderProjectCard(project, index) {
  const article = document.createElement("article");
  article.className = "card portfolio-card";
  article.setAttribute("data-reveal", "");
  article.setAttribute("data-reveal-delay", String(index * 90));

  article.innerHTML = `
    <div class="portfolio-media">
      <img src="${project.image}" alt="Mockup do projeto ${project.name}" loading="lazy" width="640" height="480" />
      ${project.conceptual ? '<span class="portfolio-tag">Projeto conceitual</span>' : ""}
    </div>
    <div class="portfolio-body">
      <span class="portfolio-category">${project.category}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="portfolio-stack">
        ${project.stack.map((tech) => `<span class="tag">${tech}</span>`).join("")}
      </div>
      <span class="portfolio-link">
        Ver projeto
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </span>
    </div>
  `;

  return article;
}

export function initPortfolio() {
  const grid = document.querySelector("[data-portfolio-grid]");
  if (!grid) return;
  PROJECTS.forEach((project, index) => {
    grid.appendChild(renderProjectCard(project, index));
  });
}
