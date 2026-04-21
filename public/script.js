/* ═══════════════════════════════════════════
   YOSEPH.DEV — REDESIGN SCRIPTS
   • Dark / light mode with localStorage
   • Sticky header on scroll
   • Mobile hamburger menu
   • Active nav link on scroll
   • Scroll-in animations (Intersection Observer)
   • Skill bar animations
   • Testimonials carousel
   • Contact form validation
   • Footer year
═══════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────
   UTILITY
────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ──────────────────────────────────────────
   THEME TOGGLE
────────────────────────────────────────── */
const themeToggle = $('#theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

html.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ──────────────────────────────────────────
   STICKY HEADER
────────────────────────────────────────── */
const header = $('#header');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ──────────────────────────────────────────
   MOBILE HAMBURGER
────────────────────────────────────────── */
const hamburger = $('#hamburger');
const navLinks = $('#nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks?.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on nav link click
$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (!navLinks?.contains(e.target) && !hamburger?.contains(e.target)) {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ──────────────────────────────────────────
   ACTIVE NAV LINK ON SCROLL
────────────────────────────────────────── */
const sections = $$('section[id]');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.nav-link').forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(section => navObserver.observe(section));

/* ──────────────────────────────────────────
   SCROLL-IN ANIMATIONS (.fade-up & .reveal)
────────────────────────────────────────── */
const animObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// Trigger hero elements immediately after load
window.addEventListener('DOMContentLoaded', () => {
  $$('.fade-up').forEach((el, i) => {
    setTimeout(() => animObserver.observe(el), i * 60);
  });
  $$('.reveal').forEach(el => animObserver.observe(el));
});

/* ──────────────────────────────────────────
   SKILL BAR ANIMATIONS
   Bars fill when the skill group scrolls in
────────────────────────────────────────── */
const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.skill-fill', entry.target).forEach(bar => {
          const width = bar.getAttribute('data-width') || 0;
          // Short delay so CSS transition is visible
          setTimeout(() => { bar.style.width = `${width}%`; }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

$$('.skill-group').forEach(group => skillObserver.observe(group));

/* ──────────────────────────────────────────
   TESTIMONIALS CAROUSEL
────────────────────────────────────────── */
(function initCarousel() {
  const track = $('#testimonials-track');
  const dotsContainer = $('#testimonial-dots');
  const prevBtn = $('#prev-testimonial');
  const nextBtn = $('#next-testimonial');

  if (!track) return;

  const cards = $$('.testimonial-card', track);
  let current = 0;
  let visibleCount = getVisibleCount();
  let autoTimer;

  function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  // Build dots
  function buildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const total = Math.max(0, cards.length - visibleCount + 1);
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'testimonial-dot' + (i === current ? ' active' : '');
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    $$('.testimonial-dot', dotsContainer).forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function updateCards() {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === current);
    });
  }

  function getCardWidth() {
    if (!cards[0]) return 0;
    const card = cards[0];
    const style = window.getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight) || 20;
    return card.offsetWidth + marginRight;
  }

  function goTo(index) {
    const maxIndex = Math.max(0, cards.length - visibleCount);
    current = Math.min(Math.max(index, 0), maxIndex);
    track.style.transform = `translateX(-${current * getCardWidth()}px)`;
    updateDots();
    updateCards();
  }

  prevBtn?.addEventListener('click', () => {
    goTo(current - 1);
    resetAuto();
  });

  nextBtn?.addEventListener('click', () => {
    goTo(current + 1);
    resetAuto();
  });

  // Auto-advance every 5s
  function startAuto() {
    autoTimer = setInterval(() => {
      const maxIndex = Math.max(0, cards.length - visibleCount);
      goTo(current < maxIndex ? current + 1 : 0);
    }, 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetAuto();
    }
  }, { passive: true });

  // Responsive rebuild
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      visibleCount = getVisibleCount();
      current = 0;
      buildDots();
      goTo(0);
    }, 200);
  });

  // Init
  buildDots();
  updateCards();
  startAuto();
})();

/* ──────────────────────────────────────────
   CONTACT FORM
────────────────────────────────────────── */
(function initForm() {
  const form = $('#contact-form');
  if (!form) return;

  const submitBtn = $('#form-submit');

  function validateField(id, errorId, message) {
    const field = $(`#${id}`);
    const error = $(`#${errorId}`);
    if (!field) return true;

    const val = field.value.trim();
    let isValid = true;

    if (id === 'email') {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    } else {
      isValid = val.length > 0;
    }

    if (error) error.textContent = isValid ? '' : message;
    field.closest('.form-group')?.classList.toggle('has-error', !isValid);

    return isValid;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nameOk  = validateField('name',    'name-error',    'Please enter your name');
    const emailOk = validateField('email',   'email-error',   'Please enter a valid email');
    const msgOk   = validateField('message', 'message-error', 'Please enter a message');

    if (!nameOk || !emailOk || !msgOk) return;

    // Disable button & show loading
    if (submitBtn) {
      const btnText = submitBtn.querySelector('.btn-text');
      if (btnText) btnText.textContent = 'Sending…';
      submitBtn.disabled = true;
    }

    // Simulate async submit (replace with your actual endpoint / Netlify form)
    await new Promise(r => setTimeout(r, 1200));

    form.reset();
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

    if (submitBtn) {
      submitBtn.disabled = false;
      const btnText = submitBtn.querySelector('.btn-text');
      if (btnText) btnText.textContent = 'Send Message';
    }
  });

  // Live validation on blur
  [
    ['name',    'name-error',    'Please enter your name'],
    ['email',   'email-error',   'Please enter a valid email'],
    ['message', 'message-error', 'Please enter a message'],
  ].forEach(([id, errId, msg]) => {
    $(`#${id}`)?.addEventListener('blur', () => validateField(id, errId, msg));
  });
})();

/* ──────────────────────────────────────────
   FOOTER YEAR
────────────────────────────────────────── */
const yearEl = $('#footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
