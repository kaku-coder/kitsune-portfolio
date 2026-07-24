import React, { useState } from 'react';
import {
  Home,
  User,
  FolderKanban,
  Code2,
  Milestone,
  FileText,
  Mail,
  Menu,
  X
} from 'lucide-react';
import logoImg from '../assets/logo.png';

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

export default function Sidebar({ activeSection = 'home', setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'projects', label: 'PROJECTS', icon: FolderKanban },
    { id: 'skills', label: 'SKILLS', icon: Code2 },
    { id: 'journey', label: 'JOURNEY', icon: Milestone },
    { id: 'blog', label: 'BLOG', icon: FileText },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left z-50 p-2.5 rounded-xl bg-[#120f1c] border border-purple-500/30 text-purple-300 backdrop-blur-md shadow-lg"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
        />
      )}

      {/* Floating Card Sidebar Matching Reference Image */}
      <aside
        className={`fixed z-40 flex flex-col justify-between items-center py-6 transition-all duration-300 shadow-2xl ${mobileOpen
            ? 'top-0 left-0 h-screen w-64 items-start px-6 bg-[#09080e] rounded-none border-r border-purple-900/30'
            : 'top-0 left-3 h-screen w-[88px] bg-[#0b0816]/95 backdrop-blur-2xl border border-purple-900/35 rounded-3xl -translate-x-full lg:translate-x-0'
          }`}
      >
        {/* Logo — no box, just the image */}
        <div className="flex  flex-col items-center">
          <img src={logoImg} alt="Logo" className="w-[52px] h-[52px] object-contain hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-7 w-full items-center">
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
                className={`relative flex ${mobileOpen ? 'flex-row gap-4 items-center w-full justify-start' : 'flex-col items-center'} group py-1 px-2 rounded-xl transition-all ${isActive ? 'text-purple-300' : 'text-gray-400 hover:text-purple-200'
                  }`}
              >
                {isActive && (
                  <span className="absolute -left-3 lg:-left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-500 rounded-r-full shadow-[0_0_10px_#a855f7]" />
                )}

                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-purple-600/20 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]' : 'group-hover:bg-purple-900/20'
                  }`}>
                  <Icon size={18} />
                </div>

                <span className={`text-[8.5px] tracking-widest font-bold mt-0.5 uppercase ${isActive ? 'text-purple-300' : 'text-gray-400 group-hover:text-purple-200'
                  }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-5 text-gray-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
              <GithubIcon size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
              <LinkedinIcon size={16} />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">
              <TwitterIcon size={16} />
            </a>
          </div>

          <div className="text-[8.5px] text-gray-400 text-center font-mono">
            © 2026 Prakash.
          </div>
        </div>
      </aside>
    </>
  );
}
