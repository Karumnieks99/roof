/* ============================================================
   Summit RoofCare — script.js
============================================================ */

/* ---- Sticky header shadow ---- */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ---- Mobile nav toggle ---- */
const navToggle   = document.getElementById('nav-toggle');
const navOverlay  = document.getElementById('nav-overlay');
const navClose    = document.getElementById('nav-overlay-close');
const overlayLinks = navOverlay.querySelectorAll('.overlay-link, .overlay-cta');

function openNav() {
  navOverlay.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  navClose.focus();
}

function closeNav() {
  navOverlay.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  navToggle.focus();
}

navToggle.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
overlayLinks.forEach(el => el.addEventListener('click', closeNav));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navOverlay.classList.contains('open')) closeNav();
});

/* ---- FAQ accordion ---- */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn    = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    /* Close all */
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-answer').hidden = true;
    });

    /* Toggle clicked item */
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

/* ---- Scroll reveal via IntersectionObserver ---- */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  revealEls.forEach((el, i) => {
    /* Stagger children inside grid sections */
    const gridParent = el.closest(
      '.services-grid, .trust-grid, .why-grid, .testimonials-grid, .projects-grid, .areas-list'
    );
    if (gridParent) {
      const siblings = Array.from(gridParent.children);
      const idx = siblings.indexOf(el);
      if (idx > -1) el.style.transitionDelay = `${idx * 0.08}s`;
    }

    observer.observe(el);
  });
} else {
  /* Fallback for older browsers */
  revealEls.forEach(el => el.classList.add('revealed'));
}

/* ---- Smooth scroll for anchor links (offset for sticky header) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 16;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
