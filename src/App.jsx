import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import LearningJourney from './components/LearningJourney.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CvModal from './components/CvModal.jsx';
import { FileText, Download } from 'lucide-react';
import { downloadCVFile } from './utils/cvDownload.js';

export default function App() {
  const [showCvModal, setShowCvModal] = useState(false);

  const handleOpenCv = () => {
    setShowCvModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenCv={handleOpenCv} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCv={handleOpenCv} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CV Quick Action Pill (Discreet, bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={handleOpenCv}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-slate-900/95 border border-slate-700/80 text-slate-200 hover:text-white hover:border-blue-500 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          title="Preview or Download CV"
        >
          <FileText className="w-4 h-4 text-blue-400" />
          <span>Curriculum Vitae</span>
        </button>
      </div>

      {/* High-Resolution Interactive CV Modal */}
      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
      />
    </div>
  );
}
