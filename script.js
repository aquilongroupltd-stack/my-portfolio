/**
 * KONST CREATIVE - Premium Dark Landing Page
 * JavaScript for Interactions, Animations, and Functionality
 * Bilingual Support: English & Russian
 */

// Translations object
const translations = {
    en: {
        // Meta
        'meta.title': 'Konst Creative | WordPress, SEO & Advertising Expert',
        
        // Navigation
        'nav.services': 'Services',
        'nav.whyMe': 'Why Me',
        'nav.portfolio': 'Portfolio',
        'nav.process': 'Process',
        'nav.pricing': 'Pricing',
        'nav.reviews': 'Reviews',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.badge': 'Available for new projects',
        'hero.title1': 'Transform Your',
        'hero.title2': 'Digital Presence',
        'hero.subtitle': 'I create high-converting WordPress websites, boost your rankings with strategic SEO, and drive targeted traffic through precision context advertising. Results that matter.',
        'hero.ctaPrimary': 'Discuss Project in Telegram',
        'hero.ctaSecondary': 'View Test Website',
        'hero.stat1': 'Projects Completed',
        'hero.stat2': 'Client Satisfaction',
        'hero.stat3': 'Years Experience',
        'hero.scroll': 'Scroll to explore',
        
        // Services
        'services.tag': 'What I Do',
        'services.title': 'Services That Drive Results',
        'services.desc': 'Comprehensive digital solutions tailored to elevate your business',
        'services.learnMore': 'Learn More',
        
        'services.wp.title': 'WordPress Development',
        'services.wp.desc': 'Custom WordPress websites built for performance, scalability, and conversion. From business sites to e-commerce solutions with WooCommerce integration.',
        'services.wp.f1': 'Custom themes & plugins',
        'services.wp.f2': 'WooCommerce stores',
        'services.wp.f3': 'Performance optimization',
        'services.wp.f4': 'Mobile-responsive design',
        
        'services.seo.title': 'SEO Optimization',
        'services.seo.desc': 'Data-driven SEO strategies that improve your search rankings and drive organic traffic. Technical audits, on-page optimization, and content strategy.',
        'services.seo.f1': 'Technical SEO audits',
        'services.seo.f2': 'Keyword research & strategy',
        'services.seo.f3': 'On-page optimization',
        'services.seo.f4': 'Link building campaigns',
        
        'services.ads.title': 'Context Advertising',
        'services.ads.desc': 'High-ROI paid advertising campaigns on Google Ads and Yandex Direct. Strategic targeting, compelling ad copy, and continuous optimization.',
        'services.ads.f1': 'Google Ads campaigns',
        'services.ads.f2': 'Yandex Direct setup',
        'services.ads.f3': 'Remarketing strategies',
        'services.ads.f4': 'Conversion tracking',
        
        // Why Me
        'whyMe.tag': 'Why Choose Me',
        'whyMe.title': 'The Advantage You Need',
        'whyMe.desc': 'What sets me apart from the competition',
        
        'whyMe.b1.title': 'Proven Results',
        'whyMe.b1.desc': 'Track record of delivering measurable improvements in traffic, conversions, and ROI for every client.',
        'whyMe.b2.title': 'Fast Turnaround',
        'whyMe.b2.desc': 'Efficient workflows and clear communication ensure your project is delivered on time, every time.',
        'whyMe.b3.title': 'Personal Approach',
        'whyMe.b3.desc': 'Direct communication with no middlemen. Your project gets my full attention from start to finish.',
        'whyMe.b4.title': 'Full-Stack Expertise',
        'whyMe.b4.desc': 'From development to marketing, I handle all aspects of your digital presence cohesively.',
        'whyMe.b5.title': 'Transparent Pricing',
        'whyMe.b5.desc': 'No hidden fees or surprises. Clear quotes upfront with detailed breakdowns of all costs.',
        'whyMe.b6.title': 'Ongoing Support',
        'whyMe.b6.desc': 'Post-launch support and maintenance to ensure your digital assets continue performing.',
        
        // Portfolio
        'portfolio.tag': 'Portfolio',
        'portfolio.title': 'Featured Projects',
        'portfolio.desc': 'See examples of my work in action',
        'portfolio.preview': 'Demo Website Preview',
        'portfolio.projectTitle': 'Test Project Showcase',
        'portfolio.projectDesc': 'A demonstration of modern web development techniques featuring responsive design, smooth animations, and optimized performance. This showcase represents the quality and attention to detail I bring to every project.',
        'portfolio.tag1': 'Custom Theme',
        'portfolio.tag2': 'SEO Ready',
        'portfolio.visitBtn': 'Visit Demo Site',
        
        // Process
        'process.tag': 'How It Works',
        'process.title': 'My Process',
        'process.desc': 'A proven 5-step approach to delivering exceptional results',
        
        'process.s1.title': 'Discovery',
        'process.s1.desc': 'We discuss your goals, target audience, and requirements to understand exactly what you need.',
        'process.s2.title': 'Strategy',
        'process.s2.desc': 'I develop a comprehensive plan tailored to your business objectives and budget.',
        'process.s3.title': 'Execution',
        'process.s3.desc': 'Implementation with regular updates, ensuring everything aligns with your vision.',
        'process.s4.title': 'Testing',
        'process.s4.desc': 'Rigorous quality checks across devices and browsers to ensure flawless performance.',
        'process.s5.title': 'Launch & Support',
        'process.s5.desc': 'Smooth deployment followed by ongoing support and optimization.',
        
        // Pricing
        'pricing.tag': 'Pricing',
        'pricing.title': 'Investment Plans',
        'pricing.desc': 'Choose the package that fits your business needs',
        'pricing.period': '/project',
        'pricing.popular': 'Most Popular',
        'pricing.cta': 'Get Started',
        
        'pricing.start.name': 'Start',
        'pricing.start.desc': 'Perfect for small businesses',
        'pricing.start.f1': '5-page WordPress site',
        'pricing.start.f2': 'Mobile responsive',
        'pricing.start.f3': 'Basic SEO setup',
        'pricing.start.f4': 'Contact form',
        'pricing.start.f5': '2 weeks delivery',
        
        'pricing.business.name': 'Business',
        'pricing.business.desc': 'For growing companies',
        'pricing.business.f1': '10-page WordPress site',
        'pricing.business.f2': 'Custom design',
        'pricing.business.f3': 'Advanced SEO package',
        'pricing.business.f4': 'Speed optimization',
        'pricing.business.f5': '1 month support',
        
        'pricing.pro.name': 'Pro',
        'pricing.pro.desc': 'Enterprise solutions',
        'pricing.pro.f1': 'Unlimited pages',
        'pricing.pro.f2': 'WooCommerce store',
        'pricing.pro.f3': 'Full SEO + Ads setup',
        'pricing.pro.f4': 'Custom functionality',
        'pricing.pro.f5': '3 months support',
        
        // Testimonials
        'testimonials.tag': 'Testimonials',
        'testimonials.title': 'Client Reviews',
        'testimonials.desc': 'What my clients say about working with me',
        
        'testimonials.t1.text': '"Konst delivered our website ahead of schedule and exceeded all expectations. The SEO work has already brought in 40% more organic traffic in just two months."',
        'testimonials.t1.name': 'Alex Mitchell',
        'testimonials.t1.role': 'CEO, TechStart Inc.',
        
        'testimonials.t2.text': '"The Google Ads campaigns have been a game-changer for our business. ROI improved by 300% and the targeting is spot-on. Highly recommend!"',
        'testimonials.t2.name': 'Sarah Kim',
        'testimonials.t2.role': 'Marketing Director, Bloom Co.',
        
        'testimonials.t3.text': '"Professional, responsive, and incredibly skilled. Our e-commerce store looks amazing and sales have increased significantly since launch."',
        'testimonials.t3.name': 'Michael Roberts',
        'testimonials.t3.role': 'Founder, Artisan Goods',
        
        // CTA
        'cta.title': 'Ready to Transform Your Business?',
        'cta.desc': "Let's discuss your project and create something amazing together. Get in touch now for a free consultation.",
        'cta.button': 'Discuss Project in Telegram',
        'cta.note': 'Response within 24 hours • Free initial consultation',
        
        // Footer
        'footer.tagline': 'Transforming digital visions into reality',
        'footer.services': 'Services',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.link1': 'WordPress Development',
        'footer.link2': 'SEO Optimization',
        'footer.link3': 'Context Advertising',
        'footer.link4': 'Portfolio',
        'footer.link5': 'Pricing',
        'footer.link6': 'Process',
        'footer.rights': 'All rights reserved.'
    },
    
    ru: {
        // Meta
        'meta.title': 'Konst Creative | Эксперт по WordPress, SEO и Рекламе',
        
        // Navigation
        'nav.services': 'Услуги',
        'nav.whyMe': 'Почему я',
        'nav.portfolio': 'Портфолио',
        'nav.process': 'Процесс',
        'nav.pricing': 'Цены',
        'nav.reviews': 'Отзывы',
        'nav.contact': 'Контакты',
        
        // Hero
        'hero.badge': 'Доступен для новых проектов',
        'hero.title1': 'Трансформируйте',
        'hero.title2': 'Свое Присутствие в Сети',
        'hero.subtitle': 'Я создаю высококонверсионные сайты на WordPress, повышаю ваши позиции в поиске с помощью стратегического SEO и привлекаю целевой трафик через точечную контекстную рекламу. Результаты, которые имеют значение.',
        'hero.ctaPrimary': 'Обсудить проект в Telegram',
        'hero.ctaSecondary': 'Посмотреть демо-сайт',
        'hero.stat1': 'Выполнено проектов',
        'hero.stat2': 'Довольных клиентов',
        'hero.stat3': 'Лет опыта',
        'hero.scroll': 'Прокрутите вниз',
        
        // Services
        'services.tag': 'Что я делаю',
        'services.title': 'Услуги, которые приносят результаты',
        'services.desc': 'Комплексные цифровые решения для развития вашего бизнеса',
        'services.learnMore': 'Подробнее',
        
        'services.wp.title': 'Разработка на WordPress',
        'services.wp.desc': 'Индивидуальные сайты на WordPress, созданные для производительности, масштабируемости и конверсии. От бизнес-сайтов до интернет-магазинов с интеграцией WooCommerce.',
        'services.wp.f1': 'Кастомные темы и плагины',
        'services.wp.f2': 'Магазины WooCommerce',
        'services.wp.f3': 'Оптимизация скорости',
        'services.wp.f4': 'Адаптивный дизайн',
        
        'services.seo.title': 'SEO-оптимизация',
        'services.seo.desc': 'Стратегии SEO на основе данных, которые улучшают ваши позиции в поиске и привлекают органический трафик. Технические аудиты, внутренняя оптимизация и контент-стратегия.',
        'services.seo.f1': 'Технические аудиты SEO',
        'services.seo.f2': 'Исследование ключевых слов',
        'services.seo.f3': 'Внутренняя оптимизация',
        'services.seo.f4': 'Линкбилдинг-кампании',
        
        'services.ads.title': 'Контекстная реклама',
        'services.ads.desc': 'Рекламные кампании с высокой рентабельностью в Google Ads и Яндекс Директ. Стратегический таргетинг, убедительные объявления и постоянная оптимизация.',
        'services.ads.f1': 'Кампании Google Ads',
        'services.ads.f2': 'Настройка Яндекс Директ',
        'services.ads.f3': 'Стратегии ремаркетинга',
        'services.ads.f4': 'Отслеживание конверсий',
        
        // Why Me
        'whyMe.tag': 'Почему выбирают меня',
        'whyMe.title': 'Преимущество, которое вам нужно',
        'whyMe.desc': 'Что отличает меня от конкурентов',
        
        'whyMe.b1.title': 'Доказанные результаты',
        'whyMe.b1.desc': 'История успеха в достижении измеримых улучшений трафика, конверсий и ROI для каждого клиента.',
        'whyMe.b2.title': 'Быстрое выполнение',
        'whyMe.b2.desc': 'Эффективные рабочие процессы и четкая коммуникация гарантируют своевременную сдачу проекта.',
        'whyMe.b3.title': 'Персональный подход',
        'whyMe.b3.desc': 'Прямое общение без посредников. Ваш проект получает мое полное внимание от начала до конца.',
        'whyMe.b4.title': 'Full-Stack экспертиза',
        'whyMe.b4.desc': 'От разработки до маркетинга — я комплексно управляю всеми аспектами вашего цифрового присутствия.',
        'whyMe.b5.title': 'Прозрачное ценообразование',
        'whyMe.b5.desc': 'Никаких скрытых платежей или сюрпризов. Четкие расценки с подробным разбором всех затрат.',
        'whyMe.b6.title': 'Постоянная поддержка',
        'whyMe.b6.desc': 'Поддержка и обслуживание после запуска для обеспечения стабильной работы ваших цифровых активов.',
        
        // Portfolio
        'portfolio.tag': 'Портфолио',
        'portfolio.title': 'Избранные проекты',
        'portfolio.desc': 'Примеры моих работ',
        'portfolio.preview': 'Превью демо-сайта',
        'portfolio.projectTitle': 'Демонстрационный проект',
        'portfolio.projectDesc': 'Демонстрация современных техник веб-разработки с адаптивным дизайном, плавными анимациями и оптимизированной производительностью. Этот проект отражает качество и внимание к деталям, которые я привношу в каждый проект.',
        'portfolio.tag1': 'Кастомная тема',
        'portfolio.tag2': 'SEO-готовый',
        'portfolio.visitBtn': 'Посетить демо-сайт',
        
        // Process
        'process.tag': 'Как это работает',
        'process.title': 'Мой процесс',
        'process.desc': 'Проверенный 5-шаговый подход к достижению выдающихся результатов',
        
        'process.s1.title': 'Исследование',
        'process.s1.desc': 'Мы обсуждаем ваши цели, целевую аудиторию и требования, чтобы точно понять, что вам нужно.',
        'process.s2.title': 'Стратегия',
        'process.s2.desc': 'Я разрабатываю комплексный план, адаптированный под ваши бизнес-цели и бюджет.',
        'process.s3.title': 'Реализация',
        'process.s3.desc': 'Внедрение с регулярными обновлениями, гарантирующее соответствие вашему видению.',
        'process.s4.title': 'Тестирование',
        'process.s4.desc': 'Тщательная проверка качества на всех устройствах и браузерах для безупречной работы.',
        'process.s5.title': 'Запуск и поддержка',
        'process.s5.desc': 'Плавный запуск с последующей поддержкой и оптимизацией.',
        
        // Pricing
        'pricing.tag': 'Цены',
        'pricing.title': 'Тарифные планы',
        'pricing.desc': 'Выберите пакет, который подходит вашему бизнесу',
        'pricing.period': '/проект',
        'pricing.popular': 'Популярный',
        'pricing.cta': 'Начать',
        
        'pricing.start.name': 'Старт',
        'pricing.start.desc': 'Идеально для малого бизнеса',
        'pricing.start.f1': 'Сайт на 5 страницах',
        'pricing.start.f2': 'Адаптивный дизайн',
        'pricing.start.f3': 'Базовая SEO-настройка',
        'pricing.start.f4': 'Контактная форма',
        'pricing.start.f5': 'Срок — 2 недели',
        
        'pricing.business.name': 'Бизнес',
        'pricing.business.desc': 'Для растущих компаний',
        'pricing.business.f1': 'Сайт на 10 страницах',
        'pricing.business.f2': 'Индивидуальный дизайн',
        'pricing.business.f3': 'Расширенный SEO-пакет',
        'pricing.business.f4': 'Оптимизация скорости',
        'pricing.business.f5': 'Поддержка 1 месяц',
        
        'pricing.pro.name': 'Про',
        'pricing.pro.desc': 'Корпоративные решения',
        'pricing.pro.f1': 'Неограниченное количество страниц',
        'pricing.pro.f2': 'Магазин WooCommerce',
        'pricing.pro.f3': 'Полный SEO + реклама',
        'pricing.pro.f4': 'Кастомный функционал',
        'pricing.pro.f5': 'Поддержка 3 месяца',
        
        // Testimonials
        'testimonials.tag': 'Отзывы',
        'testimonials.title': 'Отзывы клиентов',
        'testimonials.desc': 'Что говорят клиенты о работе со мной',
        
        'testimonials.t1.text': '"Конст сдал сайт раньше срока и превзошел все ожидания. SEO-работа уже принесла на 40% больше органического трафика всего за два месяца."',
        'testimonials.t1.name': 'Алекс Митчелл',
        'testimonials.t1.role': 'CEO, TechStart Inc.',
        
        'testimonials.t2.text': '"Кампании Google Ads стали переломным моментом для нашего бизнеса. ROI вырос на 300%, а таргетинг точно попадает в цель. Настоятельно рекомендую!"',
        'testimonials.t2.name': 'Сара Ким',
        'testimonials.t2.role': 'Маркетинг-директор, Bloom Co.',
        
        'testimonials.t3.text': '"Профессионал, отзывчивый и невероятно квалифицированный. Наш интернет-магазин выглядит потрясающе, а продажи значительно выросли с момента запуска."',
        'testimonials.t3.name': 'Майкл Робертс',
        'testimonials.t3.role': 'Основатель, Artisan Goods',
        
        // CTA
        'cta.title': 'Готовы трансформировать свой бизнес?',
        'cta.desc': 'Давайте обсудим ваш проект и создадим что-то удивительное вместе. Свяжитесь со мной сейчас для бесплатной консультации.',
        'cta.button': 'Обсудить проект в Telegram',
        'cta.note': 'Ответ в течение 24 часов • Бесплатная консультация',
        
        // Footer
        'footer.tagline': 'Воплощаю цифровые идеи в реальность',
        'footer.services': 'Услуги',
        'footer.quickLinks': 'Быстрые ссылки',
        'footer.contact': 'Контакты',
        'footer.link1': 'Разработка WordPress',
        'footer.link2': 'SEO-оптимизация',
        'footer.link3': 'Контекстная реклама',
        'footer.link4': 'Портфолио',
        'footer.link5': 'Цены',
        'footer.link6': 'Процесс',
        'footer.rights': 'Все права защищены.'
    }
};

