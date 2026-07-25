import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Star,
  Code2,
  Zap,
  Sparkles,
  Layers,
  Eye,
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

const projectsData = [
  {
    id: 'ai-battle-arena',
    title: 'AI BATTLE ARENA',
    subtitle: 'Where Models Clash',
    category: 'ai',
    featured: true,
    description: 'Real-time platform where different AI models compete head-to-head and users vote for the best response. Built with live streaming, scoring algorithms and dynamic battle arenas.',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectCard = ({ project, index, isLight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col md:flex-row gap-5 lg:gap-7 relative overflow-hidden group transition-all duration-500 shadow-2xl border ${
        isLight
          ? 'bg-white border-orange-200 hover:border-orange-400 hover:shadow-[0_12px_35px_rgba(234,88,12,0.15)]'
          : project.featured
            ? 'bg-[#0c0916] border-purple-500/40 shadow-[0_8px_30px_rgba(168,85,247,0.2)] hover:border-purple-400'
            : 'bg-[#0c0916] border-purple-900/30 hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]'
      }`}
    >
      {/* Top Right External Link Button */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 sm:p-3 rounded-xl border transition-all z-20 shadow-md active:scale-95 ${
          isLight
            ? 'bg-orange-50 border-orange-200 text-stone-700 hover:text-orange-600 hover:border-orange-300'
            : 'bg-[#140f29] border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/40'
        }`}
        title="Open Live Demo"
      >
        <ExternalLink size={17} />
      </a>

      {/* Left Side: Preview Image Container */}
      <div className="w-full md:w-[42%] lg:w-[38%] h-[200px] sm:h-[230px] md:h-auto min-h-[210px] rounded-xl sm:rounded-2xl overflow-hidden relative group/img flex-shrink-0 border border-purple-900/20 shadow-inner">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover/img:scale-108 transition-transform duration-700 filter brightness-95"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-orange-50/80' : 'from-[#0c0916]/80'} via-transparent to-transparent opacity-70 pointer-events-none`} />

        {/* Hover Action Overlay Buttons */}
        <div className="absolute inset-0 bg-purple-950/0 group-hover/img:bg-purple-950/50 transition-all duration-500 hidden sm:flex items-center justify-center opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px]">
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-purple-600/90 text-white backdrop-blur-md hover:bg-purple-500 transition-all shadow-lg active:scale-95"
              title="View Live"
            >
              <Eye size={18} />
            </a>
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all shadow-lg active:scale-95"
              title="View Source"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>

        {/* Featured Floating Badge */}
        {project.featured && (
          <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase backdrop-blur-md shadow-md ${
            isLight
              ? 'bg-orange-500 text-white shadow-orange-500/30'
              : 'bg-purple-600 text-white shadow-purple-600/40 border border-purple-400/40'
          }`}>
            <Star size={11} className="fill-current" />
            <span>FEATURED</span>
          </div>
        )}
      </div>

      {/* Right Side: Details & Content */}
      <div className="w-full md:w-[58%] lg:w-[62%] flex flex-col justify-between py-1 gap-3 sm:gap-4 pr-6 md:pr-10">
        
        <div className="flex flex-col gap-1.5">
          <span className={`text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase ${
            isLight ? 'text-orange-500' : 'text-purple-400/80'
          }`}>
            {project.subtitle}
          </span>

          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black italic tracking-wide transition-colors ${
            isLight ? 'text-stone-900 group-hover:text-orange-600' : 'text-white group-hover:text-purple-300'
          }`}>
            {project.title}
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed font-normal max-w-xl ${
            isLight ? 'text-stone-600' : 'text-gray-300'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 my-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                isLight
                  ? 'bg-orange-50 border-orange-200 text-orange-800 hover:border-orange-300'
                  : 'bg-[#140f29] border-purple-500/20 text-purple-300 hover:border-purple-500/40'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Metadata & Action Link */}
        <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t mt-auto ${
          isLight ? 'border-orange-100' : 'border-purple-500/15'
        }`}>
          <div className={`flex items-center gap-3.5 text-xs font-medium ${
            isLight ? 'text-stone-500' : 'text-gray-400'
          }`}>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User size={14} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.projectType}</span>
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all group/link cursor-pointer ${
              isLight ? 'text-orange-600 hover:text-orange-700' : 'text-purple-400 hover:text-purple-300'
            }`}
          >
            <span>View Details</span>
            <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

const Projectpage = ({ theme, toggleTheme, setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const filteredProjects = projectsData.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-6 sm:gap-8 select-none">

      {/* Theme Toggle Floating Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-[9990] w-10 h-10 rounded-full tt-toggle-btn flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer"
        title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      >
        {theme === 'dark' ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x1="12" y2="3" />
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
            
            <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-0.5 font-japanese">
              <span>プロジェクト</span>
            </div>

            {/* Title - Matching About Page Style */}
            <div className="flex flex-col select-none">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase font-cinzel leading-none drop-shadow-md">
                PRO<span className="purple-brush-text font-brush italic">JECTS</span>
              </h1>

              {/* Purple Brush Underline Graphic */}
              <div className="relative inline-block mt-1">
                <svg className="w-36 sm:w-44 h-3 text-purple-500" viewBox="0 0 160 12" fill="none" preserveAspectRatio="none">
                  <path d="M 2 8 Q 40 2, 158 5 C 120 11, 40 12, 2 8 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg mt-1">
              Every project is a step forward — built with curiosity, tested with patience, and driven by the desire to create something that matters.
            </p>

            {/* Japanese Quote */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
              <p className="text-purple-400/80 text-[11px] font-japanese tracking-wider">
                千里の道も一歩から
              </p>
              <span className="text-gray-500 text-[10px] font-normal">— A journey of a thousand miles begins with a single step</span>
            </div>

          </div>

        </div>
      </motion.div>

      {/* ================= 2. FILTER & SORT CONTROL BAR ================= */}
      <div className="w-full rounded-2xl bg-[#0c0916] border border-purple-900/30 p-2 sm:p-2.5 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
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
                    ? 'bg-[#1a0f35] border border-purple-500/40 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#140f29]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-purple-400' : 'text-gray-400'} />
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#140f29] border border-purple-500/20 text-gray-300 text-xs font-semibold hover:border-purple-500/40 transition-all cursor-pointer"
            >
              <span className="capitalize">{sortBy}</span>
              <ChevronDown size={13} className="text-purple-400" />
            </button>
          </div>
        </div>

      </div>

      {/* ================= 3. PROJECT CARDS LIST ================= */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

    </div>
  );
};

export default Projectpage;
