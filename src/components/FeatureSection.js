import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" style={styles.featuresSection}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Key Features</h2>
        <div style={styles.gridContainer}>
          {/* Feature 1 */}
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>DICOM Viewer</h3>
            <p style={styles.featureDescription}>
              Effortlessly view DICOM images with high-definition rendering, supporting a wide range of formats and image sizes.
            </p>
          </div>
          {/* Feature 2 */}
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Advanced Image Editing</h3>
            <p style={styles.featureDescription}>
              Utilize powerful editing tools to enhance DICOM images, apply filters, and prepare images for analysis or reporting.
            </p>
          </div>
          {/* Feature 3 */}
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>Automated Reporting</h3>
            <p style={styles.featureDescription}>
              Generate detailed, professional reports with the click of a button, summarizing image analysis and findings.
            </p>
          </div>
        </div>
        {/* Start Button */}
        <div style={styles.ctaContainer}>
          <a href="/dashboard" style={styles.ctaButton}>
            Start Using EdDic
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  featuresSection: {
    paddingTop: '6rem',
    paddingBottom: '6rem',
    backgroundColor: '#f9fafb',
  },
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  heading: {
    fontSize: '2.25rem',
    fontWeight: 600,
    textAlign: 'center',
    color: '#1e40af',
    marginBottom: '3rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // Set 3 equal-width columns
    gap: '2rem',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    transition: 'all 0.3s ease-in-out',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#2563eb',
    marginBottom: '1rem',
  },
  featureDescription: {
    color: '#4b5563',
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  ctaButton: {
    backgroundColor: '#fbbf24',
    color: '#1e40af',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '1.25rem',
    borderRadius: '9999px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  },
};

export default FeaturesSection;
