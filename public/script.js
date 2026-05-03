/* ═══════════════════════════════════════════
   YOSEPH.DEV — SCRIPTS
   Key safety rule: <html> gets .js-ready only
   after this file runs successfully. The CSS
   hides animated elements ONLY when .js-ready
   is present, so content is always visible if
   JS fails or is blocked.
═══════════════════════════════════════════ */

'use strict';

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const html = document.documentElement;

/* ─────────────────────────────────────────
   1. MARK JS AS READY (must be first)
   Activates CSS animation classes.
───────────────────────────────────────── */
html.classList.add('js-ready');

/* ─────────────────────────────────────────
   2. THEME — localStorage wrapped in
   try/catch (throws in Safari private mode)
───────────────────────────────────────── */
(function () {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  $('#theme-toggle')?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
  });
})();

/* ─────────────────────────────────────────
   3. STICKY HEADER
───────────────────────────────────────── */
const header = $('#header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─────────────────────────────────────────
   4. MOBILE NAV
───────────────────────────────────────── */
const hamburger = $('#hamburger');
const navLinks  = $('#nav-links');

function closeNav() {
  hamburger?.classList.remove('open');
  navLinks?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks?.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

$$('.nav-link').forEach(l => l.addEventListener('click', closeNav));

document.addEventListener('click', e => {
  if (!navLinks?.contains(e.target) && !hamburger?.contains(e.target)) closeNav();
});

/* ─────────────────────────────────────────
   5. ACTIVE NAV LINK ON SCROLL
───────────────────────────────────────── */
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $$('.nav-link').forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`)
      );
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

$$('section[id]').forEach(s => navObserver.observe(s));

/* ─────────────────────────────────────────
   6. SCROLL-IN ANIMATIONS
───────────────────────────────────────── */
const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

window.addEventListener('DOMContentLoaded', () => {
  $$('.fade-up').forEach((el, i) => setTimeout(() => animObserver.observe(el), i * 60));
  $$('.reveal').forEach(el => animObserver.observe(el));
});

/* ─────────────────────────────────────────
   7. SKILL BARS
───────────────────────────────────────── */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $$('.skill-fill', entry.target).forEach(bar =>
        setTimeout(() => { bar.style.width = `${bar.getAttribute('data-width') || 0}%`; }, 200)
      );
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

$$('.skill-group').forEach(g => skillObserver.observe(g));

/* ─────────────────────────────────────────
   8. TESTIMONIALS CAROUSEL
   Width is calculated from the container in
   pixels — no CSS percentage ambiguity.
───────────────────────────────────────── */
(function () {
  const carousel = $('#testimonials-carousel');
  const track    = $('#testimonials-track');
  if (!track || !carousel) return;

  const dots  = $('#testimonial-dots');
  const cards = $$('.testimonial-card', track);
  const GAP   = 20;
  let cur = 0, visCount = vis(), timer;

  function vis() {
    return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  }

  /* Calculate card width from the CONTAINER'S pixel width, not the track */
  function cardW() {
    const cw = carousel.clientWidth;
    return (cw - GAP * (visCount - 1)) / visCount;
  }

  function layout() {
    const w = cardW();
    cards.forEach(c => { c.style.width = w + 'px'; c.style.minWidth = w + 'px'; });
  }

  function goTo(i) {
    const max = Math.max(0, cards.length - visCount);
    cur = Math.min(Math.max(i, 0), max);
    track.style.transform = `translateX(-${cur * (cardW() + GAP)}px)`;
    $$('.testimonial-dot', dots).forEach((d, idx) => d.classList.toggle('active', idx === cur));
    cards.forEach((c, idx) => c.classList.toggle('active', idx === cur));
  }

  function buildDots() {
    if (!dots) return;
    dots.innerHTML = '';
    const total = Math.max(0, cards.length - visCount + 1);
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.className = 'testimonial-dot' + (i === cur ? ' active' : '');
      d.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      d.addEventListener('click', () => { goTo(i); restart(); });
      dots.appendChild(d);
    }
  }

  function start()   { timer = setInterval(() => goTo(cur < Math.max(0, cards.length - visCount) ? cur + 1 : 0), 5500); }
  function restart() { clearInterval(timer); start(); }

  $('#prev-testimonial')?.addEventListener('click', () => { goTo(cur - 1); restart(); });
  $('#next-testimonial')?.addEventListener('click', () => { goTo(cur + 1); restart(); });

  /* Touch/swipe support */
  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) { goTo(d > 0 ? cur + 1 : cur - 1); restart(); }
  }, { passive: true });

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      visCount = vis();
      layout();
      cur = Math.min(cur, Math.max(0, cards.length - visCount));
      buildDots();
      goTo(cur);
    }, 150);
  });

  /* Init */
  layout();
  buildDots();
  goTo(0);
  start();
})();

/* ─────────────────────────────────────────
   9. CONTACT FORM
───────────────────────────────────────── */
(function () {
  const form = $('#contact-form');
  if (!form) return;

  const btn = $('#form-submit');
  const ok  = $('#form-success');

  function validate(id, errId, msg) {
    const f = $(`#${id}`), e = $(`#${errId}`);
    if (!f) return true;
    const valid = id === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()) : f.value.trim().length > 0;
    if (e) e.textContent = valid ? '' : msg;
    f.closest('.form-group')?.classList.toggle('has-error', !valid);
    return valid;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (![
      validate('name',    'name-error',    'Please enter your name'),
      validate('email',   'email-error',   'Please enter a valid email'),
      validate('message', 'message-error', 'Please enter a message'),
    ].every(Boolean)) return;

    if (btn) { const t = btn.querySelector('.btn-text'); if (t) t.textContent = 'Sending…'; btn.disabled = true; }

    try {
      const formData = new URLSearchParams(new FormData(form));
      formData.set('form-name', form.getAttribute('name') || 'contact');
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
    } catch (_) {}

    form.reset();
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
    if (ok)  ok.hidden  = false;
    if (btn) btn.hidden = true;

    setTimeout(() => {
      if (ok)  ok.hidden  = true;
      if (btn) { btn.hidden = false; btn.disabled = false; const t = btn.querySelector('.btn-text'); if (t) t.textContent = 'Send Message'; }
    }, 6000);
  });

  [['name','name-error','Please enter your name'],
   ['email','email-error','Please enter a valid email'],
   ['message','message-error','Please enter a message'],
  ].forEach(([id, err, msg]) => $(`#${id}`)?.addEventListener('blur', () => validate(id, err, msg)));
})();

/* ─────────────────────────────────────────
   10. FOOTER YEAR
───────────────────────────────────────── */
const yr = $('#footer-year');
if (yr) yr.textContent = new Date().getFullYear();
