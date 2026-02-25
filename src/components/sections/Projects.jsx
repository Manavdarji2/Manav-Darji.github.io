import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OpticalReveal } from '../ui/UIComponents';
import { projects } from '../../data/portfolioData';

export const Projects = () => {
    return (
        <section id="research" className="max-w-7xl mx-auto px-6 md:px-12 py-32 bg-white rounded-[3rem] mx-4 md:mx-auto border border-[#EBEBE6] shadow-sm relative z-10">
            <OpticalReveal delay={0}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-4">Featured Projects</h2>
                        <p className="text-[#646762] text-lg">Models, Research, and Full-Stack AI Deployments.</p>
                    </div>
                </div>
            </OpticalReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <OpticalReveal key={i} delay={i * 0.1}>
                        <a href={project.link || "#"} className="block p-8 rounded-[2rem] bg-[#F7F7F4] border border-[#EBEBE6] min-h-[420px] md:min-h-[380px] h-auto flex flex-col group relative overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 pb-[180px] md:pb-[140px]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-semibold uppercase tracking-widest block text-[#2B4C3E]">
                                    {project.category}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white border border-[#EBEBE6] flex items-center justify-center text-[#1C1E1A] group-hover:bg-[#2B4C3E] group-hover:text-white group-hover:border-[#2B4C3E] transition-all transform group-hover:rotate-[-45deg]">
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl mb-4 leading-tight">{project.title}</h3>
                            <p className="text-[#1C1E1A] font-semibold mb-4 border-l-2 border-[#2B4C3E] pl-3">{project.impact}</p>

                            <div className="card-content absolute bottom-8 left-8 right-8 bg-[#F7F7F4] pt-4 border-t border-[#EBEBE6]">
                                <p className="text-[#646762] text-sm leading-relaxed mb-6">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-white border border-[#EBEBE6] text-[#1C1E1A] font-mono text-[10px] font-bold uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </OpticalReveal>
                ))}
            </div>
        </section>
    );
};
