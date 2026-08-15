(() => {
  "use strict";

  const config = window.KOKORO_CONFIG;
  const header = document.querySelector("[data-header]");
  const apkLinks = document.querySelectorAll("[data-apk-link]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (config?.APK_URL) {
    apkLinks.forEach((link) => {
      link.href = config.APK_URL;
      link.setAttribute("aria-label", "Tải Kokoro APK cho Android");
    });
  }

  document.querySelectorAll("[data-year]").forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealElements = document.querySelectorAll(".reveal");
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll(".mood-bubble").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".mood-bubble").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
    });
  });
})();
