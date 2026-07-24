import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Star,
  Target,
  Code2,
  Zap,
  ShieldCheck,
  Rocket,
  Sun,
  Moon,
  Sparkles,
  Layers,
  Eye
} from 'lucide-react';

import mainimage from '../assets/mainimage.png';
import mainimagesummer from '../assets/mainimagesummer.png';
import projectAiArena from '../assets/project_ai_arena.png';
import projectEcommerce from '../assets/project_ecommerce.png';
import projectDashboard from '../assets/project_dashboard.png';

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
    stats: { stars: '2.4k', users: '1.2k', uptime: '99.9%' },
    date: 'Apr 2024',
    duration: '3 Months',
    projectType: 'Personal Project',
    caseStudyUrl: 'https://github.com/kaku-coder',
    liveUrl: 'https://github.com/kaku-coder',
    isCaseStudy: true,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-COMMERCE PLATFORM',
    subtitle: 'Full Stack Store',
    category: 'web',
    featured: false,
    description: 'Full-stack e-commerce platform with Stripe payment integration, admin dashboard, inventory management and real-time order tracking.',
    image: projectEcommerce,
    tags: ['MERN', 'Stripe', 'Tailwind', 'Redux', 'Cloudinary'],
    stats: { products: '500+', orders: '2k+', uptime: '99.8%' },
    date: 'Mar 2024',
    duration: '2 Months',
    projectType: 'Team Project',
    caseStudyUrl: 'https://github.com/kaku-coder',
    liveUrl: 'https://github.com/kaku-coder',
    isCaseStudy: false,
  },
  {
    id: 'developer-dashboard',
    title: 'DEVELOPER DASHBOARD',
    subtitle: 'Analytics Hub',
    category: 'tools',
    featured: false,
    description: 'Analytics dashboard to track developer performance, user engagement metrics and real-time system activities with beautiful data visualizations.',
    image: projectDashboard,
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind'],
    metrics: { charts: '20+', dataPoints: '10k+', speed: '<50ms' },
    date: 'Feb 2024',
    duration: '1 Month',
    projectType: 'Personal Project',
    caseStudyUrl: 'https://github.com/kaku-coder',
    liveUrl: 'https://github.com/kaku-coder',
    isCaseStudy: false,
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
    stats: { bugs: '1k+ found', languages: '12+', accuracy: '94%' },
    date: 'Jan 2024',
    duration: '1 Month',
    projectType: 'Open Source',
    caseStudyUrl: 'https://github.com/kaku-coder',
    liveUrl: 'https://github.com/kaku-coder',
    isCaseStudy: false,
  }
];

