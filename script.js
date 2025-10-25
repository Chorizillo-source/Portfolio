// Mobile menu toggle
const nav = document.querySelector("nav ul");
const header = document.querySelector("header");

header.addEventListener("click", (e) => {
  if (e.target.tagName === "H1") return; // ignore logo clicks
  nav.classList.toggle("active");
});

// Simple scroll animation for projects
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
