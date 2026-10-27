import React, { useState } from 'react';
import { projectsData } from '../data/projects.js';
import { 
  ExternalLink, 
  Github, 
  CheckSquare, 
  Receipt, 
  Brain, 
  BookOpen, 
  Code2, 
  Layers, 
  Info,
  X,
  Plus,
  Trash2,
  Check
} from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Quick interactive demo state for To-Do inside modal
  const [demoTasks, setDemoTasks] = useState([
    { id: 1, text: 'Review Data Structures lecture notes', completed: true },
    { id: 2, text: 'Practice Java OOP Inheritance exercises', completed: false },
    { id: 3, text: 'Build responsive React navbar component', completed: false }
  ]);
  const [demoInput, setDemoInput] = useState('');

  const toggleTask = (id) => {
    setDemoTasks(tasks =>
      tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!demoInput.trim()) return;
    setDemoTasks(tasks => [
      ...tasks,
      { id: Date.now(), text: demoInput.trim(), completed: false }
    ]);
    setDemoInput('');
  };

  const deleteTask = (id) => {
    setDemoTasks(tasks => tasks.filter(t => t.id !== id));
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'CheckSquare': return CheckSquare;
      case 'Receipt': return Receipt;
      case 'Brain': return Brain;
      case 'BookOpen': return BookOpen;
      case 'Code2': return Code2;
      default: return Layers;
    }
  };

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'all') return true;
    return project.type === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 bg-[#090d16] border-t border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            PORTFOLIO SHOWCASE
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            My Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-slate-300">
            Some of the projects I've worked on while learning and practicing software development.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('web')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Applications
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('academic')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'academic'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Academic CS Exercises
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = getIcon(project.icon);
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
            const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== '');

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                <div>
                  {/* Visual CSS-Generated Header Representation */}
                  <div className={`h-44 w-full bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden`}>
                    {/* Decorative grid pattern */}
                    <div 
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '16px 16px'
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wide text-slate-300 uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-950/60 border border-slate-700/60 text-slate-300 font-mono">
                        {project.highlight}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-blue-400 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 min-h-[4.5rem]">
                      {project.description}
                    </p>

                    {/* Learning Note if applicable */}
                    {project.learningNote && (
                      <p className="text-[11px] text-amber-300/90 bg-amber-950/30 border border-amber-800/40 rounded-lg p-2.5 mb-4">
                        <span className="font-semibold">Note:</span> {project.learningNote}
                      </p>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[11px] font-medium bg-slate-950/80 border border-slate-800 text-slate-300 rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* GitHub Button - ONLY shown if valid URL */}
                    {hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/90 hover:bg-slate-700 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}

                    {/* Live Demo Button - ONLY shown if valid URL */}
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                        title="View Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />

          <div className="relative bg-[#0d1322] border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono uppercase text-blue-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Description */}
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-700 text-slate-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Project Features */}
            {selectedProject.features && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Capabilities & Practice Focus
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Interactive Demo for To-Do List */}
            {selectedProject.id === 'smart-todo-list' && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Interactive Concept Demo
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    Try adding and checking tasks
                  </span>
                </div>

                <form onSubmit={addTask} className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder="Enter a task..."
                    className="flex-1 px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </form>

                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {demoTasks.map(task => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs"
                    >
                      <button
                        type="button"
                        onClick={() => toggleTask(task.id)}
                        className="flex items-center gap-2 text-left cursor-pointer flex-1"
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          task.completed ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-600'
                        }`}>
                          {task.completed && <Check className="w-3 h-3" />}
                        </div>
                        <span className={task.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                          {task.text}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        className="text-slate-500 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Created as part of developer learning portfolio
              </span>
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
