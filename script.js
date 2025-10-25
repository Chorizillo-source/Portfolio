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
      if(navLinks.classList.contains("active")) navLinks.classList.remove("active");
    });
  });

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

  // Dynamic background animation (particles)
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
  for(let i=0; i<80; i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      radius: Math.random()*2 + 1,
      color: colors[Math.floor(Math.random()*colors.length)],
      dx: (Math.random()-0.5)*1,
      dy: (Math.random()-0.5)*1
    });
  }

  function animateParticles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if(p.x<0 || p.x>canvas.width) p.dx*=-1;
      if(p.y<0 || p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();

});
