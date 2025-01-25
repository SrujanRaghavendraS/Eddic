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
    paddingTop: '1rem',
    paddingBottom: '7rem',
    margin: 0, // Remove the margin around the section
    width: '100%', // Ensure the section takes the full width of the screen
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto', // Center the container
    paddingLeft: '0', // Remove padding on the left
    paddingRight: '0', // Remove padding on the right
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
    maxWidth: '36rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  highlight: {
    color: '#f59e0b', 
  }
};

export default HeroSection;
