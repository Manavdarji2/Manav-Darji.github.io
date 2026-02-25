import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { DecryptText, OpticalReveal, MagneticButton } from '../ui/UIComponents';

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-7xl mx-auto z-10">
            <div className="max-w-5xl relative z-10 w-full">
                <OpticalReveal delay={0.5} className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#EBEBE6] text-[#646762]">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#2B4C3E]"></span>
                        AI/ML Engineer & Researcher
                    </div>
                </OpticalReveal>

                <div>
                    <h1 className="font-serif text-[12vw] sm:text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.1] md:leading-[1.05] tracking-tight mb-8">
                        <div className="block"><DecryptText text="Engineering intelligence" delay={0.6} /></div>
                        <div className="block">
                            <DecryptText text="through" delay={0.7} />{' '}
                            <span className="italic text-[#2B4C3E]"><DecryptText text="generative models" delay={0.8} /></span>
                        </div>
                        <div className="block"><DecryptText text="& deep learning." delay={0.9} /></div>
                    </h1>
                </div>

                <OpticalReveal delay={1.2} className="max-w-2xl mb-12">
                    <p className="text-base md:text-xl text-[#646762] leading-relaxed">
                        Skilled in designing, training, and optimizing ML/DL models using TensorFlow and PyTorch. Experienced with CNN, LSTM, GANs, and RAG pipelines to build end-to-end, production-ready AI solutions.
                    </p>
                </OpticalReveal>

                <OpticalReveal delay={1.4} className="flex flex-col sm:flex-row gap-6">
                    <MagneticButton href="#research" primary={true}>
                        View Research Work <ArrowRight size={18} />
                    </MagneticButton>
                    <div className="flex gap-4">
                        <MagneticButton href="https://github.com/Manavdarji2" aria-label="GitHub Profile"><Github size={20} /></MagneticButton>
                        <MagneticButton href="https://linkedin.com/in/manav-darji18" aria-label="LinkedIn Profile"><Linkedin size={20} /></MagneticButton>
                    </div>
                </OpticalReveal>
            </div>
        </section>
    );
};
