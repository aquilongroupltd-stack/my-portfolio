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
'nav.whyMe': 'Почему мне доверяют',
'nav.portfolio': 'Кейсы',
'nav.process': 'Как работаем',
'nav.pricing': 'Стоимость',
'nav.reviews': 'Отзывы',
'nav.contact': 'Связаться',

// Hero
'hero.badge': 'Берусь за новые проекты',
'hero.title1': 'Сайт, который',
'hero.title2': 'приносит клиентов',
'hero.subtitle': 'Разрабатываю сайты на WordPress, вывожу их в ТОП поиска и привожу заявки через контекстную рекламу. Без шаблонов и пустых обещаний — только измеримый результат.',
'hero.ctaPrimary': 'Написать в Telegram',
'hero.ctaSecondary': 'Посмотреть демо-сайт',
'hero.stat1': 'Реализованных проектов',
'hero.stat2': 'Довольных заказчиков',
'hero.stat3': 'Лет практики',
'hero.scroll': 'Листайте ниже',

// Services
'services.tag': 'Чем могу помочь',
'services.title': 'Решения для роста бизнеса',
'services.desc': 'Закрываю разработку и продвижение под ключ — вам не нужно искать нескольких подрядчиков',
'services.learnMore': 'Подробнее',

'services.wp.title': 'Создание сайтов на WordPress',
'services.wp.desc': 'Сайты, которые быстро загружаются, удобны на телефоне и превращают посетителей в заявки. От лендингов до интернет-магазинов.',
'services.wp.f1': 'Индивидуальный дизайн',
'services.wp.f2': 'Интернет-магазины WooCommerce',
'services.wp.f3': 'Высокая скорость загрузки',
'services.wp.f4': 'Адаптация под мобильные',

'services.seo.title': 'SEO-продвижение',
'services.seo.desc': 'Вывод сайта в поиске по коммерческим запросам. Работаю не по чек-листу, а по стратегии под вашу нишу.',
'services.seo.f1': 'Полный технический аудит',
'services.seo.f2': 'Сбор семантики конкурентов',
'services.seo.f3': 'Оптимизация страниц',
'services.seo.f4': 'Рост позиций и трафика',

'services.ads.title': 'Контекстная реклама',
'services.ads.desc': 'Запуск рекламы, которая окупается. Анализирую экономику заявки, а не просто клики.',
'services.ads.f1': 'Google Ads',
'services.ads.f2': 'Яндекс Директ',
'services.ads.f3': 'Ретаргетинг',
'services.ads.f4': 'Аналитика и оптимизация',

// Why Me
'whyMe.tag': 'Преимущества',
'whyMe.title': 'Почему клиенты остаются со мной',
'whyMe.desc': 'Работаю как партнёр, а не как исполнитель',

'whyMe.b1.title': 'Ориентация на прибыль',
'whyMe.b1.desc': 'Главная метрика — заявки и продажи, а не просто красивый сайт.',
'whyMe.b2.title': 'Чёткие сроки',
'whyMe.b2.desc': 'Фиксируем этапы и дедлайны до начала работы.',
'whyMe.b3.title': 'Прямая связь',
'whyMe.b3.desc': 'Вы общаетесь напрямую со специалистом без менеджеров.',
'whyMe.b4.title': 'Разработка + маркетинг',
'whyMe.b4.desc': 'Сайт сразу создаётся под SEO и рекламу.',
'whyMe.b5.title': 'Понятная цена',
'whyMe.b5.desc': 'Стоимость известна заранее — без доплат по ходу.',
'whyMe.b6.title': 'Поддержка после запуска',
'whyMe.b6.desc': 'Не пропадаю после сдачи проекта.',

// Portfolio
'portfolio.tag': 'Кейсы',
'portfolio.title': 'Примеры работ',
'portfolio.desc': 'Посмотрите как это выглядит вживую',
'portfolio.preview': 'Предпросмотр',
'portfolio.projectTitle': 'Демонстрационный проект',
'portfolio.projectDesc': 'Пример структуры и качества, которое получает каждый заказчик: быстрый, удобный и готовый к продвижению сайт.',
'portfolio.tag1': 'Индивидуальный дизайн',
'portfolio.tag2': 'Готов к продвижению',
'portfolio.visitBtn': 'Открыть сайт',

