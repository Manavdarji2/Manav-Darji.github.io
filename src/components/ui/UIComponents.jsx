import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- OPTIMIZED NATIVE ANIMATION: NEURAL DECRYPT ---
export const DecryptText = ({ text, delay = 0, className = "" }) => {
    const mathChars = ['∑', '∫', '∆', 'µ', 'π', 'Ω', 'λ', 'θ', '∞', '≈', '∇', '∂', 'x', 'y'];

    // Initialize with a scrambled version of the text to trigger FCP/LCP immediately
    const [displayText, setDisplayText] = useState(() => {
        return text.split("").map(char => {
            if (char === " ") return " ";
            return mathChars[Math.floor(Math.random() * mathChars.length)];
        }).join("");
    });

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        const startAnimation = () => {
            interval = setInterval(() => {
                setDisplayText(
                    text.split("").map((char, index) => {
                        if (index < iteration) return char;
                        if (char === " ") return " ";
                        return mathChars[Math.floor(Math.random() * mathChars.length)];
                    }).join("")
                );

                if (iteration >= text.length) clearInterval(interval);
                iteration += Math.max(1, text.length / 30);
            }, 30);
        };

        const timeout = setTimeout(startAnimation, delay * 1000);
        return () => { clearInterval(interval); clearTimeout(timeout); };
    }, [text, delay]);

    return (
        <span className={className} aria-label={text} title={text}>
            {displayText}
        </span>
    );
};

// --- REUSABLE KINETIC COMPONENTS ---
export const OpticalReveal = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

// --- 3D TILT CARD ---
export const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

// --- STAGGER CONTAINER ---
export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "" }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

// --- ANIMATED COUNTER ---
export const AnimatedCounter = ({ value, className = "" }) => {
    const [count, setCount] = useState(value);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    // Parse numeric part from the value like "15%", "49", "7x"
    const numericMatch = String(value).match(/^(\d+)/);
    const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : null;
    const suffix = numericMatch ? String(value).slice(numericMatch[0].length) : "";
    const prefix = String(value).match(/^[^\d]+/)?.[0] || "";
    const nonNumeric = numericValue === null;

    useEffect(() => {
        if (nonNumeric) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let start = 0;
                const duration = 1200;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(eased * numericValue);
                    setCount(prefix + current + suffix);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(value);
                    }
                };
                setCount(prefix + "0" + suffix);
                requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, { threshold: 0.3 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated, numericValue, suffix, prefix, nonNumeric]);

    if (nonNumeric) {
        return <span className={className}>{value}</span>;
    }

    return <span ref={ref} className={className}>{count}</span>;
};

// --- FLOATING PARTICLES BACKGROUND (Pure CSS — no JS animation loops) ---
export const FloatingParticles = ({ count = 25 }) => {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: (Math.random() * 100).toFixed(2),
        y: (Math.random() * 100).toFixed(2),
        size: (Math.random() * 2.5 + 0.8).toFixed(2),
        duration: (Math.random() * 18 + 14).toFixed(1),
        delay: (Math.random() * 10).toFixed(1),
        drift: (Math.random() * 40 - 20).toFixed(1),
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-[#2B4C3E]"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: 0.1,
                        animation: `floatParticle ${p.duration}s ${p.delay}s infinite ease-in-out`,
                        '--drift': `${p.drift}px`,
                    }}
                />
            ))}
        </div>
    );
};

// --- MAGNETIC BUTTON ---
export const MagneticButton = ({ children, href, primary = false, onClick, "aria-label": ariaLabel }) => {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        setPos({
            x: (e.clientX - (left + width / 2)) * 0.2,
            y: (e.clientY - (top + height / 2)) * 0.2
        });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    const Tag = href ? 'a' : 'button';

    return (
        <Tag
            ref={ref} href={href} onClick={onClick}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            aria-label={ariaLabel || (href ? `Link to ${href}` : "Button")}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: pos.x === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s linear'
            }}
            className={`relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-colors duration-300 ${primary
                ? "bg-[#1C1E1A] text-white hover:bg-[#2B4C3E]"
                : "bg-white text-[#1C1E1A] shadow-sm border border-[#EBEBE6] hover:border-[#2B4C3E]"
                }`}
        >
            {children}
        </Tag>
    );
};
