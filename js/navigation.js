export function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".nav-mobile");
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && mobileNav) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    const openMenu = () => {
      toggle.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Fecha o menu automaticamente se a tela passar para o breakpoint desktop
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const handleBreakpointChange = (e) => {
      if (e.matches) closeMenu();
    };
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleBreakpointChange);
    } else {
      desktopQuery.addListener(handleBreakpointChange);
    }
  }
}