// Process
'process.tag': 'Этапы работы',
'process.title': 'От заявки до клиентов',
'process.desc': 'Прозрачный процесс без хаоса',

'process.s1.title': 'Обсуждение',
'process.s1.desc': 'Определяем задачи и считаем экономику проекта.',
'process.s2.title': 'Планирование',
'process.s2.desc': 'Формирую структуру и стратегию продвижения.',
'process.s3.title': 'Разработка',
'process.s3.desc': 'Создание сайта и настройка функционала.',
'process.s4.title': 'Проверка',
'process.s4.desc': 'Тестирование на всех устройствах.',
'process.s5.title': 'Запуск',
'process.s5.desc': 'Публикация и начало привлечения клиентов.',

// Pricing
'pricing.tag': 'Стоимость',
'pricing.title': 'Форматы сотрудничества',
'pricing.desc': 'Выберите подходящий вариант',
'pricing.period': '',
'pricing.popular': 'Чаще выбирают',
'pricing.cta': 'Оставить заявку',

'pricing.start.name': 'Старт',
'pricing.start.desc': 'Для малого бизнеса',
'pricing.start.f1': 'Сайт до 5 страниц',
'pricing.start.f2': 'Адаптивная версия',
'pricing.start.f3': 'Базовая SEO-настройка',
'pricing.start.f4': 'Форма заявок',
'pricing.start.f5': 'Срок ~14 дней',

'pricing.business.name': 'Бизнес',
'pricing.business.desc': 'Оптимальный вариант',
'pricing.business.f1': 'Сайт до 10 страниц',
'pricing.business.f2': 'Индивидуальный дизайн',
'pricing.business.f3': 'Подготовка под SEO',
'pricing.business.f4': 'Ускорение загрузки',
'pricing.business.f5': 'Поддержка 1 месяц',

'pricing.pro.name': 'Максимум',
'pricing.pro.desc': 'Для серьёзных задач',
'pricing.pro.f1': 'Любой объём страниц',
'pricing.pro.f2': 'Интернет-магазин',
'pricing.pro.f3': 'SEO + реклама',
'pricing.pro.f4': 'Индивидуальные функции',
'pricing.pro.f5': 'Поддержка 3 месяца',

// Testimonials
'testimonials.tag': 'Отзывы',
'testimonials.title': 'Что говорят клиенты',
'testimonials.desc': 'Результаты после запуска',

'testimonials.t1.text': '"Сайт сделали быстрее срока. Уже через 2 месяца пошёл стабильный поток заявок из поиска."',
'testimonials.t1.name': 'Alex Mitchell',
'testimonials.t1.role': 'CEO, TechStart Inc.',

'testimonials.t2.text': '"Реклама начала окупаться почти сразу. Стоимость клиента снизилась в несколько раз."',
'testimonials.t2.name': 'Sarah Kim',
'testimonials.t2.role': 'Marketing Director, Bloom Co.',

'testimonials.t3.text': '"Продажи выросли после редизайна и запуска магазина. Работой полностью доволен."',
'testimonials.t3.name': 'Michael Roberts',
'testimonials.t3.role': 'Founder, Artisan Goods',

// CTA
'cta.title': 'Обсудим ваш проект?',
'cta.desc': 'Напишите в Telegram — подскажу оптимальное решение и примерный бюджет.',
'cta.button': 'Написать в Telegram',
'cta.note': 'Отвечаю лично • Обычно в течение дня',

// Footer
'footer.tagline': 'Сайты и продвижение, которые приносят клиентов',
'footer.services': 'Услуги',
'footer.quickLinks': 'Навигация',
'footer.contact': 'Контакты',
'footer.link1': 'Создание сайтов',
'footer.link2': 'SEO-продвижение',
'footer.link3': 'Контекстная реклама',
'footer.link4': 'Кейсы',
'footer.link5': 'Стоимость',
'footer.link6': 'Как работаем',
'footer.rights': '© Все права защищены'

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
