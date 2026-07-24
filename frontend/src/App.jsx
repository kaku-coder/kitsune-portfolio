import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Loading Screen */}
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className={`min-h-screen bg-[#09090B] text-gray-100 flex overflow-x-hidden selection:bg-purple-500 selection:text-white ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {/* Invisible spacer — sidebar 88px + left 12px + 20px gap = 120px */}
        <div className="hidden md:block w-[120px] flex-shrink-0" />

        {/* Actual sidebar — fixed over the spacer, never scrolls */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main — flex-1 fills rest naturally */}
        <main className="flex-1 min-h-screen py-8 px-6 sm:px-10 lg:px-14">
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
