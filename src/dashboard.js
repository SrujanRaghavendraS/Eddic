import React from 'react';
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import Navbar from './components/Navbar';  // Adjust the path if necessary
import './dashboard.css'; // Import the regular CSS for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Content */}
        <main className="content">
          <h2 className="title">Welcome to DICOMEditor</h2>
          <p className="description">
            DICOMEditor is a cutting-edge SaaS platform for editing and managing DICOM files, designed to streamline medical imaging workflows.
          </p>
          <p className="description">
            Also This website can be used through a Mobile/Tab
            </p>
          <div className="features-section">
            <h3 className="section-title">Key Features</h3>
            <ul className="features-list">
              <li><strong>Contrast Adjustment:</strong> Modify the contrast to highlight key details in images.</li>
              <li><strong>Brightness Adjustment:</strong> Fine-tune brightness for optimal viewing.</li>
              <li><strong>Annotation Tools:</strong> Add annotations directly to images for better context.</li>
              <li><strong>Text Overlay:</strong> Insert custom text to label or explain images.</li>
              <li><strong>Save as PNG:</strong> Export edited images in PNG format for easy sharing and documentation.</li>
            </ul>
          </div>
          <div className="objective-section">
            <h3 className="section-title">Objective</h3>
            <p className="objective-description">
              The primary goal of DICOMEditor is to make communication in medical imaging easier through intuitive editing and annotation features. It aims to enhance collaboration and ensure seamless imaging manipulation for healthcare professionals.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
