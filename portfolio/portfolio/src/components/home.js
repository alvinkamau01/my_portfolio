import React, { useState, useEffect } from 'react';
import '../css/home.css';
import SocialLinks from './sociallinks';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [socialLinksLoaded, setSocialLinksLoaded] = useState(false);

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

  useEffect(() => {
    // Simulate social links loading
    const loadSocialLinks = async () => {
      // Simulate an async operation (e.g., fetching data)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSocialLinksLoaded(true);
    };

    loadSocialLinks();
  }, []);

  const handleCVDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1WsvHMc7uG1LITEiXYn3sQMdD-LeqgIh9/view?usp=sharing';
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

          {/* Conditionally render SocialLinks after loading */}
          {!isMobile && socialLinksLoaded && <SocialLinks />}
        </div>
      </main>

      {/* Scroll indicator at the bottom */}
      <div className="scroll-indicator">&#9660;</div>
    </div>
  );
}

export default Home;
