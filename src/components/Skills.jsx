import React, { useState } from 'react';
import { Layout, Server, Database, Code, Terminal, Sparkles, BookOpen } from 'lucide-react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      color: 'text-blue-400',
      description: 'Building responsive, accessible interfaces and modern web layouts.',
      skills: [
        { name: 'HTML5', status: 'practical' },
        { name: 'CSS3', status: 'practical' },
        { name: 'JavaScript (ES6+)', status: 'practical' },
        { name: 'DOM Manipulation', status: 'practical' },
        { name: 'Responsive Web Design', status: 'practical' },
        { name: 'React', status: 'learning', note: 'Developing practical skills' },
        { name: 'Next.js', status: 'learning', note: 'Learning foundations' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      color: 'text-indigo-400',
      description: 'Understanding server-side mechanics, routing, and HTTP services.',
      skills: [
        { name: 'Node.js', status: 'learning', note: 'Learning runtime & modules' },
        { name: 'Express.js', status: 'learning', note: 'Learning routing & middleware' },
        { name: 'REST API Development', status: 'learning', note: 'API design principles' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      color: 'text-teal-400',
      description: 'Data modeling, schema design, and relational query fundamentals.',
      skills: [
        { name: 'MySQL Fundamentals', status: 'practical' },
        { name: 'Database Schema Design', status: 'practical' },
        { name: 'Browser Local Storage', status: 'practical' },
        { name: 'PostgreSQL', status: 'exploring', note: 'Exploring relational features' },
        { name: 'MongoDB', status: 'exploring', note: 'Exploring document models' },
      ],
    },
    {
      id: 'programming',
      title: 'Programming & CS Foundations',
      icon: Code,
      color: 'text-purple-400',
      description: 'Object-oriented programming, data structures, and algorithmic logic.',
      skills: [
        { name: 'Java', status: 'practical' },
        { name: 'Object-Oriented Programming (OOP)', status: 'practical' },
        { name: 'Classes & Objects', status: 'practical' },
        { name: 'Encapsulation', status: 'practical' },
        { name: 'Methods & Getters/Setters', status: 'practical' },
      ],
    },
    {
      id: 'tools',
      title: 'Developer Tools & Workflow',
      icon: Terminal,
      color: 'text-amber-400',
      description: 'Version control, development environments, and code editors.',
      skills: [
        { name: 'Git', status: 'practical' },
        { name: 'GitHub', status: 'practical' },
        { name: 'Visual Studio Code', status: 'practical' },
        { name: 'Apache NetBeans', status: 'practical' },
      ],
    },
  ];

  const getStatusBadge = (status, note) => {
    switch (status) {
      case 'practical':
        return (
          <span className="inline-flex items-center text-[11px] font-medium text-emerald-400">
            Practical Skill
          </span>
        );
      case 'learning':
        return (
          <span className="inline-flex items-center text-[11px] font-medium text-blue-400">
            {note || 'Learning'}
          </span>
        );
      case 'exploring':
        return (
          <span className="inline-flex items-center text-[11px] font-medium text-purple-400">
            {note || 'Exploring'}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            TOOLKIT & COMPETENCIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-slate-300">
            A transparent overview of my current practical capabilities alongside technologies I am actively studying as an aspiring full-stack developer.
          </p>
        </div>

        {/* Legend / Status Clarity Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-200">Practical Skill:</span>
            <span className="text-slate-400">Used in projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="font-semibold text-slate-200">Currently Learning:</span>
            <span className="text-slate-400">Active coursework & study</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="font-semibold text-slate-200">Exploring:</span>
            <span className="text-slate-400">Foundational interest</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 shadow-md shadow-black/20"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-950/40 border border-slate-800/50 hover:border-slate-700/80 transition-colors"
                      >
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        {getStatusBadge(skill.status, skill.note)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
