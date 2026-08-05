/**
 * DK PORTFOLIO — APP LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. РЕНДЕР КОНТЕНТА ИЗ content.js
  // ============================================================

  // 1.1. Навигация
  const navList = document.getElementById('navList');
  DK_CONTENT.nav.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${item.id}" class="nav__link" data-scroll>${item.label}</a>`;
    navList.appendChild(li);
  });

  // 1.2. Hero Media (Видео или Картинка)
  const heroMediaBox = document.getElementById('heroMediaBox');
  if (DK_CONTENT.hero.mediaType === 'video') {
    heroMediaBox.innerHTML = `
      <video autoplay loop muted playsinline poster="${DK_CONTENT.hero.mediaPoster}">
        <source src="${DK_CONTENT.hero.mediaSrc}" type="video/mp4">
      </video>
    `;
  } else {
    heroMediaBox.innerHTML = `<img src="${DK_CONTENT.hero.mediaSrc}" alt="DK Showreel">`;
  }

  // 1.3. Фильтры Видеомонтажа
  const videoFilter = document.getElementById('videoFilter');
  const categories = [
    { key: 'all', label: 'Всі' },
    { key: 'reels', label: 'Reels / Shorts' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'corporate', label: 'Корпоративні' }
  ];
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'filter__btn' + (idx === 0 ? ' is-active' : '');
    btn.dataset.filter = cat.key;
    btn.textContent = cat.label;
    videoFilter.appendChild(btn);
  });

  // 1.4. Карточки видео (Bento Grid)
  const videoGrid = document.getElementById('videoGrid');
  function renderVideoProjects(filter = 'all') {
    videoGrid.innerHTML = '';
    DK_CONTENT.videoProjects.forEach(proj => {
      if (filter !== 'all' && proj.category !== filter) return;
      
      const item = document.createElement('article');
      // Определяем класс для Bento-сетки (по умолчанию 2x2)
      let sizeClass = 'bento__item--large'; 
      if (proj.bentoSize === 'wide') sizeClass = 'bento__item--wide';
      if (proj.bentoSize === 'tall') sizeClass = 'bento__item--tall';
      
      item.className = `bento__item ${sizeClass} reveal`;
      item.dataset.id = proj.id;
      
      // Media (Video если есть, иначе картинка)
      let mediaHtml = `<img src="${proj.thumb}" alt="${proj.title}" loading="lazy">`;
      if (proj.video) {
        mediaHtml = `
          <img src="${proj.thumb}" alt="${proj.title}" loading="lazy">
          <video class="bento-hover-video" muted loop playsinline preload="none" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 0.3s;">
            <source src="${proj.video}" type="video/mp4">
          </video>
        `;
      }

      item.innerHTML = `
        <div class="project-card">
          <div class="project-card__media">${mediaHtml}</div>
          <div class="project-card__body">
            <h3 class="project-card__title">${proj.title}</h3>
            <div class="project-card__tags">
              ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
      videoGrid.appendChild(item);
      
      // Hover для видео
      if (proj.video) {
        const vid = item.querySelector('.bento-hover-video');
        item.addEventListener('mouseenter', () => { vid.style.opacity = '1'; vid.play(); });
        item.addEventListener('mouseleave', () => { vid.style.opacity = '0'; vid.pause(); });
      }
      
      // Клик -> Модалка
      item.addEventListener('click', () => openModal(proj));
    });
    observeReveal(); // Запускаем анимации для новых элементов
  }
  renderVideoProjects();

  // 1.5. Карточки дизайна
  const designGrid = document.getElementById('designGrid');
  DK_CONTENT.designProjects.forEach(proj => {
    const item = document.createElement('article');
    item.className = 'design-card reveal';
    item.dataset.id = proj.id;
    item.innerHTML = `
      <div class="design-card__media">
        <img src="${proj.thumb}" alt="${proj.title}" loading="lazy">
      </div>
      <div class="design-card__info">
        <h3 class="design-card__title">${proj.title}</h3>
        <span class="design-card__tool">${proj.tool}</span>
      </div>
    `;
    designGrid.appendChild(item);
  });

  // 1.6. Навыки
  const skillsGrid = document.getElementById('skillsGrid');
  DK_CONTENT.skills.forEach(skill => {
    const item = document.createElement('article');
    item.className = 'skill-card reveal';
    item.innerHTML = `
      <h3 class="skill-card__name">${skill.name}</h3>
      <ul class="skill-card__features">
        ${skill.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    `;
    skillsGrid.appendChild(item);
  });

  // 1.7. Отзывы
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  DK_CONTENT.testimonials.forEach(t => {
    const item = document.createElement('article');
    item.className = 'testimonial-card reveal';
    item.innerHTML = `
      <div class="testimonial-card__stars">${'★'.repeat(t.rating)}</div>
      <blockquote class="testimonial-card__text">"${t.text}"</blockquote>
      <footer class="testimonial-card__author">
        <div class="testimonial-card__avatar">${t.author.charAt(0)}</div>
        <div>
          <cite class="testimonial-card__name">${t.author}</cite>
          <p class="testimonial-card__role">${t.role}</p>
        </div>
      </footer>
    `;
    testimonialsGrid.appendChild(item);
  });

  // 1.8. Прайсинг
  const pricingGrid = document.getElementById('pricingGrid');
  DK_CONTENT.pricing.forEach(p => {
    const item = document.createElement('article');
    item.className = `pricing-card reveal ${p.popular ? 'pricing-card--popular' : ''}`;
    item.innerHTML = `
      ${p.popular ? '<div class="pricing-card__badge">Популярне</div>' : ''}
      <h3 class="pricing-card__name">${p.name}</h3>
      <div class="pricing-card__price">Вартість обговорюємо індивідуально</div>
      <ul class="pricing-card__features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="https://t.me/des1n" target="_blank" rel="noopener" class="btn ${p.popular ? 'btn--primary' : 'btn--outline'} btn--block">Обговорити в Telegram</a>
    `;
    pricingGrid.appendChild(item);
  });

  // ============================================================
  // 2. ЛОГИКА ФИЛЬТРОВ
  // ============================================================
  videoFilter.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter__btn')) {
      videoFilter.querySelectorAll('.filter__btn').forEach(b => b.classList.remove('is-active'));
      e.target.classList.add('is-active');
      renderVideoProjects(e.target.dataset.filter);
    }
  });

  // ============================================================
  // 3. МОДАЛЬНОЕ ОКНО (Lightbox)
  // ============================================================
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalMedia = document.getElementById('modalMedia');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalCategory = document.getElementById('modalCategory');
  const modalCta = document.getElementById('modalCta');
  let lastFocusedElement = null;

  function openModal(proj) {
    lastFocusedElement = document.activeElement;
    
    // Media (Видео или Картинка)
    if (proj.video) {
      modalMedia.innerHTML = `<video autoplay loop muted playsinline controls><source src="${proj.video}" type="video/mp4"></video>`;
    } else {
      modalMedia.innerHTML = `<img src="${proj.thumb}" alt="${proj.title}">`;
    }
    
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.desc;
    modalCategory.textContent = proj.category.charAt(0).toUpperCase() + proj.category.slice(1);
    modalTools.innerHTML = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');
    modalCta.href = proj.link;
    
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus Trap
    setTimeout(() => modalClose.focus(), 100);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    modalMedia.innerHTML = ''; // Останавливаем видео
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  modalClose.addEventListener('click', closeModal);
  document.querySelector('.modal__overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    
    // Focus Trap внутри модалки
    if (e.key === 'Tab' && !modal.hidden) {
      const focusable = modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // ============================================================
  // 4. SCROLL ANIMATIONS (IntersectionObserver)
  // ============================================================
  function observeReveal() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay
          setTimeout(() => entry.target.classList.add('is-visible'), i * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    items.forEach(item => observer.observe(item));
  }
  observeReveal();

  // ============================================================
  // 5. HEADER & SCROLL PROGRESS & BACK TO TOP
  // ============================================================
  const header = document.getElementById('header');
  const scrollProgress = document.querySelector('.scroll-progress');
  const backTop = document.getElementById('backTop');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Header
    if (scrollTop > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    
    // Progress
    scrollProgress.style.width = scrollPercent + '%';
    
    // Back to top
    if (scrollTop > 500) backTop.hidden = false;
    else backTop.hidden = true;
  });

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ============================================================
  // 6. MOBILE MENU
  // ============================================================
  const navToggle = document.getElementById('navToggle');
  const navListEl = document.getElementById('navList');
  
  navToggle.addEventListener('click', () => {
    navListEl.classList.toggle('is-open');
  });
  
  navListEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      navListEl.classList.remove('is-open');
    }
  });

});
