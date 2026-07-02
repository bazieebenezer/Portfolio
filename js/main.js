document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector('.video-container video');
    if (video) {
        video.play().catch(error => {
            console.log("Le démarrage automatique a été bloqué par le navigateur, l'utilisateur doit interagir avec la page.", error);
        });
    }
});


/* =========================
   MODAL
========================= */

const contactBtns = document.querySelectorAll('.contact-btn, .open-contact-modal, .final-cta-button');
const contactModal = document.querySelector('.contact-modal');
const closeModal = document.querySelector('.close-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalContent = document.querySelector('.modal-content');

function openModal() {
  if (!contactModal) return;
  
  contactModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // GSAP Animation
  gsap.fromTo(modalBackdrop, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.5, ease: 'power2.out' }
  );

  gsap.fromTo(modalContent,
    { 
      opacity: 0, 
      scale: 0.9, 
      y: 40,
      filter: 'blur(10px)' 
    },
    { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: 'blur(0px)',
      duration: 0.8, 
      delay: 0.1,
      ease: 'expo.out' 
    }
  );

  // Stagger items
  gsap.fromTo('.modal-info > *, .input-group, .submit-btn, .modal-glow-1, .modal-glow-2',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, delay: 0.4, ease: 'power3.out' }
  );
}

function closeContactModal() {
  if (!contactModal) return;

  gsap.to(modalContent, {
    opacity: 0,
    scale: 0.9,
    y: 20,
    filter: 'blur(10px)',
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  gsap.to(modalBackdrop, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in'
  });
}

if (contactBtns.length > 0 && contactModal && closeModal) {
  contactBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeModal.addEventListener('click', closeContactModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeContactModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
      closeContactModal();
    }
  });
}


/* =========================
   PROFILE MODAL
========================= */

const profileBtns = document.querySelectorAll('.profile-btn, .profile-btn-mobile');
const profileModal = document.querySelector('.profile-modal');
const closeProfileModalBtn = document.querySelector('.close-modal');
const profileModalBackdrop = profileModal ? profileModal.querySelector('.modal-backdrop') : null;
const profileModalContent = profileModal ? profileModal.querySelector('.modal-content') : null;

function openProfileModal() {
  if (!profileModal) return;
  
  profileModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // GSAP Animation
  gsap.fromTo(profileModalBackdrop, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.5, ease: 'power2.out' }
  );

  gsap.fromTo(profileModalContent,
    { 
      opacity: 0, 
      scale: 0.9, 
      y: 40,
      filter: 'blur(10px)' 
    },
    { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: 'blur(0px)',
      duration: 0.8, 
      delay: 0.1,
      ease: 'expo.out' 
    }
  );

  // Stagger items
  gsap.fromTo('.profile-card-container > *, .info-item, .social-icon',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, delay: 0.4, ease: 'power3.out' }
  );
}

function closeProfileModal() {
  if (!profileModal) return;

  gsap.to(profileModalContent, {
    opacity: 0,
    scale: 0.9,
    y: 20,
    filter: 'blur(10px)',
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      profileModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  gsap.to(profileModalBackdrop, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in'
  });
}

if (profileBtns.length > 0 && profileModal && closeProfileModalBtn) {
  profileBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openProfileModal();
    });
  });

  closeProfileModalBtn.addEventListener('click', closeProfileModal);

  if (profileModalBackdrop) {
    profileModalBackdrop.addEventListener('click', closeProfileModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && profileModal.classList.contains('active')) {
      closeProfileModal();
    }
  });
}


/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileMenu.classList.remove('active');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

/* =========================
   TRANSLATIONS DATA
========================= */

