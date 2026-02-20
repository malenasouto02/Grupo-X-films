const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const themeBtn = document.getElementById('theme-btn');
const storedTheme = localStorage.getItem('gx-theme');
if (storedTheme === 'light') document.body.classList.add('light');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const next = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('gx-theme', next);
  });
}

const page = document.body.dataset.page;
if (page) {
  const link = document.querySelector(`nav a[data-page="${page}"]`);
  if (link) link.classList.add('active');
}

const form = document.getElementById('newsletter-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    const msg = document.getElementById('newsletter-msg');
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    msg.className = `msg ${valid ? 'ok' : 'error'}`;
    msg.textContent = valid
      ? '¡Gracias por suscribirte! Pronto te enviaremos novedades.'
      : 'Ingresá un email válido para suscribirte.';

    if (valid) form.reset();
  });
}

const filter = document.getElementById('genre-filter');
if (filter) {
  filter.addEventListener('change', () => {
    const selected = filter.value;
    document.querySelectorAll('[data-genre]').forEach((item) => {
      item.style.display = selected === 'todos' || item.dataset.genre === selected ? 'block' : 'none';
    });
  });
}
