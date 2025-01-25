import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeatureSection';
import FooterSection from './components/FooterSection';
// import './styles.css'; // Import your regular CSS file here

const HomePage = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
};


export default HomePage;
