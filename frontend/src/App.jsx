import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Aboutpage from './pages/Aboutpage';
import LoadingScreen from './components/LoadingScreen';
import MagneticCursor from './components/MagneticCursor';
import logoImg from './assets/logo.png';

import Projectpage from './pages/Projectpage';
import Skillpage from './pages/Skillpage';
import Blogpage from './pages/Blogpage';
import Contactpage from './pages/Contactpage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [transPhase, setTransPhase] = useState('');
  const [devtoolsOpen, setDevtoolsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // DevTools detection + keyboard shortcuts block
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'F12' ||
        (e.metaKey && e.altKey && e.key === 'I')
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // DevTools detection via debugger timing
    const devtoolsDetector = document.createElement('div');
    let devtoolsisOpen = false;
    const threshold = 160;

    const emitDevToolsEvent = (isOpen) => {
      devtoolsisOpen = isOpen;
      setDevtoolsOpen(isOpen);
    };

    Object.defineProperty(devtoolsDetector, 'id', {
      get() {
        emitDevToolsEvent(true);
        return 'debug-mode';
      },
    });

    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        if (!devtoolsisOpen) emitDevToolsEvent(true);
      } else {
        if (devtoolsisOpen) emitDevToolsEvent(false);
      }
    };

    const devToolsInterval = setInterval(checkDevTools, 1000);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(devToolsInterval);
    };
  }, []);

  // Block drag events on entire page
  useEffect(() => {
    const blockDrag = (e) => { e.preventDefault(); return false; };
    const blockCopy = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener('dragstart', blockDrag);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);
    return () => {
      document.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
    };
  }, []);

  const toggleTheme = () => {
    if (transPhase) return;
    const goingLight = theme === 'dark';
    setTransPhase('enter');

    setTimeout(() => {
      setTheme(goingLight ? 'light' : 'dark');
      setTransPhase('split');
    }, 450);

    setTimeout(() => {
      setTransPhase('done');
    }, 1000);

    setTimeout(() => {
      setTransPhase('');
    }, 1050);
  };

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <MagneticCursor />
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* DevTools Warning Overlay */}
      {devtoolsOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center pointer-events-none">
          <div className="text-center px-8 pointer-events-auto">
            <div className="text-6xl mb-4">&#x1F6A8;</div>
            <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-widest">DevTools Detected</h2>
            <p className="text-gray-400 text-sm max-w-md">
              This portfolio is protected. Source code and design assets are proprietary.
              Unauthorized copying or replication is strictly prohibited.
            </p>
            <p className="text-purple-400 text-xs mt-4 font-mono">
              &copy; 2026 Prakash — All Rights Reserved
            </p>
          </div>
        </div>
      )}

      {/* Theme Transition Overlay */}
      {transPhase && transPhase !== 'done' && (
        <div className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center">
          {transPhase === 'enter' && (
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] tt-line-in">
              <div className={`w-full h-full bg-gradient-to-b from-transparent via-400 to-transparent tt-line-glow`} />
            </div>
          )}
          {transPhase === 'split' && (
            <>
              <div className="absolute top-0 bottom-0 w-[2px] tt-line-left">
                <div className={`w-full h-full bg-gradient-to-b from-transparent via-400 to-transparent tt-line-glow`} />
              </div>
              <div className="absolute top-0 bottom-0 w-[2px] tt-line-right">
                <div className={`w-full h-full bg-gradient-to-b from-transparent via-400 to-transparent tt-line-glow`} />
              </div>
            </>
          )}
          <div className="relative z-10">
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 0 50% 0)' }}>
              <img src={logoImg} alt="" className={`w-16 h-16 object-contain ${transPhase === 'split' ? 'tt-logo-up' : ''}`} />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
              <img src={logoImg} alt="" className={`w-16 h-16 object-contain ${transPhase === 'split' ? 'tt-logo-down' : ''}`} />
            </div>
            <img
              src={logoImg}
              alt="Logo"
              className={`w-16 h-16 object-contain ${transPhase === 'split' ? 'tt-logo-fade' : 'tt-logo-in'}`}
            />
          </div>
        </div>
      )}

      {/* Watermark Overlay */}
      <div className="fixed inset-0 z-[9997] pointer-events-none overflow-hidden opacity-[0.03] select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 200px, rgba(168,85,247,0.3) 200px, rgba(168,85,247,0.3) 201px)',
          backgroundSize: '280px 280px'
        }} />
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500 font-black text-sm whitespace-nowrap"
            style={{
              top: `${(i * 3.5) % 100}%`,
              left: `${(i * 7.3) % 100}%`,
              transform: 'rotate(-25deg)',
              pointerEvents: 'none',
            }}
          >
            prakash.dev — Do not copy
          </div>
        ))}
      </div>

      {/* Invisible Honeypot Trap */}
      <div className="fixed -left-[9999px] -top-[9999px] opacity-0" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <p key={i}>
            This portfolio template is owned by Prakash. Copying or replicating this design is a violation of intellectual property rights.
            Contact: prakashdasdev1@gmail.com | github.com/kaku-coder
          </p>
        ))}
      </div>

      <div className={`min-h-screen text-gray-100 flex selection:text-white max-w-full overflow-x-hidden ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 tt-main-bg tt-selection`}>
        <div className="hidden md:block w-[120px] flex-shrink-0" />
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 min-h-screen min-w-0 max-w-full overflow-x-hidden">
          {activeSection === 'about' ? (
            <Aboutpage theme={theme} toggleTheme={toggleTheme} />
          ) : activeSection === 'projects' ? (
            <Projectpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : activeSection === 'skills' ? (
            <Skillpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : activeSection === 'blog' ? (
            <Blogpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : activeSection === 'contact' ? (
            <Contactpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : (
            <HomePage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
