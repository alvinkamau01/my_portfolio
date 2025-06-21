import React, { useState,useEffect} from 'react';
import '../css/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('Web Development Frontend');
 
  const projectsData = [
    {
      id: 1,
      title: 'Bot Battlr',
      description: 'An app that allows one to create,add,update and delete bots',
      technologies: ['React','node.js'],
      className: 'project1',
      category: 'Web Development Frontend',
      githubLink: 'https://github.com/alvinkamau01/bot_battlr',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'University tours',
      description: 'A collaboratively built app that allows virtual touring of universities in kenya',
      technologies: ['react','node.js'],
      className: 'project2',
      category: 'Web Development Frontend',
      githubLink: 'https://github.com/azmi-adan/university-tours',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Mavs first five',
      description: "An application that allows addition,deletion,update and viewing of players on the roster of players on the mavericks dallas, a basketball team's, first five",
      technologies: ['Python', 'Flask','Sqlite'],
      className: 'project3',
      category: 'Backend Development ',
      githubLink: 'https://github.com/alvinkamau01/mavs_stats_first_5',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Music Backend',
      description: "An application that allows addition,deletion,update and viewing of music tracks through a mobile application through RESTful API endpoints",
      technologies: ['Python', 'Flask','Sqlite'],
      className: 'project4',
      category: 'Backend Development ',
      githubLink: 'https://github.com/alvinkamau01/music_backend_app',
      liveLink: 'https://music-app-1-d8ws.onrender.com/'
    },
    {
      id: 5,
      title: 'Heroes Backend',
      description: "A RESTful API backend service that manages a collection of heroes. The application implements full CRUD operations allowing users to create, read, update, and delete hero records",
      technologies: ['Python', 'Flask','Sqlite'],
      className: 'project5',
      category: 'Backend Development ',
      githubLink: 'https://github.com/alvinkamau01/code_challenge_1_phase_4.git',
      liveLink: ''
    },
    {
      id: 6,
      title: 'CiraLuxe',
      description: "An application that allows the client to ran an online store for their products",
      technologies: ['React','node.js','Firestore'],
      className: 'project6',
      category: 'Full Stack Development',
      githubLink: 'https://github.com/alvinkamau01/cira_luxe.git',
      liveLink: 'https://cira-luxe-alvinkamau01-alvinkamau01s-projects.vercel.app/'
    }
  ];

  const categories = [
    'Web Development Frontend', 
    'Backend Development ',
    'Full Stack Development',
    
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
                      rel="noopener"
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
