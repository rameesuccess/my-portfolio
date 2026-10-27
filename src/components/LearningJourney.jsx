import React from 'react';
import { CheckCircle2, Clock, Target, ArrowRight, Milestone } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      number: '01',
      title: 'HTML & CSS Fundamentals',
      status: 'Mastered Fundamentals',
      state: 'completed',
      description: 'Learned semantic document layout, modern box model, flexbox, CSS grid, and responsive styling techniques.',
      skills: ['HTML5 Semantics', 'CSS Flexbox/Grid', 'Responsive Breakpoints']
    },
    {
      number: '02',
      title: 'JavaScript & DOM Manipulation',
      status: 'Hands-on Practice',
      state: 'completed',
      description: 'Built interactive dynamic web logic, event handling, browser storage, arrays, and ES6+ modern features.',
      skills: ['ES6+ Syntax', 'DOM Events', 'Local Storage', 'Array Methods']
    },
    {
      number: '03',
      title: 'Java Object-Oriented Programming',
      status: 'Academic & Practical',
      state: 'completed',
      description: 'Studied core computer science programming: classes, objects, attributes, encapsulation, methods, and IDE workflows in NetBeans.',
      skills: ['OOP Principles', 'Encapsulation', 'Classes & Objects', 'NetBeans']
    },
    {
      number: '04',
      title: 'Git & GitHub Version Control',
      status: 'Workflow Foundation',
      state: 'completed',
      description: 'Mastered command-line Git commits, branch management, remote repository syncing, and project versioning.',
      skills: ['Git CLI', 'GitHub Repositories', 'Version Tracking']
    },
    {
      number: '05',
      title: 'MySQL & Database Design',
      status: 'Active Focus',
      state: 'current',
      description: 'Exploring relational schema design, primary & foreign keys, SQL querying fundamentals, and data integrity.',
      skills: ['Relational Schemas', 'SQL Queries', 'Data Modeling']
    },
    {
      number: '06',
      title: 'React & Component Architecture',
      status: 'Active Focus',
      state: 'current',
      description: 'Developing single-page applications, component hierarchies, state management with hooks, and modern frontend tooling.',
      skills: ['JSX', 'React Hooks', 'Component Props', 'Vite']
    },
    {
      number: '07',
      title: 'Node.js & Express.js',
      status: 'Upcoming Milestone',
      state: 'upcoming',
      description: 'Learning server-side JavaScript, RESTful API design, HTTP request lifecycles, and backend route handling.',
      skills: ['Node.js Runtime', 'Express Routing', 'REST APIs']
    },
    {
      number: '08',
      title: 'Full-Stack Application Development',
      status: 'Target Horizon',
      state: 'upcoming',
      description: 'Connecting React client frontends to Express APIs and persistent relational databases for end-to-end full-stack software.',
      skills: ['Client-Server Integration', 'Authentication Flow', 'Full Deployment']
    }
  ];

  return (
    <section id="journey" className="py-20 bg-[#090d16] border-t border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            PROGRESSION & GROWTH
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            My Learning Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-slate-300">
            A transparent chronicle of my continuous progression — from web fundamentals to object-oriented programming, modern React, and full-stack architecture.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const isCompleted = step.state === 'completed';
            const isCurrent = step.state === 'current';

            return (
              <div
                key={step.number}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isCurrent
                    ? 'bg-slate-900/90 border-2 border-blue-500/80 shadow-lg shadow-blue-500/10'
                    : isCompleted
                    ? 'bg-slate-900/60 border border-slate-800 shadow-md'
                    : 'bg-slate-950/40 border border-slate-800/60 opacity-80'
                }`}
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      PHASE {step.number}
                    </span>
                    {isCompleted && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    )}
                    {isCurrent && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 animate-spin" />
                        <span>Active Focus</span>
                      </span>
                    )}
                    {!isCompleted && !isCurrent && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">
                        <Target className="w-3 h-3" />
                        <span>Next Step</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-skills tags */}
                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1">
                  {step.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            This roadmap reflects an ongoing commitment to steady, everyday growth and deep foundational understanding.
          </p>
        </div>

      </div>
    </section>
  );
}