const translations = {
  "fr": {
    "nav_home": "Accueil",
    "nav_about": "À propos",
    "nav_experience": "Expérience",
    "nav_formation": "Formation",
    "nav_projects": "Projets",
    "nav_contact": "Contact",
    "hero_badge": "Développeur Full-Stack",
    "hero_title": "Je conçois des interfaces modernes et minimalistes.",
    "hero_description": "Développeur passionné par les expériences utilisateur sobres, rapides et élégantes.",
    "hero_view_projects": "Explorer mes projets",
    "hero_download_cv": "Obtenir mon CV",
    "about_badge": "À propos",
    "about_title_main": "Je développe des expériences numériques",
    "about_title_muted": "modernes, minimalistes et pensées pour durer.",
    "about_text": "Développeur passionné par les interfaces modernes, j’accorde une attention particulière à la simplicité, aux performances et à l’expérience utilisateur. J’aime concevoir des produits numériques élégants, cohérents et intuitifs en combinant développement frontend et sens du détail.",
    "about_phi_label": "Philosophie",
    "about_phi_title": "Concevoir des interfaces simples, rapides et élégantes.",
    "about_phi_text": "Je privilégie les expériences numériques minimalistes, intuitives et pensées pour durer.",
    "about_stack_label": "Stack",
    "about_focus_label": "Focus",
    "about_focus_title": "Architecture web",
    "about_vision_label": "Vision",
    "about_vision_title": "Interfaces intuitives",
    "exp_badge": "Expérience",
    "exp_title": "Construire des produits numériques avec précision et cohérence.",
    "exp_anam_company": "Agence Nationale de la Météorologie",
    "exp_anam_role": "Développeur mobile",
    "exp_anam_status": "Stage",
    "exp_anam_desc": "Participation au développement d’applications mobiles internes orientées collecte et visualisation de données météorologiques.",
    "exp_free_company": "Freelance",
    "exp_free_role": "Développeur Full-Stack",
    "exp_free_status": "Actuel",
    "exp_free_desc": "Conception d’interfaces modernes, minimalistes et performantes pour des projets web et produits numériques.",
    "projects_badge": "Projets",
    "projects_title": "Quelques projets sélectionnés.",
    "projects_cta": "Démarrer un projet",
    "project_aorte_tag": "Plateforme web",
    "project_aorte_desc": "Expérience web moderne et immersive conçue pour traduire l’identité, la vision et les services d’AORTE.",
    "project_edupulse_tag": "Application web",
    "project_edupulse_desc": "Une plateforme de blogging moderne, ultra-rapide et minimaliste, conçue pour permettre aux étudiants de publier des articles, des fiches de révision et des tutoriels techniques.",
    "project_anam_tag": "Application multiplateforme",
    "project_anam_desc": "Dashboard analytique moderne orienté données météorologiques temps réel.",
    "edu_badge": "Formation",
    "edu_title": "Un parcours construit entre technologie, logique et créativité.",
    "edu_uts_school": "Université Thomas Sankara",
    "edu_uts_degree": "Licence en Informatique",
    "edu_uts_desc": "Formation orientée développement, réseau, algorithmique, bases de données et conception de systèmes numériques.",
    "edu_uts_tag1": "Programmation",
    "edu_uts_tag2": "Algorithmique",
    "edu_uts_tag3": "Bases de données",
    "edu_uts_tag4": "Réseau",
    "edu_self_school": "Autoformation",
    "edu_self_degree": "Développement Full-Stack",
    "edu_self_desc": "Apprentissage approfondi des interfaces modernes, du design système et des expériences web premium.",
    "faq_badge": "FAQ",
    "faq_title": "Quelques réponses aux questions fréquentes.",
    "faq_desc": "Une vue rapide sur ma manière de travailler, collaborer et concevoir des produits numériques.",
    "faq_q1": "Quels types de projets réalisez-vous ?",
    "faq_a1": "Je développe des applications web, des plateformes SaaS, des tableaux de bord, des outils métiers et des applications sur mesure. Mon objectif est toujours le même : créer des produits rapides, intuitifs et faciles à maintenir, pensés autant pour les utilisateurs que pour les équipes techniques.",
    "faq_q2": "Travaillez-vous avec des clients internationaux ?",
    "faq_a2": "Je travaille entièrement à distance avec des clients en Afrique, en Europe et ailleurs. Les échanges peuvent se faire en français ou en anglais, et je m'adapte facilement à vos outils (GitHub, Slack, Notion, Figma, Teams...) ainsi qu'à votre organisation.",
    "faq_q3": "Comment garantissez-vous la qualité de vos livrables ?",
    "faq_a3": "Je porte une attention particulière à la qualité du code, aux performances, à la maintenabilité et à l'expérience utilisateur. Avant chaque livraison, je vérifie la compatibilité, les performances, la responsivité et la cohérence de l'interface afin de fournir un produit fiable et prêt à évoluer.",
    "faq_q4": "Intervenez-vous sur des projets déjà existants ?",
    "faq_a4": "Que votre projet soit en cours de développement ou déjà en production, je peux intervenir pour ajouter de nouvelles fonctionnalités, corriger des problèmes, améliorer les performances ou moderniser l'interface, tout en respectant l'architecture existante.",
    "faq_q5": "Quels sont vos délais et vos tarifs ?",
    "faq_a5": "Les délais et les tarifs dépendent de la nature du projet, de sa complexité et des fonctionnalités attendues. Après un premier échange, je vous propose une estimation claire, sans engagement, afin que vous puissiez prendre votre décision en toute transparence.",
    "faq_q6": "Pourquoi travailler avec vous ?",
    "faq_a6": "Au-delà du développement, j'accorde une grande importance à la compréhension du besoin, à la qualité de l'expérience utilisateur et à la clarté des échanges. Mon objectif n'est pas seulement de livrer une application fonctionnelle, mais un produit qui apporte une réelle valeur à votre activité.",
    "faq_q7": "Est-ce que vous accompagnez le projet après la livraison ?",
    "faq_a7": "Je peux assurer un suivi après la mise en ligne afin de corriger d'éventuels problèmes, répondre à vos questions ou accompagner les évolutions futures de votre produit selon vos besoins.",
    "faq_q8": "Comment se déroule une collaboration ?",
    "faq_a8": "Une collaboration commence par un échange pour comprendre vos objectifs. Je vous propose ensuite une solution adaptée, je développe le projet en vous tenant régulièrement informé de son avancement, puis nous validons ensemble la version finale avant la mise en production.",
    "cta_badge": "Contact",
    "cta_title": "Vous avez une idée. Donnons-lui vie.",
    "cta_desc": "Disponible pour des collaborations, projets freelance et expériences numériques modernes centrées utilisateur.",
    "cta_btn": "Démarrons maintenant",
    "profile_role": "Ingénieur Full-Stack",
    "profile_quote": "\"Concevoir des interfaces qui racontent une histoire.\"",
    "profile_bio_label": "Bio",
    "profile_bio_text": "Passionné par la création d'expériences numériques modernes et performantes. Je combine design minimaliste et architecture solide pour donner vie à vos idées.",
    "profile_loc_label": "Localisation",
    "profile_loc_value": "Abidjan, Côte d'Ivoire",
    "profile_exp_label": "Expérience",
    "profile_exp_value": "8+ ans",
    "contact_badge": "Disponible pour de nouveaux projets",
    "contact_title": "Travaillons ensemble.",
    "contact_subtitle": "Vous avez une idée ou un projet ? Parlons-en et créons quelque chose d'exceptionnel.",
    "contact_form_name": "Nom",
    "contact_form_fname": "Prénom",
    "contact_form_email": "Email",
    "contact_form_msg": "Message",
    "contact_form_submit": "Envoyer le message",
    "contact_placeholder_name": "Votre nom",
    "contact_placeholder_fname": "Votre prénom",
    "contact_placeholder_msg": "Comment puis-je vous aider ?",
    "dash_activity": "Activité",
    "dash_terminal": "Terminal",
    "dash_tab": "main.ts",
    "dash_code_name": "nom",
    "dash_code_role": "role",
    "dash_code_stack": "stack",
    "dash_code_return": "\"Interfaces modernes\"",
    "dash_term_1": "npm install success",
    "dash_term_2": "deploy --now",
    "dash_term_3": "✔ Projet en ligne"
  },
  "en": {
    "nav_home": "Home",
    "nav_about": "About",
    "nav_experience": "Experience",
    "nav_formation": "Education",
    "nav_projects": "Projects",
    "nav_contact": "Contact",
    "hero_badge": "Full-Stack Developer",
    "hero_title": "I design modern and minimalist interfaces.",
    "hero_description": "Developer passionate about clean, fast, and elegant user experiences.",
    "hero_view_projects": "View projects",
    "hero_download_cv": "Download CV",
    "about_badge": "About",
    "about_title_main": "I develop digital experiences that are",
    "about_title_muted": "modern, minimalist, and built to last.",
    "about_text": "Developer passionate about modern interfaces, I pay particular attention to simplicity, performance, and user experience. I love designing elegant, consistent, and intuitive digital products by combining frontend development with an eye for detail.",
    "about_phi_label": "Philosophy",
    "about_phi_title": "Designing simple, fast, and elegant interfaces.",
    "about_phi_text": "I prioritize minimalist, intuitive digital experiences designed to last.",
    "about_stack_label": "Stack",
    "about_focus_label": "Focus",
    "about_focus_title": "Web Architecture",
    "about_vision_label": "Vision",
    "about_vision_title": "Intuitive Interfaces",
    "exp_badge": "Experience",
    "exp_title": "Building digital products with precision and consistency.",
    "exp_anam_company": "National Meteorological Agency",
    "exp_anam_role": "Mobile Developer",
    "exp_anam_status": "Internship",
    "exp_anam_desc": "Participated in the development of internal mobile applications focused on meteorological data collection and visualization.",
    "exp_free_company": "Freelance",
    "exp_free_role": "Full-Stack Developer",
    "exp_free_status": "Current",
    "exp_free_desc": "Designing modern, minimalist, and high-performance interfaces for web projects and digital products.",
    "projects_badge": "Projects",
    "projects_title": "A few selected projects.",
    "projects_cta": "Start a project",
    "project_aorte_tag": "Web Platform",
    "project_aorte_desc": "Modern and immersive web experience designed to translate AORTE's identity, vision, and services.",
    "project_edupulse_tag": "Web Application",
    "project_edupulse_desc": "A modern, ultra-fast, and minimalist blogging platform designed for students to publish articles, revision sheets, and technical tutorials.",
    "project_anam_tag": "Multi-platform Application",
    "project_anam_desc": "Modern analytical dashboard oriented towards real-time meteorological data.",
    "edu_badge": "Education",
    "edu_title": "A path built between technology, logic, and creativity.",
    "edu_uts_school": "Thomas Sankara University",
    "edu_uts_degree": "Bachelor's in Computer Science",
    "edu_uts_desc": "Training focused on development, networking, algorithms, databases, and digital system design.",
    "edu_uts_tag1": "Programming",
    "edu_uts_tag2": "Algorithms",
    "edu_uts_tag3": "Databases",
    "edu_uts_tag4": "Networking",
    "edu_self_school": "Self-taught",
    "edu_self_degree": "Full-Stack Development",
    "edu_self_desc": "In-depth learning of modern interfaces, design systems, and premium web experiences.",
    "faq_badge": "FAQ",
    "faq_title": "Some answers to frequently asked questions.",
    "faq_desc": "A quick look at my way of working, collaborating, and designing digital products.",
    "faq_q1": "What types of projects do you create?",
    "faq_a1": "I mainly design modern web interfaces, SaaS dashboards, premium portfolios, and minimalist UI experiences.",
    "faq_q2": "Do you work with international clients?",
    "faq_a2": "Yes. I can collaborate remotely on international projects in both French and English.",
    "faq_q3": "What technologies do you use?",
    "faq_a3": "I mainly use HTML, CSS, JavaScript, React, Firebase, and modern UI Engineering tools.",
    "faq_q4": "Can you work on existing projects?",
    "faq_a4": "Whether your project is currently in development or already in production, I can intervene to add new features, fix issues, improve performance, or modernize the interface, all while respecting the existing architecture.",
    "faq_q5": "What are your timelines and rates?",
    "faq_a5": "Timelines and rates depend on the nature of the project, its complexity, and expected features. After an initial exchange, I will propose a clear, no-obligation estimate so you can make an informed decision in complete transparency.",
    "faq_q6": "Why work with you?",
    "faq_a6": "Beyond development, I place great importance on understanding your needs, the quality of user experience, and clarity in communication. My goal is not just to deliver a functional application, but a product that adds real value to your business.",
    "faq_q7": "Do you provide support after delivery?",
    "faq_a7": "I can provide follow-up after the site goes live to fix any issues, answer your questions, or support future evolutions of your product according to your needs.",
    "faq_q8": "How does a collaboration work?",
    "faq_a8": "A collaboration begins with an exchange to understand your objectives. I then propose a tailored solution, develop the project while keeping you regularly informed of its progress, and finally, we validate the final version together before deployment.",
    "cta_badge": "Contact",
    "cta_title": "Let's build something remarkable together.",
    "cta_desc": "Available for collaborations, freelance projects, and modern user-centric digital experiences.",
    "cta_btn": "Discuss a project",
    "profile_role": "Full-Stack Engineer",
    "profile_quote": "\"Designing interfaces that tell a story.\"",
    "profile_bio_label": "Bio",
    "profile_bio_text": "Passionate about creating modern and high-performance digital experiences. I combine minimalist design and solid architecture to bring your ideas to life.",
    "profile_loc_label": "Location",
    "profile_loc_value": "Abidjan, Ivory Coast",
    "profile_exp_label": "Experience",
    "profile_exp_value": "8+ years",
    "contact_badge": "Available for new projects",
    "contact_title": "Let's work together.",
    "contact_subtitle": "Have an idea or a project? Let's talk and create something exceptional.",
    "contact_form_name": "Last Name",
    "contact_form_fname": "First Name",
    "contact_form_email": "Email",
    "contact_form_msg": "Message",
    "contact_form_submit": "Send Message",
    "contact_placeholder_name": "Your last name",
    "contact_placeholder_fname": "Your first name",
    "contact_placeholder_msg": "How can I help you ?",
    "dash_activity": "Activity",
    "dash_terminal": "Terminal",
    "dash_tab": "index.ts",
    "dash_code_name": "name",
    "dash_code_role": "role",
    "dash_code_stack": "stack",
    "dash_code_return": "\"Modern Interfaces\"",
    "dash_term_1": "npm install success",
    "dash_term_2": "deploy --now",
    "dash_term_3": "✔ Project Live"
  }
};

