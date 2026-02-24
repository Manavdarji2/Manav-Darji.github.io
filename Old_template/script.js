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


// --- 3. Enhanced Particle System (Constellation Effect) ---
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
            this.vx = (Math.random() - 0.5) * 0.3; // Slower, more floaty
            this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 2 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.2;
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
            ctx.fillStyle = `rgba(180, 200, 255, ${this.alpha})`;
            ctx.fill();
        }
    }

    const particles = [];
    const particleCount = Math.min(window.innerWidth / 8, 80); // Adjusted count

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // Draw Particles
        particles.forEach((p, index) => {
            p.update();
            p.draw();

            // Draw Connections (Constellation)
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) { // Connection threshold
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 120)})`; // Fade out
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}


// --- 4. Text Splitter Utility (for Reveal Effects) ---
function splitTextToSpans(element) {
    if (!element) return;
    const text = element.innerText;
    element.innerHTML = '';
    const words = text.split(' ');

    // Simple line detection is hard without layout info, so we'll just wrap words
    // For a cooler effect, we can just wrap words in spans and animate them
    // Or for block elements, we can treat them as lines if they have <br>

    // Better approach for "Line Reveal":
    // 1. Get text content
    // 2. Wrap each word in a span inside a container
    // 3. But for "Cinematic Line Reveal" usually we want lines.
    // Let's settle for Word Stagger which is safer and responsive:

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = 'opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1), transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        span.style.transitionDelay = `${index * 0.03}s`; // Stagger
        span.classList.add('word-reveal');
        element.appendChild(span);
    });
}

// Convert "reveal-paragraph" text to spans
document.querySelectorAll('.reveal-paragraph').forEach(p => {
    splitTextToSpans(p);
});


// --- 5. Cinematic Animations (GSAP ScrollTrigger) ---

// A. Pinned Hero Section
ScrollTrigger.create({
    trigger: "header",
    start: "top top",
    end: "bottom top", // Pin for the duration of the viewport height? Or slightly less?
    // Let's make it a parallax scroll instead of a hard pin if we want content to cover it
    // Or true pin:
    pin: true,
    pinSpacing: false, // Provide depth feel as content scrolls over
    scrub: true
});

// Animate Hero Content on Scroll (Parallax Exit)
gsap.to(".hero-title", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -100,
    scale: 0.9,
    opacity: 0
});

gsap.to(".hero-desc", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: -50,
    opacity: 0
});


// B. Scroll Progress Bar
gsap.to(".progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0
    }
});


// C. Section Reveals (Text & Elements)

// Reveal Titles
gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.from(text, {
        scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Reveal Paragraphs (Word Stagger)
gsap.utils.toArray('.reveal-paragraph').forEach(p => {
    ScrollTrigger.create({
        trigger: p,
        start: "top 80%",
        onEnter: () => {
            const words = p.querySelectorAll('.word-reveal');
            words.forEach(w => {
                w.style.opacity = '1';
                w.style.transform = 'translateY(0)';
            });
        }
    });
});

// D. Project Cards Stagger
gsap.utils.toArray('.project-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// E. Background Color Transitions
// Darker black for Hero, Slightly lighter for About, Deep Black for Work
const sections = [
    { id: '#about', color: '#050505' },
    { id: '#work', color: '#000000' }, // Deep black for contrast
    { id: '#skills', color: '#080808' },
    { id: '#experience', color: '#0a0a0a' }
];

sections.forEach(section => {
    ScrollTrigger.create({
        trigger: section.id,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to("body", { backgroundColor: section.color, duration: 0.8 }),
        onEnterBack: () => gsap.to("body", { backgroundColor: section.color, duration: 0.8 })
    });
});


// --- 6. Opening Sequence (Re-implementation) ---
const loaderText = document.getElementById('loader-text');
const loaderProgress = document.querySelector('.loader-progress');
let loadVal = 0;

// Simulate Loading
const loadInterval = setInterval(() => {
    loadVal += Math.random() * 15;
    if (loadVal > 100) loadVal = 100;

    if (loaderText) loaderText.innerText = Math.floor(loadVal) + '%';
    if (loaderProgress) loaderProgress.style.width = loadVal + '%';

    if (loadVal === 100) {
        clearInterval(loadInterval);
        startCinematicIntro();
    }
}, 80);

function startCinematicIntro() {
    const tl = gsap.timeline();

    // 1. Preloader exit
    tl.to('.preloader', {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
    })
        // 2. Hero Elements Entry
        .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
        .fromTo('.hero-title', { scale: 1.1, opacity: 0, filter: 'blur(10px)' }, { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out' }, "-=0.8")
        .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=1")
        .fromTo('.hero-btn', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
}

