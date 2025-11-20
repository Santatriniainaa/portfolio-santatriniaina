/**
 * Script principal du portfolio
 * Gère les interactions, animations et fonctionnalités
 */

// Initialisation lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation du portfolio...');
    
    // Initialisation de toutes les fonctionnalités
    initThemeSwitcher();
    initNavigation();
    initScrollEffects();
    initAnimations();
    initPortfolioCarousel();
    initContactForm();
    initStatistics();
    initSkillsAnimation();
    
    console.log('✅ Portfolio initialisé avec succès');
});

/**
 * Gestionnaire du switch de thème
 */
function initThemeSwitcher() {
    const themeToggleDesktop = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    // Récupération du thème sauvegardé ou détection des préférences système
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    body.setAttribute('data-theme', initialTheme);
    
    // Synchronisation des switches
    if (themeToggleDesktop) themeToggleDesktop.checked = initialTheme === 'dark';
    if (themeToggleMobile) themeToggleMobile.checked = initialTheme === 'dark';

    /**
     * Basculer entre les thèmes
     * @param {boolean} isDark - True pour thème sombre, false pour thème clair
     */
    function toggleTheme(isDark) {
        if (isDark) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('🌙 Thème sombre activé');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log('☀️ Thème clair activé');
        }
    }

    // Événements pour le switch desktop
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('change', function() {
            toggleTheme(this.checked);
            if (themeToggleMobile) themeToggleMobile.checked = this.checked;
        });
    }

    // Événements pour le switch mobile
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('change', function() {
            toggleTheme(this.checked);
            if (themeToggleDesktop) themeToggleDesktop.checked = this.checked;
        });
    }

    // Écoute des changements de préférences système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            if (themeToggleDesktop) themeToggleDesktop.checked = newTheme === 'dark';
            if (themeToggleMobile) themeToggleMobile.checked = newTheme === 'dark';
            console.log('🖥️ Thème système détecté:', newTheme);
        }
    });
}

/**
 * Gestionnaire de navigation
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Ajout de la classe lors du défilement
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Fermeture du menu mobile après clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) bsCollapse.hide();
                }
            }
        });
    });
}

/**
 * Effets de défilement
 */
function initScrollEffects() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Affichage/masquage du bouton retour en haut
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Retour en haut fluide
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Animations générales
 */
function initAnimations() {
    /**
     * Animation au défilement
     */
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-fadeInUp');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialisation et écoute du défilement
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Animations des cartes de services
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Création des particules animées
    createParticles();
}

/**
 * Carrousel du portfolio amélioré avec boutons flottants
 */
function initPortfolioCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtns = document.querySelectorAll('.carousel-prev');
    const nextBtns = document.querySelectorAll('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    /**
     * Mise à jour du carrousel
     */
    function updateCarousel() {
        // Déplacement du track
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Mise à jour des indicateurs
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Gestion des boutons de navigation
        const isFirstSlide = currentSlide === 0;
        const isLastSlide = currentSlide === totalSlides - 1;
        
        prevBtns.forEach(btn => {
            btn.disabled = isFirstSlide;
            if (isFirstSlide) {
                btn.style.opacity = '0.3';
                btn.style.cursor = 'not-allowed';
            } else {
                btn.style.opacity = '';
                btn.style.cursor = 'pointer';
            }
        });
        
        nextBtns.forEach(btn => {
            btn.disabled = isLastSlide;
            if (isLastSlide) {
                btn.style.opacity = '0.3';
                btn.style.cursor = 'not-allowed';
            } else {
                btn.style.opacity = '';
                btn.style.cursor = 'pointer';
            }
        });
        
        // Ajout d'une classe pour l'animation
        track.classList.add('sliding');
        setTimeout(() => {
            track.classList.remove('sliding');
        }, 500);
    }
    
    /**
     * Slide suivant
     */
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    }
    
    /**
     * Slide précédent
     */
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }
    
    /**
     * Aller à un slide spécifique
     * @param {number} slideIndex - Index du slide
     */
    function goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < totalSlides) {
            currentSlide = slideIndex;
            updateCarousel();
        }
    }
    
    // Événements des boutons (tous les boutons)
    prevBtns.forEach(btn => {
        btn.addEventListener('click', prevSlide);
    });
    
    nextBtns.forEach(btn => {
        btn.addEventListener('click', nextSlide);
    });
    
    // Événements des indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Navigation tactile (swipe)
    let startX = 0;
    let endX = 0;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    /**
     * Gestion du swipe
     */
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (startX - endX > swipeThreshold) {
            // Swipe gauche -> slide suivant
            nextSlide();
        } else if (endX - startX > swipeThreshold) {
            // Swipe droite -> slide précédent
            prevSlide();
        }
    }
    
    // Initialisation
    updateCarousel();
}

