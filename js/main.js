// Midwest Storage Solutions - Main JS

(function() {
  'use strict';

  // Mobile Nav Toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function closeMenu() {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on outside tap
    document.addEventListener('click', function(e) {
      if (navLinks.classList.contains('open') &&
          !toggle.contains(e.target) &&
          !navLinks.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Sticky Header Shadow
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // Stats Count-up Animation
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var statNumbers = document.querySelectorAll('.stat-number');

  if (!prefersReducedMotion) {
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var text = el.textContent.trim();
          var match = text.match(/^([\d.]+)(.*)$/);
          if (!match) return;
          var target = parseFloat(match[1]);
          var suffix = match[2];
          var hasDecimal = match[1].indexOf('.') !== -1;
          var decimalPlaces = hasDecimal ? (match[1].split('.')[1] || '').length : 0;
          var duration = 1500;
          var startTime = null;

          function animate(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = eased * target;
            el.textContent = (hasDecimal ? current.toFixed(decimalPlaces) : Math.floor(current)) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          statsObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(el) { statsObserver.observe(el); });
  }

  // Scroll Animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in').forEach(function(el) {
    observer.observe(el);
  });

  // Active nav link on scroll
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function(a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
})();