/* =========================
   DASHBOARD ANIMATIONS
========================= */

function getCodeContent(lang) {
  const t = translations[lang] || {};
  return [
    { text: 'class ', type: 'keyword' },
    { text: 'Developer ', type: 'class' },
    { text: '{\n', type: 'plain' },
    { text: `  ${t.dash_code_name || 'nom'} `, type: 'property' },
    { text: '= ', type: 'plain' },
    { text: '"Josias Bazié"', type: 'string' },
    { text: `;\n  ${t.dash_code_role || 'role'} `, type: 'property' },
    { text: '= ', type: 'plain' },
    { text: '"Fullstack Engineer"', type: 'string' },
    { text: `;\n  ${t.dash_code_stack || 'stack'} `, type: 'property' },
    { text: '= ', type: 'plain' },
    { text: '["Design", "Dev", "UI"]', type: 'string' },
    { text: ';\n\n  ', type: 'plain' },
    { text: 'build', type: 'method' },
    { text: '() {\n    ', type: 'plain' },
    { text: 'return ', type: 'keyword' },
    { text: `${t.dash_code_return || '"Interfaces modernes"'}`, type: 'string' },
    { text: ';\n  }\n}', type: 'plain' }
  ];
}

function getTerminalLines(lang) {
  const t = translations[lang] || {};
  return [
    { prompt: true, text: t.dash_term_1 || 'npm install success' },
    { prompt: true, text: t.dash_term_2 || 'deploy --now' },
    { prompt: false, text: t.dash_term_3 || '✔ Project Live' }
  ];
}

