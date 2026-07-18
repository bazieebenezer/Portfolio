(function() {
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

  const BASE_URL = 'https://simplixp.vercel.app';

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

  function updateMetaTags(lang, p) {
    const title = `${p.title} - Bazié Josias`;
    const desc = p.description[lang];

    document.title = title;

    setMeta('description', desc);
    setMeta('og:title', title);
    setMeta('og:description', desc);
    setMeta('og:url', `${BASE_URL}/project-detail.html?id=${p.id}`);
    setMeta('og:image', `${BASE_URL}${p.image}`);
    setMeta('twitter:title', title);
    setMeta('twitter:description', desc);
    setMeta('twitter:url', `${BASE_URL}/project-detail.html?id=${p.id}`);
    setMeta('twitter:image', `${BASE_URL}${p.image}`);

    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = `${BASE_URL}/project-detail.html?id=${p.id}`;
  }

  function setMeta(name, value) {
    let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      if (name.startsWith('og:')) el.setAttribute('property', name);
      else el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  }

  function renderProjectContent(lang) {
    updateMetaTags(lang, project);
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
    techList.innerHTML = '';
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
      container.innerHTML = '';
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
  }

  renderProjectContent(document.documentElement.lang || 'fr');

  window.updateProjectDetail = renderProjectContent;
})();
