document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("is-active");
    }
  });
});