let lineCount = 0;
let isTyping = false;
let typingTimeouts = [];

function clearTyping() {
  typingTimeouts.forEach(t => clearTimeout(t));
  typingTimeouts = [];
  isTyping = false;
}

function addLineNumber() {
  const lineNumbers = document.getElementById('line-numbers');
  if (!lineNumbers) return;
  
  lineCount++;
  const span = document.createElement('span');
  span.textContent = lineCount < 10 ? `0${lineCount}` : lineCount;
  lineNumbers.appendChild(span);
}

async function typeCode(containerId, lang) {
  const container = document.getElementById(containerId);
  const lineNumbers = document.getElementById('line-numbers');
  if (!container || !lineNumbers) return;

  clearTyping();
  isTyping = true;
  
  container.innerHTML = '';
  lineNumbers.innerHTML = '';
  lineCount = 0;

  addLineNumber();

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  container.appendChild(cursor);

  const content = getCodeContent(lang);

  for (const part of content) {
    const span = document.createElement('span');
    if (part.type !== 'plain') {
      span.className = `token-${part.type}`;
    }
    container.insertBefore(span, cursor);

    for (const char of part.text) {
      if (!isTyping) return;
      span.textContent += char;
      if (char === '\n') {
        addLineNumber();
      }
      await new Promise(r => {
        const t = setTimeout(r, 50);
        typingTimeouts.push(t);
      });
    }
  }
}

