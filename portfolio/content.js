/**
 * DK PORTFOLIO — CONTENT LAYER
 * Владелец сайта правит ТОЛЬКО этот файл.
 * Чтобы добавить проект — скопируй блок {} внутри массива и поменяй текст/ссылки.
 */

const DK_CONTENT = {

  // --- ГЛОБАЛЬНЫЕ КОНТАКТЫ ---
  contacts: {
    telegram: 'https://t.me/des1n',
    behance: 'https://www.behance.net/5db91123',
    email: 'dendekri17@gmail.com'
  },

  // --- НАВИГАЦИЯ ---
  nav: [
    { id: 'hero', label: 'Головна' },
    { id: 'video', label: 'Відеомонтаж' },
    { id: 'design', label: 'Дизайн' },
    { id: 'skills', label: 'Навички' },
    { id: 'testimonials', label: 'Відгуки' },
    { id: 'pricing', label: 'Вартість' },
    { id: 'contact', label: 'Контакти' }
  ],

  // --- HERO (Головний екран) ---
  hero: {
    cta_primary: 'Дивитись роботи',
    cta_secondary: 'Зв\'язатися в Telegram',
    // ТУТ ВСТАВ СВОЄ ВІДЕО ДЛЯ HERO (Showreel) або картинку з прозорістю (PNG)
    mediaType: 'video', // 'video' або 'image'
    mediaSrc: 'video/hero-showreel.mp4', 
    mediaPoster: 'img/hero-poster.jpg'
  },

  // --- ПРОЕКТЫ ВИДЕО (Bento Grid) ---
  videoProjects: [
    {
      id: 'proj-1',
      category: 'reels', // reels | youtube | corporate
      title: 'Динамічний Reels для блогера',
      desc: 'Швидкий монтаж під трендовий аудіо, звуковий дизайн, динамічні переходи.',
      // ТУТ ВСТАВ ШЛЯХ ДО КАРТИНКИ (превью)
      thumb: 'img/project-1.jpg',
      // ТУТ ВСТАВ ШЛЯХ ДО ВІДЕО (для автоплею в модалці та ховері)
      video: 'video/project-1-preview.mp4', 
      tags: ['DaVinci Resolve', 'After Effects', 'Sound Design'],
      link: 'https://t.me/des1n'
    },
    {
      id: 'proj-2',
      category: 'youtube',
      title: 'YouTube Документація: Подорож',
      desc: 'Повний цикл: монтаж 15 хв, колір-корекція, графіка, саунд-дизайн. Затримання аудиторії 65%.',
      thumb: 'img/project-2.jpg',
      video: 'video/project-2-preview.mp4',
      tags: ['Premiere Pro', 'Color Grading', 'Motion Graphics'],
      link: 'https://t.me/des1n'
    },
    {
      id: 'proj-3',
      category: 'corporate',
      title: 'Корпоративне відео для IT-компанії',
      desc: 'Презентація продукту, моушн-графіка, геймплей-захоплення. Дедлайн — 3 дні.',
      thumb: 'img/project-3.jpg',
      video: '',
      tags: ['DaVinci Resolve', 'Motion Graphics',],
      link: 'https://t.me/des1n'
    },
    {
      id: 'proj-4',
      category: 'reels',
      title: 'Серія Reels для особистого бренду',
      desc: 'Пакет 12 роликів. Трендові звуки, субтитри. Рост фолловерів +30%.',
      thumb: 'img/project-4.jpg',
      video: 'video/project-4-preview.mp4',
      tags: ['Trending Audio', 'Fast Turnaround'],
      link: 'https://t.me/des1n'
    },
    {
      id: 'proj-5',
      category: 'youtube',
      title: 'Розбір кейсу: Як зрости на 10к',
      desc: 'Кінетична типографіка, складний композитинг, інфографіка.',
      thumb: 'img/project-5.jpg',
      video: '',
      tags: ['After Effects', 'Kinetic Typography', 'Infographics'],
      link: 'https://t.me/des1n'
    },
    {
      id: 'proj-6',
      category: 'corporate',
      title: 'Презентація продукту для стартапу',
      desc: 'монтаж.',
      thumb: 'img/project-6.jpg',
      video: '',
      tags: ['DaVinci Resolve',],
      link: 'https://t.me/des1n'
    }
  ],

  // --- ПРОЕКТЫ ДИЗАЙНА ---
  designProjects: [
    {
      id: 'des-1',
      title: 'Обкладинка для подкасту',
      tool: 'Figma, Photoshop',
      thumb: 'img/design-1.jpg',
      link: 'https://t.me/des1n'
    },
    {
      id: 'des-2',
      title: 'Банер для YouTube каналу',
      tool: 'Figma',
      thumb: 'img/design-2.jpg',
      link: 'https://t.me/des1n'
    },
    {
      id: 'des-3',
      title: 'Креатив для Facebook/Instagram Ads',
      tool: 'Photoshop, Illustrator',
      thumb: 'img/design-3.jpg',
      link: 'https://t.me/des1n'
    },
    {
      id: 'des-4',
      title: 'Ідентичність для особистого бренду',
      tool: 'Figma, Illustrator',
      thumb: 'img/design-4.jpg',
      link: 'https://t.me/des1n'
    }
  ],

  // --- НАВЫКИ ---
  skills: [
    {
      name: 'DaVinci Resolve Studio',
      features: ['Професійна колір-корекція та грейдінг', 'Монтаж, Fairlight (аудіо), Fusion (VFX)', 'Робота з RAW (BRAW, RED), ACES workflow']
    },
    {
      name: 'Figma',
      features: ['UI/UX дизайн, прототипування, дизайн-системи', 'Автолейаути, компоненти, змінні', 'Передача в розробку (DevMode)']
    },
    {
      name: 'Adobe Photoshop',
      features: ['Ретуш, композитинг, фотоманіпуляція', 'Підготовка ассетів для відео/вебу', 'Generative Fill, Neural Filters (AI tools)']
    },
    {
      name: 'Adobe After Effects',
      features: ['Motion Design, Кінетична типографіка, VFX', 'Expressions, Essential Graphics (MOGRTs)', 'Інтеграція з Premiere Pro / DaVinci']
    }
  ],

  // --- ОТЗЫВЫ ---
  testimonials: [
    {
      text: 'Професіонал своєї справи, зробив Reels за 1 день. Розуміє тренди та алгоритми. Рекомендую!',
      author: 'Влад Міхєєв',
      role: 'Експерт з нерухомості',
      rating: 5
    },
    {
      text: 'Найкращий монтажер, з яким працював.все зроблено швидко. Бомба!',
      author: 'Андрій Пивоваров',
      role: 'Серійний підприємець. Ментор. Стратег (100k+ підписників)',
      rating: 5
    },
    {
      text: 'Дякую за співпрацю! Буду звертатися, коли виникнуть нові завдання. Зберіг ваш контакт для майбутніх проєктів.',
      author: 'Володимир Петренко',
      role: 'Маркетолог, E-com бренд',
      rating: 5
    }
  ],

  // --- ПРАЙСИНГ ---
  pricing: [
    {
      id: 'price-reels',
      name: 'Reels / Shorts / TikTok',
      features: ['Монтаж під трендовий аудіо, динамічні переходи', 'Кольор-корекція, субтитри (авто/ручні), ефекти', 'Адаптація під 3 платформи (9:16), обкладинка'],
      popular: true // Перша картка тепер головна
    },
    {
      id: 'price-youtube',
      name: 'YouTube / Long-form Video',
      features: ['Повний цикл: монтаж, саунд-дизайн, колір, графіка', 'Ретеншн-редагування (з тримаюча увагу)', 'Створення енд-скрін, таймкодів, обкладинки (CTR)'],
      popular: false
    },
    {
      id: 'price-design',
      name: 'Дизайн-пакет (Бренд / Ads)',
      features: ['Логотип, колірна палітра, типографіка, гайдлайни', 'Креативи для реклами (статика/мобільний відео)', 'YouTube банер, аватарки, обкладинки для відео'],
      popular: false
    }
  ]
};
