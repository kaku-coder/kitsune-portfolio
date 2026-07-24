import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Aboutpage from './pages/Aboutpage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-[#09090B] text-gray-100 flex overflow-x-hidden selection:bg-purple-500 selection:text-white ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <div className="hidden md:block w-[120px] flex-shrink-0" />
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 min-h-screen sm:px-4 lg:px-6">
          {activeSection === 'about' ? (
            <Aboutpage />
          ) : (
            <HomePage setActiveSection={setActiveSection} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
