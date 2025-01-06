import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import '../css/home.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/alvin-karumba-ba5450253/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/alvinkamau01" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