async function typeTerminal(containerId, lang) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  const lines = getTerminalLines(lang);

  for (const line of lines) {
    if (!isTyping) return;
    const lineDiv = document.createElement('div');
    lineDiv.className = 'terminal-line';
    
    if (line.prompt) {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'prompt';
      promptSpan.textContent = '$ ';
      lineDiv.appendChild(promptSpan);
    }

    const textSpan = document.createElement('span');
    lineDiv.appendChild(textSpan);
    
    const termCursor = document.createElement('span');
    termCursor.className = 'cursor terminal-cursor';
    lineDiv.appendChild(termCursor);
    
    container.appendChild(lineDiv);

    for (const char of line.text) {
      if (!isTyping) return;
      textSpan.textContent += char;
      await new Promise(r => {
        const t = setTimeout(r, 30);
        typingTimeouts.push(t);
      });
    }
    
    termCursor.remove();
    await new Promise(r => {
      const t = setTimeout(r, 100);
      typingTimeouts.push(t);
    });
  }
  
  const finalLines = container.querySelectorAll('.terminal-line');
  if (finalLines.length > 0) {
    const lastLine = finalLines[finalLines.length - 1];
    const finalCursor = document.createElement('span');
    finalCursor.className = 'cursor terminal-cursor';
    lastLine.appendChild(finalCursor);
  }
}

