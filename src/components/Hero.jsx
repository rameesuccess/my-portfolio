import React from 'react';
import { ArrowDown, Download, Mail, ExternalLink, Code2, Sparkles, MapPin, GraduationCap, Eye } from 'lucide-react';
import { downloadCVFile } from '../utils/cvDownload.js';

export default function Hero({ onOpenCv }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCv = (e) => {
    e.preventDefault();
    downloadCVFile();
    if (onOpenCv) {
      onOpenCv();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions (col-span-7) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status indicator: Open to Opportunities */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-medium text-blue-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Open to Opportunities · Internships & Junior Roles</span>
            </div>

            {/* Small kicker */}
            <p className="text-sm sm:text-base font-semibold tracking-wider text-blue-400 uppercase mb-2">
              HELLO, I'M
            </p>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight text-balance">
              Remedan Usleyman
            </h1>

            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent mb-6">
              Aspiring Full-Stack Developer
            </h2>

            {/* Introduction Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              I'm a Computer Science student passionate about building modern web experiences and practical applications. I enjoy solving problems, learning new technologies, and turning ideas into useful digital products.
            </p>

            {/* Location & Academic Affiliation Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 mb-8 pb-4 border-b border-slate-800/80 w-full max-w-2xl">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Haramaya University · Grad 2028</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Haramaya, Ethiopia</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>1+ Years Hands-on</span>
              </div>
            </div>

            {/* 3 Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full">
              {/* Button 1: View My Projects */}
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Button 2: Contact Me */}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>

              {/* Button 3: Download CV */}
              <button
                type="button"
                onClick={handleDownloadCv}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-blue-300 bg-blue-950/40 hover:bg-blue-900/40 border border-blue-700/60 hover:text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Profile Image Visual (col-span-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer decorative halo ring */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"
                aria-hidden="true"
              />

              {/* Photo Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-2.5 border border-slate-700/80 shadow-2xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src="/profile-photo.jpg"
                    alt="Remedan Usleyman — Aspiring Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle edge scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Subtitle Card Under Photo */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-300">Remedan Usleyman</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenCv && onOpenCv()}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View CV</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
