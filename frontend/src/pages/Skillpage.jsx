import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Wrench,
  Rocket,
  Sparkles,
  Cpu,
  Database,
  Brain,
  Server,
  Globe,
  Terminal,
  Layout,
  ShieldCheck,
  Zap,
  Layers,
  Cloud,
  CreditCard,
  FileUp,
  BarChart3,
  Search,
  CheckCircle2,
  Monitor,
  FolderGit2,
  Boxes,
  Infinity as InfinityIcon
} from 'lucide-react';

import projectMainimage from '../assets/mainimage.png';
import mainimagesummer from '../assets/mainimagesummer.png';
import ImagePetals from '../components/ImagePetals';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import CounterAnimation from '../components/CounterAnimation';
import StaggerCards from '../components/StaggerCards';

// Real SVG Tech Brand Logos Component
const TechBrandLogo = ({ name, isLight }) => {
  const size = 20;

  switch (name) {
    case 'React':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );

    case 'JavaScript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M11.6 17.5c.4.8 1.1 1.4 2.2 1.4 1.2 0 1.9-.6 1.9-1.5 0-1-.8-1.3-2.1-1.9-1.8-.7-3-1.4-3-3.3 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.6 3.4 1.9l-1.6 1c-.4-.7-.9-1-1.7-1-.8 0-1.3.4-1.3.9 0 .6.5.9 1.7 1.4 2.1.9 3.4 1.6 3.4 3.5 0 2.2-1.7 3.4-4.1 3.4-2.3 0-3.6-1.1-4.3-2.6l1.9-1.1zM6 17.7c.3.7.8 1.2 1.6 1.2.7 0 1.2-.4 1.2-1.4v-8.4h2.4v8.5c0 2.4-1.4 3.5-3.5 3.5-1.8 0-3-1-3.6-2.3l1.9-1.1z" fill="#000000" />
        </svg>
      );

    case 'TypeScript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M14.5 10.5h-2.5v7.5h-2v-7.5h-2.5v-1.8h7v1.8zm2.2 7.2c.4.2.9.3 1.5.3 1.1 0 1.7-.5 1.7-1.3 0-.7-.5-1.1-1.6-1.5-1.5-.5-2.4-1.2-2.4-2.6 0-1.6 1.3-2.7 3.3-2.7 1.1 0 1.9.3 2.4.6l-.6 1.6c-.4-.2-1-.5-1.8-.5-1 0-1.4.5-1.4 1 0 .7.5 1 1.6 1.4 1.6.5 2.5 1.2 2.5 2.7 0 1.8-1.4 2.8-3.6 2.8-1.2 0-2.2-.3-2.8-.7l.6-1.6z" fill="#FFFFFF" />
        </svg>
      );

    case 'Framer Motion':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#0055FF">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );

    case 'GSAP':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#88CE02">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 12l3 3 7-7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'Three.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={isLight ? "#000" : "#FFF"} strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );

    case 'Node.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#5FA04E">
          <path d="M12 1.8l9.5 5.5v11L12 23.8 2.5 18.3v-11L12 1.8zm0 3.2L5 8.7v6.6l7 3.8 7-3.8V8.7l-7-3.7z" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={isLight ? "#000" : "#FFF"} strokeWidth="2">
          <text x="3" y="17" fontSize="14" fontWeight="bold" fontFamily="monospace" fill={isLight ? "#000" : "#FFF"}>ex</text>
        </svg>
      );

    case 'MongoDB':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 1.5c-4.5 5.5-6.5 10.5-6.5 14 0 4.5 3 7 6.5 7s6.5-2.5 6.5-7c0-3.5-2-8.5-6.5-14zm0 18.5V4c2.5 4 4 8 4 11.5 0 3-1.8 4.8-4 5z" />
        </svg>
      );

    case 'Socket.io':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={isLight ? "#000" : "#FFF"}>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M13 4L7 13h5l-1 7 7-9h-5l1-7z" fill="currentColor" />
        </svg>
      );

    case 'JWT':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FB015B">
          <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14c-2.7 0-5.2-1.3-6.8-3.4.1-2.2 4.5-3.6 6.8-3.6s6.7 1.4 6.8 3.6c-1.6 2.1-4.1 3.4-6.8 3.4z" />
        </svg>
      );

    case 'REST API':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 9h4M7 13h10M7 17h6" />
        </svg>
      );

    case 'OpenAI':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#10A37F">
          <path d="M22.258 11.2c0-4.01-3.25-7.26-7.26-7.26-1.12 0-2.18.25-3.13.71A7.26 7.26 0 004.7 6.47a7.25 7.25 0 00-2.44 5.43c0 2.27.95 4.32 2.47 5.78a7.26 7.26 0 007.16 2.87 7.26 7.26 0 007.16-2.87 7.24 7.24 0 003.2-6.48zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
        </svg>
      );

    case 'Gemini':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#8E75FF">
          <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
        </svg>
      );

    case 'LangChain':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      );

    case 'Pinecone':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12 2L4 9h16L12 2zm0 7l-8 7h16l-8-7zm0 7l-5 5h10l-5-5z" />
        </svg>
      );

    case 'RAG Architecture':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 7l3.5 3.5M17 7l-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5" />
        </svg>
      );

    case 'Hugging Face':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFD21E">
          <circle cx="12" cy="12" r="10" />
          <circle cx="8.5" cy="9.5" r="1.5" fill="#000" />
          <circle cx="15.5" cy="9.5" r="1.5" fill="#000" />
          <path d="M8 14.5s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'Docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.98 11.08h-2.11V8.98h2.11v2.1zm-2.61 0H9.26V8.98h2.11v2.1zm-2.62 0H6.64V8.98h2.11v2.1zm7.84 0h-2.11V8.98h2.11v2.1zm-2.61-2.62h-2.11V6.35h2.11v2.11zm-2.62 0H9.26V6.35h2.11v2.11zm-2.62 0H6.64V6.35h2.11v2.11zm7.85 0h-2.11V6.35h2.11v2.11zM12.001 2c-5.52 0-10 4.48-10 10 0 4.14 2.52 7.69 6.13 9.17.65.27 1.34-.14 1.34-.84v-1.83c0-.4-.15-.78-.42-1.07l-.67-.73a1.5 1.5 0 01-.39-1.02V13h8.02v2.68c0 .38-.14.75-.4 1.03l-.66.71c-.28.3-.43.69-.43 1.1v1.8c0 .7.69 1.11 1.34.84A10.003 10.003 0 0022.001 12c0-5.52-4.48-10-10-10z" />
        </svg>
      );

    case 'Git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.4 4.2l3.7 3.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.8l3.6 3.6c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.6-.6-.7-1.4-.4-2L13.2 11c-.6.2-1.4.1-1.9-.4-.6-.6-.7-1.5-.4-2.1L7.2 4.8 2.4 9.6c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l7.8-7.8c.8-.7.8-2 0-2.3z" />
        </svg>
      );

    case 'GitHub':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={isLight ? "#181717" : "#FFFFFF"}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'GitHub Actions':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2088FF">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );

    case 'VS Code':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M23.15 2.587L18.21.791a1.49 1.49 0 00-1.41.342L8.03 9.224 3.51 5.76a.75.75 0 00-1.02.1l-1.92 2.3a.75.75 0 00.1 1.02l4.89 3.82-4.89 3.82a.75.75 0 00-.1 1.02l1.92 2.3a.75.75 0 001.02.1l4.52-3.464 8.77 8.091a1.49 1.49 0 001.41.342l4.94-1.796A1.5 1.5 0 0024 22.083V3.917a1.5 1.5 0 00-.85-1.33z" />
        </svg>
      );

    case 'Postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l8-4-4 8-1-3-3-1z" fill="#FFF" />
        </svg>
      );

    default:
      return (
        <div className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-purple-500/20 text-purple-400">
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};

