import React, { useState } from 'react';
import {
  Home,
  User,
  FolderKanban,
  Code2,
  FileText,
  Mail,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import logosummer from '../assets/logosummer.png';
import AIAssistant from './AIAssistant';

const GithubIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Sidebar({ activeSection = 'home', setActiveSection, theme = 'dark', toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const isLight = theme === 'light';

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'projects', label: 'PROJECTS', icon: FolderKanban },
    { id: 'skills', label: 'SKILLS', icon: Code2 },
    { id: 'blog', label: 'BLOG', icon: FileText },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 z-50 px-4 flex items-center justify-between pointer-events-none">
        {/* Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`pointer-events-auto p-2.5 rounded-xl border backdrop-blur-md shadow-lg ${isLight
              ? 'bg-orange-50/90 border-orange-200 text-orange-600'
              : 'bg-[#120f1c]/90 border-purple-500/30 text-purple-300'
            }`}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Theme Toggle Button */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            className={`pointer-events-auto w-10 h-10 rounded-xl border backdrop-blur-md shadow-lg flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'bg-orange-50/90 border-orange-200 text-orange-600'
                : 'bg-[#120f1c]/90 border-purple-500/30 text-purple-300'
            }`}
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
        )}
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
        />
      )}

      {/* Floating Card Sidebar */}
      <aside
        className={`fixed z-40 flex flex-col items-center py-5 transition-all duration-300 shadow-2xl ${mobileOpen
          ? `top-0 left-0 h-screen w-64 items-start px-6 rounded-none border-r justify-between ${isLight ? 'bg-orange-50 border-orange-200' : 'bg-[#09080e] border-purple-900/30'}`
          : `top-0 left-3 h-screen w-[88px] backdrop-blur-2xl rounded-3xl -translate-x-full lg:translate-x-0 justify-between ${isLight ? 'bg-white/95 border border-orange-200' : 'bg-[#0b0816]/95 border border-purple-900/35'}`
          }`}
      >
        {/* Top: Logo */}
        <div className="flex flex-col items-center">
          <img src={isLight ? logosummer : logoImg} alt="Logo" className={`w-[48px] h-[48px] object-contain hover:scale-110 transition-transform cursor-pointer ${isLight ? 'drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]' : 'drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]'}`} />
        </div>

        {/* Middle: Nav Links */}
        <nav className={`flex flex-col w-full items-center ${mobileOpen ? 'gap-1' : 'gap-5'}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (setActiveSection) setActiveSection(item.id);
                  setMobileOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative flex ${mobileOpen ? 'flex-row gap-4 items-center w-full justify-start py-2 px-1' : 'flex-col items-center py-1 px-2'} group rounded-xl transition-all ${isActive
                    ? isLight ? 'text-orange-600' : 'text-purple-300'
                    : isLight ? 'text-stone-400 hover:text-orange-500' : 'text-gray-400 hover:text-purple-200'
                  }`}
              >
                {isActive && (
                  <span className={`absolute -left-3 lg:-left-2 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full ${isLight ? 'bg-orange-500 shadow-[0_0_10px_#f97316]' : 'bg-purple-500 shadow-[0_0_10px_#a855f7]'}`} />
                )}

                <div className={`p-2 rounded-xl transition-all ${isActive
                  ? isLight ? 'bg-orange-100 text-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.2)]' : 'bg-purple-600/20 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  : isLight ? 'group-hover:bg-orange-50' : 'group-hover:bg-purple-900/20'
                  }`}>
                  <Icon size={17} />
                </div>

                <span className={`text-[8px] tracking-widest font-bold mt-0.5 uppercase ${isActive
                  ? isLight ? 'text-orange-600' : 'text-purple-300'
                  : isLight ? 'text-stone-400 group-hover:text-orange-500' : 'text-gray-400 group-hover:text-purple-200'
                  }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom: Let's Talk + Socials */}
        <div className="flex flex-col items-center gap-4">
          {/* Let's Talk Button */}
          <button
            onClick={() => setAiOpen(true)}
            className={`group flex flex-col items-center gap-1.5 cursor-pointer transition-all`}
          >
            <div className={`p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 ${
              isLight
                ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.35)] group-hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]'
                : 'bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]'
            }`}>
              <MessageCircle size={17} />
            </div>
            <span className={`text-[7.5px] tracking-widest font-extrabold uppercase ${
              isLight ? 'text-orange-600' : 'text-purple-300'
            }`}>
              {mobileOpen ? "LET'S TALK" : "LET'S TALK"}
            </span>
          </button>

          {/* Divider */}
          <div className={`w-6 h-px ${isLight ? 'bg-orange-200' : 'bg-purple-900/50'}`} />

          {/* Social Icons */}
          <div className={`flex flex-col gap-3.5 ${isLight ? 'text-stone-400' : 'text-gray-500'}`}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={isLight ? 'hover:text-orange-500 transition-colors' : 'hover:text-purple-300 transition-colors'}>
              <GithubIcon size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={isLight ? 'hover:text-orange-500 transition-colors' : 'hover:text-purple-300 transition-colors'}>
              <LinkedinIcon size={15} />
            </a>
            <a href="https://x.com/prakash70394254" target="_blank" rel="noreferrer" className={isLight ? 'hover:text-orange-500 transition-colors' : 'hover:text-purple-300 transition-colors'}>
              <TwitterIcon size={15} />
            </a>
          </div>

          <div className={`text-[7px] text-center font-mono ${isLight ? 'text-stone-300' : 'text-gray-600'}`}>
            © 2026
          </div>
        </div>
      </aside>

      <AIAssistant isOpen={aiOpen} onClose={() => setAiOpen(false)} theme={theme} />
    </>
  );
}
