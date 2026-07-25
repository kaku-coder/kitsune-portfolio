import React from 'react';
import {
    User,
    Heart,
    Zap,
    Code2,
    Sprout,
    Layers,
    Calendar,
    Clock,
    Download,
    Infinity as InfinityIcon,
    GraduationCap,
    Rocket,
    Terminal,
    Brain,
    Cloud,
    GitCommit
} from 'lucide-react';
import projectMainimage from '../assets/projectMainimage.png';
import mainimagesummer from '../assets/aboutsummer vibe.png';
import aboutUserimage from '../assets/aboutUserimage.png';
import aboutUserimagesummer from '../assets/aboutUserimagesummer.png';
import bottomlogo from '../assets/bottomlogo.png';
import bottomlogoSummer from '../assets/bottomlogo copysummer.png';
import ImagePetals from '../components/ImagePetals';

const Aboutpage = ({ theme, toggleTheme }) => {
    // Stats counter items (Clean, realistic, no fake internship text)
    const statsData = [
        {
            icon: Code2,
            value: '15+',
            label: 'Projects Completed',
        },
        {
            icon: GitCommit,
            value: '500+',
            label: 'Git Commits',
        },
        {
            icon: Layers,
            value: '20+',
            label: 'Technologies',
        },
        {
            icon: Clock,
            value: '1000+',
            label: 'Hours of Learning',
        },
        {
            icon: Heart,
            value: '∞',
            label: 'Curiosity',
        },
    ];

    // Journey Timeline items
    const journeyData = [
        {
            icon: Code2,
            year: '2023',
            title: 'Started Learning Programming',
            desc: 'Built a strong foundation in JavaScript and web development.',
        },
        {
            icon: GraduationCap,
            year: '2024',
            title: 'Built Full Stack Projects',
            desc: 'Created multiple MERN applications and explored backend architecture.',
        },
        {
            icon: Calendar,
            year: '2025',
            title: 'Advanced Full Stack & AI',
            desc: 'Worked on complex real-world projects and improved development workflow.',
        },
        {
            icon: Rocket,
            year: '2026',
            title: 'AI & DevOps Journey',
            desc: 'Learning Docker, AI integration, deployment, and scalable architectures.',
        },
    ];

    return (
        <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 sm:gap-8 py-4 sm:py-6 select-none px-3 sm:px-4 md:px-6 lg:px-8">
            
            {/* Theme Toggle Button */}
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

            {/* ================= 1. TOP HERO SECTION ================= */}
            <div className="relative w-full min-h-[340px] sm:min-h-[370px] flex items-center mb-2 overflow-hidden rounded-3xl bg-[#0a0714] shadow-2xl">
                
                {/* Background Samurai Kitsune Artwork */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src={projectMainimage}
                        alt="Kitsune Samurai Avatar"
                        className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-105 contrast-105"
                    />
                    <img
                        src={mainimagesummer}
                        alt="Kitsune Samurai Avatar Summer"
                        className="tt-light-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-105 contrast-105"
                    />
                    {/* Dark Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0714] via-[#0a0714]/85 via-45% to-transparent tt-dark-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-transparent to-[#0a0714]/30 tt-dark-overlay" />
                    {/* Light Gradient Overlays (Blending 100% seamlessly with #fff7ed theme) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] via-[#fff7ed]/85 via-45% to-transparent tt-light-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fff7ed] via-transparent to-[#fff7ed]/30 tt-light-overlay" />
                    <ImagePetals theme={theme} />
                </div>

                {/* Floating Quote Box on the Far Right */}
                <div className="absolute right-6 bottom-8 max-w-[210px] text-right z-10 hidden md:flex flex-col items-end pointer-events-none">
                    <div className="text-purple-400 text-3xl font-serif leading-none mb-1">“</div>
                    <p className="text-gray-300 text-xs font-medium leading-snug drop-shadow">
                        In the silence of focus, strength is built.
                    </p>
                    <div className="text-purple-400 text-xs font-japanese font-bold mt-2 tracking-wider">
                        — キツネ
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6 px-4 sm:px-8">
                    
                    {/* Left Column: Title & Intro */}
                    <div className="lg:col-span-8 flex flex-col items-start gap-4">
                        <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-0.5 font-japanese">
                            <span>キツネの道</span>
                        </div>

                        {/* Title - Matching HomePage & ProjectPage */}
                        <div className="flex flex-col select-none">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase font-cinzel leading-none drop-shadow-md">
                                ABOUT <span className="purple-brush-text font-brush italic">ME</span>
                            </h1>

                            {/* Purple Brush Underline Graphic */}
                            <div className="relative inline-block mt-1">
                                <svg className="w-36 sm:w-44 h-3 text-purple-500" viewBox="0 0 160 12" fill="none" preserveAspectRatio="none">
                                    <path d="M 2 8 Q 40 2, 158 5 C 120 11, 40 12, 2 8 Z" fill="currentColor" opacity="0.9" />
                                </svg>
                            </div>
                        </div>

                        {/* Subtitle intro */}
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                            I'm a Full Stack Developer passionate about building modern web applications with the MERN stack. I enjoy transforming ideas into responsive, scalable products while continuously learning new technologies and improving my development skills.
                        </p>

                        <a
                            href="/Prakash_Das_Resume.pdf"
                            download="Prakash_Das_Resume.pdf"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-500/40 bg-purple-950/50 hover:bg-purple-900/60 text-white text-xs font-extrabold tracking-wider transition-all duration-300 shadow-md shadow-purple-950/40 group cursor-pointer mt-1"
                        >
                            <span>Download Resume</span>
                            <Download size={14} className="text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                </div>

            </div>

            {/* ================= 2. STATS COUNTER BAR ================= */}
            <div className="w-full rounded-2xl bg-[#0c0916] border border-purple-900/30 p-4 sm:p-5 shadow-xl shadow-purple-950/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-purple-900/20">
                    {statsData.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                                    idx !== 0 ? 'sm:pl-4 lg:pl-6' : ''
                                }`}
                            >
                                <div className="w-10 h-10 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-400 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.2)] flex-shrink-0">
                                    <Icon size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-0.5">
                                        {stat.value}
                                    </span>
                                    <span className="text-[11px] font-medium text-gray-400 leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= 3. MIDDLE GRID ROW (3 CARDS) ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* CARD 1: WHO I AM */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0c0916] p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[380px]">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={aboutUserimage}
                            alt="Developer Portrait"
                            className="tt-dark-img w-full h-full object-cover object-[center_25%] scale-130 group-hover:scale-135 transition-transform duration-700 filter brightness-95 contrast-105 opacity-85"
                        />
                        <img
                            src={aboutUserimagesummer}
                            alt="Developer Portrait Summer"
                            className="tt-light-img absolute inset-0 w-full h-full object-cover object-[center_25%] scale-130 group-hover:scale-135 transition-transform duration-700 filter brightness-95 contrast-105 opacity-85"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0916] via-[#0c0916]/90 via-45% to-transparent/10 tt-dark-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 via-45% to-transparent/10 tt-light-overlay" />
                    </div>

                    <div className="relative z-10">
                        <div className="text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-4">
                            <span>WHO I AM</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                            Full Stack Developer
                        </h3>

                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                            I'm a passionate Full Stack Developer who builds real-world applications using modern web technologies. Every project helps me improve my problem-solving ability, coding standards, and software development practices.
                        </p>
                    </div>

                    {/* Skill Pills at bottom */}
                    <div className="relative z-10 flex flex-wrap gap-2 pt-4 mt-auto">
                        {['MERN Stack Developer', 'Problem Solver', 'Fast Learner', 'Team Player'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-lg bg-[#140f29] border border-purple-500/20 text-gray-300 text-[10.5px] font-medium shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CARD 2: WHAT DRIVES ME */}
                <div className="lg:col-span-4 rounded-2xl bg-[#0c0916] p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-purple-900/30 hover:border-purple-500/30 transition-all">
                    <div className="text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
                        <Zap size={14} className="text-purple-400" />
                        <span>WHAT DRIVES ME</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
                    </div>

                    <div className="flex flex-col gap-5 my-auto">
                        
                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-xl bg-[#140f29] border border-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                                <Zap size={18} />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-white mb-1">
                                    Build Real Products
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                                    I enjoy building applications that solve real problems instead of creating simple demos.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-xl bg-[#140f29] border border-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                                <Code2 size={18} />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-white mb-1">
                                    Learn Every Day
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                                    Technology changes quickly, so I dedicate time every day to learning something new.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3.5 items-start">
                            <div className="p-2.5 rounded-xl bg-[#140f29] border border-purple-500/20 text-purple-400 flex-shrink-0 mt-0.5 shadow-sm">
                                <Sprout size={18} />
                            </div>
                            <div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-white mb-1">
                                    Clean Code
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                                    I believe readable and maintainable code is just as important as writing working code.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CARD 3: CURRENTLY FOCUSED */}
                <div className="lg:col-span-4 rounded-2xl bg-[#0c0916] p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-purple-900/30 hover:border-purple-500/30 transition-all">
                    <div className="text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
                        <span>CURRENTLY FOCUSED</span>
                    </div>

                    <div className="flex flex-col gap-4 my-auto">
                        
                        <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#140f29]/70 border border-purple-500/15">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 rounded-lg bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Terminal size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white">MERN Stack</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5">
                                        Building full stack applications with React, Node.js, Express and MongoDB.
                                    </p>
                                </div>
                            </div>
                            <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-950/80 border border-purple-500/30 rounded uppercase">
                                MERN
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#140f29]/70 border border-purple-500/15">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 rounded-lg bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Brain size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white">AI & Modern Web</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5">
                                        Exploring AI APIs, LangChain and intelligent web experiences.
                                    </p>
                                </div>
                            </div>
                            <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-950/80 border border-purple-500/30 rounded uppercase">
                                AI
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#140f29]/70 border border-purple-500/15">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 rounded-lg bg-purple-950/70 text-purple-300 flex-shrink-0">
                                    <Cloud size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-extrabold text-white">DevOps & Deployment</h4>
                                    <p className="text-[10.5px] text-gray-300 leading-tight mt-0.5">
                                        Learning Docker, deployment pipelines and scalable application architecture.
                                    </p>
                                </div>
                            </div>
                            <span className="px-2 py-0.5 text-[10px] font-bold text-purple-300 bg-purple-950/80 border border-purple-500/30 rounded uppercase">
                                DEVOPS
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            {/* ================= 4. BOTTOM ROW (JOURNEY TIMELINE + PHILOSOPHY) ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* MY JOURNEY SO FAR (Left Column) */}
                <div className="lg:col-span-7 rounded-2xl bg-[#0c0916] p-6 sm:p-7 shadow-xl border border-purple-900/30 relative overflow-hidden">
                    <div className="text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
                        <span>MY JOURNEY SO FAR</span>
                    </div>

                    <div className="relative w-full">
                        {/* Horizontal Connecting Line */}
                        <div className="hidden sm:block absolute top-[20px] left-[30px] right-[30px] h-[2px] bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 z-0"></div>

                        {/* 4 Timeline Milestones */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10">
                            {journeyData.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex flex-col items-center text-center group">
                                        <div className="w-10 h-10 rounded-full border border-purple-500/50 bg-[#140f29] text-purple-300 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform mb-2.5 z-10">
                                            <Icon size={18} />
                                        </div>

                                        <span className="text-[11px] font-extrabold text-purple-400 tracking-wider uppercase mb-1">
                                            {item.year}
                                        </span>

                                        <h4 className="text-xs font-extrabold text-white mb-1 leading-tight group-hover:text-purple-300 transition-colors">
                                            {item.title}
                                        </h4>

                                        <p className="text-[10px] text-gray-400 font-normal leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* MY PHILOSOPHY (Right Column) */}
                <div className="lg:col-span-5 rounded-2xl bg-[#0c0916] p-6 sm:p-7 shadow-xl border border-purple-900/30 flex flex-col justify-between relative overflow-hidden">
                    <div>
                        <div className="text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block"></span>
                            <span>MY PHILOSOPHY</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                            {/* Quote Box */}
                            <div className="sm:col-span-8 p-4 rounded-xl bg-[#140f29]/70 border border-purple-500/15 relative">
                                <div className="text-purple-400 text-2xl font-serif leading-none mb-1">“</div>
                                <p className="text-gray-200 text-xs font-normal leading-relaxed">
                                    Every expert was once a beginner. I focus on consistent learning, clean code, and building projects that solve real-world problems.
                                </p>
                                <div className="text-purple-400 text-xs font-bold mt-3 text-right">
                                    — Prakash
                                </div>
                            </div>

                            {/* Bottom Logo Emblem (Enlarged & Summer Theme Support) */}
                            <div className="sm:col-span-4 flex items-center justify-center py-2">
                                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-2 border-purple-500/40 bg-gradient-to-b from-purple-950/60 to-[#0c0916] flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.35)] relative group overflow-hidden p-2">
                                    <img
                                        src={bottomlogo}
                                        alt="Bottom Logo Dark"
                                        className="tt-dark-img w-24 sm:w-32 h-24 sm:h-32 object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <img
                                        src={bottomlogoSummer}
                                        alt="Bottom Logo Summer"
                                        className="tt-light-img w-24 sm:w-32 h-24 sm:h-32 object-contain filter drop-shadow-[0_0_12px_rgba(234,88,12,0.6)] group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Aboutpage;