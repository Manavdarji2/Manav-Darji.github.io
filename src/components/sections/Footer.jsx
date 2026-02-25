import React from 'react';
import { Github, Linkedin, Award } from 'lucide-react';
import { OpticalReveal, MagneticButton } from '../ui/UIComponents';

export const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-32 md:pb-24 relative z-10 bg-transparent">
            <OpticalReveal delay={0}>
                <div className="p-8 py-16 md:p-24 rounded-[3rem] bg-[#1C1E1A] text-white flex flex-col items-center text-center mb-20 relative overflow-hidden group border border-[#333]">
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 relative z-10">Initiate Collaboration</h2>
                    <p className="text-[#A3A6A0] text-sm md:text-lg max-w-2xl mb-12 relative z-10 leading-relaxed">
                        Passionate about building end-to-end AI solutions. Available for ML/AI Research Internships and engineering roles.
                    </p>
                    <MagneticButton href="mailto:darjimanav3@gmail.com" aria-label="Send an email to Manav Darji">
                        darjimanav3@gmail.com
                    </MagneticButton>
                </div>
            </OpticalReveal>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#EBEBE6] pt-12">
                <div>
                    <div className="font-serif text-2xl font-semibold mb-2">Manav Viral Darji</div>
                    <p className="text-[#646762] text-sm font-mono">Mumbai, India</p>
                </div>
                <div className="flex gap-4 items-center">
                    <a href="https://linkedin.com/in/manav-darji18" aria-label="LinkedIn Profile" className="text-[#646762] hover:text-[#2B4C3E] transition-all"><Linkedin size={20} /></a>
                    <a href="https://github.com/Manavdarji2" aria-label="GitHub Profile" className="text-[#646762] hover:text-[#2B4C3E] transition-all"><Github size={20} /></a>
                    <a href="https://kaggle.com/manavdarji18" aria-label="Kaggle Profile" className="text-[#646762] hover:text-[#2B4C3E] transition-all"><Award size={20} /></a>
                </div>
            </div>
        </footer>
    );
};
