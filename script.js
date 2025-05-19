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
// Add EmailJS CDN to your HTML first:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// <script>emailjs.init("YOUR_PUBLIC_KEY");</script>

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("oMl0SxMcf-6LL_UkM"); // Replace with your public key

  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_vq2ywyo", "service_vq2ywyo", form)
      .then(() => {
        response.style.color = "green";
        response.textContent = "Message sent successfully!";
        form.reset();
        setTimeout(() => (response.textContent = ""), 5000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        response.style.color = "red";
        response.textContent = "Something went wrong. Please try again.";
      });
  });
});

