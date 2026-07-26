import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MessageSquare,
  Send,
  Clock,
  MapPin,
  User,
  PenTool,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Brain,
  Layers,
  Zap,
  MessageCircle,
  ChevronRight,
  Copy,
  ExternalLink
} from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import projectMainimage from '../assets/projectMainimage.png';
import projectpagesummer from '../assets/projectpagesummer.png';
import logoImg from '../assets/logo.png';
import logosummer from '../assets/logosummer.png';
import bottomlogo from '../assets/bottomlogo.png';
import bottomlogoSummer from '../assets/bottomlogo copysummer.png';

import ImagePetals from '../components/ImagePetals';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import StaggerCards from '../components/StaggerCards';

const Contactpage = ({ theme, toggleTheme, setActiveSection }) => {
  const isLight = theme === 'light';

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const quickContacts = [
    {
      title: 'EMAIL ME',
      value: 'prakashdasdev1@gmail.com',
      link: 'mailto:prakashdasdev1@gmail.com',
      icon: Mail,
    },
    {
      title: 'LINKEDIN',
      value: 'linkedin.com/in/prakash',
      link: 'https://linkedin.com/in/prakash',
      icon: LinkedinIcon,
    },
    {
      title: 'GITHUB',
      value: 'github.com/kaku-coder',
      link: 'https://github.com/kaku-coder',
      icon: GithubIcon,
    },
  ];

  const connectPlatforms = [
    { label: 'Email', value: 'prakashdasdev1@gmail.com', link: 'mailto:prakashdasdev1@gmail.com', icon: Mail },
    { label: 'LinkedIn', value: 'linkedin.com/in/prakash', link: 'https://linkedin.com/in/prakash', icon: LinkedinIcon },
    { label: 'GitHub', value: 'github.com/kaku-coder', link: 'https://github.com/kaku-coder', icon: GithubIcon },
    { label: 'Location', value: 'India', link: null, icon: MapPin },
  ];

  const services = [
    {
      title: 'Web Development',
      desc: 'Building fast, responsive and modern web applications.',
      icon: Globe,
    },
    {
      title: 'AI & Integrations',
      desc: 'Integrating AI capabilities to create smarter products.',
      icon: Brain,
    },
    {
      title: 'Full Stack Solutions',
      desc: 'End-to-end solutions using MERN stack and more.',
      icon: Layers,
    },
    {
      title: 'Performance',
      desc: 'Optimizing performance for speed and scalability.',
      icon: Zap,
    },
    {
      title: 'Consulting',
      desc: 'Technical guidance and consulting for your projects.',
      icon: MessageCircle,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
          title: formData.subject || 'New Portfolio Inquiry',
          time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      const msg = error?.text || error?.message || 'Failed to connect to EmailJS service';
      setErrorMessage(msg);
    } finally {
      setSending(false);
    }
  };

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-8 pt-16 sm:pt-8 flex flex-col gap-6 sm:gap-10 select-none relative box-border">

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
        className="relative w-full min-h-[240px] sm:min-h-[340px] flex items-center mb-1 overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0a0714] shadow-2xl"
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
            共に何かを創ろう。
          </div>

          <div className="w-9 h-9 rounded-lg bg-purple-950/60 flex items-center justify-center text-xs font-serif text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            創
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-center py-6 px-4 sm:px-8 pt-8 sm:pt-6">
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 max-w-full sm:max-w-2xl">
            
            {/* Tag */}
            <ScrollReveal y={20}>
              <div className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-2 font-japanese">
                <span>• CONTACT</span>
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
                  LET'S CREATE
                </TextReveal>
                <div className="flex items-center gap-1.5">
                  <TextReveal
                    as="h1"
                    className="purple-brush-text font-brush italic text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-none"
                    stagger={0.04}
                    delay={0.12}
                  >
                    SOMETHING AMAZING
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
                <svg className={`w-48 sm:w-80 h-2.5 sm:h-3 ${
                  isLight ? 'text-orange-500' : 'text-purple-500'
                }`} viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                  <path d="M 2 10 Q 50 2, 198 6 C 150 12, 50 14, 2 10 Z" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
            </div>

            {/* Subtitle Description */}
            <ScrollReveal y={20} delay={0.3}>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal max-w-lg mt-1">
                Have a project in mind, a question, or just want to say hi? I'm always open to discussing new ideas and <span className={isLight ? 'text-orange-600 font-bold' : 'text-purple-400 font-bold'}>opportunities</span>.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </motion.div>

      {/* ================= 2. TOP 3 QUICK CONTACT CARDS ROW ================= */}
      <StaggerCards className="grid grid-cols-1 sm:grid-cols-3 gap-4" stagger={0.08}>
        {quickContacts.map((qc, idx) => {
          const Icon = qc.icon;
          return (
            <a
              key={idx}
              href={qc.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 sm:p-5 rounded-2xl flex flex-col justify-between gap-3 transition-all duration-300 group shadow-lg ${
                isLight
                  ? 'bg-white hover:shadow-orange-200/40'
                  : 'bg-[#0c0916] hover:shadow-[0_12px_35px_rgba(168,85,247,0.18)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-sm ${
                  isLight ? 'bg-orange-50 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                }`}>
                  <Icon size={18} />
                </div>

                <ArrowRight size={14} className="text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>

              <div>
                <span className={`text-[10px] font-black tracking-widest uppercase block mb-0.5 ${
                  isLight ? 'text-stone-500' : 'text-purple-400/90'
                }`}>
                  {qc.title}
                </span>
                <span className={`text-xs font-bold truncate block ${
                  isLight ? 'text-stone-800' : 'text-gray-200'
                }`}>
                  {qc.value}
                </span>
              </div>
            </a>
          );
        })}
      </StaggerCards>

      {/* ================= 3. TWO-COLUMN MAIN SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* LEFT COLUMN: SEND ME A MESSAGE FORM (7 COLS) */}
        <ScrollReveal className="lg:col-span-7 w-full">
          <div
            ref={formRef}
            className={`rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col gap-6 ${
              isLight ? 'bg-white' : 'bg-[#0c0916] shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
            }`}
          >
            {/* Background Japanese Watermark Graphic */}
            <div className="absolute right-3 bottom-3 opacity-15 pointer-events-none select-none z-0">
              <div className="text-purple-500 text-[180px] font-serif leading-none">
                伝える
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 relative z-10">
              <TextReveal
                as="h2"
                className={`text-xs sm:text-sm font-black tracking-widest uppercase ${
                  isLight ? 'text-stone-800' : 'text-purple-300'
                }`}
                stagger={0.03}
              >
                SEND ME A MESSAGE
              </TextReveal>
              {/* Ninja Shuriken Star Graphic */}
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                <circle cx="12" cy="12" r="2" fill="#0a0714" />
              </svg>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                    isLight ? 'text-stone-400' : 'text-purple-400/70'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-9 pr-4 py-3 rounded-2xl text-xs font-medium outline-none border transition-all ${
                      isLight
                        ? 'bg-orange-50/50 border-orange-200 text-stone-900 focus:border-orange-400 placeholder:text-stone-400'
                        : 'bg-[#140f29] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
                    }`}
                  />
                </div>

                <div className="relative">
                  <Mail size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                    isLight ? 'text-stone-400' : 'text-purple-400/70'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-9 pr-4 py-3 rounded-2xl text-xs font-medium outline-none border transition-all ${
                      isLight
                        ? 'bg-orange-50/50 border-orange-200 text-stone-900 focus:border-orange-400 placeholder:text-stone-400'
                        : 'bg-[#140f29] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="relative">
                <PenTool size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isLight ? 'text-stone-400' : 'text-purple-400/70'
                }`} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full pl-9 pr-4 py-3 rounded-2xl text-xs font-medium outline-none border transition-all ${
                    isLight
                      ? 'bg-orange-50/50 border-orange-200 text-stone-900 focus:border-orange-400 placeholder:text-stone-400'
                      : 'bg-[#140f29] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
                  }`}
                />
              </div>

              {/* Row 3: Message */}
              <div className="relative">
                <PenTool size={15} className={`absolute left-3.5 top-4 ${
                  isLight ? 'text-stone-400' : 'text-purple-400/70'
                }`} />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-9 pr-4 py-3 rounded-2xl text-xs font-medium outline-none border transition-all resize-none ${
                    isLight
                      ? 'bg-orange-50/50 border-orange-200 text-stone-900 focus:border-orange-400 placeholder:text-stone-400'
                      : 'bg-[#140f29] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
                  }`}
                />
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full sm:w-auto px-8 py-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 ${
                    sending ? 'opacity-60 cursor-not-allowed' : ''
                  } ${
                    isLight
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/30'
                      : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/40'
                  }`}
                >
                  {sending ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5 text-[11px] opacity-70 font-medium">
                  <Clock size={13} className="text-purple-400" />
                  <span>I usually reply within <strong className="text-purple-400">24 hours</strong></span>
                </div>
              </div>

              {/* Success Feedback */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-green-500/20 text-green-400 text-xs font-bold flex items-center gap-2 justify-center"
                >
                  <CheckCircle2 size={16} /> Message sent to your inbox! I will reply soon.
                </motion.div>
              )}

              {/* Inline Error Feedback with Mailto Fallback */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-red-500/10 text-red-400 text-xs flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 font-bold text-red-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>EmailJS Status: {errorMessage}</span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Make sure your EmailJS service is connected to your Gmail account in your <a href="https://dashboard.emailjs.com" target="_blank" rel="noreferrer" className="text-purple-400 underline font-bold">EmailJS Dashboard</a>.
                  </p>
                  <a
                    href={`mailto:prakashdasdev1@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                    className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-bold underline mt-1"
                  >
                    <span>Click to send message directly via Email</span>
                    <ExternalLink size={12} />
                  </a>
                </motion.div>
              )}

            </form>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN: LET'S CONNECT & STEVE JOBS QUOTE (5 COLS) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          
          {/* CONNECT PLATFORMS CARD */}
          <ScrollReveal>
            <div className={`rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-5 ${
              isLight ? 'bg-white' : 'bg-[#0c0916]'
            }`}>
              <div>
                <TextReveal
                  as="h3"
                  className={`text-xs sm:text-sm font-black tracking-widest uppercase mb-1 ${
                    isLight ? 'text-stone-800' : 'text-purple-300'
                  }`}
                  stagger={0.03}
                >
                  LET'S CONNECT —
                </TextReveal>
                <p className={`text-xs leading-relaxed ${
                  isLight ? 'text-stone-500' : 'text-gray-400'
                }`}>
                  Feel free to reach out to me through any of the platforms below.
                </p>
              </div>

              {/* Platform List Items */}
              <div className="flex flex-col gap-3">
                {connectPlatforms.map((cp, idx) => {
                  const CpIcon = cp.icon;
                  return (
                    <a
                      key={idx}
                      href={cp.link || '#'}
                      target={cp.link ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group ${
                        isLight
                          ? 'bg-orange-50/50 hover:bg-orange-100/60'
                          : 'bg-[#140f29]/70 hover:bg-[#1a1435]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${
                          isLight ? 'bg-orange-100 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                        }`}>
                          <CpIcon size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-[10px] font-bold uppercase opacity-60 ${
                            isLight ? 'text-stone-500' : 'text-gray-400'
                          }`}>
                            {cp.label}
                          </span>
                          <span className={`text-xs font-extrabold ${
                            isLight ? 'text-stone-900' : 'text-gray-200'
                          }`}>
                            {cp.value}
                          </span>
                        </div>
                      </div>

                      <ChevronRight size={14} className="text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  );
                })}
              </div>

            </div>
          </ScrollReveal>

          {/* STEVE JOBS QUOTE CARD */}
          <ScrollReveal delay={0.1}>
            <div className={`rounded-3xl p-5 shadow-xl flex items-center gap-4 ${
              isLight ? 'bg-orange-50/70' : 'bg-[#120e24]'
            }`}>
              {/* Kitsune Logo Avatar */}
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 bg-purple-950/40 p-1 flex items-center justify-center">
                <img src={isLight ? logosummer : logoImg} alt="Kitsune" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className={`text-[11px] sm:text-xs font-medium italic leading-relaxed ${
                  isLight ? 'text-stone-700' : 'text-gray-300'
                }`}>
                  "Great things in business are never done by one person. They're done by a team of people."
                </p>
                <span className="text-[10px] font-bold text-purple-400">
                  — Steve Jobs
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* ================= 4. WHAT I CAN HELP YOU WITH (5-COLUMN GRID) ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6 ${
          isLight ? 'bg-white' : 'bg-[#0c0916]'
        }`}>
          
          <div className="flex items-center gap-2">
            <h2 className={`text-xs sm:text-sm font-black tracking-widest uppercase ${
              isLight ? 'text-stone-800' : 'text-purple-300'
            }`}>
              • WHAT I CAN HELP YOU WITH •
            </h2>
            <Sparkles size={14} className="text-purple-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((srv, sIdx) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] ${
                    isLight
                      ? 'bg-orange-50/50'
                      : 'bg-[#140f29]/60 hover:bg-[#1a1435]'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                    isLight ? 'bg-orange-100 text-orange-600' : 'bg-purple-950/60 text-purple-400'
                  }`}>
                    <SrvIcon size={18} />
                  </div>

                  <div className="flex flex-col">
                    <h3 className={`text-xs font-bold leading-tight mb-1 ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      {srv.title}
                    </h3>
                    <p className={`text-[11px] font-normal leading-snug ${
                      isLight ? 'text-stone-500' : 'text-gray-400'
                    }`}>
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* ================= 5. BOTTOM CALL TO ACTION BANNER ================= */}
      <ScrollReveal>
        <div className={`w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 ${
          isLight
            ? 'bg-[#fff7ed] shadow-orange-200/30'
            : 'bg-[#0c0916] shadow-[0_20px_50px_rgba(168,85,247,0.2)]'
        }`}>
          
          <div className="flex items-center gap-5 z-10">
            {/* Prominent Bottom Logo Avatar */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-purple-950/40 p-1 flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
              <img src={isLight ? bottomlogoSummer : bottomlogo} alt="Kitsune Bottom Logo" className="w-full h-full object-contain filter drop-shadow" />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className={`text-sm sm:text-lg font-black ${
                isLight ? 'text-stone-900' : 'text-white'
              }`}>
                Let's turn your ideas into reality.
              </h2>
              <p className={`text-xs font-medium ${
                isLight ? 'text-stone-600' : 'text-gray-300'
              }`}>
                I'm excited to collaborate and create something amazing together.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 z-10 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={scrollToForm}
              className={`px-6 py-3 rounded-2xl text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 ${
                isLight
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/30'
                  : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/40'
              }`}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={14} />
            </button>

            {/* Handwritten Signature */}
            <div className="flex flex-col items-end pl-2">
              <span className="font-signature text-purple-400 text-2xl font-bold leading-none">
                Prakash.
              </span>
              <div className="w-4 h-4 text-purple-400 -mt-1">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
};

export default Contactpage;