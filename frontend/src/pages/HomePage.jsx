import React, { useRef, useState, useEffect } from 'react';
import {
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
    Eye
} from 'lucide-react';
import mainimage from '../assets/mainimage.png';
import mainimagesummer from '../assets/mainimagesummer.png';
import cardimage1 from '../assets/cardimage1.jpg';
import cardimage1summer from '../assets/cardimage1summer.png';
import projectMogoAi from '../assets/project_mogo_ai.png';
import logoImg from '../assets/logo.png';
import AtmosphereLayer from '../components/AtmosphereLayer';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import StaggerCards from '../components/StaggerCards';
import useGitHub from '../hooks/useGitHub';

const GithubIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const BrushUnderline = () => (
    <svg viewBox="0 0 140 10" className="w-28 h-2.5 my-1" fill="none">
        <path
            d="M2 5C25 2.5 70 2 138 4.5C110 6 75 7.5 2 5Z"
            fill="url(#purpleBrush)"
            className="filter drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
        />
        <defs>
            <linearGradient id="purpleBrush" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="0.5" stopColor="#c084fc" />
                <stop offset="1" stopColor="#6d28d9" />
            </linearGradient>
        </defs>
    </svg>
);

const HomePage = ({ setActiveSection, theme, toggleTheme }) => {
    const gh = useGitHub();
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const isProd = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
        const API_URL = import.meta.env.VITE_API_URL;
        if (!API_URL || (isProd && API_URL.includes('localhost'))) return;

        fetch(`${API_URL}/api/visitor/track`, { method: 'POST' })
            .then(res => res.json())
            .then(data => { if (data.count) setVisitorCount(data.count); })
            .catch(() => {});
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
        <div className="w-full flex flex-col gap-3 sm:gap-6 py-3 sm:py-4 select-none">

            {/* ================= 1. HERO SECTION (NO BORDER) ================= */}
            <div
                id="home"
                className="relative w-full min-h-[420px] sm:min-h-[580px] lg:min-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a0714] flex flex-col justify-between p-4 sm:p-10 lg:p-12 group shadow-2xl"
            >

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={mainimage}
                        alt="Hero Background Dark"
                        className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-right filter brightness-105 contrast-105 group-hover:scale-102 transition-transform duration-1000 opacity-95"
                    />
                    <img
                        src={mainimagesummer}
                        alt="Hero Background Summer"
                        className="tt-light-img absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-right filter brightness-105 contrast-105 group-hover:scale-102 transition-transform duration-1000 opacity-95"
                    />
                    {/* Dark Blending Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0714] via-[#0a0714]/80 via-45% to-transparent/10 tt-dark-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-transparent to-black/30 tt-dark-overlay" />
                    {/* Light Blending Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-45% to-transparent/10 tt-light-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 tt-light-overlay" />
                </div>

                {/* Atmospheric Falling Particles */}
                <AtmosphereLayer theme={theme} />

                {/* Theme Toggle Button (Desktop Only - Mobile Has Header Bar) */}
                <button
                    onClick={toggleTheme}
                    className="hidden lg:flex absolute top-4 right-4 z-20 w-10 h-10 rounded-full tt-toggle-btn items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer"
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

                {/* Top Right Japanese Quote */}
                <ScrollReveal y={15} delay={0.5}>
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
                </ScrollReveal>

                {/* Main Hero Content (Left Headline & Buttons) */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center my-auto">
                    <div className="lg:col-span-8 flex flex-col gap-2 sm:gap-4">

                        <ScrollReveal y={15}>
                            <div className="text-purple-400 font-serif text-xs sm:text-sm tracking-[0.25em] uppercase">
                                キツネの道
                            </div>
                        </ScrollReveal>

                        <TextReveal
                            as="h1"
                            className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none"
                            stagger={0.04}
                        >
                            I BUILD DIGITAL <br />
                        </TextReveal>

                        <span className="font-signature text-purple-400 text-3xl sm:text-6xl lg:text-7xl block my-0.5 sm:my-1 font-bold">
                            EXPERIENCES
                        </span>

                        <ScrollReveal y={15} delay={0.2}>
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold tracking-widest text-purple-300 uppercase py-0.5">
                                <span>FULL STACK DEVELOPER</span>
                                <span className="text-purple-500">•</span>
                                <span>MERN STACK</span>
                                <span className="text-purple-500">•</span>
                                <span>AI ENTHUSIAST</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal y={15} delay={0.3}>
                            <p className="text-gray-300 text-[11px] sm:text-sm max-w-lg leading-relaxed">
                                I craft fast, scalable and beautiful web applications with clean code and thoughtful design.
                            </p>
                        </ScrollReveal>

                        {/* Buttons Row */}
                        <ScrollReveal y={15} delay={0.4}>
                            <div className="flex flex-wrap items-center gap-2.5 sm:gap-5 pt-2 sm:pt-3">
                            {/* Primary Button */}
                            <div
                                onClick={() => setActiveSection && setActiveSection('projects')}
                                className="px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#140e29] hover:bg-purple-950/80 hover:border-purple-400 text-purple-200 text-[10.5px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg shadow-purple-950/60 active:scale-95 group/btn cursor-pointer"
                            >
                                <span>EXPLORE MY WORK</span>
                                <span className="text-purple-400 font-mono text-xs sm:text-sm group-hover/btn:translate-x-1 transition-transform">⊣</span>
                            </div>

                            {/* Secondary Button - VIEW RESUME */}
                            <div
                                onClick={() => setActiveSection && setActiveSection('about')}
                                className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-purple-950/40 hover:bg-purple-900/60 hover:border-purple-400 text-gray-200 text-[10.5px] sm:text-xs font-bold flex items-center gap-2 sm:gap-3 transition-all duration-300 cursor-pointer shadow-lg active:scale-95 group/cv"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600/40 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover/cv:scale-110 transition-transform">
                                    <Download size={12} className="text-purple-300" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-[10px] sm:text-[11px] font-bold text-purple-200 uppercase tracking-wider">VIEW RESUME</span>
                                    <span className="text-[8px] sm:text-[9px] text-gray-400 font-mono">About Section</span>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>

                    </div>
                </div>

                {/* Bottom Row: Status Card & Centered Scroll Down Indicator */}
                <div className="relative z-10 flex items-end justify-end pt-4">

                    {/* Perfectly Centered Scroll Down Indicator */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 z-20 hidden sm:flex flex-col items-center text-gray-400 text-[10px] font-mono tracking-widest uppercase gap-1.5 pointer-events-none">
                        <div className="w-5 h-8 rounded-full border-2 border-purple-500/40 flex justify-center pt-1.5 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                            <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
                        </div>
                        <span>SCROLL DOWN</span>
                    </div>

                    {/* CURRENT STATUS & EXPERIENCE Card */}
                    <ScrollReveal y={20} delay={0.3}>
                    <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0d091a]/95 backdrop-blur-xl border-0 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col gap-2 sm:gap-3 w-full sm:min-w-[240px] sm:ml-auto">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-purple-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                            CURRENT STATUS
                        </div>

                        <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-purple-950/40 p-2 rounded-xl border-0">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                            </span>
                            <span>Actively seeking full-time developer roles</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-purple-900/40">
                            <div className="flex flex-col gap-0.5">
                                <div className="text-[9px] uppercase tracking-widest font-extrabold text-purple-300/70 flex items-center gap-1">
                                    <MapPin size={10} className="text-purple-400" />
                                    LOCATION
                                </div>
                                <div className="text-xs font-bold text-gray-100">Bhubaneswar, India</div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-[9px] uppercase tracking-widest font-extrabold text-purple-300/70 flex items-center gap-1">
                                    <Calendar size={10} className="text-purple-400" />
                                    AVAILABILITY
                                </div>
                                <div className="text-xs font-bold text-gray-100">Open For Work</div>
                            </div>
                        </div>

                        {visitorCount > 0 && (
                            <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-purple-900/40">
                                <Eye size={11} className="text-purple-400" />
                                <span className="text-[10px] font-bold text-purple-300 tracking-wider">
                                    {visitorCount.toLocaleString()} visitors
                                </span>
                            </div>
                        )}
                    </div>
                    </ScrollReveal>

                </div>

            </div>

            {/* ================= 2. BENTO GRID SECTION ================= */}
            <StaggerCards className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6" stagger={0.15} id="about">

                {/* CARD 1: ABOUT ME */}
                <div
                    id="about"
                    onClick={() => setActiveSection && setActiveSection('about')}
                    className="lg:col-span-4 rounded-2xl sm:rounded-3xl bg-[#0c0916] border-0 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:bg-[#0e0a1c] transition-all duration-300 shadow-2xl min-h-[220px] sm:min-h-[280px] cursor-pointer"
                >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={cardimage1}
                            alt="About Me Background Dark"
                            className="tt-dark-img w-full h-full object-cover object-center opacity-35 group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                        />
                        <img
                            src={cardimage1summer}
                            alt="About Me Background Summer"
                            className="tt-light-img w-full h-full object-cover object-center opacity-45 group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                        />
                        <div className="tt-dark-overlay absolute inset-0 bg-gradient-to-t from-[#0c0916] via-[#0c0916]/85 to-[#0c0916]/30" />
                        <div className="tt-light-overlay absolute inset-0 bg-gradient-to-t from-[#fff7ed] via-[#fff7ed]/85 to-[#fff7ed]/30" />
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
                    <div className="relative z-10 pt-3 flex items-center justify-between border-t border-purple-900/30">
                        <span className="font-signature text-purple-300 text-2xl font-bold tracking-wide">
                            Prakash
                        </span>
                        <div className="w-7 h-7 rounded-full bg-purple-950/60 border-0 flex items-center justify-center text-[10px] text-purple-400 font-serif">
                            顔
                        </div>
                    </div>
                </div>

                {/* CARD 2: FEATURED PROJECT (MOGO AI CHAT) */}
                <div
                    onClick={() => window.open('https://realtime-ai-chat-app-git-main-kaku-coders-projects.vercel.app', '_blank')}
                    className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#0c0916] border-0 p-4 sm:p-6 flex flex-col justify-between hover:bg-[#0e0a1c] transition-all shadow-2xl cursor-pointer"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>FEATURED PROJECT</span>
                        </div>
                        <ArrowUpRight size={18} className="text-purple-400" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center my-auto">
                        
                        {/* Left Info */}
                        <div className="sm:col-span-6 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg sm:text-xl font-black text-white mb-0.5">
                                    MOGO AI Chat
                                </h3>
                                <BrushUnderline />

                                <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed mb-2 sm:mb-3">
                                    Real-time AI assistant with Groq Llama 3.3, Tavily Live Search, Socket.IO WebSockets & MongoDB.
                                </p>

                                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                                    {['React 19', 'Groq Llama 3.3', 'Socket.io', 'Tavily', 'MongoDB'].map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 rounded-md bg-purple-950/70 text-[10px] font-bold text-purple-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="https://realtime-ai-chat-app-git-main-kaku-coders-projects.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-200 transition-colors uppercase tracking-wider group/link cursor-pointer"
                            >
                                <span>LIVE DEMO</span>
                                <span className="font-mono text-sm group-hover/link:translate-x-1 transition-transform">⊣</span>
                            </a>
                        </div>

                        {/* Right Mockup Screen Frame (Pure Purple Theme) */}
                        <div className="sm:col-span-6 relative w-full h-32 sm:h-44 rounded-lg sm:rounded-xl bg-[#06040a] border-0 p-2 sm:p-3 overflow-hidden shadow-2xl flex flex-col justify-between group/frame transition-colors">
                            <div className="flex items-center justify-between text-[9px] text-purple-300 font-mono border-b border-purple-900/40 pb-1.5">
                                <span className="font-bold tracking-widest">MOGO AI REAL-TIME</span>
                                <span className="text-purple-400 flex items-center gap-1 font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                                    LIVE
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 my-auto items-center relative py-1">
                                <div className="p-2 rounded-lg bg-[#120d24] border-0 text-center flex flex-col items-center shadow-lg">
                                    <div className="w-7 h-7 rounded-full bg-purple-900/60 border-0 flex items-center justify-center text-purple-200 text-[10px] font-bold mb-1 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                                        🤖
                                    </div>
                                    <span className="text-[10px] font-extrabold text-gray-100">Groq 70B</span>
                                </div>

                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-purple-600 text-white font-black text-[10px] flex items-center justify-center shadow-xl shadow-purple-950 border-0">
                                    ⚡
                                </div>

                                <div className="p-2 rounded-lg bg-[#120d24] border-0 text-center flex flex-col items-center shadow-lg">
                                    <div className="w-7 h-7 rounded-full bg-purple-900/60 border-0 flex items-center justify-center text-purple-200 text-[10px] font-bold mb-1 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                                        🌐
                                    </div>
                                    <span className="text-[10px] font-extrabold text-gray-100">Tavily Web</span>
                                </div>
                            </div>

                            <div className="text-[8.5px] text-gray-400 text-center font-mono border-t border-purple-900/40 pt-1">
                                Socket.IO Streaming • Persistent Sessions
                            </div>
                        </div>

                    </div>
                </div>

                {/* CARD 3: TECH STACK (STYLED CARDS - PURPLE THEME) */}
                <div
                    onClick={() => setActiveSection && setActiveSection('skills')}
                    className="lg:col-span-3 rounded-2xl sm:rounded-3xl bg-[#0c0916] border-0 p-4 sm:p-6 flex flex-col justify-between hover:bg-[#0e0a1c] transition-all shadow-2xl cursor-pointer"
                >
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                                <span>TECH STACK</span>
                            </div>
                            <Layers size={18} className="text-purple-400" />
                        </div>

                        {/* Tech Cards Grid */}
                        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3">
                            {techStack.map((tech) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={tech.name}
                                        className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#110b24]/90 border-0 flex flex-col items-center justify-center gap-1 sm:gap-1.5 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-purple-950/50 cursor-pointer"
                                    >
                                        <Icon size={16} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-[8px] sm:text-[9.5px] font-bold text-gray-300 group-hover:text-purple-200 truncate max-w-full">
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

            </StaggerCards>

            {/* ================= 3. BENTO GRID ROW 2: GITHUB & BLOGS ================= */}
            <StaggerCards className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6" stagger={0.15}>

                {/* GITHUB ACTIVITY CARD */}
                <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[#0c0916] border-0 p-4 sm:p-6 flex flex-col justify-between hover:bg-[#0e0a1c] transition-all shadow-2xl">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <GithubIcon size={18} className="text-purple-400" />
                            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">
                                GITHUB ACTIVITY
                            </span>
                        </div>
                        <a href="https://github.com/kaku-coder" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-2">
                        <span className="text-purple-400 font-mono">@kaku-coder</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{gh.followers} followers</span>
                    </div>

                    {/* Recent Repos */}
                    <div className="flex flex-col gap-2 my-3">
                        {gh.loading ? (
                            <div className="flex flex-col gap-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="h-12 rounded-lg bg-purple-950/20 animate-pulse" />
                                ))}
                            </div>
                        ) : (
                            gh.recentRepos.map((repo) => (
                                <a
                                    key={repo.name}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-2 rounded-lg bg-[#06040a] border-0 transition-all group"
                                >
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="text-[11px] font-bold text-purple-300 group-hover:text-purple-200 transition-colors font-mono truncate">
                                            {repo.name}
                                        </span>
                                        <span className="text-[9px] text-gray-500 truncate max-w-[200px]">
                                            {repo.description}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {repo.language && (
                                            <span className="text-[9px] text-gray-400 font-mono">{repo.language}</span>
                                        )}
                                        {repo.stars > 0 && (
                                            <span className="text-[9px] text-yellow-400/80 flex items-center gap-0.5">
                                                <Star size={9} /> {repo.stars}
                                            </span>
                                        )}
                                    </div>
                                </a>
                            ))
                        )}
                    </div>

                    {/* Stats Summary Row */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-purple-900/30 text-center">
                        <div>
                            <div className="text-sm font-extrabold text-white">{gh.repos}</div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Repos</div>
                        </div>
                        <div>
                            <div className="text-sm font-extrabold text-white">{gh.followers}</div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Followers</div>
                        </div>
                        <div>
                            <div className="text-sm font-extrabold text-white">{gh.stars}</div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Stars</div>
                        </div>
                    </div>
                </div>

                {/* RECENT BLOGS CARD */}
                <div
                    onClick={() => setActiveSection && setActiveSection('blog')}
                    className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-[#0c0916] border-0 p-4 sm:p-6 flex flex-col justify-between hover:bg-[#0e0a1c] transition-all shadow-2xl cursor-pointer"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                            <span>RECENT BLOGS</span>
                        </div>
                        <ArrowUpRight size={18} className="text-purple-400" />
                    </div>

                    <div className="flex flex-col gap-3 my-auto">
                        {[
                            {
                                title: 'How I Built MOGO AI Assistant',
                                date: 'Aug 05, 2026',
                                readTime: '14 min read',
                                img: projectMogoAi
                            },
                            {
                                title: 'How I Built AI Battle Arena',
                                date: 'July 12, 2026',
                                readTime: '12 min read',
                                img: cardimage1
                            },
                            {
                                title: 'My VS Code Setup That I Use',
                                date: 'July 18, 2026',
                                readTime: '6 min read',
                                img: cardimage1
                            }
                        ].map((blog, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-purple-950/30 transition-all group cursor-pointer">
                                <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-purple-950/40" />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-xs font-extrabold text-gray-200 group-hover:text-purple-300 transition-colors line-clamp-1">
                                        {blog.title}
                                    </h5>
                                    <span className="text-[10px] text-gray-400 font-medium">
                                        {blog.date} • {blog.readTime}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </StaggerCards>


        </div>
    );
};

export default HomePage;