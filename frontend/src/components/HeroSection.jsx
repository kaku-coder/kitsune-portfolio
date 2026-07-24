import React from 'react';
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
  Layers,
  Cpu,
  Database,
  Terminal,
  Wind,
  Radio,
  Container,
  GitBranch,
  GitCommit,
  FileCode2,
  Rocket
} from 'lucide-react';
import mainimage from '../assets/mainimage.png';
import logoImg from '../assets/logo.png';
import AtmosphereLayer from './AtmosphereLayer';

export default function HeroSection() {
  const techStack = [
    { name: 'React', icon: Layers, color: 'text-cyan-400' },
    { name: 'Next.js', icon: FileCode2, color: 'text-gray-100' },
    { name: 'Node.js', icon: Cpu, color: 'text-emerald-400' },
    { name: 'Express', icon: Terminal, color: 'text-gray-300' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'Docker', icon: Container, color: 'text-blue-400' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-400' },
    { name: 'Tailwind', icon: Wind, color: 'text-sky-400' },
    { name: 'Socket.io', icon: Radio, color: 'text-purple-400' },
    { name: 'Framer', icon: Sparkles, color: 'text-pink-400' },
  ];

  const stats = [
    { icon: Code2, value: '10+', label: 'Projects Completed' },
    { icon: Calendar, value: '2+', label: 'Years Experience' },
    { icon: GitCommit, value: '500+', label: 'GitHub Contributions' },
    { icon: Braces, value: '200+', label: 'LeetCode Problems' },
    { icon: Coffee, value: '∞', label: 'Coffee Consumed' },
    { icon: Rocket, value: '15+', label: 'Open Source Contributions' },
  ];

  return (
    <div className="w-full flex flex-col gap-6">

      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full overflow-hidden rounded-[20px]">
        {/* Atmosphere layer — OUTSIDE overflow-hidden, positioned over hero */}
        <AtmosphereLayer />

        <div id="home" className="relative w-full min-h-[560px] lg:min-h-[620px] rounded-[20px] overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.06)]">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={mainimage}
              alt=""
              className="w-full h-full object-cover object-center brightness-[0.5] contrast-110 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/30" />
            <div className="absolute top-1/4 right-[15%] w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
          </div>

          {/* Hero Content */}
        <div className="relative z-10 w-full h-full min-h-[560px] lg:min-h-[620px] flex flex-col lg:flex-row items-center p-8 sm:p-12 lg:p-16 gap-10 lg:gap-6">

          {/* LEFT — Text Content */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">

            {/* Japanese Subtitle */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-purple-500/60" />
              <span className="text-purple-400 text-xs font-medium tracking-[0.3em] uppercase font-sans">
                キツネの道 — The Way of the Fox
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              I Build
              <br />
              <span className="text-purple-400">Digital</span>{' '}
              Experiences
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6">
              Full Stack Developer crafting fast, scalable, and beautiful web applications with clean code and thoughtful design.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                <span>Explore Work</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 backdrop-blur-sm">
                <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">
                  <Play size={11} className="fill-purple-300 text-purple-300 ml-0.5" />
                </div>
                <span>Watch Intro</span>
              </button>
            </div>

          </div>

          {/* RIGHT — Fox Samurai Artwork + Status Card */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-lg">

            {/* Main Image — cinematic framed */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/15 shadow-[0_0_60px_rgba(139,92,246,0.08)]">
              <img
                src={mainimage}
                alt="Fox Samurai"
                className="w-full h-full object-cover brightness-[0.7] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-[#09090B]/20" />
              {/* Purple edge glow */}
              <div className="absolute inset-0 border border-purple-500/10 rounded-2xl" />
            </div>

            {/* Floating Status Card */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-4 sm:right-6 z-20 px-5 py-3.5 rounded-2xl bg-[#120f1c]/80 backdrop-blur-xl border border-purple-500/20 shadow-[0_8px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 min-w-[220px]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Status</span>
                <span className="text-xs font-bold text-gray-100">Available for Work</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Scroll Indicator — centered */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
          <div className="w-5 h-8 rounded-full border-2 border-purple-500/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
          </div>
          <span className="text-[9px] text-gray-500 font-mono tracking-[0.25em] uppercase">Scroll</span>
        </div>

        </div>

      </div>

      {/* ================= 2. BENTO GRID — THREE CARDS ================= */}
      <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* CARD 1 — ABOUT ME */}
        <div className="lg:col-span-4 rounded-[20px] bg-[#110d1f]/70 backdrop-blur-xl border border-purple-500/10 p-6 flex flex-col justify-between hover:border-purple-500/25 transition-all duration-500 group">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              About Me
            </div>

            <h3 className="text-xl font-extrabold text-gray-100 mb-3 leading-snug">
              Crafting solutions,
              <br />
              <span className="text-purple-400">solving problems.</span>
            </h3>

            <p className="text-gray-400 text-[13px] leading-relaxed">
              I'm a Full Stack Developer who loves turning ideas into real-world products. I enjoy building things that are fast, scalable and impactful.
            </p>
          </div>

          <div className="flex items-center justify-between pt-5 mt-5 border-t border-purple-500/10">
            <div className="flex items-baseline gap-2">
              <span className="font-handwriting text-2xl text-purple-300 font-bold">
                Prakash
              </span>
              <span className="font-japanese text-lg text-purple-400/60">
                顏
              </span>
            </div>
            <span className="text-[9px] text-gray-500 uppercase font-mono tracking-widest">
              Developer
            </span>
          </div>
        </div>

        {/* CARD 2 — FEATURED PROJECT */}
        <div id="projects" className="lg:col-span-5 rounded-[20px] bg-[#110d1f]/70 backdrop-blur-xl border border-purple-500/10 p-6 flex flex-col justify-between hover:border-purple-500/25 transition-all duration-500">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              Featured Project
            </div>

            <h3 className="text-xl font-extrabold text-gray-100 mb-2">
              AI Battle Arena
            </h3>

            <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
              Real-time AI battle platform where different AI models compete and users vote for the best response.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {['MERN', 'Socket.io', 'AI', 'Tailwind'].map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/15 text-[10px] font-semibold text-purple-300 tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Preview Frame */}
          <div className="relative w-full h-40 rounded-xl bg-[#090712] border border-purple-500/15 p-3 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between text-[9px] text-purple-300/60 font-mono pb-2 border-b border-purple-500/10">
              <span className="font-bold tracking-wider uppercase">AI Battle Arena</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE
              </span>
            </div>

            <div className="relative grid grid-cols-2 gap-3 my-auto items-center">
              <div className="p-2 rounded-lg bg-[#140f26] border border-purple-500/20 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-purple-300 text-[9px] font-bold mb-1">
                  GPT
                </div>
                <span className="text-[10px] font-bold text-gray-200">GPT-4</span>
                <span className="text-[8px] text-purple-400">Winner</span>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-[9px] flex items-center justify-center shadow-lg shadow-purple-950">
                VS
              </div>

              <div className="p-2 rounded-lg bg-[#140f26] border border-purple-500/20 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-purple-300 text-[9px] font-bold mb-1">
                  GEM
                </div>
                <span className="text-[10px] font-bold text-gray-200">Gemini Pro</span>
                <span className="text-[8px] text-purple-400">Challenger</span>
              </div>
            </div>

            <div className="text-[8px] text-gray-500 text-center font-mono">
              Real-time voting • AI evaluation
            </div>
          </div>

          <div className="pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-purple-400 hover:text-purple-300 transition-colors uppercase group">
              <span>View Project</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* CARD 3 — TECH STACK */}
        <div id="skills" className="lg:col-span-3 rounded-[20px] bg-[#110d1f]/70 backdrop-blur-xl border border-purple-500/10 p-6 flex flex-col justify-between hover:border-purple-500/25 transition-all duration-500">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              Tech Stack
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-purple-500/10 hover:border-purple-500/30 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:bg-purple-500/5 group cursor-default"
                  >
                    <Icon size={16} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-[9px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center pt-3 mt-3 border-t border-purple-500/10">
            <span className="text-[10px] text-purple-400/60 font-medium tracking-wider">
              + More Technologies
            </span>
          </div>
        </div>

      </div>

      {/* ================= 3. STATS BAR — SIX CARDS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="rounded-[20px] bg-[#110d1f]/70 backdrop-blur-xl border border-purple-500/10 p-5 flex flex-col items-center text-center gap-3 hover:border-purple-500/25 transition-all duration-500 group"
            >
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/15 text-purple-400 group-hover:bg-purple-500/15 transition-colors">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-xl font-black text-gray-100 leading-none mb-1">{stat.value}</div>
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
