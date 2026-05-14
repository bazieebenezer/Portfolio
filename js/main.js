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
  { text: ';\n  ', type: 'plain' },
  { text: 'build', type: 'method' },
  { text: '() {\n    ', type: 'plain' },
  { text: 'return ', type: 'keyword' },
  { text: '"Interfaces modernes & Intuitives"', type: 'string' },
  { text: ';\n  }\n}', type: 'plain' }
];

const terminalLines = [
  { prompt: true, text: 'npm install success' },
  { prompt: true, text: 'deploy --now' },
  { prompt: false, text: '✔ Project Live' }
];

async function typeCode(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  for (const part of codeContent) {

    const span = document.createElement('span');

    if (part.type !== 'plain') {
      span.className = `token-${part.type}`;
    }

    container.appendChild(span);
    container.appendChild(cursor);

    for (const char of part.text) {

      span.textContent += char;

      await new Promise(resolve =>
        setTimeout(resolve, 70)
      );
    }
  }

  for (const char of part.text) {

  span.textContent += char;

  updateLineNumbers();

  await new Promise(resolve =>
    setTimeout(resolve, 70)
  );
}
}

async function typeTerminal(containerId) {

  const container = document.getElementById(containerId);
  if (!container) return;

  let activeCursor = null;

  for (const line of terminalLines) {

    const lineDiv = document.createElement('div');
    lineDiv.className = 'terminal-line';

    // Prompt
    if (line.prompt) {

      const promptSpan = document.createElement('span');
      promptSpan.className = 'prompt';
      promptSpan.textContent = '$ ';

      lineDiv.appendChild(promptSpan);
    }

    // Texte
    const textSpan = document.createElement('span');
    lineDiv.appendChild(textSpan);

    // Supprime l'ancien curseur
    if (activeCursor) {
      activeCursor.remove();
    }

    // Nouveau curseur
    const cursor = document.createElement('span');
    cursor.className = 'cursor terminal-cursor';

    lineDiv.appendChild(cursor);

    activeCursor = cursor;

    container.appendChild(lineDiv);

    // Animation écriture
    for (const char of line.text) {

      textSpan.textContent += char;

      await new Promise(resolve =>
        setTimeout(resolve, 20)
      );
    }

    await new Promise(resolve =>
      setTimeout(resolve, 250)
    );
  }
}

async function animateDots(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const dots = container.querySelectorAll('span');
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.add('visible');
    await new Promise(r => setTimeout(r, 40)); 
  }
}

window.addEventListener('load', () => {
  typeCode('typing-code');
  typeTerminal('typing-terminal');
  animateDots('activity-dots');
});

function updateLineNumbers() {

  const codeBlock = document.getElementById('typing-code');
  const lineNumbers = document.getElementById('line-numbers');

  if (!codeBlock || !lineNumbers) return;

  // Récupère le line-height réel
  const styles = window.getComputedStyle(codeBlock);

  const lineHeight = parseFloat(styles.lineHeight);

  // Nombre réel de lignes affichées
  const linesCount = Math.round(
    codeBlock.offsetHeight / lineHeight
  );

  lineNumbers.innerHTML = '';

  for (let i = 1; i <= linesCount; i++) {

    const line = document.createElement('span');

    line.textContent = i;

    lineNumbers.appendChild(line);
  }
}

window.addEventListener('resize', updateLineNumbers);
