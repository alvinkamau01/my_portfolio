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

  const handleCVDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1bUABqzs3W2wa5PIaZ6W3SnHl-oXpil0H/view';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Alvin_Kamau_CV.pdf'); // Specify the file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="landing-page">
      <main className="main-content">
        <div className="introduction">
          <h1 className="greeting">HEY, I'M ALVIN KARUMBA</h1>
          <p className="description">
            A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
          </p>
          <button className="projects-btn" onClick={handleCVDownload}>
            View CV
          </button>

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
