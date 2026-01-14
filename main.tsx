import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('featured');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern shopping experience with seamless checkout and real-time inventory.",
      color: "from-purple-900 to-blue-900",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Organize your workflow with intuitive boards and collaborative features.",
      color: "from-orange-900 to-red-900",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Track engagement metrics and grow your online presence effectively.",
      color: "from-green-900 to-teal-900",
      featured: false
    }
  ];

  // Generate contribution data (similar to GitHub)
  const generateContributions = () => {
    const contributions = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    
    for (let week = 0; week < 26; week++) {
      for (let day = 0; day < 7; day++) {
        const level = Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0;
        contributions.push(level);
      }
    }
    return contributions;
  };

  const contributions = generateContributions();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  const filteredProjects = activeTab === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-2 border-white m-4 md:m-8 p-8 md:p-12">
        {/* Profile Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-white mb-8 flex items-center justify-center bg-gray-900">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>

        {/* Name and Taglines */}
        <h1 className="text-4xl md:text-6xl font-serif mb-8">Mohit</h1>
        
        <div className="space-y-3 mb-8 font-mono text-sm md:text-base">
          <div className="flex items-center gap-3">
            <span className="text-orange-500 text-xl">›</span>
            <span>From ideas to code.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-orange-500 text-xl">›</span>
            <span>Where design meets development.</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 mb-8 font-mono text-sm md:text-base">
          <a href="mailto:mohit@example.com" className="text-blue-400 underline hover:text-blue-300">
            Mail
          </a>
          <a href="https://linkedin.com" className="text-blue-400 underline hover:text-blue-300">
            LinkedIn
          </a>
          <a href="https://twitter.com" className="text-blue-400 underline hover:text-blue-300">
            Twitter
          </a>
          <a href="https://github.com" className="text-blue-400 underline hover:text-blue-300">
            GitHub
          </a>
        </div>

        {/* Availability and CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="font-mono text-sm md:text-base">Available for Work</span>
          <button className="bg-white text-black px-6 py-3 font-mono text-sm md:text-base hover:bg-gray-200 transition-colors w-fit">
            Book a Call
          </button>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-12">
          {/* Month Labels */}
          <div className="flex gap-2 mb-2 text-xs font-mono">
            {months.map((month, i) => (
              <div key={i} className="w-16 md:w-24">{month}</div>
            ))}
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-1">
            {Array.from({ length: 26 }).map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const idx = weekIdx * 7 + dayIdx;
                  const level = contributions[idx];
                  const colors = [
                    'bg-gray-800',
                    'bg-green-900',
                    'bg-green-700',
                    'bg-green-500',
                    'bg-green-400'
                  ];
                  return (
                    <div
                      key={dayIdx}
                      className={`w-2 h-2 md:w-3 md:h-3 ${colors[level]}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Contribution Stats */}
          <div className="mt-4 flex items-center justify-between text-xs md:text-sm font-mono">
            <span>40 contributions in 2026</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-2 h-2 md:w-3 md:h-3 ${
                      ['bg-gray-800', 'bg-green-900', 'bg-green-700', 'bg-green-500', 'bg-green-400'][level]
                    }`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="border-2 border-white m-4 md:m-8 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-mono mb-8">
          <span className="text-orange-500">//</span> Projects
        </h2>

        {/* Tabs */}
        <div className="flex gap-0 mb-8">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-8 py-3 font-mono text-sm md:text-base border-2 border-white transition-colors ${
              activeTab === 'featured' ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-8 py-3 font-mono text-sm md:text-base border-2 border-l-0 border-white transition-colors ${
              activeTab === 'all' ? 'bg-white text-black' : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            All
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="border-2 border-white group hover:border-gray-500 transition-colors cursor-pointer">
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <svg className="w-20 h-20 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">{project.description}</p>
                <a href="#" className="text-blue-400 underline font-mono text-sm hover:text-blue-300 inline-flex items-center gap-2">
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="border-2 border-white m-4 md:m-8 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-mono mb-8">
          <span className="text-orange-500">//</span> Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
            { title: 'Backend', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'] },
            { title: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Database Design'] },
            { title: 'Tools', skills: ['Git', 'VS Code', 'Postman', 'npm'] }
          ].map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-mono mb-4 border-b border-white pb-2">{category.title}</h3>
              <ul className="space-y-2 font-mono text-sm">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400">
                    <span className="text-orange-500">›</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="border-2 border-white m-4 md:m-8 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-mono mb-6">
          <span className="text-orange-500">//</span> Get In Touch
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <a href="mailto:mohit@example.com" className="border-2 border-white p-3 hover:bg-white hover:text-black transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://github.com" className="border-2 border-white p-3 hover:bg-white hover:text-black transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="border-2 border-white p-3 hover:bg-white hover:text-black transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" className="border-2 border-white p-3 hover:bg-white hover:text-black transition-colors">
            <Twitter size={24} />
          </a>
        </div>

        <a href="mailto:mohit@example.com" className="inline-block bg-white text-black px-8 py-3 font-mono hover:bg-gray-200 transition-colors">
          Send Message
        </a>
      </div>

      {/* Footer */}
      <div className="text-center py-8 font-mono text-sm text-gray-500">
        © 2026 Mohit. Built with React & Tailwind CSS.
      </div>
    </div>
  );
      }
