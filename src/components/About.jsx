import React from 'react';
import { GraduationCap, FolderGit2, Calendar, Briefcase, Languages, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      title: 'Computer Science Student',
      subtitle: 'Haramaya University',
      description: 'Undergraduate studies in algorithms, database design, and object-oriented software engineering.',
      icon: GraduationCap,
      color: 'text-blue-400',
      border: 'border-blue-500/20',
      bg: 'bg-blue-500/5'
    },
    {
      title: '5+ Projects',
      subtitle: 'Personal & Academic',
      description: 'Built hands-on web applications, utilities, and OOP exercises exploring real user workflows.',
      icon: FolderGit2,
      color: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-500/5'
    },
    {
      title: 'Expected Graduation: 2028',
      subtitle: 'B.Sc. in Computer Science',
      description: 'Committed to steady four-year academic rigor and parallel practical software craftsmanship.',
      icon: Calendar,
      color: 'text-purple-400',
      border: 'border-purple-500/20',
      bg: 'bg-purple-500/5'
    },
    {
      title: 'Open to Opportunities',
      subtitle: 'Internships & Junior Roles',
      description: 'Eager to collaborate, contribute to real-world development teams, and learn from experienced mentors.',
      icon: Briefcase,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5'
    }
  ];

  const languages = [
    { name: 'English', level: 'Professional & Technical Proficiency' },
    { name: 'Afaan Oromoo', level: 'Native / Bilingual' },
    { name: 'Amharic', level: 'Professional Fluency' }
  ];

  return (
    <section id="about" className="py-20 bg-[#090d16] border-t border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            BACKGROUND & OBJECTIVES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Introduction Prose & Context */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I'm a Computer Science student at Haramaya University working toward becoming a Full-Stack Developer. I enjoy building web applications, practicing problem-solving, and learning how frontend interfaces connect with backend services and databases. Through personal and academic projects, I'm developing my skills in JavaScript, React, Java, and web development fundamentals.
          </p>
        </div>

        {/* 4 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-6 rounded-2xl bg-slate-900/60 border ${card.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80 shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mb-2.5">
                    {card.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Location Ribbon */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
              <Languages className="w-4 h-4 text-indigo-400" />
              <span>Languages Spoken</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              {languages.map((lang, idx) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-slate-500">({lang.level})</span>
                  {idx < languages.length - 1 && <span className="text-slate-600 hidden sm:inline">·</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-4 md:pt-0 border-t md:border-t-0 border-slate-800 w-full md:w-auto">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Based in Haramaya, Oromia, Ethiopia</span>
          </div>
        </div>

      </div>
    </section>
  );
}
