import React from 'react';
import { GraduationCap } from 'lucide-react';
import { OpticalReveal } from '../ui/UIComponents';
import { capabilities } from '../../data/portfolioData';

export const Profile = () => {
    return (
        <section id="profile" className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-[#EBEBE6] relative z-10 bg-transparent">
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/3">
                    <OpticalReveal delay={0}>
                        <h2 className="font-serif text-4xl md:text-5xl mb-8">Academic <br />Foundation.</h2>
                        <div className="p-8 rounded-3xl bg-white border border-[#EBEBE6] shadow-sm mb-8">
                            <GraduationCap className="text-[#2B4C3E] mb-6" size={32} />
                            <h3 className="font-semibold text-xl mb-2">B.Sc. (Hons) in Artificial Intelligence & Machine Learning</h3>
                            <p className="text-[#646762] mb-4">MKES College (Affiliated to University of Mumbai)</p>
                            <div className="flex justify-between items-center text-sm font-medium border-t border-[#EBEBE6] pt-4">
                                <span className="text-[#2B4C3E]">CGPA: 8.5</span><span className="text-[#646762]">Expected: 2027</span>
                            </div>
                        </div>
                        <p className="text-[#646762] leading-relaxed text-sm">
                            Relevant Coursework: Deep Learning, NLP, Probability & Statistics, Data Structures, Computer Vision.
                            Active contributor to Kaggle, FreeCodeCamp, and Google Developer communities.
                        </p>
                    </OpticalReveal>
                </div>

                {/* Epoch & Weights Terminal Layout */}
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((item, i) => (
                        <OpticalReveal key={i} delay={i * 0.1} className={item.span}>
                            <div className="p-8 rounded-3xl bg-[#1C1E1A] text-white border border-[#292929] hover:border-[#2B4C3E] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4">
                                        <item.icon size={20} className="text-[#2B4C3E]" />
                                        <h3 className="font-mono text-lg font-bold uppercase tracking-widest">{item.title}</h3>
                                    </div>
                                    {/* ML Terminology Layout */}
                                    <div className="font-mono text-sm space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-[#646762]">Epochs:</span>
                                            <span className="text-[#EBEBE6]">{item.epochs}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[#646762]">Weights_Array:</span>
                                            <span className="text-[#A3A6A0] leading-relaxed">[{item.weights}]</span>
                                        </div>
                                        <div className="flex justify-between border-t border-[#333] pt-3 mt-3">
                                            <span className="text-[#646762]">Validation_Score:</span>
                                            <span className="text-[#D4FF3F]">{item.val}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OpticalReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
