import React from 'react';
import Sidebar from './components/Sidebar';  // Sidebar component
import Navbar from './components/Navbar';   // Navbar component
import { Github, Linkedin, Mail, Phone } from 'lucide-react'; // Icons from lucide-react

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      {/* Sidebar inherited */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="main-content">
        {/* Navbar inherited */}
        <Navbar />

        {/* Profile Content */}
        <main className="content">
          <div className="profile-container">
            <div className="profile-header">
              <h1 className="profile-name">Srujan Raghavendra S</h1>
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <Mail size={24} color="#000" />
                <span className="detail-text">srujan9712@gmail.com</span>
              </div>

              <div className="detail-item">
                <Phone size={24} color="#000" />
                <span className="detail-text">(+91)9110415398</span>
              </div>

              <div className="detail-item">
                <Github size={24} color="#000" />
                <span className="detail-text">
                  <a href="https://github.com/SrujanRaghavendraS" target="_blank" rel="noopener noreferrer">
                    github.com/SrujanRaghavendraS
                  </a>
                </span>
              </div>

              <div className="detail-item">
                <Linkedin size={24} color="#000" />
                <span className="detail-text">
                  <a href="https://www.linkedin.com/in/srujan-raghavendra-s/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/SrujanRaghavendraS
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        /* Reset body margin and padding */
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .profile-page-container {
          display: flex;
          height: 100vh;
          flex-direction: row;
        }

        .sidebar-container {
          width: 250px;
          background-color: #333;
          color: white;
          height: 100vh;
        }

        .main-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .profile-container {
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-top: 20px; /* Reduced margin for better alignment */
          width: auto; /* Automatically adjust width */
          margin-right:40px;
        }

        .profile-header {
          text-align: center;
        }

        .profile-name {
          font-size: 30px;
          font-weight: bold;
          color: #333;
        }

        .detail-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .detail-item .lucide-react {
          margin-right: 10px;
        }

        .detail-text {
          font-size: 16px;
          color: #333;
        }

        .detail-text a {
          color: #2563eb;
          text-decoration: none;
        }

        .detail-text a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .profile-page-container {
            flex-direction: column;
          }

          .sidebar-container {
            width: 100%;
            height: auto;
          }

          .main-content {
            padding: 10px;
          }

          .profile-container {
            padding: 15px;
          }

          .profile-name {
            font-size: 24px;
          }

          .detail-text {
            font-size: 14px;
          }

          .detail-item {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 480px) {
          .profile-name {
            font-size: 20px;
          }

          .detail-text {
            font-size: 12px;
          }

          .profile-container {
            padding: 10px;
          }

          .detail-item {
            margin-bottom: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