// Current language
let currentLang = localStorage.getItem('konst-lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    setLanguage(currentLang, false);
    
    // Initialize all components
    initNavbar();
    initScrollReveal();
    initParticles();
    initTestimonialsSlider();
    initProcessAnimation();
    initSmoothScroll();
    initLanguageSwitcher();
});

/* ============================================
   LANGUAGE SWITCHER
   ============================================ */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                setLanguage(lang, true);
            }
        });
    });
}

function setLanguage(lang, animate = true) {
    currentLang = lang;
    localStorage.setItem('konst-lang', lang);
    
    // Update active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.dataset.i18n;
        const translation = translations[lang][key];
        
        if (translation) {
            if (animate) {
                // Fade out, change text, fade in
                el.style.transition = 'opacity 0.2s ease';
                el.style.opacity = '0';
                
                setTimeout(() => {
                    updateElementText(el, translation);
                    el.style.opacity = '1';
                }, 200);
            } else {
                updateElementText(el, translation);
            }
        }
    });
}

function updateElementText(el, text) {
    // Check if element has child elements that should be preserved
    if (el.querySelector('.gradient-text')) {
        // Keep the gradient-text span, update only text nodes
        const gradientSpan = el.querySelector('.gradient-text');
        const key = el.dataset.i18n;
        
        if (key === 'hero.title1') {
            el.innerHTML = text + '<br>';
        } else if (key === 'services.title') {
            el.innerHTML = text + ' <span class="gradient-text">Results</span>';
        } else if (key === 'whyMe.title') {
            el.innerHTML = text + ' <span class="gradient-text">Advantage</span> You Need';
        } else if (key === 'portfolio.title') {
            el.innerHTML = text + ' <span class="gradient-text">Projects</span>';
        } else if (key === 'process.title') {
            el.innerHTML = text + ' <span class="gradient-text">Process</span>';
        } else if (key === 'pricing.title') {
            el.innerHTML = text + ' <span class="gradient-text">Plans</span>';
        } else if (key === 'testimonials.title') {
            el.innerHTML = text + ' <span class="gradient-text">Reviews</span>';
        } else if (key === 'cta.title') {
            el.innerHTML = text + ' <span class="gradient-text">Transform</span> Your Business?';
        } else {
            el.textContent = text;
        }
    } else {
        el.textContent = text;
    }
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar background
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

/* ============================================
   PARTICLE BACKGROUND ANIMATION
   ============================================ */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isActive = true;
    
    // Check for touch device - reduce particles
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const particleCount = isTouchDevice ? 15 : 30;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            
            // Random color from accent palette
            const colors = [
                'rgba(0, 212, 255, ',    // Blue
                'rgba(168, 85, 247, ',   // Purple
                'rgba(236, 72, 153, ',   // Pink
                'rgba(34, 211, 238, '    // Cyan
            ];
            this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.colorBase + this.opacity + ')';
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Draw connections between nearby particles
    function drawConnections() {
        const maxDistance = 100;
        const maxConnections = 3;
        
        for (let i = 0; i < particles.length; i++) {
            let connections = 0;
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance && connections < maxConnections) {
                    const opacity = (1 - distance / maxDistance) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    connections++;
                }
            }
        }
    }
    
    // Animation loop with frame skipping for performance
    let frameCount = 0;
    
    function animate() {
        if (!isActive) return;
        
        frameCount++;
        
        // Skip every other frame on mobile
        if (isTouchDevice && frameCount % 2 !== 0) {
            animationId = requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Visibility check - pause when not visible
    const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isActive) {
                    isActive = true;
                    animate();
                }
            } else {
                isActive = false;
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            }
        });
    });
    
    visibilityObserver.observe(canvas);
    
    // Start animation
    animate();
}