async function animateDots(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const dots = container.querySelectorAll('span');
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.add('visible');
    await new Promise(r => setTimeout(r, 10)); 
  }
}

/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
  document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  
  const question =
    item.querySelector(".faq-question");
  
  question.addEventListener("click", () => {
    
    const isActive =
      item.classList.contains("active");
    
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });
    
    if (!isActive) {
      item.classList.add("active");
    }
    
  });
  
});


/* =========================
   GSAP REVEAL ANIMATIONS
========================= */

if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  const blurRevealElements = document.querySelectorAll(
    '.hero-title, .hero-description, .hero-buttons, .section-badge, ' +
    '.about-title, .about-text, .about-card, ' +
    '.experience-header, .experience-item, ' +
    '.projects-header, .project-card, ' +
    '.education-header, .education-item, ' +
    '.faq-header, .faq-item, ' +
    '.final-cta-content'
  );

  blurRevealElements.forEach((el) => {
    gsap.fromTo(el, 
      { 
        opacity: 0, 
        filter: 'blur(15px)', 
        y: 30 
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        }
      }
    );
  });
}


/* =========================
   SCROLL PROGRESS LOGIC
========================= */

const scrollIndicator = document.getElementById('scrollIndicator');
const scrollContainer = document.querySelector('.scroll-progress-container');
let scrollTimeout;

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  
  if (scrollIndicator) {
    scrollIndicator.style.width = scrolled + '%';
  }

  if (scrollContainer) {
    scrollContainer.classList.add('visible');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      scrollContainer.classList.remove('visible');
    }, 1000);
  }
});


