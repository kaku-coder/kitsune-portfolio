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
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-[#09090B] text-gray-100 flex overflow-x-hidden selection:bg-purple-500 selection:text-white ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-[110px] flex-shrink-0" />

        {/* Sidebar Component */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content Area — Clean padding, zero extra top/bottom margin */}
        <main className="flex-1 py-5 px-4 sm:px-6 lg:px-8 min-w-0 max-w-[1720px]">
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
