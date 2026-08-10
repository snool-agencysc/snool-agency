const STORAGE_KEY = "snool-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const isLight = theme === "light";
  const label = isLight ? "Alternar para tema escuro" : "Alternar para tema claro";

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-label", label);
    btn.setAttribute("aria-pressed", String(isLight));
  });
}

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored || document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(initial);

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  });
}
