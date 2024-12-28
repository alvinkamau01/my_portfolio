import React, { useState } from 'react';
import '../css/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React'],
      className: 'project1',
      category: 'Web Development',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'Machine learning-powered conversational AI assistant',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      className: 'project2',
      category: 'Machine Learning',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform fitness tracking mobile application',
      technologies: ['React Native', 'Firebase'],
      className: 'project3',
      category: 'Mobile Development',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Secure blockchain-based voting platform',
      technologies: ['Solidity', 'React', 'Web3.js'],
      className: 'project4',
      category: 'Blockchain',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure blockchain-based voting platform',
      technologies: ['Solidity', 'React', 'Web3.js'],
      className: 'project4',
      category: 'Blockchain',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const categories = [
    'All', 
    'Web Development Frontend', 
    'Backend Development ', 
    
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions and creative developments
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`project-image-container ${project.className}`}>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
