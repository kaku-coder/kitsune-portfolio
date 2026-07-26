import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FileText,
  Search,
  Sparkles,
  BookOpen,
  Clock,
  ArrowRight,
  Mail,
  CheckCircle2,
  X,
  Layers,
  Code2,
  Brain,
  Server,
  Wrench,
  Compass,
  Calendar,
  User,
  ChevronRight,
  BarChart3,
  Terminal
} from 'lucide-react';

import projectMainimage from '../assets/projectMainimage.png';
import projectpagesummer from '../assets/projectpagesummer.png';
import project_ai_arena from '../assets/project_ai_arena.png';
import aiArenaBlogImage from '../assets/image.png';
import project_dashboard from '../assets/project_dashboard.png';
import project_ecommerce from '../assets/project_ecommerce.png';
import cardimage1 from '../assets/cardimage1.jpg';
import cardimage1summer from '../assets/cardimage1summer.png';
import logoImg from '../assets/logo.png';
import logosummer from '../assets/logosummer.png';

import ImagePetals from '../components/ImagePetals';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import CounterAnimation from '../components/CounterAnimation';
import StaggerCards from '../components/StaggerCards';

const Blogpage = ({ theme, toggleTheme, setActiveSection }) => {
  const isLight = theme === 'light';
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    'All',
    'AI',
    'Tools',
    'Backend',
    'System Design',
  ];

  // Actual Portfolio Projects as Blog Case Studies
  const articlesData = [
    {
      id: 'ai-arena',
      title: 'How I Built AI Battle Arena',
      prefix: 'How I Built',
      subtitle: 'Real-time AI LLM Benchmarking Platform',
      description:
        'The complete story of building a real-time AI battle platform with LangChain, OpenAI, Gemini, and modern web technologies. Streaming tokens live and scoring win rates with ELO ranking.',
      category: 'AI',
      readTime: '8 min read',
      date: 'July 12, 2026',
      featured: true,
      image: aiArenaBlogImage,
      content: `
### Building a Real-time AI Battle Platform

Evaluating Large Language Models (LLMs) requires real-time side-by-side comparison. In this blog article, I break down how **AI Battle Arena** was engineered from scratch.

#### Key Architectural Highlights:
1. **Server-Sent Events & Streaming**: Leveraging SSE for latency-free token streaming directly into React components.
2. **LangChain Multi-Agent Router**: Routing prompt payloads concurrently to OpenAI GPT-4, Google Gemini Pro, and Claude 3.5.
3. **Elo Rating Engine**: Implementing an automated chess-style ELO scoring algorithm to evaluate response win rates.

\`\`\`javascript
// Streaming LLM Responses Live
const responseStream = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt }],
  stream: true,
});

for await (const chunk of responseStream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
\`\`\`

### ELO Rating System

Inspired by chess rankings, each model gets an ELO score based on head-to-head battle outcomes:

\`\`\`javascript
function calculateElo(winnerElo, loserElo, k = 32) {
  const expectedA = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  const expectedB = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));
  return {
    newWinnerElo: Math.round(winnerElo + k * (1 - expectedA)),
    newLoserElo: Math.round(loserElo + k * (0 - expectedB)),
  };
}
\`\`\`

### Tech Stack
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: Express.js + Server-Sent Events
- **AI**: LangChain + OpenAI GPT-4o + Google Gemini Pro
- **Database**: MongoDB (battles, ratings, prompts)
      `,
    },
    {
      id: 'vscode-setup',
      title: 'My VS Code Setup That I Use',
      prefix: 'Dev Tools',
      subtitle: '70+ Extensions & Productivity Hacks',
      description:
        'A deep dive into my personal VS Code configuration — theme, extensions, keybindings, and settings that make me 10x more productive as a full-stack developer.',
      category: 'Tools',
      readTime: '6 min read',
      date: 'July 18, 2026',
      featured: false,
      image: project_dashboard,
      content: `
### Why This Setup Matters

After 2+ years of daily VS Code usage, I've refined my setup to eliminate friction. Every extension and setting has a purpose.

### Theme & Appearance

I use **Default High Contrast** theme with a heavily customized color palette — warm amber cursor (#f7cd62), muted pastels for syntax, and a near-black background (#111111). My terminal uses **MesloLGS NF** font for a clean, ligature-friendly experience.

\`\`\`jsonc
{
  "workbench.colorTheme": "Default High Contrast",
  "editor.cursorForeground": "#f7cd62",
  "editor.cursorBlinking": "phase",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorWidth": 2,
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.fontSize": 12
}
\`\`\`

### Essential Extensions (70+)

**Theme & Icons**
- A File Icon — Beautiful file type icons
- Material Icon Theme — Backup icon theme
- CodeSnap — Code screenshots for social media

**Productivity**
- Prettier — Auto-format on save
- ES7+ React Snippets — RAFCE and React shortcuts
- Auto Close Tag — Auto-close HTML/JSX tags
- Error Lens — Show errors inline
- Better Comments — Color-coded priorities
- Code Runner — Run code with one click
- Todo Tree — Track TODO/FIXME comments

**Navigation & Git**
- GitLens — Blame annotations, line history
- Git Graph — Visual commit graph
- Project Manager — Switch projects instantly

**AI & Code Completion**
- Continue — Open-source AI code assistant
- GitHub Copilot — AI pair programming

**DevOps & Backend**
- Docker — Manage containers from VS Code
- Live Server — Local dev server with hot reload
- Postman — API testing inside VS Code

### Key Editor Settings

\`\`\`jsonc
{
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 500,
  "editor.bracketPairColorization.enabled": true
}
\`\`\`

### Productivity Tips
1. Format on Save — Never think about formatting
2. Auto Save (500ms) — No more Ctrl+S
3. Word Wrap On — No horizontal scrolling
4. Error Lens — See errors without hovering
      `,
    },
    {
      id: 'ecommerce-platform',
      title: 'Modern E-Commerce Platform Architecture',
      prefix: 'Full Stack',
      subtitle: 'Stripe Payments, Redux & Optimised Queries',
      description:
        'Deep dive into building a full-stack e-commerce store with Stripe payment webhooks, custom cart state, and fast MongoDB index queries.',
      category: 'Backend',
      readTime: '7 min read',
      date: 'June 28, 2026',
      featured: false,
      image: project_ecommerce,
      comingSoon: true,
      content: '',
    },
    {
      id: 'dev-dashboard',
      title: 'Dev Pulse: Real-Time Analytics Dashboard',
      prefix: 'System Design',
      subtitle: 'WebSocket Streaming & Live Performance Charts',
      description:
        'How I designed and engineered a real-time developer metrics dashboard using WebSockets, Chart.js, and Node.js microservices.',
      category: 'System Design',
      readTime: '6 min read',
      date: 'Coming Soon',
      featured: false,
      image: project_dashboard,
      comingSoon: true,
      content: '',
    },
    {
      id: 'ai-langchain-agents',
      title: 'Building AI Agents with LangChain',
      prefix: 'AI',
      subtitle: 'Autonomous Tool Use & Memory Retrieval',
      description:
        'A practical guide to building AI agents that can think, act, and remember using LangChain and vector databases.',
      category: 'AI',
      readTime: '10 min read',
      date: 'Coming Soon',
      featured: false,
      image: project_ai_arena,
      comingSoon: true,
      content: '',
    },
  ];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle =
    articlesData.find((art) => art.featured) || articlesData[0];
  const gridArticles = filteredArticles.filter((art) => !art.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-8 pt-16 sm:pt-8 flex flex-col gap-6 sm:gap-10 select-none relative box-border max-w-full overflow-x-hidden">

      {/* Floating Theme Toggle Button (Desktop Only - Mobile Has Header Bar) */}
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
        className="relative w-full min-h-[180px] sm:min-h-[260px] lg:min-h-[340px] flex items-center mb-1 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-[#0a0714] shadow-2xl max-w-full"
      >
        {/* Background Samurai Kitsune Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={projectMainimage}
            alt="Kitsune Samurai Avatar"
            className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[80%_center] filter brightness-110 contrast-105"
          />
          <img
            src={projectpagesummer}
            alt="Kitsune Samurai Avatar Summer"
            className="tt-light-img absolute inset-0 w-full h-full object-cover object-[85%_center] filter brightness-110 contrast-105"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0714] via-[#0a0714]/85 via-45% to-transparent tt-dark-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0714] via-transparent to-[#0a0714]/30 tt-dark-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] via-[#fff7ed]/85 via-45% to-transparent tt-light-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff7ed] via-transparent to-[#fff7ed]/30 tt-light-overlay" />
          <ImagePetals theme={theme} />
        </div>

        {/* Far Right Vertical Japanese Calligraphy */}
        <div className="absolute right-6 top-8 bottom-8 z-10 hidden lg:flex flex-col items-end justify-between pointer-events-none select-none">
          <div className="text-purple-400/80 text-xs font-japanese tracking-[0.3em] [writing-mode:vertical-rl] leading-relaxed drop-shadow">
            知識は力なり。
          </div>

          <div className="w-9 h-9 rounded-lg bg-purple-950/60 flex items-center justify-center text-xs font-serif text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            知
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-center py-6 px-4 sm:px-8 pt-8 sm:pt-6 max-w-full">
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 max-w-full sm:max-w-2xl">
            
            {/* Tag */}
            <ScrollReveal y={20}>
              <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 font-japanese">
                <span>• BLOG</span>
              </div>
            </ScrollReveal>

            {/* Stylized Title */}
            <div className="flex flex-col select-none w-full max-w-full">
              <div className="flex items-baseline gap-2 flex-wrap relative max-w-full">
                <TextReveal
                  as="h1"
                  className={`font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-none ${
                    isLight ? 'text-stone-900' : 'text-white'
                  }`}
                  stagger={0.04}
                >
                  KNOWLEDGE
                </TextReveal>
                <div className="flex items-center gap-1.5">
                  <TextReveal
                    as="h1"
                    className="purple-brush-text font-brush italic text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-none"
                    stagger={0.04}
                    delay={0.12}
                  >
                    ARCHIVE
                  </TextReveal>
                  {/* Ninja Shuriken Star Graphic */}
                  <svg className={`w-4 h-4 sm:w-6 sm:h-6 -mt-1 ${
                    isLight ? 'text-orange-500' : 'text-purple-400'
                  }`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                    <circle cx="12" cy="12" r="2" fill={isLight ? '#fff7ed' : '#0a0714'} />
                  </svg>
                </div>
              </div>

              {/* Brush Underline Graphic */}
              <div className="relative inline-block mt-1 max-w-full">
                <svg className={`w-40 sm:w-64 h-2.5 sm:h-3 max-w-full ${
                  isLight ? 'text-orange-500' : 'text-purple-500'
                }`} viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                  <path d="M 2 10 Q 50 2, 198 6 C 150 12, 50 14, 2 10 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <ScrollReveal y={20} delay={0.3}>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg mt-1">
                Thoughts, tutorials, and lessons from my journey of <span className={isLight ? 'text-orange-600 font-bold' : 'text-purple-400 font-bold'}>building</span> and learning.
              </p>
            </ScrollReveal>

            {/* Stats Pills Row */}
            <ScrollReveal y={20} delay={0.4}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-6 mt-1 max-w-full">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <FileText size={13} />
                  </div>
                  <span><strong className="text-xs sm:text-sm">25+</strong> Articles</span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <BookOpen size={13} />
                  </div>
                  <span><strong className="text-xs sm:text-sm">50K+</strong> Words</span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <Sparkles size={13} />
                  </div>
                  <span><strong className="text-xs sm:text-sm">7</strong> Categories</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </motion.div>

      {/* ================= 2. CATEGORY FILTER TABS & SEARCH BAR ================= */}
      <ScrollReveal>
        <div className={`w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:p-3 lg:p-4 flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3 lg:gap-4 shadow-xl ${
          isLight ? 'bg-white shadow-orange-200/30' : 'bg-[#0c0916] shadow-purple-950/20'
        }`}>
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full w-full md:w-auto pb-1 md:pb-0 scrollbar-none flex-nowrap">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    active
                      ? isLight
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                        : 'bg-purple-600 text-white shadow-lg shadow-purple-600/40 scale-105'
                      : isLight
                        ? 'bg-orange-50/60 text-stone-700 hover:bg-orange-100'
                        : 'bg-[#140f29] text-gray-300 hover:bg-[#1a1435]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              isLight ? 'text-stone-400' : 'text-purple-400/80'
            }`} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-8 sm:pl-9 pr-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium outline-none border transition-all ${
                isLight
                  ? 'bg-orange-50/50 border-orange-200 text-stone-900 focus:border-orange-400 placeholder:text-stone-400'
                  : 'bg-[#140f29] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs opacity-60 hover:opacity-100 cursor-pointer"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* ================= 3. TWO-COLUMN LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
        
        {/* LEFT COLUMN: FEATURED STORY & LATEST ARTICLES (8 COLS) */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
          
          {/* FEATURED STORY HERO CARD */}
          <ScrollReveal>
            <div
              onClick={() => setSelectedArticle(featuredArticle)}
              className={`w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 relative overflow-hidden group cursor-pointer transition-all duration-500 shadow-2xl ${
                isLight
                  ? 'bg-white shadow-orange-200/40'
                  : 'bg-[#0c0916] shadow-[0_20px_50px_rgba(168,85,247,0.2)] hover:shadow-[0_25px_60px_rgba(168,85,247,0.35)]'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center z-10 relative">
                
                {/* Left Content Details */}
                <div className="md:col-span-7 flex flex-col gap-2 sm:gap-3">
                  
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-black tracking-widest uppercase ${
                      isLight ? 'bg-orange-100 text-orange-700' : 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                    }`}>
                      FEATURED
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs font-medium text-purple-400">
                    {featuredArticle.prefix}
                  </span>

                  <h2 className={`text-base sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug transition-colors ${
                    isLight ? 'text-stone-900 group-hover:text-orange-600' : 'text-white group-hover:text-purple-400'
                  }`}>
                    {featuredArticle.title}
                  </h2>

                  <p className={`text-[11px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal ${
                    isLight ? 'text-stone-600' : 'text-gray-300'
                  }`}>
                    {featuredArticle.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 sm:pt-3">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium opacity-60">
                      <span>{featuredArticle.readTime}</span>
                      <span>•</span>
                      <span className="hidden sm:inline">{featuredArticle.category}</span>
                      <span>•</span>
                      <span>{featuredArticle.date}</span>
                    </div>

                    <button className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isLight ? 'bg-orange-50 text-orange-700 hover:bg-orange-100' : 'bg-purple-950/60 text-purple-300 hover:bg-purple-900/60'
                    }`}>
                      <span>Read</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                {/* Right Image — Desktop only */}
                <div className="hidden md:block md:col-span-5 relative w-full h-44 sm:h-52 lg:h-60 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* LATEST ARTICLES HEADER & GRID */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                </svg>
                <h2 className={`text-[11px] sm:text-xs md:text-sm font-black tracking-widest uppercase ${
                  isLight ? 'text-stone-800' : 'text-purple-300'
                }`}>
                  LATEST ARTICLES
                </h2>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-purple-400 cursor-pointer hover:underline">
                View all ({filteredArticles.length}) →
              </span>
            </div>

            {/* Articles Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
            {gridArticles.length > 0 ? (
              <StaggerCards className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4" stagger={0.08}>
                {gridArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => !art.comingSoon && setSelectedArticle(art)}
                    className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 group shadow-lg ${
                      art.comingSoon
                        ? 'cursor-default opacity-60'
                        : 'cursor-pointer hover:-translate-y-1'
                    } ${
                      isLight
                        ? `bg-white ${!art.comingSoon ? 'hover:shadow-orange-200/40' : ''}`
                        : `bg-[#0c0916] ${!art.comingSoon ? 'hover:shadow-[0_12px_35px_rgba(168,85,247,0.18)]' : ''}`
                    }`}
                  >
                    <div>
                      {/* Category Badge + Coming Soon */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className={`px-2 sm:px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                      isLight ? 'bg-orange-100 text-orange-700' : 'bg-purple-950/80 text-purple-300'
                        }`}>
                          {art.category}
                        </span>
                        {art.comingSoon && (
                          <span className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[7px] sm:text-[8px] font-bold ${
                            isLight ? 'bg-stone-100 text-stone-400' : 'bg-gray-800 text-gray-500'
                          }`}>
                            SOON
                          </span>
                        )}
                      </div>

                      {/* Image — Hidden on mobile, show on sm+ */}
                      <div className="hidden sm:block w-full h-28 md:h-32 rounded-xl overflow-hidden mb-3 relative">
                        <img
                          src={art.image}
                          alt={art.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ${!art.comingSoon ? 'group-hover:scale-105' : ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0916]/80 via-transparent to-transparent" />
                      </div>

                      {/* Title */}
                      <h3 className={`text-[11px] sm:text-xs md:text-sm font-extrabold leading-snug mb-1 sm:mb-1.5 transition-colors line-clamp-2 ${
                        art.comingSoon
                          ? isLight ? 'text-stone-500' : 'text-gray-500'
                          : isLight ? 'text-stone-900 group-hover:text-orange-600' : 'text-white group-hover:text-purple-400'
                      }`}>
                        {art.title}
                      </h3>

                      {/* Snippet */}
                      <p className={`text-[10px] sm:text-[11px] leading-relaxed line-clamp-2 mb-2 sm:mb-3 ${
                        art.comingSoon
                          ? isLight ? 'text-stone-400' : 'text-gray-600'
                          : isLight ? 'text-stone-500' : 'text-gray-400'
                      }`}>
                        {art.description}
                      </p>
                    </div>

                    {/* Bottom Meta Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-purple-900/20 text-[9px] sm:text-[10.5px] font-semibold text-gray-400">
                      <span>{art.comingSoon ? 'Coming Soon' : art.readTime}</span>
                      {!art.comingSoon && (
                        <ArrowRight size={11} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                ))}
              </StaggerCards>
            ) : (
              <div className="text-center py-8 sm:py-12 opacity-60 text-[11px] sm:text-xs font-medium">
                No articles found matching "{searchQuery}".
              </div>
            )}

            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className={`w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer mt-1 sm:mt-2 text-center ${
                isLight ? 'bg-orange-50 text-orange-700 hover:bg-orange-100' : 'bg-[#140f29] text-purple-300 hover:bg-[#1a1435]'
              }`}
            >
              Explore More Articles →
            </button>
          </div>

        </div>

        {/* RIGHT SIDEBAR COLUMN (4 COLS) — Hidden on mobile, show on sm+ */}
        <div className="hidden sm:flex lg:col-span-4 flex-col gap-4 sm:gap-5 lg:gap-6 w-full">
          
          {/* SIDEBAR CARD 1: ARTICLES STATS */}
          <ScrollReveal>
            <div className={`rounded-3xl p-5 shadow-xl flex flex-col gap-4 ${
              isLight ? 'bg-white' : 'bg-[#0c0916]'
            }`}>
              <div className="flex items-center gap-2 border-b border-purple-900/20 pb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <TextReveal
                  as="h3"
                  className={`text-xs font-extrabold tracking-widest uppercase ${
                    isLight ? 'text-stone-800' : 'text-purple-300'
                  }`}
                  stagger={0.03}
                >
                  ARTICLES STATS •
                </TextReveal>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-2.5 opacity-80">
                    <FileText size={15} className="text-purple-400" /> Total Articles
                  </span>
                  <span className={`font-extrabold ${isLight ? 'text-stone-900' : 'text-white'}`}>25+</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-2.5 opacity-80">
                    <BookOpen size={15} className="text-purple-400" /> Total Words
                  </span>
                  <span className={`font-extrabold ${isLight ? 'text-stone-900' : 'text-white'}`}>50K+</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-2.5 opacity-80">
                    <Clock size={15} className="text-purple-400" /> Reading Time
                  </span>
                  <span className={`font-extrabold ${isLight ? 'text-stone-900' : 'text-white'}`}>12+ Hours</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="flex items-center gap-2.5 opacity-80">
                    <Sparkles size={15} className="text-purple-400" /> Categories
                  </span>
                  <span className={`font-extrabold ${isLight ? 'text-stone-900' : 'text-white'}`}>7</span>
                </div>
              </div>

              {/* Decorative Purple Accent Line */}
              <div className="w-full pt-2 flex items-center justify-center">
                <svg className="w-24 h-2 text-purple-500 opacity-60" viewBox="0 0 100 8" fill="none">
                  <path d="M0 4H45L50 0L55 8L60 4H100" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* SIDEBAR CARD 2: LEARNING TIMELINE */}
          <ScrollReveal delay={0.1}>
            <div className={`rounded-3xl p-5 shadow-xl flex flex-col gap-4 overflow-hidden ${
              isLight ? 'bg-white' : 'bg-[#0c0916]'
            }`}>
              <div className="flex items-center gap-2 border-b border-purple-900/20 pb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <TextReveal
                  as="h3"
                  className={`text-xs font-extrabold tracking-widest uppercase ${
                    isLight ? 'text-stone-800' : 'text-purple-300'
                  }`}
                  stagger={0.03}
                >
                  LEARNING TIMELINE •
                </TextReveal>
              </div>

              <div className="flex flex-col gap-4 relative pl-3 border-l-2 border-purple-900/40">
                <div className="relative">
                  <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span className="text-xs font-black text-purple-400">2026</span>
                  <p className="text-[11px] opacity-70 mt-0.5 leading-snug">• AI & Machine Learning<br />• System Design<br />• Cloud Architecture</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500/60" />
                  <span className="text-xs font-black text-purple-400">2025</span>
                  <p className="text-[11px] opacity-70 mt-0.5 leading-snug">• DevOps & Docker<br />• Advanced Backend<br />• Open Source</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500/40" />
                  <span className="text-xs font-black text-purple-400">2024</span>
                  <p className="text-[11px] opacity-70 mt-0.5 leading-snug">• Frontend Mastery<br />• Performance Optimization<br />• UI/UX & Design</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500/20" />
                  <span className="text-xs font-black text-purple-400">2023</span>
                  <p className="text-[11px] opacity-70 mt-0.5 leading-snug">• Learning Core Basics<br />• HTML, CSS, JS<br />• Problem Solving</p>
                </div>
              </div>

              <button
                onClick={() => setActiveSection && setActiveSection('about')}
                className="w-full py-2.5 rounded-xl text-[11px] font-bold text-purple-300 hover:bg-purple-950/40 transition-all cursor-pointer text-center"
              >
                View full journey →
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* ================= 4. BOTTOM QUOTE BANNER ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 text-center shadow-xl relative overflow-hidden ${
          isLight ? 'bg-white' : 'bg-[#0c0916]'
        }`}>
          {/* Background Japanese Watermark */}
          <div className="absolute right-4 bottom-2 opacity-10 pointer-events-none text-purple-400 text-8xl font-serif">
            道
          </div>

          <p className={`text-xs sm:text-sm font-medium italic max-w-2xl mx-auto leading-relaxed relative z-10 ${
            isLight ? 'text-stone-800' : 'text-gray-200'
          }`}>
            "The more I learn, the more I realize how much there is to learn. So I write, so I remember. And I share, so others can grow."
          </p>
          <span className="text-xs font-bold text-purple-400 mt-2 block relative z-10">
            — Prakash.
          </span>
        </div>
      </ScrollReveal>

      {/* ================= 5. ARTICLE READER MODAL ================= */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl relative ${
                isLight ? 'bg-white text-stone-900' : 'bg-[#0e0a1b] text-gray-100'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-900/40 cursor-pointer"
              >
                <X size={14} />
              </button>

              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase bg-purple-950 text-purple-300">
                  {selectedArticle.category}
                </span>
                <span className="text-[10px] sm:text-xs opacity-60">• {selectedArticle.readTime}</span>
              </div>

              <h1 className="text-lg sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">{selectedArticle.title}</h1>

              {/* Real Project Cover Image inside Modal */}
              <div className="w-full h-36 sm:h-48 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <img src={selectedArticle.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none text-[11px] sm:text-xs lg:text-sm leading-relaxed space-y-3 sm:space-y-4">
                <p className="font-normal opacity-90">{selectedArticle.description}</p>
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-purple-950/30 my-3 sm:my-4 text-[10px] sm:text-xs font-mono whitespace-pre-wrap">
                  {selectedArticle.content}
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-purple-900/30 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] sm:text-xs cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Blogpage;
