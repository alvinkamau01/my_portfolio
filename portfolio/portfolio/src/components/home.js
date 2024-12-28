import React, { useState, useEffect } from 'react';
import '../css/home.css';
import SocialLinks from './sociallinks';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial render
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="landing-page">
      <main className="main-content">
        <div className="introduction">
          <h1 className="greeting">HEY, I'M ALVIN KARUMBA</h1>
          <p className="description">
            A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
          </p>
          <a
            href="https://res.cloudinary.com/df0vb7dl4/image/upload/v1734981307/Alvin_Kamau_CV_ok9ewc.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="projects-btn">Download CV</button>
          </a>

          {/* Conditionally render SocialLinks if not on mobile */}
          {!isMobile && <SocialLinks />}
        </div>
      </main>

      {/* Scroll indicator at the bottom */}
      <div className="scroll-indicator">&#9660;</div>
    </div>
  );
}

export default Home;
