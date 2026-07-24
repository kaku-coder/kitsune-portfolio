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
      <div className={`h-screen w-screen bg-[#09090B] text-gray-100 flex overflow-hidden selection:bg-purple-500 selection:text-white ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {/* Sidebar Spacer */}
        <div className="hidden md:block w-[100px] flex-shrink-0" />

        {/* Sidebar Component */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content Area — Single Screen Fit without vertical scrollbar */}
        <main className="flex-1 h-screen overflow-y-auto lg:overflow-hidden py-3 px-4 sm:px-6 lg:px-8 min-w-0 max-w-[1720px] flex flex-col justify-between">
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
