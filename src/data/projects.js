/**
 * Remedan Usleyman — Portfolio Project Data
 * 
 * To add or edit projects:
 * 1. Add a new object to this array.
 * 2. If you don't have a live demo or GitHub link yet, leave githubUrl or liveUrl as an empty string ("").
 *    The website will automatically hide any missing button so there are no broken links!
 */

export const projectsData = [
  {
    id: 'smart-todo-list',
    title: 'Smart To-Do List',
    category: 'Web Application',
    type: 'web',
    description: 'A task management web application that helps users organize daily tasks, mark tasks as completed, filter tasks, and save their task list using browser Local Storage.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    features: [
      'Create, edit, toggle completed, and delete tasks',
      'Filter tasks by All, Active, and Completed',
      'Persistent data storage across browser sessions using localStorage',
      'Clean responsive layout with task count counters'
    ],
    // Add your real GitHub repository URL when ready
    githubUrl: 'https://github.com/rameesuccess',
    // Leave as empty string ("") if not deployed yet
    liveUrl: '',
    accentColor: 'from-blue-600/20 to-indigo-600/10',
    icon: 'CheckSquare',
    highlight: 'Productivity Tool'
  },
  {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    category: 'Web Application',
    type: 'web',
    description: 'A personal expense tracking project for recording transactions, organizing expenses into categories, and reviewing spending information.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    features: [
      'Record income and expenses with amount and category tags',
      'Categorized transaction breakdown (Food, Transport, Utilities, etc.)',
      'Dynamic balance and total spending recalculations',
      'Local storage persistence for offline financial tracking'
    ],
    githubUrl: 'https://github.com/rameesuccess',
    liveUrl: '',
    accentColor: 'from-emerald-600/20 to-teal-600/10',
    icon: 'Receipt',
    highlight: 'Finance Management'
  },
  {
    id: 'quiz-application',
    title: 'Quiz Application',
    category: 'Interactive Web',
    type: 'web',
    description: 'An interactive quiz application for answering questions, tracking responses, and displaying results.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Multiple-choice questions with real-time answer verification',
      'Score tracking and dynamic question progress bar',
      'Instant feedback with detailed answer review at the end',
      'Replay functionality to test knowledge retention'
    ],
    githubUrl: 'https://github.com/rameesuccess',
    liveUrl: '',
    accentColor: 'from-purple-600/20 to-pink-600/10',
    icon: 'Brain',
    highlight: 'EdTech & Gaming'
  },
  {
    id: 'ramadan-quran-academy',
    title: 'Ramadan Online Quran Academy',
    category: 'Educational Platform',
    type: 'web',
    description: 'An educational website project designed to present Quran-learning courses and provide information about online learning and student registration.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    learningNote: 'Backend and database technologies are part of my ongoing learning journey.',
    features: [
      'Modular course catalog and instructor profiles',
      'Student registration and inquiry interface',
      'Modern responsive design optimized for mobile and desktop learners',
      'Clean educational presentation focused on community access'
    ],
    githubUrl: 'https://github.com/rameesuccess',
    liveUrl: '',
    accentColor: 'from-amber-600/20 to-orange-600/10',
    icon: 'BookOpen',
    highlight: 'Community EdTech'
  },
  {
    id: 'java-oop-practice',
    title: 'Java OOP Practice',
    category: 'Academic Software Design',
    type: 'academic',
    description: 'Academic Java exercises demonstrating classes, objects, attributes, methods, encapsulation, and fundamental object-oriented programming concepts.',
    technologies: ['Java', 'Apache NetBeans', 'OOP Principles'],
    features: [
      'Class hierarchies with encapsulation and accessor/mutator methods',
      'Polymorphism, inheritance, and interface abstraction models',
      'Console-based data flow and input validation routines',
      'Structured academic exercises built in Apache NetBeans'
    ],
    githubUrl: 'https://github.com/rameesuccess',
    liveUrl: '',
    accentColor: 'from-cyan-600/20 to-blue-600/10',
    icon: 'Code2',
    highlight: 'Core CS Foundations'
  }
];
