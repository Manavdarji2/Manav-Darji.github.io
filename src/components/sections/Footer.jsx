import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Award } from 'lucide-react';
import { OpticalReveal, MagneticButton } from '../ui/UIComponents';

export const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-32 md:pb-24 relative z-10 bg-transparent">
            <OpticalReveal delay={0}>
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="p-8 py-16 md:p-24 rounded-[3rem] bg-[#1C1E1A] text-white flex flex-col items-center text-center mb-20 relative overflow-hidden group border border-[#333]"
                >
                    {/* Animated glow orb behind the CTA */}
                    <motion.div
                        className="absolute w-[300px] h-[300px] rounded-full bg-[#2B4C3E]/20 blur-[80px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 relative z-10">Initiate Collaboration</h2>
                    <p className="text-[#A3A6A0] text-sm md:text-lg max-w-2xl mb-12 relative z-10 leading-relaxed">
                        Passionate about building end-to-end AI solutions. Available for ML/AI Research Internships and engineering roles.
                    </p>
                    <MagneticButton href="mailto:darjimanav3@gmail.com" aria-label="Send an email to Manav Darji">
                        darjimanav3@gmail.com
                    </MagneticButton>
                </motion.div>
            </OpticalReveal>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#EBEBE6] pt-12"
            >
                <div>
                    <div className="font-serif text-2xl font-semibold mb-2">Manav Viral Darji</div>
                    <p className="text-[#646762] text-sm font-mono">Mumbai, India</p>
                </div>
                <div className="flex gap-4 items-center">
                    {[
                        { href: "https://linkedin.com/in/manav-darji18", label: "LinkedIn Profile", Icon: Linkedin },
                        { href: "https://github.com/Manavdarji2", label: "GitHub Profile", Icon: Github },
                        { href: "https://kaggle.com/manavdarji18", label: "Kaggle Profile", Icon: Award },
                    ].map(({ href, label, Icon }) => (
                        <motion.a
                            key={label}
                            href={href}
                            aria-label={label}
                            whileHover={{ y: -3, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="text-[#646762] hover:text-[#2B4C3E] transition-colors"
                        >
                            <Icon size={20} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </footer>
    );
};