/**
 * Gestionnaire du formulaire de contact
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // État de chargement
        submitButton.innerHTML = '<span class="loading-spinner"></span>Envoi en cours...';
        submitButton.disabled = true;
        
        // Collecte des données
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            subject: this.querySelectorAll('input[type="text"]')[1].value,
            message: this.querySelector('textarea').value
        };
        
        // Validation
        if (!validateForm(formData)) {
            showNotification('Veuillez remplir tous les champs correctement.', 'error');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            return;
        }
        
        // Simulation d'envoi (à remplacer par une vraie requête AJAX)
        setTimeout(() => {
            console.log('📧 Données du formulaire:', formData);
            showNotification('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.', 'success');
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    /**
     * Validation du formulaire
     * @param {Object} data - Données du formulaire
     * @returns {boolean} - True si valide
     */
    function validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
            return false;
        }
        
        if (!emailRegex.test(data.email)) {
            return false;
        }
        
        return true;
    }
    
    /**
     * Affichage des notifications
     * @param {string} message - Message à afficher
     * @param {string} type - Type de notification (success/error)
     */
    function showNotification(message, type) {
        // Suppression des notifications existantes
        document.querySelectorAll('.custom-alert').forEach(alert => alert.remove());
        
        const notification = document.createElement('div');
        notification.className = `custom-alert alert-${type === 'success' ? 'success' : 'error'}`;
        notification.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${message}</span>
                <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }
}

/**
 * Animation des statistiques
 */
function initStatistics() {
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        observer.observe(heroSection);
    }
    
    /**
     * Animation des compteurs
     */
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }
}

/**
 * Animation des compétences
 */
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    /**
     * Animation des barres de compétences
     */
    function animateSkills() {
        skillItems.forEach((item, index) => {
            const skillLevel = item.getAttribute('data-skill');
            const progressBar = item.querySelector('.skill-progress');
            
            // Réinitialisation
            progressBar.style.width = '0%';
            
            // Animation avec délai
            setTimeout(() => {
                progressBar.style.width = `${skillLevel}%`;
                progressBar.style.transition = `width 1.5s ease-in-out ${index * 0.2}s`;
            }, 300);
        });
    }
}

/**
 * Création des particules animées
 */
function createParticles() {
    const particlesContainer = document.querySelector('.floating-shapes');
    
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    // Génération de 8 particules
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.classList.add('shape');
        
        const size = Math.random() * 60 + 20;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const opacity = Math.random() * 0.2 + 0.05;
        const animationDuration = Math.random() * 4 + 4;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${top}%`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.background = `rgba(108, 99, 255, ${opacity})`;
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Gestion des erreurs d'images
 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDM1MCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMzUwIiBmaWxsPSIjNkM2M0ZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMTc1IDExMEMxOTMuMzc3IDExMCAyMDggOTUuMzc3MiAyMDggNzdDMjA4IDU4LjYyMjggMTkzLjM3NyA0NCAxNzUgNDRDMTU2LjYyMyA0NCAxNDIgNTguNjIyOCAxNDIgNzdDMTQyIDk1LjM3NzIgMTU2LjYyMyAxMTAgMTc1IDExMFoiIGZpbGw9IiM2QzYzRkYiLz4KPHBhdGggZD0iTTE0MiAxNTRDMTA3LjY0MiAxNTQgODAgMTgxLjY0MiA4MCAyMTZWMTU0SDE0MloiIGZpbGw9IiM2QzYzRkYiLz4KPHBhdGggZD0iTTI3MCAxNTRWMjE2QzI3MCAxODEuNjQyIDI0Mi4zNTggMTU0IDIwOCAxNTRIMjc0WiIgZmlsbD0iIzZDNjNGRiIvPgo8L3N2Zz4K';
            this.alt = 'Image non disponible';
        });
    });
});

/**
 * Optimisations après chargement complet
 */
window.addEventListener('load', function() {
    // Mesure des performances
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`⏱️ Temps de chargement: ${loadTime}ms`);
    
    // Classe pour les animations de fin de chargement
    document.body.classList.add('loaded');
    
    // Fallback pour les navigateurs sans IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        setTimeout(() => {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                stat.textContent = target;
            });
            
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                const skillLevel = item.getAttribute('data-skill');
                const progressBar = item.querySelector('.skill-progress');
                progressBar.style.width = `${skillLevel}%`;
            });
        }, 1000);
    }
});

/**
 * Gestionnaire d'erreurs global
 */
window.addEventListener('error', function(e) {
    console.error('❌ Erreur JavaScript:', e.error);
});

// Export des fonctions pour utilisation globale (si nécessaire)
window.Portfolio = {
    initThemeSwitcher,
    initNavigation,
    initScrollEffects,
    initAnimations,
    initPortfolioCarousel,
    initContactForm,
    initStatistics,
    initSkillsAnimation,
    createParticles
};
