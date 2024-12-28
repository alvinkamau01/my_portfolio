import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaPython, FaGithub,FaWhatsapp } from 'react-icons/fa';
import '../css/about.css';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Full Stack Developer | Passionate Learner | Creative Problem Solver</p>
        </div>

        <motion.div className="about-body">
          <div className="about-image">
            <motion.img 
              src="https://res.cloudinary.com/df0vb7dl4/image/upload/t_Profile/v1734806983/DSC_0730_Original_vduesg.jpg" 
              alt="Profile" 
              className="profile-img"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>

          <div className="about-info">
            <p className="about-text">
              I'm a passionate Full Stack Developer with experience in creating efficient and scalable web applications. 
              My journey has allowed me to work with a variety of technologies, enabling me to build innovative solutions for both frontend and backend.
            </p>
            <p className="about-text">
              I specialize in JavaScript technologies like React for and I am continuously learning and expanding my skill set to keep up with the evolving tech landscape.
            </p>

            <div className="skills-list">
              <h3 className="skills-title">Core Skills</h3>
              <ul>
                <li><FaCode /> JavaScript / TypeScript</li>
                <li><FaReact /> React</li>
                <li><FaPython /> Python</li>
              </ul>
            </div>
            
            <div className="cta-section">
            <a href="https://wa.me/254714826023" className="cta-link" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp /> Chat on WhatsApp
</a>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
