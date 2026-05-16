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

const contactBtn = document.querySelector('.contact-btn');
const contactModal = document.querySelector('.contact-modal');
const closeModal = document.querySelector('.close-modal');

if (contactBtn && contactModal && closeModal) {
  contactBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    const modalContent = document.querySelector('.modal-content');
    if (
      contactModal.classList.contains('active') &&
      modalContent &&
      !modalContent.contains(e.target) &&
      !contactBtn.contains(e.target)
    ) {
      contactModal.classList.remove('active');
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
   DASHBOARD ANIMATIONS
========================= */

const codeContent = [
  { text: 'class ', type: 'keyword' },
  { text: 'Developer ', type: 'class' },
  { text: '{\n', type: 'plain' },
  { text: '  nom ', type: 'property' },
  { text: '= ', type: 'plain' },
  { text: '"Josias Bazié"', type: 'string' },
  { text: ';\n  role ', type: 'property' },
  { text: '= ', type: 'plain' },
  { text: '"Fullstack Engineer"', type: 'string' },
  { text: ';\n  stack ', type: 'property' },
  { text: '= ', type: 'plain' },
  { text: '["Design", "Dev", "UI"]', type: 'string' },
  { text: ';\n\n  ', type: 'plain' },
  { text: 'build', type: 'method' },
  { text: '() {\n    ', type: 'plain' },
  { text: 'return ', type: 'keyword' },
  { text: '"Interfaces modernes"', type: 'string' },
  { text: ';\n  }\n}', type: 'plain' }
];

const terminalLines = [
  { prompt: true, text: 'npm install success' },
  { prompt: true, text: 'deploy --now' },
  { prompt: false, text: '✔ Project Live' }
];

let lineCount = 0;

function addLineNumber() {
  const lineNumbers = document.getElementById('line-numbers');
  if (!lineNumbers) return;
  
  lineCount++;
  const span = document.createElement('span');
  span.textContent = lineCount < 10 ? `0${lineCount}` : lineCount;
  lineNumbers.appendChild(span);
}

async function typeCode(containerId) {
  const container = document.getElementById(containerId);
  const lineNumbers = document.getElementById('line-numbers');
  if (!container || !lineNumbers) return;

  container.innerHTML = '';
  lineNumbers.innerHTML = '';
  lineCount = 0;

  addLineNumber(); // First line number starts immediately

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  container.appendChild(cursor);

  for (const part of codeContent) {
    const span = document.createElement('span');
    if (part.type !== 'plain') {
      span.className = `token-${part.type}`;
    }
    container.insertBefore(span, cursor);

    for (const char of part.text) {
      span.textContent += char;
      if (char === '\n') {
        addLineNumber(); // New line number appears ONLY after a \n
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }
}

async function typeTerminal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  for (const line of terminalLines) {
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
      textSpan.textContent += char;
      await new Promise(r => setTimeout(r, 70));
    }
    
    termCursor.remove();
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Final persistent cursor on the LAST written line
  const lines = container.querySelectorAll('.terminal-line');
  if (lines.length > 0) {
    const lastLine = lines[lines.length - 1];
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
    await new Promise(r => setTimeout(r, 15)); 
  }
}

window.addEventListener('load', () => {
  typeCode('typing-code');
  typeTerminal('typing-terminal');
  animateDots('activity-dots');
});

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
   FINAL CTA BUTTON
========================= */

const finalCTAButton =
  document.querySelector(
    ".final-cta-button"
  );

if (finalCTAButton) {
  
  finalCTAButton.addEventListener(
    "click",
    () => {
      
      contactModal.classList.add("active");
      
    }
  );
  
}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

        }

      });

    },

    {
      threshold: 0.12,
    }

);

revealElements.forEach((element) => {

  revealObserver.observe(element);

});