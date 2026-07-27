/* ====================  CONSTANTS  ==================== */

/* ------------  Inline SVG icons for critical nav buttons  ------------ */
const INLINE_ICONS = {
    moon: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    sun:  '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    menu: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
    x:    '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
};

/* ------------  i18n dictionary (FR is the source, EN is the translation)  ------------ */
const I18N = {
    en: {
        'nav.about': 'About',
        'nav.stack': 'Stack',
        'nav.projects': 'Projects',
        'nav.background': 'Background',
        'nav.services': 'Services',
        'nav.contact': 'Contact',

        'hero.eyebrow': 'Available | Antananarivo, Madagascar',
        'hero.role': 'Lorem Ipsum · Lorem Ipsum · Full Stack developer',
        'hero.lede': 'I design IoT systems and web applications, from board to cloud. Currently pursuing my Master at ESPA (Antananarivo).',
        'hero.downloadCv': 'Download my CV',
        'hero.contactMe': 'Contact me',
        'hero.fact.education': 'Education',
        'hero.fact.educationValue': 'Master Electronics ESPA · in progress',
        'hero.fact.specialties': 'Expertise',
        'hero.fact.specialtiesValue': 'IoT · Full Stack · DevOps',
        'hero.fact.certs': 'Certifications',
        'hero.fact.certsValue': 'LPI · CODEKO · Spring Boot',
        'hero.scroll': 'Scroll',

        'about.label': '01 — About',
        'about.title': 'Where hardware meets software.',
        'about.p1': "M.Sc. in Electronics from ESPA (École Supérieure Polytechnique d'Antananarivo), I work at the intersection of embedded hardware and modern software platforms.",
        'about.p2': 'My approach: design complete solutions, from electronic prototypes (ESP32, sensors, MQTT) to Java Spring Boot or Python FastAPI backends, through Angular interfaces and Docker/Linux deployment.',
        'about.location': 'Location',
        'about.locationValue': 'Antananarivo, Madagascar',
        'about.availability': 'Availability',
        'about.availabilityValue': 'Mission & CDD',
        'about.languages': 'Languages',
        'about.languagesValue': 'Malagasy · French · Technical English',

        'stack.label': '02 — Tech stack',
        'stack.title': 'Tools and technologies I use daily.',
        'stack.language': 'Language',
        'stack.framework': 'Framework',
        'stack.gbdd': 'Databases',
        'stack.devtools': 'Development tools',
        'stack.manage': 'Managements',
        'stack.design': 'Design',
        'stack.electronics': 'Electronics',
        'stack.ai': 'Artificial Intelligence',
        'stack.other': 'Others',

        'projects.label': '03 — Projects',
        'projects.title': 'Selected work.',
        'projects.empty': 'This section will soon be filled with real projects: context, problem solved, technologies, results and GitHub links.',
        'projects.cta': 'See my GitHub repositories',

        'education.label': '04 — Background & certifications',
        'education.title': 'Studies and technical training.',
        'education.studies': 'Studies',
        'education.studiesSub': 'Academic background in electronics.',
        'education.tech': 'Technical training',
        'education.techSub': 'Certifications and specialized learning.',
        'edu.master.date': '2024 — present (in progress)',
        'edu.master.title': "Master's in Electronics",
        'edu.master.desc': 'Specialization in embedded systems and IoT: signal processing, advanced microcontrollers, PCB design, wireless communication, and software/hardware integration for connected industrial solutions.',
        'edu.licence.title': "Bachelor's in Electronics",
        'edu.licence.desc': 'Foundations of analog and digital electronics, microcontroller programming (Arduino, ESP32), automation, embedded computing fundamentals, and first IoT projects.',
        'edu.bac.title': 'High-School Diploma — Science Track (Série C)',
        'edu.bac.desc': "Scientific track focused on mathematics and physics. Gateway to Malagasy's top engineering schools.",

        'services.label': '05 — Services',
        'services.title': 'What I can build for you.',
        'services.fullstack': 'Full-Stack Development',
        'services.fullstackDesc': 'Complete web applications, from Angular frontend to Java Spring Boot or Python FastAPI backend.',
        'services.iot': 'IoT & Embedded Systems',
        'services.iotDesc': 'Connected solutions: electronic prototyping, microcontroller programming, and cloud integration.',
        'services.devops': 'Cloud & DevOps',
        'services.devopsDesc': 'CI/CD pipelines, containerization, and deployment of reliable, automated infrastructures.',

        'contact.label': '06 — Contact',
        'contact.title': "Let's discuss your project.",
        'contact.intro': 'Available for IoT, full-stack or DevOps missions.',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.locationValue': 'Antananarivo, Madagascar',
        'contact.available': 'Available for new projects',
        'contact.responseTime': 'Response within 48 business hours',
        'contact.socials': 'On the web',
        'form.title': 'Send a message',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.send': 'Send',
        'form.note': 'Your data stays confidential, never shared.',

        'footer.role': 'Electronics engineer & full-stack developer',
        'footer.location': 'Antananarivo, Madagascar',
        'footer.nav': 'Navigation',
        'footer.reach': 'Reach out',
        'footer.downloadCv': 'Download CV',
        'footer.social': 'Socials',
        'footer.rights': 'All rights reserved.',
        'footer.built': 'Designed & built with care in Antananarivo.',
    },
};

