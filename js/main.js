/* ============================================
   OPIQO — MAIN.JS
   Navbar toggle · smooth scroll · tab switcher
   · plugin filter · scroll reveal
   ============================================ */

(function () {
  'use strict';

  /* ---------- Navbar: scroll shadow + hamburger ---------- */
  const navbar  = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu   = document.getElementById('navMenu');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open', !expanded);
    });

    // Close nav when a link is clicked (mobile)
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  /* ---------- Smooth scroll for all anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--navbar-h')) || 64;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Platform Tab Switcher ---------- */
  var tabButtons = document.querySelectorAll('[role="tab"]');
  var tabPanels  = document.querySelectorAll('[role="tabpanel"]');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetTab = this.getAttribute('data-tab');

      // Update buttons
      tabButtons.forEach(function (b) {
        b.classList.remove('tab--active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('tab--active');
      this.setAttribute('aria-selected', 'true');

      // Update panels
      tabPanels.forEach(function (panel) {
        if (panel.id === 'tab-' + targetTab) {
          panel.removeAttribute('hidden');
          panel.classList.add('tab-panel--active');
        } else {
          panel.setAttribute('hidden', '');
          panel.classList.remove('tab-panel--active');
        }
      });
    });
  });

  /* ---------- Plugin Category Filter ---------- */
  var filterButtons = document.querySelectorAll('.filter-btn');
  var pluginCards   = document.querySelectorAll('.plugin-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(function (b) { b.classList.remove('filter-btn--active'); });
      this.classList.add('filter-btn--active');

      // Show/hide cards
      pluginCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ---------- Intersection Observer: scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger children inside grids
          var siblings = entry.target.parentElement
            ? Array.from(entry.target.parentElement.querySelectorAll('.reveal'))
            : [];
          var idx = siblings.indexOf(entry.target);
          var delay = idx > 0 ? Math.min(idx * 60, 400) : 0;
          entry.target.style.transitionDelay = delay + 'ms';
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    // Fallback: show all immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
