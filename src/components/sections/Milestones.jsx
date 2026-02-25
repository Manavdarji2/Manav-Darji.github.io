import React from 'react';
import { OpticalReveal } from '../ui/UIComponents';
import { achievements } from '../../data/portfolioData';

export const Milestones = () => {
    return (
        <section id="milestones" className="max-w-7xl mx-auto px-6 md:px-12 py-32 relative z-10 bg-transparent">
            <OpticalReveal delay={0}>
                <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">Milestones & Accolades</h2>
            </OpticalReveal>

            <div className="space-y-6 max-w-4xl mx-auto">
                {achievements.map((item, i) => (
                    <OpticalReveal key={i} delay={i * 0.1}>
                        <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#EBEBE6] hover:border-[#2B4C3E] hover:shadow-lg flex flex-col md:flex-row items-start md:items-center gap-8 group transition-all duration-300 hover:translate-x-2">
                            <div className="md:w-1/4">
                                <span className="font-serif text-5xl text-[#2B4C3E]">{item.metric}</span>
                            </div>
                            <div className="md:w-2/4">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-[#646762] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                            <div className="md:w-1/4 md:text-right">
                                <span className="inline-block px-4 py-2 rounded-full bg-[#F0F0ED] font-mono text-xs font-semibold text-[#646762] group-hover:bg-[#1C1E1A] group-hover:text-white transition-colors">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    </OpticalReveal>
                ))}
            </div>
        </section>
    );
};