/* ====================  ENTRY POINT  ==================== */

document.addEventListener('DOMContentLoaded', () => {
    renderIcons();
    initTheme();
    initLanguage();
    initNav();
    initScrollSpy();
    initReveal();
    initBackToTop();
    initContactForm();
    initFooterYear();
    initMagneticCta();
    initHeroScroll();
});

/* ====================  INIT FUNCTIONS  ==================== */

/* ------------  Replace <i data-lucide="..."> with SVGs from Lucide  ------------ */
function renderIcons(root = document) {
    if (typeof window.lucide === 'undefined') {
        return window.setTimeout(() => renderIcons(root), 50);
    }
    window.lucide.createIcons({
        nameAttr: 'data-lucide',
        attrs: { 'stroke-width': '1.75' },
    });
}

/* ------------  Light/dark toggle with View Transitions API + system preference  ------------ */
function initTheme() {
    const btn = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const stored = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (systemDark ? 'dark' : 'light');
    applyTheme(initial);

    btn?.addEventListener('click', (e) => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);

        if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            applyTheme(next);
            return;
        }
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));

        const transition = document.startViewTransition(() => applyTheme(next));
        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0 at ${cx}px ${cy}px)`,
                        `circle(${radius}px at ${cx}px ${cy}px)`,
                    ],
                },
                {
                    duration: 480,
                    easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
    });

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (btn) swapIcon(btn, theme === 'dark' ? 'sun' : 'moon');
    }
}

/* ------------  i18n FR ⇄ EN. FR text is snapshotted on load (dataset.i18nFr)  ------------ */
function initLanguage() {
    const btn = document.getElementById('lang-toggle');
    const label = btn?.querySelector('.lang-label');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.dataset.i18nFr = el.textContent.trim();
    });

    const stored = localStorage.getItem('lang');
    const initial = stored === 'en' ? 'en' : 'fr';
    applyLang(initial);

    btn?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('lang') || 'fr';
        const next = current === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', next);
        applyLang(next);
    });

    function applyLang(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            const translation = lang === 'fr'
                ? el.dataset.i18nFr
                : (I18N.en[key] || el.dataset.i18nFr);
            if (translation) el.textContent = translation;
        });
        if (label) label.textContent = lang === 'fr' ? 'FR' : 'EN';
        if (btn) btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }
}

/* ------------  Mobile burger menu : open/close + icon swap (menu ↔ x)  ------------ */
function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        swapIcon(toggle, open ? 'x' : 'menu');
    });

    links.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
            if (links.classList.contains('open')) {
                links.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                swapIcon(toggle, 'menu');
            }
        });
    });
}

/* ------------  Highlight nav link of the currently visible section  ------------ */
function initScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!sections.length || !links.length) return;

    const map = new Map();
    links.forEach((a) => map.set(a.getAttribute('href').slice(1), a));

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    links.forEach((a) => a.classList.remove('active'));
                    map.get(entry.target.id)?.classList.add('active');
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
}

/* ------------  Fade-in + slide-up of sections on scroll (skipped if reduced-motion)  ------------ */
function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll(
        '.section-head, .stack-group, .service-card, .cert-card, .timeline-item, .projects-empty, .contact-form, .contact-list'
    );
    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((el) => observer.observe(el));
}

/* ------------  Back-to-top button (visible past 400px) + sticky header "scrolled" state  ------------ */
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    const header = document.querySelector('.site-header');
    const onScroll = () => {
        if (btn) btn.classList.toggle('visible', window.scrollY > 400);
        if (header) header.classList.toggle('scrolled', window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ------------  Contact form : POST to Web3Forms + validation + toast feedback  ------------ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name?.trim() || !data.topic?.trim() || !data.message?.trim()) {
            return toast('Tous les champs sont requis.', 'error');
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) {
            return toast('Adresse email invalide.', 'error');
        }
        if (data.access_key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            return toast("Web3Forms n'est pas encore configuré. Renseignez votre clé.", 'error');
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi…';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData,
            });
            const json = await res.json();
            if (res.ok && json.success) {
                toast('Message envoyé, je vous réponds sous 48 h.', 'success');
                form.reset();
            } else {
                toast(json.message || "L'envoi a échoué. Réessayez plus tard.", 'error');
            }
        } catch {
            toast('Connexion impossible. Vérifiez votre réseau.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
        }
    });
}

/* ------------  Inject the current year into the footer (#current-year)  ------------ */
function initFooterYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
}

/* ------------  Magnetic effect : hero primary button gently follows the cursor within 80px  ------------ */
function initMagneticCta() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const targets = document.querySelectorAll('.hero .btn-primary');
    const strength = 0.18;
    const reach = 80;

    targets.forEach((btn) => {
        let raf;
        const onMove = (e) => {
            const r = btn.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.hypot(dx, dy);

            if (dist > reach) {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => { btn.style.transform = ''; });
                return;
            }
            const factor = (1 - dist / reach) * strength;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                btn.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
            });
        };
        const reset = () => { btn.style.transform = ''; };

        window.addEventListener('mousemove', onMove, { passive: true });
        btn.addEventListener('mouseleave', reset);
    });
}

/* ------------  Hero shrink-on-scroll fallback for browsers without animation-timeline  ------------ */
function initHeroScroll() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (CSS.supports('animation-timeline: scroll()')) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;
    hero.dataset.shrink = '';

    let raf;
    const update = () => {
        const max = window.innerHeight * 0.7;
        const progress = Math.min(1, Math.max(0, window.scrollY / max));
        hero.style.setProperty('--shrink-y', progress.toFixed(3));
    };
    const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
}

/* ====================  HELPERS  ==================== */

/* ------------  Swap an icon inside a container (inline SVG or Lucide name)  ------------ */
function swapIcon(container, name) {
    if (INLINE_ICONS[name]) {
        const label = container.querySelector('.lang-label');
        container.innerHTML = INLINE_ICONS[name] + (label ? label.outerHTML : '');
        return;
    }
    container.innerHTML = `<i data-lucide="${name}" aria-hidden="true"></i>`;
    renderIcons(container);
}

/* ------------  Show a transient toast (auto-removes after 4 s)  ------------ */
function toast(message, variant = 'success') {
    document.querySelectorAll('.toast').forEach((n) => n.remove());
    const el = document.createElement('div');
    el.className = `toast toast--${variant}`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}
