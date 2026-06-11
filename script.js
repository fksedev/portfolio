(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  // Sticky nav background on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach(el => revealObserver.observe(el));

  // Contact form submission feedback
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      btnText.hidden = true;
      btnLoading.hidden = false;
      submitBtn.disabled = true;
    });
  }

  // Highlight active nav section
  const sections = document.querySelectorAll('section[id]');
  const navItems = navLinks.querySelectorAll('a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(item => {
            item.style.color = item.getAttribute('href') === `#${id}`
              ? 'var(--text-heading)'
              : '';
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: `-${nav.offsetHeight}px 0px -50% 0px` }
  );
  sections.forEach(section => sectionObserver.observe(section));

  // App image carousels
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const slides = track.querySelectorAll('img');
    let current = 0;
    let interval;

    function goTo(index) {
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(Number(dot.dataset.slide));
        clearInterval(interval);
        interval = setInterval(() => goTo((current + 1) % slides.length), 5000);
      });
    });

    interval = setInterval(() => goTo((current + 1) % slides.length), 5000);
  });

  // Image lightbox — full-screen preview with prev/next
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  let lightboxImages = [];
  let lightboxIndex = 0;

  function getGalleryImages(img) {
    const track = img.closest('.carousel-track');
    if (track) return [...track.querySelectorAll('img')];
    const gallery = img.closest('.case-gallery');
    if (gallery) return [...gallery.querySelectorAll('img')];
    return [img];
  }

  function updateLightbox() {
    const img = lightboxImages[lightboxIndex];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    const single = lightboxImages.length <= 1;
    lightboxPrev.disabled = single;
    lightboxNext.disabled = single;
    lightboxPrev.hidden = single;
    lightboxNext.hidden = single;
  }

  function openLightbox(images, index) {
    lightboxImages = images;
    lightboxIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = '';
  }

  function stepLightbox(delta) {
    if (lightboxImages.length <= 1) return;
    lightboxIndex = (lightboxIndex + delta + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  }

  document.querySelectorAll('.app-carousel .carousel-track img, .case-gallery img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const gallery = getGalleryImages(img);
      openLightbox(gallery, gallery.indexOf(img));
    });
  });

  lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => {
    el.addEventListener('click', closeLightbox);
  });

  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(-1);
  });

  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(1);
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  // Multi-variant app tabs (e.g. Daadi's Kitchen — User / Driver / Manager)
  document.querySelectorAll('[data-app-tabs]').forEach(card => {
    const tabs = card.querySelectorAll('.app-variant-tab');
    const panels = card.querySelectorAll('.carousel-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive);
        });
        panels.forEach(panel => {
          const isActive = panel.dataset.panel === target;
          panel.classList.toggle('active', isActive);
          panel.hidden = !isActive;
        });
      });
    });
  });
})();