/* ============================================
   TESTIMONIALS SLIDER
   ============================================ */
function initTestimonialsSlider() {
    const track = document.getElementById('testimonials-track');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dots = document.querySelectorAll('.dot');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const slides = track.children;
    const totalSlides = slides.length;
    let autoplayInterval = null;
    
    // Wrap each card in inner container for styling
    Array.from(slides).forEach(slide => {
        const inner = document.createElement('div');
        inner.className = 'testimonial-card-inner';
        while (slide.firstChild) {
            inner.appendChild(slide.firstChild);
        }
        slide.appendChild(inner);
    });
    
    function goToSlide(index) {
        // Handle bounds
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentSlide = index;
        
        // Move track
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoplay();
        });
    });
    
    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            startAutoplay();
        });
    }
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoplay();
        }
    }
    
    // Start autoplay
    startAutoplay();
}

/* ============================================
   PROCESS TIMELINE ANIMATION
   ============================================ */
function initProcessAnimation() {
    const timelineProgress = document.querySelector('.timeline-progress');
    const processSection = document.getElementById('process');
    
    if (!timelineProgress || !processSection) return;
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineProgress.classList.add('active');
                progressObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    progressObserver.observe(processSection);
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   PARALLAX EFFECT FOR HERO
   ============================================ */
(function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.3;
                
                if (rate < window.innerHeight) {
                    hero.style.transform = `translateY(${rate * 0.2}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    }, { passive: true });
})();

/* ============================================
   BUTTON RIPPLE EFFECT
   ============================================ */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/* ============================================
   GLITCH EFFECT FOR HERO TITLE (Optional)
   ============================================ */
(function initGlitchEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const gradientText = heroTitle.querySelector('.gradient-text');
    if (!gradientText) return;
    
    // Subtle glitch on hover
    gradientText.addEventListener('mouseenter', () => {
        gradientText.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            gradientText.style.animation = '';
        }, 300);
    });
})();

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
    }
`;
document.head.appendChild(glitchStyle);

/* ============================================
   COUNTER ANIMATION FOR STATS
   ============================================ */
(function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text);
                const suffix = text.replace(/[0-9]/g, '');
                
                if (!isNaN(number)) {
                    animateCounter(target, 0, number, 2000, suffix);
                }
                
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    stats.forEach(stat => counterObserver.observe(stat));
    
    function animateCounter(element, start, end, duration, suffix) {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
})();

/* ============================================
   PERFORMANCE: CLEANUP ON PAGE HIDE
   ============================================ */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause expensive animations when tab is hidden
        document.body.classList.add('page-hidden');
    } else {
        document.body.classList.remove('page-hidden');
    }
});

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */
console.log('%c Konst Creative ', 'background: linear-gradient(135deg, #00d4ff, #a855f7, #ec4899); color: #fff; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Premium Digital Solutions ', 'color: #00d4ff; font-size: 14px;');
console.log('%c WordPress | SEO | Advertising ', 'color: #a855f7; font-size: 12px;');
