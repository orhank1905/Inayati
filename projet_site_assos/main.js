/* ── SPLASH SCREEN ──────────────────────────── */
(function () {
  const splash = document.getElementById('splash');
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 750);
  }, 2200);
})();

/* ── NAVBAR MOBILE ──────────────────────────── */
(function () {
  const burger = document.getElementById('nav-burger');
  const mobile = document.getElementById('nav-mobile');
  if (!burger || !mobile) return;
  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobile.contains(e.target)) {
      mobile.classList.remove('open');
    }
  });
})();

/* ── ACTIVE NAV LINK ──────────────────────────── */
(function () {
  const path = window.location.pathname.replace('/', '') || 'index';
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === path) el.classList.add('active');
  });
})();

/* ── SCROLL REVEAL ──────────────────────────── */
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
  });
})();

/* ── SLOGAN ROTATION (home only) ────────────── */
(function () {
  const el = document.getElementById('slogan');
  if (!el) return;
  const slogans = [
    "Toute grande histoire commence par un rêve",
    "1€ donné = 1 espoir renouvelé",
    "Chaque geste compte et vous en faites partie…",
    "Rejoins le mouvement Inayati là où l'action humanitaire prend vie",
  ];
  let i = 0;
  setInterval(() => {
    el.classList.add('fade-out-slogan');
    el.classList.remove('fade-in-slogan');
    setTimeout(() => {
      i = (i + 1) % slogans.length;
      el.textContent = slogans[i];
      el.classList.remove('fade-out-slogan');
      el.classList.add('fade-in-slogan');
    }, 420);
  }, 4000);
})();

/* ── CONTACT FORM (contact only) ────────────── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.innerHTML = `
      <div class="form-success">
        <div class="checkmark">✅</div>
        <h3>Message envoyé !</h3>
        <p>Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
      </div>`;
  });
})();
