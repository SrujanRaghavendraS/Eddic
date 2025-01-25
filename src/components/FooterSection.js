import React from 'react';

const FooterSection = () => {
  const styles = {
    footerSection: {
      backgroundColor: '#1e3a8a', // bg-blue-800
      color: 'white',
      paddingTop: '2rem', // py-8
      paddingBottom: '2rem', // py-8
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      paddingLeft: '1.5rem', // px-6
      paddingRight: '1.5rem', // px-6
    },
    paragraph: {
      fontSize: '1.125rem', // text-lg
      marginBottom: '1rem', // mb-4
    },
    fontSemiBold: {
      fontWeight: 600, // font-semibold
    },
    linkContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem', // space-x-4
    },
    link: {
      color: '#93c5fd', // text-blue-200
      textDecoration: 'none',
      transition: 'color 0.3s ease', // transition-colors duration-300
    },
    linkHover: {
      color: '#fbbf24', // hover:text-yellow-300
    },
  };

  return (
    <footer style={styles.footerSection}>
      <div style={styles.container}>
        <p style={styles.paragraph}>
          &copy; {new Date().getFullYear()}{' '}
          <span style={styles.fontSemiBold}>EdDic</span>. All Rights Reserved.
        </p>
        <div style={styles.linkContainer}>
          <a
            href="/"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Privacy Policy
          </a>
          <a
            href="/"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseLeave={(e) => (e.target.style.color = styles.link.color)}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
