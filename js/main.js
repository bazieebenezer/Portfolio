/* =========================
   MODAL
========================= */

const contactBtn = document.querySelector('.contact-btn');
const contactModal = document.querySelector('.contact-modal');
const closeModal = document.querySelector('.close-modal');

contactBtn.addEventListener('click', () => {
  contactModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  contactModal.classList.remove('active');
});

document.addEventListener('click', (e) => {
  
  const modalContent =
    document.querySelector('.modal-content');
  
  const isClickInsideModal =
    modalContent.contains(e.target);
  
  const isClickOnContactBtn =
    contactBtn.contains(e.target);
  
  if (
    contactModal.classList.contains('active') &&
    !isClickInsideModal &&
    !isClickOnContactBtn
  ) {
    contactModal.classList.remove('active');
  }
  
});


/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  
  document.body.classList.toggle('dark-mode');
  
  const isDarkMode =
    document.body.classList.contains('dark-mode');
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
});

window.addEventListener('DOMContentLoaded', () => {
  
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
});


/* =========================
   LANGUAGE SWITCH
========================= */

const languageBtn = document.querySelector('.language-btn');

languageBtn.addEventListener('click', () => {
  
  if (languageBtn.textContent === 'FR') {
    languageBtn.textContent = 'EN';
  } else {
    languageBtn.textContent = 'FR';
  }
  
});

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', (e) => {
  
  e.stopPropagation();
  
  mobileMenu.classList.toggle('active');
  
});


document.addEventListener('click', (e) => {
  
  const isClickInsideMenu =
    mobileMenu.contains(e.target);
  
  const isClickOnToggle =
    menuToggle.contains(e.target);
  
  if (
    !isClickInsideMenu &&
    !isClickOnToggle
  ) {
    mobileMenu.classList.remove('active');
  }
  
});
/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  
  let current = '';
  
  sections.forEach(section => {
    
    const sectionTop = section.offsetTop;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
    
  });
  
  navLinks.forEach(link => {
    
    link.classList.remove('active');
    
    if (
      link.getAttribute('href') ===
      `#${current}`
    ) {
      link.classList.add('active');
    }
    
  });
  
});

const mobileLinks =
  document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {
  
  link.addEventListener('click', () => {
    
    mobileMenu.classList.remove('active');
    
  });
  
});