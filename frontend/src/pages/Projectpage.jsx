import React, { useState, useRef, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Star,
  Zap,
  Globe,
  Brain,
  Wrench,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';

import projectpageImg from '../assets/projectpage.png';
import projectpagesummerImg from '../assets/projectpagesummer.png';
import projectAiArena from '../assets/project_ai_arena.png';
import projectMogoAi from '../assets/project_mogo_ai.png';
import ImagePetals from '../components/ImagePetals';
import TextReveal from '../components/TextReveal';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: 'mogo-ai-chat',
    title: 'MOGO AI — REAL-TIME CHAT',
    subtitle: 'Lightning-Fast AI Assistant',
    category: 'ai',
    featured: true,
    description: 'A lightning-fast, production-ready full-stack AI chat assistant powered by Groq Llama 3.3 70B, Tavily live web search, Socket.IO bidirectional streaming, and persistent MongoDB session architecture.',
    image: projectMogoAi,
    tags: ['React 19', 'Groq Llama 3.3', 'Tavily Search', 'Socket.io', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    date: 'Aug 2026',
    duration: '1 Month',
    projectType: 'Personal Project',
    liveUrl: 'https://realtime-ai-chat-app-git-main-kaku-coders-projects.vercel.app',
    caseStudyUrl: 'https://github.com/kaku-coder/realtime-ai-chat-app',
  },
  {
    id: 'ai-battle-arena',
    title: 'AI BATTLE ARENA',
    subtitle: 'Where Models Clash',
    category: 'ai',
    featured: true,
    description: 'Real-time platform where different AI models compete and users vote for the best response. Built with live streaming, scoring algorithms and dynamic battle arenas.',
    image: projectAiArena,
    tags: ['MERN', 'Socket.io', 'AI', 'Tailwind', 'Docker'],
    date: 'Apr 2024',
    duration: '3 Months',
    projectType: 'Personal Project',
    liveUrl: 'https://ai-battle-arena-3-s55j.onrender.com',
    caseStudyUrl: 'https://github.com/kaku-coder/AI-Battle-Arena',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: LayoutGrid },
  { id: 'web', label: 'Web Applications', icon: Globe },
  { id: 'ai', label: 'AI / ML', icon: Brain },
  { id: 'tools', label: 'Tools & Utilities', icon: Wrench },
];

