import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { OpticalReveal, AnimatedCounter, StaggerItem } from '../ui/UIComponents';
import { achievements } from '../../data/portfolioData';

// Scroll-driven vertical timeline line component
const TimelineLine = () => {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(() => { }, { threshold: 0 });
        const handleScroll = () => {
            if (!ref.current) return;
            const { top, height } = ref.current.getBoundingClientRect();
            const windowH = window.innerHeight;
            // How far the section has been scrolled through
            const scrolled = Math.max(0, Math.min(1, (windowH - top) / (height + windowH)));
            setProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={ref} className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none overflow-hidden">
            {/* Background track */}
            <div className="absolute inset-0 bg-[#EBEBE6]" />
            {/* Animated fill */}
            <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#2B4C3E] to-[#4a8f6d] origin-top"
                style={{ scaleY: progress, transformOrigin: 'top' }}
                transition={{ ease: 'linear' }}
            />
        </div>
    );
};

// Individual milestone with pulsing node dot
const MilestoneRow = ({ item, index }) => {
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const isLeft = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setActive(true);
        }, { threshold: 0.4 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative flex items-center gap-8">
            {/* Centered node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={active ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                    className="relative w-4 h-4 rounded-full bg-[#2B4C3E] border-2 border-white shadow-md"
                >
                    {/* Ripple pulse ring */}
                    {active && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-[#2B4C3E]"
                            animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                        />
                    )}
                </motion.div>
            </div>

            {/* Card — alternates left / right on desktop */}
            <StaggerItem className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:ml-0 md:mr-auto pl-16 md:pl-0 md:pr-8' : 'md:ml-auto pl-16 md:pl-8'}`}>
                <motion.div
                    whileHover={{ x: isLeft ? -6 : 6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-6 md:p-8 rounded-3xl bg-white border border-[#EBEBE6] hover:border-[#2B4C3E] hover:shadow-lg flex flex-col gap-4 group transition-colors duration-300"
                >
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <span className="font-serif text-4xl text-[#2B4C3E]">
                            <AnimatedCounter value={item.metric} />
                        </span>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#F0F0ED] font-mono text-xs font-semibold text-[#646762] group-hover:bg-[#1C1E1A] group-hover:text-white transition-colors duration-300">
                            {item.date}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-[#646762] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </motion.div>
            </StaggerItem>
        </div>
    );
};

export const Milestones = () => {
    return (
        <section id="milestones" className="max-w-7xl mx-auto px-6 md:px-12 py-32 relative z-10 bg-transparent">
            <OpticalReveal delay={0}>
                <h2 className="font-serif text-4xl md:text-5xl mb-20 text-center">Milestones & Accolades</h2>
            </OpticalReveal>

            {/* Timeline wrapper */}
            <div className="relative flex flex-col gap-12">
                <TimelineLine />
                {achievements.map((item, i) => (
                    <MilestoneRow key={i} item={item} index={i} />
                ))}
            </div>
        </section>
    );
};
