import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const styles = {
    navbar: {
      backgroundColor: '#1e40af', // Blue
      color: 'white',
      padding: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: isVisible ? 'flex' : 'none', // Hide navbar when not visible
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandName: {
      fontSize: '1.25rem',
      fontWeight: '600',
    },
    brandHighlight: {
      color: '#fbbf24', // Yellow
    },
  };

  const handleResize = () => {
    // Hide navbar for screen widths <= 1024px (small and medium screens)
    if (window.innerWidth <= 1024) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Attach resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={styles.navbar}>
      <h1 style={styles.brandName}>
        <span style={styles.brandHighlight}>DicomEditor</span>
      </h1>
    </header>
  );
};

export default Navbar;
