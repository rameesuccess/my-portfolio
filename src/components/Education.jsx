import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const academicFocusAreas = [
    { title: 'Programming & OOP', detail: 'Object-oriented programming principles with Java, modular structures, and design' },
    { title: 'Web Development', detail: 'HTML5, CSS3, modern JavaScript, responsive interfaces, and React workflows' },
    { title: 'Database Concepts', detail: 'Relational data modeling, MySQL fundamentals, and database normalization' },
    { title: 'CS Fundamentals', detail: 'Algorithms, data structures, and computer science problem-solving' }
  ];

  return (
    <section id="education" className="py-20 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            ACADEMIC BACKGROUND
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 shadow-xl shadow-black/20 hover:border-slate-700/80 transition-all">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-base font-semibold text-blue-400 mb-2">
                    Haramaya University
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      Haramaya, Ethiopia
                    </span>
                    <span className="text-slate-600 hidden sm:inline">·</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      Expected Graduation: 2028
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="shrink-0 self-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-blue-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Currently Enrolled
                </span>
              </div>
            </div>

            {/* Official Description */}
            <div className="py-6 border-b border-slate-800/80">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Studying Computer Science while developing practical skills in programming, web development, database concepts, and object-oriented software design.
              </p>
            </div>

            {/* Core Academic Study Pillars */}
            <div className="pt-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Key Areas of Academic & Practical Exploration</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicFocusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-sm font-semibold text-white">
                        {area.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
