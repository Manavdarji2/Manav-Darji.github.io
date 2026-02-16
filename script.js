// --- Initialize Lenis Smooth Scroll ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
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

// --- 1. Custom Cursor ---
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

// Auto-add magnet class
document.querySelectorAll('a, button, .project-item').forEach(el => el.classList.add('hover-magnet'));
const magneticElements = document.querySelectorAll('.hover-magnet');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
    gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'power2.out' });
});

magneticElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
        // Magnetic pull effect
        gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// --- 2. Marquee Infinite Scroll (Robust) ---
const marqueeContent = document.getElementById('marquee-content');
if (marqueeContent) {
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentElement.appendChild(clone);

    gsap.to(".marquee-content", {
        xPercent: -100,
        repeat: -1,
        duration: 30, // Slower for grandeur
        ease: "linear"
    }).totalProgress(0.5);
}

// --- 3. Preloader & Name Animation (Fixed) ---
const tl = gsap.timeline();
let progress = 0;
const loaderText = document.getElementById('loader-text');
const loaderProgress = document.querySelector('.loader-progress');

const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 5;
    if (progress > 100) progress = 100;
    
    if (loaderText) loaderText.innerText = progress + '%';
    if (loaderProgress) loaderProgress.style.width = progress + '%';

    if (progress === 100) {
        clearInterval(interval);
        startIntro();
    }
}, 50);

function startIntro() {
    tl.to('.preloader', {
        y: '-100%',
        duration: 1.2,
        ease: 'power4.inOut',
        delay: 0.2
    })
    .to('.hero-subtitle', {
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=0.5")
    .to('.hero-title', {
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out'
    }, "-=0.8")
    .to('.hero-desc', {
        y: 0,
        opacity: 1,
        duration: 1
    }, "-=0.7")
    .to('.hero-btn', {
        opacity: 1,
        duration: 1
    }, "-=0.5");
}


// --- 4. Scroll Animations ---
gsap.utils.toArray('.reveal-paragraph').forEach(text => {
    gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 85%" },
        y: 80, opacity: 0, duration: 1.5, ease: 'power3.out'
    });
});

gsap.utils.toArray('.reveal-paragraph-sm').forEach(text => {
    gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 85%" },
        y: 40, opacity: 0, duration: 1.5, ease: 'power3.out'
    });
});

gsap.utils.toArray('.reveal-line').forEach(line => {
    gsap.from(line, {
        scrollTrigger: { trigger: line, start: "top 90%" },
        width: 0, duration: 1, ease: 'power3.out'
    });
});

gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 90%" },
        y: 20, opacity: 0, duration: 1, ease: 'power3.out'
    });
});

gsap.to('.stat-item', {
    scrollTrigger: { trigger: '#about', start: "top 60%" },
    y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
});

// Stagger Animation for Skills
gsap.utils.toArray('#skills .group').forEach((skillCard, i) => {
    gsap.from(skillCard, {
        scrollTrigger: { trigger: skillCard, start: "top 90%" },
        y: 50, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out'
    });
});
