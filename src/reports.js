import React, { useState } from 'react';
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import Navbar from './components/Navbar';  // Adjust the path if necessary
import Modal from './components/modal';  // Import Modal component
import './reports.css'; // Import the regular CSS for styling

const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filePath, setFilePath] = useState('');

  const handleSampleReportClick = () => {
    // Pass a predefined path when the first card is clicked
    const predefinedPath = '/path/to/sample/report.dcm'; // Change this to your actual path
    setFilePath(predefinedPath);
    setIsModalOpen(true);
  };

  const handleAddReportClick = () => {
    // Open file explorer when the "Add New Report" card is clicked
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.dcm'; // Optional: Limit file selection to .dcm files
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFilePath(URL.createObjectURL(file)); // Get file path for local display
        setIsModalOpen(true);
      }
    };
    input.click();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="reports-container">
      {/* Sidebar is always visible */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Content */}
        <main className="content">
          <h2 className="title">Reports</h2>
          <p className="description">Manage and view your reports here.</p>

          {/* Cards Section */}
          <div className="cards-container">
            {/* Sample Report Card */}
            <div className="card" onClick={handleSampleReportClick}>
              <h3 className="card-title">Sample Report</h3>
              <p className="card-description">This is a sample report card with details.</p>
            </div>

            {/* Add New Report Card */}
            <div className="card add-card" onClick={handleAddReportClick}>
              <h3 className="add-sign">+</h3>
              <p className="add-description">Add a new report</p>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} filePath={filePath} />
    </div>
  );
};

export default Reports;
