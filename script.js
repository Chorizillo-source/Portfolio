document.addEventListener("DOMContentLoaded", () => {

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll for nav links and buttons
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      navLinks.classList.remove("active"); // Close nav on link click
    });
  });

  // Header background change on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");
    function revealSections() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) section.classList.add("visible");
    });
  }
    window.addEventListener("scroll", revealSections);
    revealSections(); // run once on load

 // Typing effect
  const typed = document.getElementById("typed-text");
  const words = ["Mario", "A Developer", "A Student", "A Creator"];
  let i = 0, j = 0, deleting = false;

  function type() {
    const current = words[i];
    if (!deleting) {
      typed.textContent = current.substring(0, j + 1);
      j++;
      if (j === current.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typed.textContent = current.substring(0, j - 1);
      j--;
      if (j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? 60 : 120);
  }
  type();

  // Project card animation on scroll
  const projectCards = document.querySelectorAll(".project-card");
  function revealCards() {
    projectCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  }
  window.addEventListener("scroll", revealCards);
  revealCards(); // run once on load

  
  // Dynamic particle background
  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];
  const colors = ["#00c3ff", "#ff00ff", "#00ff99", "#ffcc00"];
  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6
    });
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();

});