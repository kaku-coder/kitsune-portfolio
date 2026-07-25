import React, { useState, useRef } from 'react';
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
import projectEcommerce from '../assets/project_ecommerce.png';
import projectDashboard from '../assets/project_dashboard.png';
import ImagePetals from '../components/ImagePetals';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
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
    liveUrl: 'https://github.com/kaku-coder',
    caseStudyUrl: 'https://github.com/kaku-coder',
  },
  {
    id: 'e-commerce-platform',
    title: 'E-COMMERCE PLATFORM',
    subtitle: 'Full Stack Store',
    category: 'web',
    featured: false,
    description: 'Full-stack e-commerce platform with payment integration, admin dashboard and order management.',
    image: projectEcommerce,
    tags: ['MERN', 'Stripe', 'Tailwind', 'Redux', 'Cloudinary'],
    date: 'Mar 2024',
    duration: '2 Months',
    projectType: 'Team Project',
    liveUrl: 'https://github.com/kaku-coder',
    caseStudyUrl: 'https://github.com/kaku-coder',
  },
  {
    id: 'developer-dashboard',
    title: 'DEVELOPER DASHBOARD',
    subtitle: 'Analytics Hub',
    category: 'tools',
    featured: false,
    description: 'Analytics dashboard to track performance, users and real-time activities.',
    image: projectDashboard,
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind'],
    date: 'Feb 2024',
    duration: '1 Month',
    projectType: 'Personal Project',
    liveUrl: 'https://github.com/kaku-coder',
    caseStudyUrl: 'https://github.com/kaku-coder',
  },
  {
    id: 'realtime-code-reviewer',
    title: 'CODE REVIEWER',
    subtitle: 'AI-Powered Analysis',
    category: 'realtime',
    featured: false,
    description: 'Automated static code analysis and AI bug detection tool with real-time feedback stream and inline suggestions.',
    image: projectAiArena,
    tags: ['Python', 'FastAPI', 'OpenAI', 'React', 'Docker'],
    date: 'Jan 2024',
    duration: '1 Month',
    projectType: 'Open Source',
    liveUrl: 'https://github.com/kaku-coder',
    caseStudyUrl: 'https://github.com/kaku-coder',
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: LayoutGrid },
  { id: 'web', label: 'Web Applications', icon: Globe },
  { id: 'ai', label: 'AI / ML', icon: Brain },
  { id: 'realtime', label: 'Real-time', icon: Zap },
  { id: 'tools', label: 'Tools & Utilities', icon: Wrench },
];

