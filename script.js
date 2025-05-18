// script.js

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const form = document.getElementById('contact-form');
  const responseMsg = document.getElementById('form-response');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseMsg.textContent = 'Thank you! Your message has been sent.';
    responseMsg.style.color = 'green';
    form.reset();
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});

