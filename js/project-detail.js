(function() {
  const lang = document.documentElement.lang || 'fr';
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    document.getElementById('project-detail').innerHTML = `
      <div class="container" style="text-align:center;padding:120px 0">
        <h1>Projet non trouvé</h1>
        <a href="./index.html" class="primary-btn" style="display:inline-flex;margin-top:24px">Retour au portfolio</a>
      </div>`;
    return;
  }

  document.title = `${project.title} - Bazié Josias`;

  const navLeft = document.querySelector('.nav-left');
  if (navLeft) {
    navLeft.innerHTML = `
      <a href="./index.html" class="detail-nav-back" aria-label="Retour au portfolio">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </a>
    `;
  }

  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.style.display = 'none';
  }
  document.getElementById('detail-image').src = project.image;
  document.getElementById('detail-image').alt = project.title;
  document.getElementById('detail-tag').textContent = project.tag[lang];
  document.getElementById('detail-title').textContent = project.title;
  document.getElementById('detail-description').textContent = project.description[lang];
  document.getElementById('detail-role').textContent = project.caseStudy.role[lang];
  document.getElementById('detail-duration').textContent = project.caseStudy.duration[lang];
  document.getElementById('detail-live-link').href = project.liveUrl;

  document.getElementById('detail-overview').textContent = project.caseStudy.overview[lang];

  const techList = document.getElementById('detail-tech-list');
  project.caseStudy.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'detail-tech-badge';
    const icon = techIcons[tech];
    if (icon) {
      const img = document.createElement('img');
      img.src = icon;
      img.alt = '';
      span.appendChild(img);
    }
    span.appendChild(document.createTextNode(tech));
    techList.appendChild(span);
  });

  function renderCards(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'detail-card';
      card.innerHTML = `
        <h3 class="detail-card-title">${item.title[lang]}</h3>
        <p class="detail-card-text">${item.desc[lang]}</p>
      `;
      container.appendChild(card);
    });
  }

  renderCards('detail-features', project.caseStudy.features);
  renderCards('detail-challenges', project.caseStudy.challenges);
  renderCards('detail-results', project.caseStudy.results);
})();
