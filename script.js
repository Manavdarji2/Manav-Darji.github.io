// --- Initialize Lenis Smooth Scroll ---
const lenis = new Lenis({
    duration: 1.5, // Slower, smoother feel
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 0.8,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// --- Register GSAP ---
gsap.registerPlugin(ScrollTrigger);

// --- 1. Custom Cursor & Spotlight ---
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');
const spotlight = document.getElementById('spotlight');

// Auto-add magnet class
document.querySelectorAll('a, button, .project-item').forEach(el => el.classList.add('hover-magnet'));
const magneticElements = document.querySelectorAll('.hover-magnet');

document.addEventListener('mousemove', (e) => {
    // Cursor Movement
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'power2.out' });

    // Spotlight Movement
    if (spotlight) {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
    }
});

magneticElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
        gsap.to(el, { scale: 1.02, duration: 0.4, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
        gsap.to(el, { scale: 1, duration: 0.4, ease: 'power3.out' });
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' }); // Reset magnet
    });

    // Magnetic Pull Calculation
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.4,
            ease: 'power3.out'
        });
    });
});

// --- 2. 3D Tilt Effect for Projects ---
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});


// --- 3. Particle System (Canvas) ---
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Resize listener
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.2; // Slow floating
            this.vy = (Math.random() - 0.5) * 0.2;
            this.size = Math.random() * 2;
            this.alpha = Math.random() * 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(180, 200, 255, ${this.alpha})`; // Bluish tint
            ctx.fill();
        }
    }

    const particles = [];
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}


// --- 4. Opening Sequence ---
const tl = gsap.timeline();
const loaderText = document.getElementById('loader-text');
const loaderProgress = document.querySelector('.loader-progress');
let loadProgress = 0;

// Simulate Loading
const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 15;
    if (loadProgress > 100) loadProgress = 100;

    if (loaderText) loaderText.innerText = Math.floor(loadProgress) + '%';
    if (loaderProgress) loaderProgress.style.width = loadProgress + '%';

    if (loadProgress === 100) {
        clearInterval(loadInterval);
        startCinematicIntro();
    }
}, 100);

function startCinematicIntro() {
    // 1. Preloader exit
    tl.to('.preloader', {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
    })
        // 2. Subtitle reveal
        .to('.hero-subtitle', {
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.2")
        // 3. Main Title Stagger (Blur to focus)
        .fromTo('.hero-title', {
            y: 50,
            opacity: 0,
            filter: 'blur(10px)'
        }, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        }, "-=0.4")
        // 4. Description Reveal
        .to('.hero-desc', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, "-=0.6")
        // 5. Button & Scroll
        .to('.hero-btn', {
            opacity: 1,
            duration: 1
        }, "-=0.5");
}

// --- 5. Scroll Animations (Refined) ---
gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 90%" },
        y: 30, opacity: 0, duration: 1.2, ease: 'power3.out'
    });
});

gsap.utils.toArray('.reveal-paragraph').forEach(text => {
    gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 85%" },
        y: 40, opacity: 0, duration: 1.2, ease: 'power3.out'
    });
});

// Stagger Animation for Skills
gsap.utils.toArray('#skills .group').forEach((skillCard, i) => {
    gsap.from(skillCard, {
        scrollTrigger: { trigger: skillCard, start: "top 90%" },
        y: 40, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'back.out(1.2)'
    });
});

// Marquee Animation
const marqueeContent = document.getElementById('marquee-content');
if (marqueeContent) {
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentElement.appendChild(clone);

    gsap.to(".marquee-content", {
        xPercent: -100,
        repeat: -1,
        duration: 40,
        ease: "linear"
    }).totalProgress(0.5);
}