const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'web', label: 'Web', icon: Code2 },
  { id: 'ai', label: 'AI / ML', icon: Sparkles },
  { id: 'realtime', label: 'Real-time', icon: Zap },
  { id: 'tools', label: 'Tools', icon: Target },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectCard = ({ project, index, isLight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`rounded-2xl sm:rounded-3xl ${isLight ? 'bg-white' : 'bg-[#0c0916]'} p-4 sm:p-5 lg:p-7 flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 items-stretch shadow-2xl relative overflow-hidden group border transition-all duration-500 ${
        project.featured
          ? isLight ? 'border-orange-300 shadow-orange-200/30' : 'border-purple-500/30 shadow-purple-950/40'
          : isLight ? 'border-orange-100 hover:border-orange-300' : 'border-purple-500/10 hover:border-purple-500/40'
      }`}
    >
      {/* Featured Glow */}
      {project.featured && !isLight && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-600/20 transition-all duration-700" />
      )}
      {project.featured && isLight && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-400/20 transition-all duration-700" />
      )}

      {/* Project Preview Image */}
      <div className="lg:w-[45%] w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-auto lg:min-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden relative group/img flex-shrink-0 shadow-inner">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover/img:scale-110 transition-transform duration-700 filter brightness-95"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-orange-50/80' : 'from-[#06040a]/80'} via-transparent to-transparent opacity-70 pointer-events-none`} />

        {/* Hover Overlay with View Button — hidden on mobile, visible on hover for desktop */}
        <div className="absolute inset-0 bg-purple-950/0 group-hover/img:bg-purple-950/40 transition-all duration-500 hidden sm:flex items-center justify-center opacity-0 group-hover/img:opacity-100">
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-purple-600/90 text-white backdrop-blur-sm hover:bg-purple-500 transition-all shadow-lg shadow-purple-950/50 active:scale-95"
              title="View Live"
            >
              <Eye size={18} />
            </a>
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-all shadow-lg active:scale-95"
              title="View Source"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-bold tracking-widest uppercase backdrop-blur-md ${
            isLight
              ? 'bg-orange-500/90 text-white shadow-md shadow-orange-500/30'
              : 'bg-purple-600/90 text-white shadow-md shadow-purple-600/30'
          }`}>
            <Star size={9} className="fill-current" />
            <span>FEATURED</span>
          </div>
        )}
      </div>

      {/* Project Info Section */}
      <div className="lg:w-[55%] w-full flex flex-col justify-between py-0.5 sm:py-1 gap-3 sm:gap-4">

        {/* Top Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase ${
              isLight ? 'text-orange-400' : 'text-purple-400/70'
            }`}>
              {project.subtitle}
            </span>
            <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-cinzel tracking-wide leading-tight transition-colors ${
              isLight
                ? 'text-stone-800 group-hover:text-orange-600'
                : 'text-white group-hover:text-purple-300'
            }`}>
              {project.title}
            </h3>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 sm:p-2.5 rounded-xl border transition-all flex-shrink-0 shadow-md active:scale-95 ${
              isLight
                ? 'bg-orange-50 border-orange-200 text-stone-600 hover:text-orange-500 hover:border-orange-400'
                : 'bg-[#140f29] border-purple-500/20 text-gray-300 hover:text-purple-300 hover:border-purple-400/50'
            }`}
            title="View Live / Source"
          >
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>

        {/* Description */}
        <p className={`text-[11px] sm:text-xs md:text-sm leading-relaxed font-normal ${
          isLight ? 'text-stone-600' : 'text-gray-300'
        }`}>
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 my-0.5 sm:my-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-semibold border shadow-sm transition-all ${
                isLight
                  ? 'bg-orange-50 border-orange-200 text-orange-700'
                  : 'bg-purple-950/70 border-purple-500/20 text-purple-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Metadata & Action */}
        <div className={`flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-2.5 sm:pt-3 border-t mt-auto ${
          isLight ? 'border-orange-100' : 'border-purple-500/15'
        }`}>
          <div className={`flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-[11px] font-medium ${
            isLight ? 'text-stone-500' : 'text-gray-400'
          }`}>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar size={12} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Clock size={12} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <User size={12} className={isLight ? 'text-orange-400' : 'text-purple-400'} />
              <span>{project.projectType}</span>
            </div>
          </div>

          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 transition-all group/link ml-auto ${
              isLight ? 'text-orange-500 hover:text-orange-600' : 'text-purple-400 hover:text-purple-300'
            }`}
          >
            <span>{project.isCaseStudy ? 'Case Study' : 'View Project'}</span>
            <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

const Projectpage = ({ theme, toggleTheme, setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('all');
  const isLight = theme === 'light';

  const filteredProjects = projectsData.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex flex-col gap-6 sm:gap-7 lg:gap-8 pb-12 sm:pb-14 lg:pb-16">

      {/* ================= 1. HEADER SECTION ================= */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full min-h-[180px] sm:min-h-[220px] lg:min-h-[240px] flex items-center justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl border ${
          isLight ? 'bg-orange-50 border-orange-200' : 'bg-[#0c0916] border-purple-500/10'
        }`}
      >
        {/* Background Artwork */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[50%] lg:w-[45%] z-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl">
          <img
            src={mainimage}
            alt="Kitsune Samurai Hero"
            className="tt-dark-img w-full h-full object-cover object-[80%_30%] opacity-30 sm:opacity-40 filter brightness-90 contrast-110"
          />
          <img
            src={mainimagesummer}
            alt="Kitsune Samurai Hero Summer"
            className="tt-light-img absolute inset-0 w-full h-full object-cover object-[80%_30%] opacity-35 sm:opacity-45 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0916] via-[#0c0916]/80 via-40% to-transparent tt-dark-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-50/80 via-40% to-transparent tt-light-overlay" />
        </div>

        {/* Decorative Glow */}
        {!isLight && (
          <div className="absolute -top-20 -left-20 w-40 sm:w-60 h-40 sm:h-60 bg-purple-600/8 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        )}
        {isLight && (
          <div className="absolute -top-20 -left-20 w-40 sm:w-60 h-40 sm:h-60 bg-orange-400/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        )}

        {/* Header Content */}
        <div className="relative z-10 max-w-2xl flex flex-col gap-2 sm:gap-3">
          <span className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase ${
            isLight ? 'text-orange-400 font-sans' : 'text-purple-400 font-japanese'
          }`}>
            {isLight ? 'MY WORK' : 'キツネの道'}
          </span>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase font-cinzel drop-shadow-md ${
            isLight ? 'text-stone-800' : 'text-white'
          }`}>
            PRO<span className="purple-brush-text">JECTS</span>
          </h1>

          <p className={`text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed max-w-xl font-normal mt-0.5 sm:mt-1 ${
            isLight ? 'text-stone-600' : 'text-gray-300'
          }`}>
            Real-world projects where I transform ideas into scalable, functional and impactful solutions.
          </p>

          {/* Project Count Badge */}
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl w-fit mt-1 sm:mt-2 border ${
            isLight
              ? 'bg-orange-100/60 border-orange-200 text-orange-700'
              : 'bg-purple-950/40 border-purple-500/20 text-purple-300'
          }`}>
            <Sparkles size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span className="text-[10px] sm:text-xs font-bold">{projectsData.length} Projects Completed</span>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`relative z-10 self-start p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg active:scale-95 group ${
            isLight ? 'bg-orange-100 border border-orange-200' : 'tt-toggle-btn'
          }`}
          title="Toggle Theme"
        >
          {isLight ? (
            <Sun size={18} className="sm:w-5 sm:h-5 text-orange-500 group-hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon size={18} className="sm:w-5 sm:h-5 text-purple-300 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </motion.div>

      {/* ================= 2. FILTER TABS ================= */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 py-0.5 sm:py-1">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-1 px-1">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? isLight
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-purple-600 text-white shadow-lg shadow-purple-600/40'
                    : isLight
                      ? 'bg-orange-100/60 text-stone-700 hover:bg-orange-200/60 border border-orange-200/50'
                      : 'bg-[#120f20] text-gray-300 hover:bg-[#18132c] border border-purple-900/30'
                }`}
              >
                <Icon size={13} className="sm:w-[14px] sm:h-[14px]" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Back to Home */}
        <button
          onClick={() => setActiveSection && setActiveSection('home')}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-300 self-start sm:self-auto ${
            isLight
              ? 'text-orange-600 hover:bg-orange-100 border border-orange-200/50'
              : 'text-purple-400 hover:bg-purple-900/20 border border-purple-900/30'
          }`}
        >
          <ArrowRight size={13} className="sm:w-[14px] sm:h-[14px] rotate-180" />
          Back to Home
        </button>
      </div>

      {/* ================= 3. PROJECT CARDS ================= */}
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isLight={isLight}
          />
        ))}
      </div>

      {/* ================= 4. BOTTOM PRINCIPLES BAR ================= */}
      <div className={`w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x ${
        isLight
          ? 'bg-white border-orange-100 divide-orange-100'
          : 'bg-[#0c0916] border-purple-500/10 divide-purple-500/15'
      }`}>
        {[
          { icon: Target, title: 'PROBLEM FOCUSED', desc: 'I build solutions that solve real-world problems.' },
          { icon: Code2, title: 'CLEAN CODE', desc: 'Maintainable, scalable and well-structured code.' },
          { icon: Zap, title: 'PERFORMANCE', desc: 'Optimized for speed, efficiency and scalability.' },
          { icon: ShieldCheck, title: 'QUALITY ASSURED', desc: 'Tested, reliable and built with best practices.' },
          { icon: Rocket, title: 'ALWAYS IMPROVING', desc: 'Learning, iterating and building better every day.' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col gap-1.5 sm:gap-2 pt-4 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
              <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border w-max shadow-md ${
                isLight
                  ? 'bg-orange-50 border-orange-200 text-orange-500'
                  : 'bg-[#140f29] border-purple-500/20 text-purple-300'
              }`}>
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <h4 className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mt-0.5 sm:mt-1 ${
                isLight ? 'text-stone-800' : 'text-white'
              }`}>{item.title}</h4>
              <p className={`text-[10px] sm:text-[11px] leading-relaxed ${
                isLight ? 'text-stone-500' : 'text-gray-300'
              }`}>{item.desc}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Projectpage;
