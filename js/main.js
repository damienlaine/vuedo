/**
 * Vue&Do Website - Main JavaScript
 * Handles navigation, forms, and interactions
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
        }
      });
    }
  }

  // Smooth Scroll for Anchor Links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash or just "#"
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80; // Account for fixed header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }

          // Focus the target for accessibility
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // Waitlist Form Submission
  function initWaitlistForm() {
    const form = document.getElementById('waitlistForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
          name: form.querySelector('#name').value.trim(),
          email: form.querySelector('#email').value.trim(),
          role: form.querySelector('#role').value,
          consent: form.querySelector('[name="consent"]').checked,
          language: document.documentElement.getAttribute('data-lang') || 'en',
          timestamp: new Date().toISOString()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.role || !formData.consent) {
          showFormMessage('error', 'Please fill in all required fields.');
          return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          showFormMessage('error', 'Please enter a valid email address.');
          return;
        }

        // Disable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = formData.language === 'fr' ? 'Envoi en cours...' : 'Submitting...';

        try {
          // In production, this would send to a backend API
          // For now, we'll simulate an API call and log to console
          console.log('Waitlist signup:', formData);

          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Store in localStorage for demo purposes
          const waitlist = JSON.parse(localStorage.getItem('vuedo-waitlist') || '[]');
          waitlist.push(formData);
          localStorage.setItem('vuedo-waitlist', JSON.stringify(waitlist));

          // Show success message
          const successMessage = formData.language === 'fr'
            ? 'Merci de votre inscription ! Nous vous contacterons bientôt.'
            : 'Thank you for signing up! We\'ll be in touch soon.';
          showFormMessage('success', successMessage);

          // Reset form
          form.reset();

          // Track conversion (would integrate with analytics in production)
          if (typeof gtag !== 'undefined') {
            gtag('event', 'waitlist_signup', {
              'event_category': 'engagement',
              'event_label': formData.role,
              'value': 1
            });
          }

        } catch (error) {
          console.error('Form submission error:', error);
          const errorMessage = formData.language === 'fr'
            ? 'Une erreur s\'est produite. Veuillez réessayer.'
            : 'An error occurred. Please try again.';
          showFormMessage('error', errorMessage);
        } finally {
          // Re-enable submit button
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      });
    }

    function showFormMessage(type, message) {
      if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Announce to screen readers
        formMessage.setAttribute('role', 'alert');

        // Scroll message into view
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
          setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
          }, 5000);
        }
      }
    }
  }

  // Intersection Observer for Animations
  function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Observe sections and cards
    const animatedElements = document.querySelectorAll(`
      .section-header,
      .feature-card,
      .solution-card,
      .benefit-card,
      .step,
      .stat-card
    `);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Header Scroll Effect
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });

    // Add scroll styles
    const style = document.createElement('style');
    style.textContent = `
      .header.scrolled {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
  }

  // Performance: Lazy Load Images
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading is supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    } else {
      // Fallback for browsers that don't support native lazy loading
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
      document.body.appendChild(script);
    }
  }

  // Accessibility: Focus Trap for Mobile Menu
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }

      // Close on Escape
      if (e.key === 'Escape') {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
          navToggle.focus();
        }
      }
    });
  }

  // Detect if user is on iOS and suggest Add to Home Screen
  function detectPWA() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone === true;
    const isAndroid = /Android/.test(navigator.userAgent);

    if ((isIOS || isAndroid) && !isStandalone) {
      // Could show a banner encouraging A2HS here in the future
      console.log('PWA installation available');
    }
  }

  // Analytics Event Tracking (placeholder for future integration)
  function initAnalytics() {
    // Track CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'cta_click', {
            'event_category': 'engagement',
            'event_label': btn.textContent.trim(),
            'value': 1
          });
        }
      });
    });

    // Track section views
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'section_view', {
              'event_category': 'engagement',
              'event_label': entry.target.id || 'unknown',
              'value': 1
            });
          }
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section[id]').forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // Initialize all features on DOM ready
  function init() {
    initMobileNav();
    initSmoothScroll();
    initWaitlistForm();
    initScrollAnimations();
    initHeaderScroll();
    initLazyLoading();
    detectPWA();
    initAnalytics();

    // Trap focus in mobile menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      trapFocus(navMenu);
    }

    // Log initialization
    console.log('Vue&Do website initialized');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
