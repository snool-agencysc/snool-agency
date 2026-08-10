import { initNavigation } from "./navigation.js";
import { initReveal, initCursor } from "./animations.js";
import { initPortfolio } from "./portfolio.js";
import { initFaq } from "./faq.js";
import { initWhatsApp, initContactForm } from "./contact.js";
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".site-header")?.classList.add("is-ready");

  initTheme();
  initNavigation();
  initPortfolio();
  initFaq();
  initWhatsApp();
  initContactForm();
  initCursor();
  initReveal();

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
