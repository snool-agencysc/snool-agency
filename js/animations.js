export function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.revealDelay || 0);
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

export function initCursor() {
  const cursor = document.querySelector(".cursor-dot");
  if (!cursor) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  let x = 0;
  let y = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    },
    { passive: true }
  );

  const hoverTargets = document.querySelectorAll(
    "a, button, .card, [data-cursor-hover]"
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });
}
