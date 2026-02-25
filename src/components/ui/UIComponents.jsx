import React, { useRef, useState, useEffect } from 'react';

// --- OPTIMIZED NATIVE ANIMATION: NEURAL DECRYPT ---
export const DecryptText = ({ text, delay = 0, className = "" }) => {
    const [displayText, setDisplayText] = useState("");
    const mathChars = ['∑', '∫', '∆', 'µ', 'π', 'Ω', 'λ', 'θ', '∞', '≈', '∇', '∂', 'x', 'y'];

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

    return <span className={className}>{displayText || text.replace(/./g, ' ')}</span>;
};

// --- REUSABLE KINETIC COMPONENTS (Native Intersections) ---
export const OpticalReveal = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(12px)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
            }}
        >
            {children}
        </div>
    );
};

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
