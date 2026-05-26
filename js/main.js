// Estrelas no background
function criarEstrelas() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: -1;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const estrelas = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    alpha: Math.random(),
    velocidade: Math.random() * 0.02 + 0.005
  }));

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    estrelas.forEach(e => {
      e.alpha += e.velocidade;
      if (e.alpha > 1 || e.alpha < 0) e.velocidade *= -1;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${e.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animar);
  }
  animar();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Scroll suave
function scrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const alvo = document.querySelector(link.getAttribute('href'));
      if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Animação ao entrar na tela
function animarAoScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.analogy-card, .module-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Iniciar tudo
criarEstrelas();
scrollSuave();
animarAoScroll();