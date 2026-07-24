import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#09090B] text-gray-100 flex overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Invisible spacer — sidebar 88px + left 12px + 20px gap = 120px */}
      <div className="hidden md:block w-[120px] flex-shrink-0" />

      {/* Actual sidebar — fixed over the spacer, never scrolls */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main — flex-1 fills rest naturally, no margin/padding hack needed */}
      <main className="flex-1 min-h-screen py-8 px-6 sm:px-10 lg:px-14">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