// Sleek Laptop Device Mockup Component (Responsive for Desktop & Mobile)
const LaptopMockup = ({ image, alt, isLight }) => (
  <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[580px] mx-auto group/laptop transition-transform duration-500 hover:scale-[1.03] will-change-transform mt-2 lg:mt-0">
    {/* Display Lid Frame */}
    <div className={`relative rounded-t-[12px] sm:rounded-t-[22px] p-1.5 sm:p-3.5 pb-1 sm:pb-2 border border-b-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover/laptop:shadow-[0_25px_60px_rgba(168,85,247,0.35)] ${
      isLight ? 'bg-stone-800 border-stone-700' : 'bg-[#181426] border-purple-500/30 group-hover/laptop:border-purple-400/60'
    }`}>
      {/* Top Camera Dot */}
      <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#08060f]" />
      </div>

      {/* Screen Frame Display */}
      <div className="relative rounded sm:rounded-xl overflow-hidden aspect-[16/10] bg-[#0c0916] border border-purple-900/40 shadow-inner">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top filter brightness-95 group-hover/laptop:brightness-110 group-hover/laptop:scale-[1.02] transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>

    {/* Laptop Base Hinge */}
    <div className={`w-full h-2.5 sm:h-4.5 rounded-b-[12px] sm:rounded-b-[22px] border-t flex items-center justify-center shadow-2xl relative ${
      isLight
        ? 'bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 border-stone-600'
        : 'bg-gradient-to-b from-[#241f36] via-[#161224] to-[#0c0916] border-purple-500/30'
    }`}>
      <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-[#080611] rounded-full opacity-80" />
      <span className="absolute text-[8px] font-mono text-gray-400/60 uppercase tracking-widest pointer-events-none hidden sm:block">
        MacBook Pro
      </span>
    </div>
  </div>
);

// Horizontal Project Card Component (Sticky Scroll Stacking Cards Effect)
const HorizontalProjectCard = ({ project, index, isLight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  // Top sticky offset calculation so each card stacks cleanly over the previous card
  const stickyTopOffset = 80 + index * 24;

  return (
    <div
      ref={ref}
      className="w-full pointer-events-auto lg:sticky lg:mb-14 mb-4 sm:mb-6"
      style={{ top: `${stickyTopOffset}px`, zIndex: index + 10 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 border-0 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center box-border transition-all duration-500 shadow-2xl ${
          isLight
            ? 'bg-[#fff7ed] shadow-orange-200/40'
            : project.featured
              ? 'bg-[#0c0916] shadow-[0_20px_50px_rgba(168,85,247,0.25)] hover:shadow-[0_25px_60px_rgba(168,85,247,0.4)]'
              : 'bg-[#0a0714] shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]'
        }`}
      >
        {/* Background Japanese Kanji Watermark */}
        {project.featured && (
          <div className={`absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 text-[100px] sm:text-[220px] lg:text-[280px] font-serif font-black pointer-events-none select-none z-0 leading-none ${
            isLight ? 'text-orange-500/5' : 'text-purple-500/10'
          }`}>
            道
          </div>
        )}

        {/* Details Section */}
        <div className="col-span-full lg:col-span-6 flex flex-col justify-between gap-3 sm:gap-5 relative z-10 w-full">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            
            {/* Badge Tag */}
            {project.comingSoon ? (
              <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase ${
                isLight ? 'text-orange-500' : 'text-purple-400'
              }`}>
                <Clock size={12} className="fill-current" />
                <span>COMING SOON</span>
              </div>
            ) : project.featured ? (
              <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase ${
                isLight ? 'text-orange-500' : 'text-purple-400'
              }`}>
                <Star size={12} className="fill-current" />
                <span>FEATURED PROJECT</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-orange-500' : 'bg-purple-500'}`} />
                <span className={`text-[10px] sm:text-xs font-extrabold tracking-widest uppercase ${
                  isLight ? 'text-orange-500' : 'text-purple-400/90'
                }`}>
                  {project.subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className={`text-lg sm:text-3xl lg:text-4xl font-black italic tracking-wide uppercase break-words ${
              isLight ? 'text-stone-900' : 'text-white'
            }`}>
              {project.title}
            </h2>

            {/* Full Description */}
            <p className={`text-[11px] sm:text-sm leading-relaxed font-normal ${
              isLight ? 'text-stone-600' : 'text-gray-300'
            }`}>
              {project.description}
            </p>

          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all ${
                  isLight
                    ? 'bg-orange-50 text-orange-800'
                    : 'bg-[#140f29] text-purple-300'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Metadata */}
          <div className={`flex flex-wrap items-center gap-2.5 sm:gap-6 text-[10.5px] sm:text-xs font-medium pt-1 ${
            isLight ? 'text-stone-500' : 'text-gray-400'
          }`}>
            <div className="flex items-center gap-1">
              <Calendar size={12} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={12} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
              <span>{project.projectType}</span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 w-full">
            {project.comingSoon ? (
              <span className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[11px] sm:text-xs flex items-center gap-1.5 opacity-60 cursor-not-allowed ${
                isLight
                  ? 'bg-orange-200 text-orange-700'
                  : 'bg-purple-900/40 text-purple-300'
              }`}>
                <Clock size={12} />
                <span>Coming Soon</span>
              </span>
            ) : (
              <>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[11px] sm:text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
                    isLight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                      : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/40'
                  }`}
                >
                  <span>Live Demo</span>
                  <ArrowRight size={12} />
                </a>

                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[11px] sm:text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
                    isLight
                      ? 'bg-orange-50 text-stone-700 hover:bg-orange-100'
                      : 'bg-[#140f29] text-gray-300 hover:bg-purple-900/40 cursor-pointer'
                  }`}
                >
                  <span>View Code</span>
                  <GithubIcon size={12} />
                </a>
              </>
            )}
          </div>

        </div>

        {/* Right Column: MacBook Laptop Showcase (Desktop Only) */}
        <div className="hidden lg:block col-span-1 lg:col-span-6 relative z-10 w-full">
          <LaptopMockup image={project.image} alt={project.title} isLight={isLight} />
          {project.comingSoon && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl sm:rounded-3xl backdrop-blur-sm bg-black/20">
              <span className={`px-4 py-2 rounded-xl font-black text-sm tracking-widest uppercase ${
                isLight ? 'bg-orange-500/90 text-white' : 'bg-purple-600/90 text-white'
              }`}>
                Coming Soon
              </span>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
};

const Projectpage = ({ theme, toggleTheme, setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const isLight = theme === 'light';

  const filteredProjects = useMemo(() => {
    let result = projectsData.filter(p => {
      if (activeTab === 'all') return true;
      return p.category === activeTab;
    });

    if (sortBy === 'oldest') {
      return [...result].reverse();
    }
    return result;
  }, [activeTab, sortBy]);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  const handleSortToggle = useCallback(() => {
    setSortBy(prev => (prev === 'latest' ? 'oldest' : 'latest'));
  }, []);

  const handleMobileFilterToggle = useCallback(() => {
    setMobileFilterOpen(prev => !prev);
  }, []);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-8 pt-16 sm:pt-8 flex flex-col gap-6 sm:gap-10 select-none relative box-border">

      {/* Theme Toggle Floating Button (Desktop Only - Mobile Has Header Bar) */}
      <button
        onClick={toggleTheme}
        className="hidden lg:flex fixed top-4 right-4 z-[9990] w-9 h-9 sm:w-10 sm:h-10 rounded-full tt-toggle-btn items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer"
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

      {/* ================= 1. HERO HEADER SECTION ================= */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full min-h-[200px] sm:min-h-[340px] flex items-center mb-1 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0a0714] shadow-2xl"
      >
        {/* Background Samurai Kitsune Main Hero Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={projectpageImg}
            alt="Kitsune Samurai Avatar"
            className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[80%_center] filter brightness-110 contrast-105"
          />
          <img
            src={projectpagesummerImg}
            alt="Kitsune Samurai Avatar Summer"
            className="tt-light-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-110 contrast-105"
          />
          {/* Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0714] via-[#0a0714]/85 via-45% to-transparent tt-dark-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-transparent to-[#0a0714]/30 tt-dark-overlay" />
          {/* Light Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] via-[#fff7ed]/85 via-45% to-transparent tt-light-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff7ed] via-transparent to-[#fff7ed]/30 tt-light-overlay" />
          <ImagePetals theme={theme} />
        </div>

        {/* Far Right Vertical Japanese Calligraphy */}
        <div className="absolute right-6 top-8 bottom-8 z-10 hidden lg:flex flex-col items-end justify-between pointer-events-none select-none">
          <div className="text-purple-400/80 text-xs font-japanese tracking-[0.3em] [writing-mode:vertical-rl] leading-relaxed drop-shadow">
            静けさの中に、最も強い力が宿る。
          </div>

          <div className="w-9 h-9 rounded-lg bg-purple-950/60 flex items-center justify-center text-xs font-serif text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            鬼
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-center py-5 px-4 sm:px-8 pt-7 sm:pt-6">
          <div className="flex flex-col items-start gap-2 sm:gap-4 max-w-full sm:max-w-2xl">
            
            {/* Japanese Subtitle Tag */}
            <div className="text-purple-400 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 font-japanese">
              <span>キツネの道</span>
            </div>

            {/* Stylized Brush Header Title */}
            <div className="flex flex-col select-none w-full">
              <TextReveal
                as="h1"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide uppercase font-cinzel leading-none drop-shadow-md"
                stagger={0.04}
              >
                PRO<span className="purple-brush-text font-brush italic">JECTS</span>
              </TextReveal>

              {/* Purple Brush Underline Graphic */}
              <div className="relative inline-block mt-1">
                <svg className="w-28 sm:w-44 lg:w-64 h-2.5 sm:h-3 text-purple-500" viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                  <path d="M 2 10 Q 50 2, 198 6 C 150 12, 50 14, 2 10 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-[11.5px] sm:text-sm leading-relaxed font-normal max-w-lg mt-0.5">
              A collection of real-world projects where I transform ideas into functional, scalable and <span className={isLight ? 'text-orange-600 font-bold' : 'text-purple-400 font-bold'}>impactful</span> solutions.
            </p>

          </div>
        </div>
      </motion.div>

      {/* ================= 2. FILTER & SORT CONTROL BAR ================= */}

      {/* Desktop: Sticky horizontal bar */}
      <div className={`hidden lg:flex lg:sticky lg:top-3 z-[990] w-full rounded-2xl p-2.5 shadow-2xl items-center justify-between gap-4 backdrop-blur-xl ${
        isLight
          ? 'bg-white/90'
          : 'bg-[#0c0916]/90'
      }`}>
        
        {/* Left: Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : isLight
                      ? 'text-stone-600 hover:text-stone-900 hover:bg-orange-100/60'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#140f29]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-gray-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Sort By Selector */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 px-2">
          <span>Sort by :</span>
          <button
            onClick={() => setSortBy(sortBy === 'latest' ? 'oldest' : 'latest')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isLight
                ? 'bg-orange-50 text-stone-800'
                : 'bg-[#140f29] text-gray-300'
            }`}
          >
            <span className="capitalize">{sortBy}</span>
            <ChevronDown size={13} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
          </button>
        </div>

      </div>

      {/* Mobile: Floating FAB circle + animated dropdown */}
      {mobileFilterOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileFilterOpen(false)}
        />
      )}
      <div className="lg:hidden fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-3">
        {/* Animated Filter Dropdown */}
        <div className={`flex flex-col gap-2 transition-all duration-300 ${
          mobileFilterOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
        }`}>
          {categories.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setMobileFilterOpen(false); }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-xl transition-all duration-200 cursor-pointer ${
                  mobileFilterOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                } ${
                  isActive
                    ? isLight
                      ? 'bg-orange-500 text-white'
                      : 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : isLight
                      ? 'bg-white/95 text-stone-700 hover:bg-orange-50'
                      : 'bg-[#140f29]/95 text-gray-300 hover:bg-purple-900/50 hover:text-white'
                }`}
                style={{
                  transitionDelay: mobileFilterOpen ? `${i * 50}ms` : `${(categories.length - i) * 30}ms`,
                }}
              >
                <Icon size={14} className={isActive ? 'text-white' : isLight ? 'text-orange-500' : 'text-purple-400'} />
                <span>{tab.label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />}
              </button>
            );
          })}

          {/* Sort toggle */}
          <button
            onClick={() => setSortBy(sortBy === 'latest' ? 'oldest' : 'latest')}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-xl transition-all duration-200 cursor-pointer ${
              mobileFilterOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            } ${
              isLight
                ? 'bg-white/95 text-stone-700'
                : 'bg-[#140f29]/95 text-gray-300'
            }`}
            style={{
              transitionDelay: mobileFilterOpen ? `${categories.length * 50}ms` : '0ms',
            }}
          >
            <ChevronDown size={14} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
            <span>Sort: {sortBy === 'latest' ? 'Newest' : 'Oldest'}</span>
          </button>
        </div>

        {/* FAB Circle Button */}
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className={`w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer active:scale-90 ${
            mobileFilterOpen ? 'rotate-45' : 'rotate-0'
          } ${
            isLight
              ? 'bg-orange-500 text-white shadow-orange-500/30'
              : 'bg-purple-600 text-white shadow-purple-600/40'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* ================= 3. STACKING OVERLAPPING PROJECT CARDS ================= */}
      <div className="flex flex-col gap-0 pb-8 sm:pb-16 relative w-full">
        {filteredProjects.map((project, index) => (
          <HorizontalProjectCard
            key={project.id}
            project={project}
            index={index}
            isLight={isLight}
          />
        ))}
      </div>

    </div>
  );
};

export default Projectpage;
