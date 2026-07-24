import React from 'react';
import {
    Play,
    MapPin,
    Sparkles,
    Code2,
    Calendar,
    Braces,
    Coffee,
    Heart,
    ArrowRight,
    Layers,
    Cpu,
    Database,
    Terminal,
    Wind,
    Radio,
    Container,
    GitBranch
} from 'lucide-react';
import mainimage from '../assets/mainimage.png';
import logoImg from '../assets/logo.png';
import cardimage1 from '../assets/cardimage1.jpg';

const HomePage = () => {
    const techStack = [
        { name: 'React', icon: Layers, color: 'text-cyan-400' },
        { name: 'Node.js', icon: Cpu, color: 'text-emerald-400' },
        { name: 'MongoDB', icon: Database, color: 'text-green-500' },
        { name: 'Express', icon: Terminal, color: 'text-gray-300' },
        { name: 'Tailwind', icon: Wind, color: 'text-sky-400' },
        { name: 'Socket.io', icon: Radio, color: 'text-purple-400' },
        { name: 'Docker', icon: Container, color: 'text-blue-400' },
        { name: 'Git', icon: GitBranch, color: 'text-orange-400' },
    ];

    return (
        <div className="w-full flex flex-col gap-6">

            {/* ================= 1. HERO SECTION ================= */}
            <div id="home" className="relative w-full min-h-[580px] lg:min-h-[640px] rounded-3xl overflow-hidden border border-purple-900/20 shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14 group">

                {/* Hero Background Image (mainimage.png) */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={mainimage}
                        alt="Hero Background Kitsune"
                        className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                    />
                    {/* Subtle Dark Radial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#09080e]/95 via-[#09080e]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09080e] via-transparent to-black/50" />
                </div>

                {/* Top Right Japanese Quote */}
                <div className="relative z-10 self-end max-w-[260px] text-right pointer-events-none hidden sm:block">
                    <div className="text-purple-400 text-2xl font-serif mb-1">“</div>
                    <div className="text-gray-200 text-sm font-serif font-medium tracking-wide leading-snug">
                        静けさの中に、<br />
                        最も強い力が宿る。
                    </div>
                    <div className="text-[11px] text-purple-400/90 font-sans tracking-widest mt-2">
                        — キツネ
                    </div>
                </div>

                {/* Middle Content (Left Headline & Text) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
                    <div className="lg:col-span-7 flex flex-col gap-4">

                        <div className="text-purple-400 font-serif text-sm tracking-widest">
                            キツネの道
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                            I BUILD DIGITAL <br />
                            <span className="purple-brush-text text-purple-400 font-black">
                                EXPERIENCES
                            </span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-purple-300/90 py-1">
                            <span>FULL STACK DEVELOPER</span>
                            <span className="text-purple-500">•</span>
                            <span>MERN STACK</span>
                            <span className="text-purple-500">•</span>
                            <span>AI ENTHUSIAST</span>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                            I craft fast, scalable and beautiful web applications with clean code and thoughtful design.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <button className="px-6 py-3.5 rounded-xl bg-[#120e24]/90 hover:bg-purple-900/50 border border-purple-500/40 text-purple-200 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-lg shadow-purple-950/50">
                                <span>EXPLORE MY WORK</span>
                                <span className="text-purple-400 font-mono">⊣</span>
                            </button>

                            <button className="px-5 py-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/20 text-gray-200 text-xs font-bold flex items-center gap-3 transition-all">
                                <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                                    <Play size={14} className="fill-purple-300 ml-0.5" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[11px] font-bold text-purple-200 uppercase">WATCH INTRO</span>
                                    <span className="text-[9px] text-gray-400">30 sec</span>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className="lg:col-span-5 h-40 lg:h-auto" />
                </div>

                {/* Bottom Bar: Scroll Indicator & Status Box */}
                <div className="relative z-10 flex items-end justify-between pt-4">

                    <div className="hidden sm:flex flex-col items-center mx-auto text-gray-400 text-[10px] font-mono tracking-widest uppercase gap-1.5">
                        <div className="w-5 h-8 rounded-full border-2 border-purple-500/40 flex justify-center pt-1.5">
                            <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
                        </div>
                        <span>SCROLL DOWN</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0f0b1e]/90 backdrop-blur-md border border-purple-500/25 shadow-2xl flex flex-col gap-2 max-w-[260px] ml-auto">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-purple-400/90 flex items-center gap-1.5">
                            <Sparkles size={12} className="text-purple-400" />
                            CURRENT STATUS
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium text-gray-100">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span>Available for new opportunities</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 pt-1 border-t border-purple-900/30">
                            <MapPin size={13} className="text-purple-400" />
                            <span>India, Earth</span>
                        </div>
                    </div>

                </div>

            </div>

            {/* ================= 2. BENTO GRID SECTION ================= */}
            <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* CARD 1: ABOUT ME (Cols 4) */}
                <div className="lg:col-span-4 rounded-2xl bg-[#0d0914] border border-purple-900/40 p-5 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500 shadow-xl min-h-[220px]">
                    {/* Card Background Image (Full Card Fit) */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={cardimage1}
                            alt="About Me Background"
                            className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090712]/90 via-[#090712]/40 to-[#090712]/20" />
                    </div>

                    <div className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-300 uppercase mb-3 bg-[#090712]/60 backdrop-blur-md w-max px-2.5 py-1 rounded-full border border-purple-500/30">
                            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                            <span>ABOUT ME</span>
                        </div>

                        <h3 className="text-xl font-extrabold text-white mb-2 leading-snug drop-shadow-md">
                            Crafting solutions, <br />
                            <span className="text-purple-300">solving problems.</span>
                        </h3>

                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-medium drop-shadow">
                            I'm a Full Stack Developer who loves turning ideas into real-world products. I enjoy building things that are fast, scalable and impactful.
                        </p>
                    </div>
                </div>

                {/* CARD 2: FEATURED PROJECT (Cols 5) */}
                <div id="projects" className="lg:col-span-5 rounded-2xl bg-[#110d1f]/90 backdrop-blur-md border border-purple-900/30 p-5 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>FEATURED PROJECT</span>
                        </div>

                        <h3 className="text-xl font-extrabold text-gray-100 mb-1.5">
                            AI Battle Arena
                        </h3>

                        <p className="text-gray-300 text-xs leading-relaxed mb-3">
                            Real-time AI battle platform where different AI models compete and users vote for the best response.
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {['MERN', 'Socket.io', 'AI', 'Tailwind', 'MongoDB'].map((tag) => (
                                <span key={tag} className="px-2 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/20 text-[10px] font-semibold text-purple-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Interactive UI Mockup Preview Frame */}
                    <div className="relative w-full h-32 rounded-xl bg-[#090712] border border-purple-500/30 p-2.5 overflow-hidden shadow-inner flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[9px] text-purple-300/80 font-mono pb-1 border-b border-purple-900/30">
                            <span className="font-bold tracking-wider uppercase">AI BATTLE ARENA</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                LIVE
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-auto items-center">
                            <div className="p-1.5 rounded-lg bg-[#140f26] border border-purple-500/30 text-center flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full bg-purple-900/40 border border-purple-400/40 flex items-center justify-center text-purple-300 text-[9px] font-bold mb-0.5">
                                    GPT
                                </div>
                                <span className="text-[10px] font-bold text-gray-200">GPT-4</span>
                            </div>

                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-[9px] flex items-center justify-center shadow-lg shadow-purple-950">
                                VS
                            </div>

                            <div className="p-2 rounded-lg bg-[#140f26] border border-purple-500/30 text-center flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full bg-purple-900/40 border border-purple-400/40 flex items-center justify-center text-purple-300 text-[9px] font-bold mb-0.5">
                                    GEM
                                </div>
                                <span className="text-[10px] font-bold text-gray-200">Gemini Pro</span>
                            </div>
                        </div>

                        <div className="text-[8.5px] text-gray-400 text-center font-mono">
                            Judge System • Real-time evaluation • AI Power
                        </div>
                    </div>

                    <div className="pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-purple-300 hover:text-purple-100 transition-colors uppercase"
                        >
                            <span>VIEW PROJECT</span>
                            <span className="text-purple-400 font-mono">⊣</span>
                        </a>
                    </div>
                </div>

                {/* CARD 3: TECH STACK (Cols 3) */}
                <div id="skills" className="lg:col-span-3 rounded-2xl bg-[#110d1f]/90 backdrop-blur-md border border-purple-900/30 p-5 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>TECH STACK</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {techStack.map((tech) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={tech.name}
                                        className="p-2 rounded-xl bg-[#120e20] border border-purple-500/20 hover:border-purple-400/60 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105 group"
                                    >
                                        <Icon size={18} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-[10px] font-semibold text-gray-300 group-hover:text-purple-200">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="text-center pt-2 border-t border-purple-900/30">
                        <span className="text-xs text-purple-400/80 font-medium tracking-wide">
                            + More Technologies
                        </span>
                    </div>
                </div>

            </div>

            {/* ================= 3. STATS BAR SECTION ================= */}
            <div className="rounded-2xl bg-[#110d1f]/90 backdrop-blur-md border border-purple-900/30 p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                        <Code2 size={22} />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-gray-100">10+</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            PROJECTS COMPLETED
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                        <Calendar size={22} />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-gray-100">2+</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            YEARS OF EXPERIENCE
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                        <Braces size={22} />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-gray-100">15K+</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            LINES OF CODE
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                        <Coffee size={22} />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-gray-100">∞</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            CUPS OF COFFEE
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                        <Heart size={22} className="text-pink-400 fill-pink-500/20" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-gray-100">100%</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            PASSION FOR CODE
                        </div>
                    </div>
                </div>

                <div id="contact" className="col-span-2 md:col-span-1 lg:col-span-1 p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/60 to-[#120d24] border border-purple-500/40 flex items-center justify-between gap-3 group cursor-pointer hover:border-purple-400 transition-all">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-purple-900/40 p-1 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <img src={logoImg} alt="Kitsune Mask" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                                LET'S BUILD
                            </div>
                            <div className="text-xs font-black text-gray-100 tracking-tight leading-none">
                                SOMETHING GREAT
                            </div>
                        </div>
                    </div>

                    <a
                        href="mailto:contact@prakash.dev"
                        className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-purple-600/40"
                        aria-label="Send email"
                    >
                        <ArrowRight size={16} />
                    </a>
                </div>

            </div>

        </div>
    );
};

export default HomePage;