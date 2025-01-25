import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Welcome to <span style={styles.highlight}>EdDic</span>
        </h1>
        <p style={styles.paragraph}>
          A seamless, high-performance solution for viewing, editing, and analyzing DICOM images in real-time. Empowering lab technicians with the best tools for accurate diagnostics.
        </p>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    background: 'linear-gradient(to right, #2563eb, #1e3a8a)',
    color: 'white',
    padding: '2rem 1rem', // Add padding for small screens
    margin: 0,
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Dynamically adjusts based on screen size
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', // Dynamically adjusts based on screen size
    lineHeight: 1.6,
    marginBottom: '2rem',
    maxWidth: '36rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 1rem', // Add padding for extra small screens
  },
  highlight: {
    color: '#f59e0b',
  },
};

export default HeroSection;
