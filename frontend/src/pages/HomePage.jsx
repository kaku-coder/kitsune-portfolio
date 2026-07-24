import React, { useRef, useState, useEffect } from 'react';
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
    ArrowUpRight,
    Layers,
    Cpu,
    Database,
    Terminal,
    Wind,
    Radio,
    Container,
    GitBranch,
    Download,
    Smile,
    Laptop,
    CheckCircle2,
    BookOpen,
    Star,
    Flame,
    Milestone
} from 'lucide-react';
import mainimage from '../assets/mainimage.png';
import cardimage1 from '../assets/cardimage1.jpg';
import logoImg from '../assets/logo.png';
import AtmosphereLayer from '../components/AtmosphereLayer';

const GithubIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const HomePage = () => {
    const heroRef = useRef(null);
    const [rect, setRect] = useState(null);

    useEffect(() => {
        const update = () => {
            if (heroRef.current) {
                const r = heroRef.current.getBoundingClientRect();
                setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
            }
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    // Pure Black, White & Purple Theme Tech Stack
    const techStack = [
        { name: 'React', icon: Layers, color: 'text-purple-400' },
        { name: 'Node.js', icon: Cpu, color: 'text-purple-300' },
        { name: 'MongoDB', icon: Database, color: 'text-purple-400' },
        { name: 'Express', icon: Terminal, color: 'text-gray-200' },
        { name: 'Tailwind', icon: Wind, color: 'text-purple-300' },
        { name: 'Socket.io', icon: Radio, color: 'text-purple-400' },
        { name: 'Docker', icon: Container, color: 'text-purple-300' },
        { name: 'Git', icon: GitBranch, color: 'text-purple-400' },
    ];

    return (
        <div className="w-full flex flex-col gap-6 py-4 select-none">

            {/* ================= 1. HERO SECTION (NO BORDER) ================= */}
            <div
                ref={heroRef}
                id="home"
                className="relative w-full min-h-[580px] lg:min-h-[620px] rounded-3xl overflow-hidden bg-[#0a0714] flex flex-col justify-between p-6 sm:p-10 lg:p-12 group shadow-2xl"
            >

                {/* Hero Background Image (Kitsune Samurai avatar & Japanese Pagoda Fog) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={mainimage}
                        alt="Hero Background Kitsune"
                        className="w-full h-full object-cover object-right sm:object-center filter brightness-[0.82] contrast-105 group-hover:scale-102 transition-transform duration-1000"
                    />
                    {/* Dark Blending Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0714]/95 via-[#0a0714]/75 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-transparent to-black/50" />
                </div>

                {/* Atmospheric Falling Particles */}
                <AtmosphereLayer rect={rect} />

                {/* Top Right Japanese Quote */}
                <div className="relative z-10 self-end max-w-[260px] text-right pointer-events-none hidden sm:block">
                    <div className="text-purple-400 text-3xl font-serif mb-0.5 leading-none">“</div>
                    <div className="text-gray-200 text-sm font-japanese font-medium tracking-wide leading-relaxed">
                        静けさの中に、<br />
                        最も強い力が宿る。
                    </div>
                    <div className="text-[11px] text-purple-400/90 font-sans tracking-widest mt-1.5">
                        — キツネ
                    </div>
                </div>

                {/* Main Hero Content (Left Headline & Buttons) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
                    <div className="lg:col-span-8 flex flex-col gap-4">

                        <div className="text-purple-400 font-serif text-sm tracking-[0.25em] uppercase">
                            キツネの道
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                            I BUILD DIGITAL <br />
                            <span className="font-signature text-purple-400 text-5xl sm:text-6xl lg:text-7xl block my-1 font-bold">
                                EXPERIENCES
                            </span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-widest text-purple-300 uppercase py-0.5">
                            <span>FULL STACK DEVELOPER</span>
                            <span className="text-purple-500">•</span>
                            <span>MERN STACK</span>
                            <span className="text-purple-500">•</span>
                            <span>AI ENTHUSIAST</span>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                            I craft fast, scalable and beautiful web applications with clean code and thoughtful design.
                        </p>

                        {/* Buttons Row */}
                        <div className="flex flex-wrap items-center gap-5 pt-3">
                            {/* Primary Button */}
                            <a
                                href="#projects"
                                className="px-6 py-3.5 rounded-xl bg-[#140e29] hover:bg-purple-950/80 border border-purple-500/40 hover:border-purple-400 text-purple-200 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-lg shadow-purple-950/60 active:scale-95 group/btn"
                            >
                                <span>EXPLORE MY WORK</span>
                                <span className="text-purple-400 font-mono text-sm group-hover/btn:translate-x-1 transition-transform">⊣</span>
                            </a>

                            {/* Secondary Button - WATCH INTRO */}
                            <button className="px-4 py-2.5 rounded-xl bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/20 text-gray-200 text-xs font-bold flex items-center gap-3 transition-all cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                                    <Play size={13} className="fill-purple-300 ml-0.5" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[11px] font-bold text-purple-200 uppercase tracking-wider">WATCH INTRO</span>
                                    <span className="text-[9px] text-gray-400">30 sec</span>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Bottom Row: Scroll Indicator & Status Card */}
                <div className="relative z-10 flex items-end justify-between pt-4">

                    {/* Scroll Down Indicator */}
                    <div className="hidden sm:flex flex-col items-center mx-auto text-gray-400 text-[10px] font-mono tracking-widest uppercase gap-1.5 pointer-events-none">
                        <div className="w-5 h-8 rounded-full border-2 border-purple-500/40 flex justify-center pt-1.5">
                            <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
                        </div>
                        <span>SCROLL DOWN</span>
                    </div>

                    {/* CURRENT STATUS & EXPERIENCE Card */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0d091a]/95 backdrop-blur-xl border border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col gap-3 min-w-[240px] ml-auto">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-purple-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                            CURRENT STATUS
                        </div>

                        <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-purple-950/40 p-2 rounded-xl border border-purple-500/20">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                            </span>
                            <span>Available for new opportunities</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-purple-900/40">
                            <div className="flex flex-col gap-0.5">
                                <div className="text-[9px] uppercase tracking-widest font-extrabold text-purple-300/70 flex items-center gap-1">
                                    <MapPin size={10} className="text-purple-400" />
                                    LOCATION
                                </div>
                                <div className="text-xs font-bold text-gray-100">India, Earth</div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-[9px] uppercase tracking-widest font-extrabold text-purple-300/70 flex items-center gap-1">
                                    <Calendar size={10} className="text-purple-400" />
                                    EXPERIENCE
                                </div>
                                <div className="text-xs font-bold text-gray-100">2+ Years</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* ================= 2. BENTO GRID SECTION ================= */}
            <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* CARD 1: ABOUT ME */}
                <div className="lg:col-span-4 rounded-2xl bg-[#0a0714] border border-purple-900/30 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 shadow-xl min-h-[280px]">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={cardimage1}
                            alt="About Me Background"
                            className="w-full h-full object-cover object-center opacity-35 group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-[#0a0714]/85 to-[#0a0714]/30" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-300 uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                            <span>ABOUT ME</span>
                        </div>
                        <span className="text-purple-400/60 font-serif text-lg">狐</span>
                    </div>

                    <div className="relative z-10 flex flex-col gap-2 my-auto">
                        <h3 className="text-xl font-extrabold text-white leading-snug">
                            Crafting solutions, <br />
                            <span className="text-purple-400">solving problems.</span>
                        </h3>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                            I'm a Full Stack Developer who loves turning ideas into real-world products. I enjoy building things that are fast, scalable and impactful.
                        </p>
                    </div>

                    {/* Bottom Prakash Signature + Stamp */}
                    <div className="relative z-10 pt-3 flex items-center justify-between border-t border-purple-900/40">
                        <span className="font-signature text-purple-300 text-2xl font-bold tracking-wide">
                            Prakash
                        </span>
                        <div className="w-7 h-7 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-[10px] text-purple-400 font-serif">
                            顔
                        </div>
                    </div>
                </div>

                {/* CARD 2: FEATURED PROJECT (AI BATTLE ARENA) */}
                <div id="projects" className="lg:col-span-5 rounded-2xl bg-[#0a0714] border border-purple-900/30 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>FEATURED PROJECT</span>
                        </div>
                        <a href="#projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
                        
                        {/* Left Info */}
                        <div className="sm:col-span-6 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-black text-white mb-1">
                                    AI Battle Arena
                                </h3>
                                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 mb-2" />

                                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                                    Real-time AI battle platform where different AI models compete and users vote for the best response.
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {['MERN', 'Socket.io', 'AI', 'Tailwind', 'MongoDB'].map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 rounded-md bg-purple-950/70 border border-purple-500/25 text-[10px] font-bold text-purple-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-200 transition-colors uppercase tracking-wider group/link"
                            >
                                <span>VIEW PROJECT</span>
                                <span className="font-mono text-sm group-hover/link:translate-x-1 transition-transform">⊣</span>
                            </a>
                        </div>

                        {/* Right Mockup Screen Frame (Pure Purple Theme) */}
                        <div className="sm:col-span-6 relative w-full h-44 rounded-xl bg-[#06040a] border border-purple-500/30 p-3 overflow-hidden shadow-2xl flex flex-col justify-between group/frame hover:border-purple-400/60 transition-colors">
                            <div className="flex items-center justify-between text-[9px] text-purple-300 font-mono border-b border-purple-900/40 pb-1.5">
                                <span className="font-bold tracking-widest">AI BATTLE ARENA</span>
                                <span className="text-purple-400 flex items-center gap-1 font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                                    LIVE
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 my-auto items-center relative py-1">
                                <div className="p-2 rounded-lg bg-[#120d24] border border-purple-500/30 text-center flex flex-col items-center shadow-lg">
                                    <div className="w-7 h-7 rounded-full bg-purple-900/60 border border-purple-400/50 flex items-center justify-center text-purple-200 text-[10px] font-bold mb-1 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                                        GPT
                                    </div>
                                    <span className="text-[10px] font-extrabold text-gray-100">GPT-4</span>
                                </div>

                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-purple-600 text-white font-black text-[10px] flex items-center justify-center shadow-xl shadow-purple-950 border border-purple-400/60">
                                    VS
                                </div>

                                <div className="p-2 rounded-lg bg-[#120d24] border border-purple-500/30 text-center flex flex-col items-center shadow-lg">
                                    <div className="w-7 h-7 rounded-full bg-purple-900/60 border border-purple-400/50 flex items-center justify-center text-purple-200 text-[10px] font-bold mb-1 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                                        GEM
                                    </div>
                                    <span className="text-[10px] font-extrabold text-gray-100">Gemini Pro</span>
                                </div>
                            </div>

                            <div className="text-[8.5px] text-gray-400 text-center font-mono border-t border-purple-900/40 pt-1">
                                Judge System • Real-time Evaluation
                            </div>
                        </div>

                    </div>
                </div>

                {/* CARD 3: TECH STACK (STYLED CARDS - PURPLE THEME) */}
                <div id="skills" className="lg:col-span-3 rounded-2xl bg-[#0a0714] border border-purple-900/30 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-xl">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                                <span>TECH STACK</span>
                            </div>
                            <Layers size={18} className="text-purple-400" />
                        </div>

                        {/* Tech Cards Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2 mb-3">
                            {techStack.map((tech) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={tech.name}
                                        className="p-2.5 rounded-xl bg-[#110b24]/90 border border-purple-500/25 hover:border-purple-400/60 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-purple-950/50 cursor-pointer"
                                    >
                                        <Icon size={20} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-[9.5px] font-bold text-gray-300 group-hover:text-purple-200 truncate max-w-full">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="text-center pt-2 border-t border-purple-900/30">
                        <span className="text-xs text-purple-400/90 font-bold tracking-wide hover:text-purple-300 transition-colors cursor-pointer">
                            + More Technologies
                        </span>
                    </div>
                </div>

            </div>

            {/* ================= 3. JOURNEY & STATS SECTION ================= */}
            <div id="journey" className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* CARD 4: JOURNEY TIMELINE */}
                <div className="lg:col-span-4 rounded-2xl bg-[#0a0714] border border-purple-900/30 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>JOURNEY TIMELINE</span>
                        </div>
                        <Milestone size={18} className="text-purple-400" />
                    </div>

                    <div className="flex flex-col gap-5 my-auto relative pl-5 border-l-2 border-purple-900/60 ml-2">

                        <div className="relative group/time">
                            <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-[#0a0714] shadow-[0_0_10px_#a855f7] transition-transform group-hover/time:scale-125" />
                            <div className="inline-block px-2 py-0.5 rounded-md bg-purple-950/70 border border-purple-500/30 text-[9.5px] font-bold text-purple-300 uppercase tracking-wider mb-1.5">
                                2024 - Present
                            </div>
                            <h4 className="text-sm font-black text-white group-hover/time:text-purple-300 transition-colors">
                                Full Stack Engineer & AI Integration
                            </h4>
                            <p className="text-gray-300 text-xs mt-1 leading-relaxed font-normal">
                                Building high-performance, scalable MERN stack web applications and integrating modern AI model APIs.
                            </p>
                        </div>

                        <div className="relative group/time">
                            <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-800 ring-4 ring-[#0a0714] transition-transform group-hover/time:scale-125" />
                            <div className="inline-block px-2 py-0.5 rounded-md bg-purple-950/50 border border-purple-500/20 text-[9.5px] font-bold text-purple-400 uppercase tracking-wider mb-1.5">
                                2023
                            </div>
                            <h4 className="text-sm font-black text-white group-hover/time:text-purple-300 transition-colors">
                                Leveling Up & System Design
                            </h4>
                            <p className="text-gray-300 text-xs mt-1 leading-relaxed font-normal">
                                Deepened expertise in full stack development, database modeling, Socket.io real-time architecture, and clean UI engineering.
                            </p>
                        </div>

                    </div>
                </div>

                {/* BOTTOM STATS BAR */}
                <div className="lg:col-span-8 rounded-2xl bg-[#0a0714] border border-purple-900/30 p-5 sm:p-6 shadow-xl grid grid-cols-2 md:grid-cols-3 gap-4 items-center">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                            <Code2 size={20} />
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">10+</div>
                            <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
                                PROJECTS COMPLETED
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">2+</div>
                            <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
                                YEARS OF EXPERIENCE
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                            <Braces size={20} />
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">15K+</div>
                            <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
                                LINES OF CODE
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                            <Coffee size={20} />
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">∞</div>
                            <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
                                CUPS OF COFFEE
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20 text-purple-400">
                            <Heart size={20} className="text-purple-400 fill-purple-500/20" />
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">100%</div>
                            <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider">
                                PASSION FOR CODE
                            </div>
                        </div>
                    </div>

                    {/* LET'S BUILD SOMETHING GREAT Card */}
                    <div id="contact" className="p-3 rounded-xl bg-gradient-to-br from-purple-950/80 to-[#120d24] border border-purple-500/40 flex items-center justify-between gap-3 group cursor-pointer hover:border-purple-400 transition-all shadow-lg">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-purple-900/50 p-1 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                                <img src={logoImg} alt="Kitsune Mask" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <div className="text-[9px] font-extrabold text-purple-300 uppercase tracking-wider">
                                    LET'S BUILD
                                </div>
                                <div className="text-xs font-black text-white tracking-tight leading-none">
                                    SOMETHING GREAT
                                </div>
                            </div>
                        </div>

                        <a
                            href="mailto:contact@prakash.dev"
                            className="w-7 h-7 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-purple-600/40"
                            aria-label="Send email"
                        >
                            <ArrowRight size={14} />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default HomePage;