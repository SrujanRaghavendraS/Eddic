import React, { useState } from 'react';
import Sidebar from './components/Sidebar'; // Adjust the path if necessary
import Navbar from './components/Navbar';  // Adjust the path if necessary
import Modal from './components/modal';  // Import Modal component
import './reports.css'; // Import the regular CSS for styling

const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filePath, setFilePath] = useState('');

  const handleSampleReportClick = () => {
    // Correct file path for public folder
    const predefinedPath = '/Vida_Knee.MR.Comp_DR-Gain_DR.1005.1.2021.04.27.14.44.20.58.57125557.dcm'; // Assuming the file is in the public folder
  
    // Set the file path and open the modal
    setFilePath(predefinedPath);  // Set the path of the sample report
    setIsModalOpen(true);  // Open the modal
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
          <p className="description">You can try a Sample report by clicking here</p>

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