// Sleek & Perfected Laptop Device Mockup Component
const LaptopMockup = ({ image, alt, isLight }) => (
  <div className="relative w-full max-w-[580px] mx-auto group/laptop transition-transform duration-500 hover:scale-[1.02]">
    {/* Metallic Display Lid Frame */}
    <div className={`relative rounded-t-[18px] sm:rounded-t-[22px] p-2.5 sm:p-3.5 pb-2 border border-b-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all ${
      isLight ? 'bg-stone-800 border-stone-700' : 'bg-[#181426] border-purple-500/30'
    }`}>
      {/* Top Camera Dot */}
      <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-[#08060f]" />
      </div>

      {/* Screen Frame Display */}
      <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] bg-[#0c0916] border border-purple-900/40 shadow-inner">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top filter brightness-95 group-hover/laptop:brightness-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>

    {/* Sleek Laptop Base Hinge (Perfectly 100% Width Fit) */}
    <div className={`w-full h-3.5 sm:h-4.5 rounded-b-[18px] sm:rounded-b-[22px] border-t flex items-center justify-center shadow-2xl relative ${
      isLight
        ? 'bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900 border-stone-600'
        : 'bg-gradient-to-b from-[#241f36] via-[#161224] to-[#0c0916] border-purple-500/30'
    }`}>
      <div className="w-16 sm:w-20 h-1 bg-[#080611] rounded-full opacity-80" />
      <span className="absolute text-[8px] font-mono text-gray-400/60 uppercase tracking-widest pointer-events-none hidden sm:block">
        MacBook Pro
      </span>
    </div>
  </div>
);

// Stacking Horizontal Project Card Component (Sticky Scroll Stacking Cards Effect)
const HorizontalProjectCard = ({ project, index, isLight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  // Top sticky offset calculation so each card stacks cleanly over the previous card
  const stickyTopOffset = 100 + index * 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        top: `${stickyTopOffset}px`,
        zIndex: index + 10
      }}
      className={`sticky w-full rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-500 border grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${
        isLight
          ? 'bg-[#fff7ed] border-orange-200 shadow-orange-200/40 hover:border-orange-300'
          : project.featured
            ? 'bg-[#0c0916] border-purple-500/40 shadow-[0_20px_50px_rgba(168,85,247,0.25)] hover:border-purple-400'
            : 'bg-[#0a0714] border-purple-900/35 shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:border-purple-500/40'
      }`}
    >
      {/* Background Japanese Kanji Watermark for Featured Project */}
      {project.featured && (
        <div className={`absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 text-[160px] sm:text-[220px] lg:text-[280px] font-serif font-black pointer-events-none select-none z-0 leading-none ${
          isLight ? 'text-orange-500/5' : 'text-purple-500/10'
        }`}>
          道
        </div>
      )}

      {/* Left Column: Details */}
      <div className="lg:col-span-6 flex flex-col justify-between gap-5 relative z-10">
        <div className="flex flex-col gap-2">
          
          {/* Badge Tag */}
          {project.featured ? (
            <div className={`flex items-center gap-2 text-xs font-black tracking-widest uppercase ${
              isLight ? 'text-orange-500' : 'text-purple-400'
            }`}>
              <Star size={14} className="fill-current" />
              <span>FEATURED PROJECT</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-orange-500' : 'bg-purple-500'}`} />
              <span className={`text-xs font-extrabold tracking-widest uppercase ${
                isLight ? 'text-orange-500' : 'text-purple-400/90'
              }`}>
                {project.subtitle}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-wide uppercase ${
            isLight ? 'text-stone-900' : 'text-white'
          }`}>
            {project.title}
          </h2>

          {/* Description */}
          <p className={`text-xs sm:text-sm leading-relaxed font-normal max-w-xl ${
            isLight ? 'text-stone-600' : 'text-gray-300'
          }`}>
            {project.description}
          </p>

        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                isLight
                  ? 'bg-orange-50 border-orange-200 text-orange-800'
                  : 'bg-[#140f29] border-purple-500/25 text-purple-300 hover:border-purple-500/50'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Metadata */}
        <div className={`flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium pt-2 ${
          isLight ? 'text-stone-500' : 'text-gray-400'
        }`}>
          <div className="flex items-center gap-1.5">
            <Calendar size={15} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={15} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User size={15} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
            <span>{project.projectType}</span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer ${
              isLight
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/40'
            }`}
          >
            <span>Live Demo</span>
            <ArrowRight size={14} />
          </a>

          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border transition-all active:scale-95 cursor-pointer ${
              isLight
                ? 'bg-orange-50 border-orange-200 text-stone-700 hover:bg-orange-100'
                : 'bg-[#140f29] border-purple-500/30 text-gray-300 hover:bg-purple-900/40 hover:text-white'
            }`}
          >
            <span>View Code</span>
            <GithubIcon size={14} />
          </a>
        </div>

      </div>

      {/* Right Column: Refined Laptop Mockup Frame */}
      <div className="lg:col-span-6 relative z-10 w-full">
        <LaptopMockup image={project.image} alt={project.title} isLight={isLight} />
      </div>

    </motion.div>
  );
};

const Projectpage = ({ theme, toggleTheme, setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const isLight = theme === 'light';

  const filteredProjects = projectsData.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-6 sm:gap-8 select-none relative">

      {/* Theme Toggle Floating Button */}
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

      {/* ================= 1. HERO HEADER SECTION ================= */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full min-h-[340px] sm:min-h-[370px] flex items-center mb-2 overflow-hidden rounded-3xl bg-[#0a0714] shadow-2xl"
      >
        {/* Background Samurai Kitsune Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={projectpageImg}
            alt="Kitsune Samurai Avatar"
            className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-110 contrast-105"
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

          <div className="w-9 h-9 rounded-lg border border-purple-500/40 bg-purple-950/60 flex items-center justify-center text-xs font-serif text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            鬼
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6 px-4 sm:px-8">
          
          <div className="lg:col-span-8 flex flex-col items-start gap-4">
            
            {/* Japanese Subtitle Tag */}
            <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-0.5 font-japanese">
              <span>キツネの道</span>
            </div>

            {/* Stylized Brush Header Title */}
            <div className="flex flex-col select-none">
              <div className="flex items-center gap-2">
                <span className="font-brush text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-white leading-tight">
                  PRO
                </span>
                <span className="font-brush text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wider purple-brush-text italic leading-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                  JECTS
                </span>
              </div>

              {/* Purple Brush Underline Graphic */}
              <div className="relative inline-block mt-0.5">
                <svg className="w-48 sm:w-64 h-3.5 text-purple-500" viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                  <path d="M 2 10 Q 50 2, 198 6 C 150 12, 50 14, 2 10 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg mt-1">
              A collection of real-world projects where I transform ideas into functional, scalable and <span className={isLight ? 'text-orange-600 font-bold' : 'text-purple-400 font-bold'}>impactful</span> solutions.
            </p>

          </div>

        </div>
      </motion.div>

      {/* ================= 2. FILTER & SORT CONTROL BAR ================= */}
      <div className={`sticky top-4 z-[990] w-full rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border backdrop-blur-xl ${
        isLight
          ? 'bg-white/90 border-orange-200'
          : 'bg-[#0c0916]/90 border-purple-900/40'
      }`}>
        
        {/* Left: Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
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
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 self-end sm:self-auto px-2">
          <span>Sort by :</span>
          <div className="relative">
            <button
              onClick={() => setSortBy(sortBy === 'latest' ? 'oldest' : 'latest')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isLight
                  ? 'bg-orange-50 border-orange-200 text-stone-800'
                  : 'bg-[#140f29] border-purple-500/20 text-gray-300 hover:border-purple-500/40'
              }`}
            >
              <span className="capitalize">{sortBy}</span>
              <ChevronDown size={13} className={isLight ? 'text-orange-500' : 'text-purple-400'} />
            </button>
          </div>
        </div>

      </div>

      {/* ================= 3. STACKING OVERLAPPING PROJECT CARDS ================= */}
      <div className="flex flex-col gap-8 sm:gap-12 pb-16 relative">
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
