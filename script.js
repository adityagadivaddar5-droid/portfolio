const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearElement = document.querySelector('#year');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
