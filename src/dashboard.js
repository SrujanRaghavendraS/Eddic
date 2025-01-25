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
          <h2 className="title">Welcome to the Dashboard</h2>
          <p className="description">
            Here you can access various tools, view reports, manage settings, and more.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
