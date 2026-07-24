import React from 'react';
import {
    User,
    Heart,
    Target,
    Zap,
    Code2,
    Sprout,
    Cpu,
    Layers,
    Container,
    Calendar,
    Coffee,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import mainimage from '../assets/mainimage.png';
import mainimagesummer from '../assets/mainimagesummer.png';
import aboutUserimage from '../assets/aboutUserimage.png';
import aboutUserimagesummer from '../assets/aboutUserimagesummer.png';
import cardimage1 from '../assets/cardimage1.jpg';
import cardimage1summer from '../assets/cardimage1summer.png';
import AtmosphereLayer from '../components/AtmosphereLayer';

const Aboutpage = ({ theme, toggleTheme }) => {
    return (
        <div className="w-full flex flex-col gap-8 py-4 select-none max-w-7xl mx-auto">
            {/* Atmospheric Falling Particles */}
            {/* <AtmosphereLayer /> */}

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="fixed top-4 right-4 z-[9990] w-10 h-10 rounded-full tt-toggle-btn flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer"
                title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            >
                {theme === 'dark' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </button>

            {/* ================= 1. TOP HERO SECTION (OPEN BACKGROUND, EXACT REFERENCE MATCH) ================= */}
            <div className="relative w-full min-h-[340px] flex items-center mb-2">
                
                {/* Background Samurai Kitsune Avatar (Far Right, Moon & Torii Gate) */}
                <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[40%] z-0 overflow-hidden pointer-events-none rounded-3xl">
                    <img
                        src={mainimage}
                        alt="Kitsune Samurai Avatar"
                        className="tt-dark-img w-full h-full object-cover object-[85%_center] filter brightness-110 contrast-105"
                    />
                    <img
                        src={mainimagesummer}
                        alt="Kitsune Samurai Avatar Summer"
                        className="tt-light-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-110 contrast-105"
                    />
                    {/* Gradient Overlay: Solid on the left, transparent on the right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 via-35% to-transparent/10 tt-dark-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B] tt-dark-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-35% to-transparent/10 tt-light-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white tt-light-overlay" />
                </div>

                {/* Content Grid (No Card Box, Pure Open Text Layout) */}
                <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-4">
                    
                    {/* Left Column (col-span-5): Headline & Intro */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase">
                            ABOUT ME
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                            Hi, I’m Prakash<span className="text-purple-500">.</span>
                        </h1>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                            I'm an aspiring Full Stack Developer who loves building digital products that are fast, scalable and solve{' '}
                            <span className="text-purple-400 font-semibold">real-world problems</span>. Actively seeking full-time software developer opportunities!
                        </p>
                    </div>

                    {/* Center Column (col-span-4): WHO I AM (Open Text, No Card Box) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-purple-400 uppercase">
                            <div className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] bg-purple-950/40">
                                <User size={15} />
                            </div>
                            <span>WHO I AM</span>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                            I enjoy turning complex ideas into simple, beautiful and intuitive experiences. My journey in web development started with curiosity and has grown into a passion for building scalable solutions.
                        </p>

                        <ul className="flex flex-col gap-2.5 text-xs text-gray-300 font-medium pt-1">
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
                                Full Stack Developer (MERN Stack)
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
                                AI Enthusiast & Problem Solver
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
                                Clean Code & Scalable Architecture
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
                                Always learning, always building
                            </li>
                        </ul>
                    </div>

                    {/* Far Right Column (col-span-3): Empty space so Kitsune Avatar under Moon is completely visible */}
                    <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

                </div>

            </div>

            {/* ================= 2. MIDDLE GRID ROW (3 CARDS) ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* CARD 1: DEVELOPER PORTRAIT / PHOTO */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0c0916] p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[380px]">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={aboutUserimage}
                            alt="Developer Portrait"
                            className="w-full h-full object-cover object-[center_25%] scale-130 group-hover:scale-135 transition-transform duration-700 filter brightness-95 contrast-105 opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0916] via-[#0c0916]/90 via-45% to-transparent/10" />
                    </div>

                    <div className="relative z-10 self-end">
                        <div className="w-9 h-9 rounded-full bg-[#0c0916]/80 border border-purple-500/40 flex items-center justify-center text-xs text-purple-300 font-serif shadow-lg backdrop-blur-md">
                            狐
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto pt-6">
                        <div className="text-purple-400 text-3xl font-serif leading-none mb-1 drop-shadow">“</div>
                        <p className="text-white text-xs sm:text-sm font-extrabold leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                            Code is not just what I write, it's how I solve problems.
                        </p>
                    </div>
                </div>

                {/* CARD 2: WHAT DRIVES ME */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0c0916] p-6 flex flex-col justify-between shadow-2xl hover:bg-[#0e0a1c] transition-colors">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
                        <div className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                            <Heart size={15} />
                        </div>
                        <span>WHAT DRIVES ME</span>
                    </div>

                    <div className="flex flex-col gap-5 my-auto">
                        
                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-2xl bg-[#140f29] border border-purple-500/20 text-purple-300 flex-shrink-0 mt-0.5">
                                <Zap size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-extrabold text-white mb-0.5">Solving Problems</h4>
                                <p className="text-[11px] text-gray-300 leading-relaxed font-normal">
                                    I love breaking down complex problems and solving them with efficient code.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-2xl bg-[#140f29] border border-purple-500/20 text-purple-300 flex-shrink-0 mt-0.5">
                                <Code2 size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-extrabold text-white mb-0.5">Building Products</h4>
                                <p className="text-[11px] text-gray-300 leading-relaxed font-normal">
                                    There's nothing more exciting than building something people actually use.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-2xl bg-[#140f29] border border-purple-500/20 text-purple-300 flex-shrink-0 mt-0.5">
                                <Sprout size={16} />
                            </div>
                            <div>
                                <h4 className="text-xs font-extrabold text-white mb-0.5">Continuous Growth</h4>
                                <p className="text-[11px] text-gray-300 leading-relaxed font-normal">
                                    I believe in learning every day and staying curious about new technologies.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CARD 3: CURRENTLY FOCUSED ON */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0c0916] p-6 flex flex-col justify-between shadow-2xl hover:bg-[#0e0a1c] transition-colors">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
                        <div className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                            <Target size={15} />
                        </div>
                        <span>CURRENTLY FOCUSED ON</span>
                    </div>

                    <div className="flex flex-col gap-4 my-auto">

                        <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#140f29]/70 border border-purple-500/15 hover:border-purple-500/40 transition-all group/item cursor-pointer">
                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Cpu size={15} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white group-hover/item:text-purple-300 transition-colors">AI Engineering</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5 font-normal">
                                        Exploring LLMs, RAG, LangChain and building AI powered apps.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight size={14} className="text-purple-400 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#140f29]/70 border border-purple-500/15 hover:border-purple-500/40 transition-all group/item cursor-pointer">
                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Layers size={15} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white group-hover/item:text-purple-300 transition-colors">MERN Stack</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5 font-normal">
                                        Building full stack applications with modern tools and best practices.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight size={14} className="text-purple-400 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#140f29]/70 border border-purple-500/15 hover:border-purple-500/40 transition-all group/item cursor-pointer">
                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Container size={15} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white group-hover/item:text-purple-300 transition-colors">Docker & DevOps</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5 font-normal">
                                        Containerizing applications and deploying scalable solutions.
                                    </p>
                                </div>
                            </div>
                            <ArrowRight size={14} className="text-purple-400 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        </div>

                    </div>
                </div>

            </div>

            {/* ================= 3. BOTTOM ROW (QUOTE CARD + 4 METRICS) ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Quote Card */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0c0916] p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img src={cardimage1} alt="Background" className="w-full h-full object-cover opacity-25 filter brightness-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0916] via-[#0c0916]/85 to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <div className="text-purple-400 text-3xl font-serif leading-none mb-1">“</div>
                        <p className="text-gray-200 text-xs font-medium leading-relaxed">
                            Simplicity is the soul of efficiency. Great code is not written, it's crafted.
                        </p>
                    </div>

                    <div className="relative z-10 pt-4 font-signature text-purple-300 text-xl font-bold">
                        — Prakash
                    </div>
                </div>

                {/* Right 4 Metrics Strip Card */}
                <div className="lg:col-span-8 rounded-3xl bg-[#0c0916] p-6 shadow-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">

                    <div className="flex flex-col items-center text-center p-2">
                        <div className="p-3.5 rounded-full bg-[#140f29] text-purple-400 mb-2 shadow-inner">
                            <Code2 size={20} />
                        </div>
                        <div className="text-2xl font-black text-white mb-0.5">10+</div>
                        <div className="text-xs font-bold text-gray-200 mb-1">Projects</div>
                        <div className="text-[10px] text-gray-400 leading-tight">
                            Completed across different domains
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2">
                        <div className="p-3.5 rounded-full bg-[#140f29] text-purple-400 mb-2 shadow-inner">
                            <Sparkles size={20} />
                        </div>
                        <div className="text-2xl font-black text-white mb-0.5">100%</div>
                        <div className="text-xs font-bold text-gray-200 mb-1">Passion & Drive</div>
                        <div className="text-[10px] text-gray-400 leading-tight">
                            Fast learner, dedicated & ready to contribute
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2">
                        <div className="p-3.5 rounded-full bg-[#140f29] text-purple-400 mb-2 shadow-inner">
                            <Layers size={20} />
                        </div>
                        <div className="text-2xl font-black text-white mb-0.5">20+</div>
                        <div className="text-xs font-bold text-gray-200 mb-1">Technologies</div>
                        <div className="text-[10px] text-gray-400 leading-tight">
                            Worked with across the stack
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2">
                        <div className="p-3.5 rounded-full bg-[#140f29] text-purple-400 mb-2 shadow-inner">
                            <Coffee size={20} />
                        </div>
                        <div className="text-2xl font-black text-white mb-0.5">1000+</div>
                        <div className="text-xs font-bold text-gray-200 mb-1">Cups of Coffee</div>
                        <div className="text-[10px] text-gray-400 leading-tight">
                            Fuel for ideas and late night code
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Aboutpage;