/* =========================
   LANGUAGE SWITCHER
========================= */

const languageBtn = document.querySelector('.language-btn');
const langText = document.querySelector('.lang-text');

function initLanguage() {
  console.log("Initializing language system...");
  const savedLang = localStorage.getItem('language') || 'fr';
  console.log("Current language:", savedLang);
  setLanguage(savedLang, false);
}

function setLanguage(lang, animate = true) {
  console.log("Setting language to:", lang);
  localStorage.setItem('language', lang);
  document.documentElement.setAttribute('lang', lang);
  
  if (langText) {
    langText.textContent = lang.toUpperCase();
  }

  updateContent(lang);
  
  // Restart dashboard animations
  typeCode('typing-code', lang);
  typeTerminal('typing-terminal', lang);
  animateDots('activity-dots');

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function updateContent(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  console.log("Found translation elements total:", elements.length);
  
  elements.forEach((el, index) => {
    const key = el.getAttribute('data-i18n');
    console.log(`Translating element ${index}: key=${key}, tag=${el.tagName}`);
    if (translations[lang] && translations[lang][key]) {
      if (el.children.length === 0) {
        el.textContent = translations[lang][key];
      } else {
        let textFound = false;
        Array.from(el.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
            node.textContent = translations[lang][key];
            textFound = true;
          }
        });
        if (!textFound) {
            el.innerText = translations[lang][key];
        }
      }
    } else {
      console.warn("Missing translation for key:", key, "in language:", lang);
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

if (languageBtn) {
  languageBtn.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'fr';
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    
    if (typeof gsap !== 'undefined') {
      gsap.to('body', {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setLanguage(newLang);
          gsap.to('body', { opacity: 1, duration: 0.3 });
        }
      });
    } else {
      setLanguage(newLang);
    }
  });
}

/* =========================
   CONTACT FORM SUBMISSION (EMAILJS)
========================= */

const contactForm = document.getElementById('contact-form');
const submitBtn = contactForm ? contactForm.querySelector('.submit-btn') : null;
const submitBtnText = submitBtn ? submitBtn.querySelector('span') : null;

if (contactForm && submitBtn) {
  // Initialisation d'EmailJS avec ta Clé Publique (Public Key)
  emailjs.init('EDMILDA7f5wlz2Fpd');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Changement d'état du bouton
    const originalText = submitBtnText.textContent;
    submitBtn.disabled = true;
    submitBtnText.textContent = 'Envoi en cours...';

    // Envoi via EmailJS
    // Service ID: service_rbrb871
    // Template ID: template_fzunxjc
    emailjs.sendForm('service_rbrb871', 'template_fzunxjc', this, 'EDMILDA7f5wlz2Fpd')
      .then(() => {
        // Succès
        submitBtnText.textContent = 'Message envoyé !';
        submitBtn.style.backgroundColor = '#10b981'; // Vert succès
        
        // Reset du formulaire
        contactForm.reset();

        // Retour à l'état normal après 3 secondes
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtnText.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          closeContactModal(); // Ferme la modal automatiquement
        }, 3000);
      }, (error) => {
        // Erreur
        console.error('Erreur EmailJS:', error);
        submitBtnText.textContent = 'Erreur...';
        submitBtn.style.backgroundColor = '#ef4444'; // Rouge erreur
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtnText.textContent = originalText;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      });
  });
}

// Initialize on load
initLanguage();
