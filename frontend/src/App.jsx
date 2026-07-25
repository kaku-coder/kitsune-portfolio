import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Aboutpage from './pages/Aboutpage';
import LoadingScreen from './components/LoadingScreen';
import MagneticCursor from './components/MagneticCursor';
import logoImg from './assets/logo.png';

import Projectpage from './pages/Projectpage';
import Skillpage from './pages/Skillpage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [transPhase, setTransPhase] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

      <div className={`min-h-screen text-gray-100 flex selection:text-white ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 tt-main-bg tt-selection`}>
        <div className="hidden md:block w-[120px] flex-shrink-0" />
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} />
        <main className="flex-1 min-h-screen">
          {activeSection === 'about' ? (
            <Aboutpage theme={theme} toggleTheme={toggleTheme} />
          ) : activeSection === 'projects' ? (
            <Projectpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : activeSection === 'skills' ? (
            <Skillpage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          ) : (
            <HomePage theme={theme} toggleTheme={toggleTheme} setActiveSection={setActiveSection} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