const Skillpage = ({ theme, toggleTheme, setActiveSection }) => {
  const isLight = theme === 'light';

  const statsData = [
    { value: '18', label: 'Technologies', icon: Code2 },
    { value: '8', label: 'Dev Tools', icon: Wrench },
    { value: '15', label: 'Projects Built', icon: Rocket },
    { value: '2', label: 'Years Learning', icon: Sparkles },
  ];

  const categories = [
    {
      title: 'FRONTEND',
      icon: Monitor,
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Proficient' },
        { name: 'Framer Motion', level: 'Proficient' },
        { name: 'GSAP', level: 'Intermediate' },
        { name: 'Three.js', level: 'Intermediate' },
      ],
    },
    {
      title: 'BACKEND',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Socket.io', level: 'Proficient' },
        { name: 'JWT', level: 'Proficient' },
        { name: 'REST API', level: 'Expert' },
      ],
    },
    {
      title: 'AI / MACHINE LEARNING',
      icon: Brain,
      skills: [
        { name: 'OpenAI', level: 'Proficient' },
        { name: 'Gemini', level: 'Proficient' },
        { name: 'LangChain', level: 'Intermediate' },
        { name: 'Pinecone', level: 'Intermediate' },
        { name: 'RAG Architecture', level: 'Intermediate' },
        { name: 'Hugging Face', level: 'Intermediate' },
      ],
    },
    {
      title: 'DEVOPS & TOOLS',
      icon: Wrench,
      skills: [
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'GitHub', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Proficient' },
        { name: 'VS Code', level: 'Daily Tool' },
        { name: 'Postman', level: 'Daily Tool' },
      ],
    },
  ];

  const proficiencies = [
    { name: 'JavaScript', percent: 95 },
    { name: 'React', percent: 90 },
    { name: 'Node.js', percent: 85 },
    { name: 'MongoDB', percent: 85 },
    { name: 'TypeScript', percent: 80 },
    { name: 'Docker', percent: 75 },
  ];

  const capabilities = [
    { title: 'Web Applications', desc: 'Responsive and fast web apps', icon: Globe },
    { title: 'REST APIs', desc: 'Scalable and secure APIs', icon: Server },
    { title: 'Authentication', desc: 'JWT, OAuth, Session, RBAC', icon: ShieldCheck },
    { title: 'Real-time Apps', desc: 'Chat, live updates, sockets', icon: Zap },
    { title: 'AI Integrations', desc: 'Chatbots, LLMs, RAG', icon: Brain },
    { title: 'Database Design', desc: 'Schema, indexes, optimization', icon: Database },
    { title: 'DevOps & Deployment', desc: 'Containers, CI/CD, Nginx', icon: Wrench },
    { title: 'Cloud Deployment', desc: 'AWS, Render, Vercel', icon: Cloud },
    { title: 'Payment Integration', desc: 'Stripe, Razorpay, etc.', icon: CreditCard },
    { title: 'File & Image Upload', desc: 'Cloudinary, ImageKit, S3', icon: FileUp },
    { title: 'Admin Dashboards', desc: 'Analytics, charts, reports', icon: BarChart3 },
    { title: 'SEO Optimization', desc: 'Meta tags, sitemap, speed', icon: Search },
  ];

  const focusPills = [
    { label: 'AI Engineering', icon: Brain },
    { label: 'Three.js', icon: Boxes },
    { label: 'DevOps', icon: InfinityIcon },
    { label: 'TypeScript', icon: Code2 },
  ];

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
        className="relative w-full min-h-[220px] sm:min-h-[340px] flex items-center mb-1 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0a0714] shadow-2xl"
      >
        {/* Background Samurai Kitsune Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={projectMainimage}
            alt="Kitsune Samurai Avatar"
            className="tt-dark-img absolute inset-0 w-full h-full object-cover object-[80%_center] filter brightness-110 contrast-105"
          />
          <img
            src={mainimagesummer}
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
            技術は力なり。
          </div>

          <div className="w-9 h-9 rounded-lg bg-purple-950/60 flex items-center justify-center text-xs font-serif text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            術
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-center py-6 px-4 sm:px-8 pt-8 sm:pt-6">
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 max-w-full sm:max-w-2xl">
            
            {/* Tag */}
            <ScrollReveal y={20}>
              <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 font-japanese">
                <span>TECH STACK</span>
              </div>
            </ScrollReveal>

            {/* Stylized Title */}
            <div className="flex flex-col select-none w-full">
              <div className="flex items-baseline gap-2 flex-wrap relative">
                <TextReveal
                  as="h1"
                  className={`font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-none ${
                    isLight ? 'text-stone-900' : 'text-white'
                  }`}
                  stagger={0.04}
                >
                  ENGINEERING
                </TextReveal>
                <div className="flex items-center gap-1.5">
                  <TextReveal
                    as="h1"
                    className="purple-brush-text font-brush italic text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-none"
                    stagger={0.04}
                    delay={0.12}
                  >
                    TOOLKIT
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
              <div className="relative inline-block mt-1">
                <svg className={`w-40 sm:w-64 h-2.5 sm:h-3 ${
                  isLight ? 'text-orange-500' : 'text-purple-500'
                }`} viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                  <path d="M 2 10 Q 50 2, 198 6 C 150 12, 50 14, 2 10 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <ScrollReveal y={20} delay={0.4}>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg mt-1">
                The technologies and tools I use to build scalable, performant and <span className={isLight ? 'text-orange-600 font-bold' : 'text-purple-400 font-bold'}>impactful</span> applications.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </motion.div>

      {/* ================= 2. STATS COUNTER BAR ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-2xl p-4 sm:p-5 shadow-xl border-0 ${
          isLight ? 'bg-white shadow-orange-200/30' : 'bg-[#0c0916] shadow-purple-950/20'
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-purple-900/20">
            {statsData.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                    idx !== 0 ? 'sm:pl-4 lg:pl-6' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${
                    isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/40 text-purple-400'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none mb-0.5 ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      <CounterAnimation end={stat.value} suffix="+" delay={idx * 0.1} />
                    </span>
                    <span className={`text-[11px] font-medium leading-tight ${
                      isLight ? 'text-stone-500' : 'text-gray-400'
                    }`}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* ================= 3. TECH CATEGORIES GRID (4 COLUMNS) ================= */}
      <StaggerCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" stagger={0.12}>
        {categories.map((cat, idx) => {
          const CategoryIcon = cat.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl p-5 border-0 flex flex-col justify-between transition-all duration-500 group shadow-xl ${
                isLight
                  ? 'bg-white hover:shadow-orange-200/40'
                  : 'bg-[#0c0916] hover:shadow-[0_15px_45px_rgba(168,85,247,0.15)]'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-purple-900/20">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${
                    isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <CategoryIcon size={16} />
                  </div>
                  <TextReveal
                    as="h2"
                    className={`text-xs font-black tracking-widest uppercase ${
                      isLight ? 'text-stone-800' : 'text-purple-300'
                    }`}
                    stagger={0.03}
                  >
                    {cat.title}
                  </TextReveal>
                </div>

                {/* Skill Items List */}
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border-0 transition-all duration-300 group/tech ${
                        isLight
                          ? 'bg-orange-50/50 hover:bg-orange-100/60'
                          : 'bg-[#140f29]/70 hover:bg-[#1a1435]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <TechBrandLogo name={skill.name} isLight={isLight} />
                        <span className={`text-xs font-bold ${isLight ? 'text-stone-800' : 'text-gray-200'}`}>
                          {skill.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                        isLight ? 'bg-orange-100 text-orange-700' : 'bg-purple-950/60 text-purple-400/90'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </StaggerCards>

      {/* ================= 4. CURRENT FOCUS BANNER ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 sm:p-8 border-0 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 ${
          isLight
            ? 'bg-[#fff7ed] shadow-orange-200/30'
            : 'bg-[#0c0916] shadow-[0_20px_50px_rgba(168,85,247,0.2)]'
        }`}>
          
          {/* Swirling Graphic + Quote */}
          <div className="flex items-center gap-6 z-10 w-full lg:w-auto">
            {/* Swirling Neon Portal Graphic */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.4)] bg-[#120e24]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/40 via-purple-950/60 to-black animate-spin [animation-duration:12s]" />
              <Sparkles size={24} className="text-purple-300 relative z-10 animate-pulse" />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-purple-400 uppercase">
                <Sparkles size={14} />
                <TextReveal as="span" stagger={0.03}>
                  CURRENT FOCUS
                </TextReveal>
              </div>
              <p className={`text-xs sm:text-sm font-medium italic ${
                isLight ? 'text-stone-800' : 'text-gray-200'
              }`}>
                "Code is like bushido—clean, efficient and purposeful."
              </p>
              <span className="text-[11px] font-bold text-purple-400">
                — Always Improving
              </span>
            </div>
          </div>

          {/* Right Side 4 Focus Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 z-10 w-full lg:w-auto">
            {focusPills.map((pill, pIdx) => {
              const PillIcon = pill.icon;
              return (
                <div
                  key={pIdx}
                  className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-0 text-center transition-all duration-300 hover:scale-105 ${
                    isLight
                      ? 'bg-white text-stone-800 shadow-sm'
                      : 'bg-[#140f29] text-purple-200 shadow-lg'
                  }`}
                >
                  <PillIcon size={20} className="text-purple-400 mb-1.5" />
                  <span className="text-xs font-extrabold">{pill.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* ================= 5. TECH PROFICIENCY CIRCULAR PROGRESS ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 sm:p-8 border-0 shadow-xl flex flex-col gap-6 ${
          isLight ? 'bg-white' : 'bg-[#0c0916]'
        }`}>
          
          {/* Header */}
          <div className="flex items-center gap-2">
            <TextReveal
              as="h2"
              className={`text-xs sm:text-sm font-black tracking-widest uppercase ${
                isLight ? 'text-stone-800' : 'text-purple-300'
              }`}
              stagger={0.03}
            >
              TECH PROFICIENCY
            </TextReveal>
            <Sparkles size={14} className="text-purple-400" />
          </div>

          {/* 6 Circular Rings */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {proficiencies.map((prof, pIdx) => {
              const radius = 34;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (prof.percent / 100) * circumference;

              return (
                <div
                  key={pIdx}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-0 transition-all duration-300 hover:scale-105 ${
                    isLight
                      ? 'bg-orange-50/50'
                      : 'bg-[#140f29]/60'
                  }`}
                >
                  {/* Circular SVG Ring */}
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke={isLight ? '#fed7aa' : '#271e3d'}
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke={isLight ? '#f97316' : '#a855f7'}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.2, delay: pIdx * 0.1, ease: 'easeOut' }}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    <span className={`absolute text-sm font-black ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      {prof.percent}%
                    </span>
                  </div>

                  <span className={`text-xs font-bold ${
                    isLight ? 'text-stone-700' : 'text-gray-300'
                  }`}>
                    {prof.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* ================= 6. WHAT I CAN BUILD SECTION ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 sm:p-8 border-0 shadow-xl flex flex-col gap-6 ${
          isLight ? 'bg-white' : 'bg-[#0c0916]'
        }`}>
          
          <div className="flex items-center gap-2">
            <TextReveal
              as="h2"
              className={`text-xs sm:text-sm font-black tracking-widest uppercase ${
                isLight ? 'text-stone-800' : 'text-purple-300'
              }`}
              stagger={0.03}
            >
              WHAT I CAN BUILD
            </TextReveal>
            <Sparkles size={14} className="text-purple-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, cIdx) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={cIdx}
                  className={`p-4 rounded-2xl border-0 flex items-start gap-3.5 transition-all duration-300 hover:scale-[1.02] ${
                    isLight
                      ? 'bg-orange-50/50'
                      : 'bg-[#140f29]/60 hover:bg-[#1a1435]'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                    isLight ? 'bg-orange-100 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <CapIcon size={18} />
                  </div>

                  <div className="flex flex-col">
                    <h3 className={`text-xs font-bold leading-tight mb-0.5 ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      {cap.title}
                    </h3>
                    <p className={`text-[11px] font-normal leading-snug ${
                      isLight ? 'text-stone-500' : 'text-gray-400'
                    }`}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};

export default Skillpage;