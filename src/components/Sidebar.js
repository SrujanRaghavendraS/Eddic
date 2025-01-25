import React from 'react';
import { Home, Settings, FileText, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      <style>
        {`
          /* Sidebar container */
          .sidebar {
            background-color: #1e3a8a; /* Blue background */
            color: white;
            height: 100%;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
            left: 0;
            width: 250px; /* Default width for large screens */
            transition: transform 0.3s ease-in-out;
            z-index: 1000; /* Keep the sidebar on top */
          }

          /* Sidebar Brand */
          .sidebar-brand {
            padding: 20px;
            background-color: #2563eb; /* Darker blue */
            text-align: center;
          }

          .brand-text {
            font-size: 1.5rem;
            font-weight: bold;
            color: #facc15; /* Yellow color */
          }

          /* Sidebar Navigation */
          .sidebar-nav {
            margin-top: 20px;
            flex-grow: 1;
          }

          /* Navigation List */
          .nav-list {
            list-style-type: none;
            padding-left: 0;
          }

          /* Navigation Items */
          .nav-item {
            display: flex;
            align-items: center;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            text-decoration: none;
            color: white;
            transition: background-color 0.3s ease;
          }

          /* Navigation Item Hover */
          .nav-item:hover {
            background-color: #4b8bf5; /* Lighter blue */
          }

          /* Navigation Item Icons */
          .nav-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }

          /* Navigation Item Text */
          .nav-text {
            display: inline;
          }

          /* Small screens: Collapse sidebar */
          @media screen and (max-width: 768px) {
            .nav-text {
              display: none; /* Hide text */
            }
            .nav-icon {
              margin-right: 0;
            }
            .sidebar {
              width: 60px; /* Adjust sidebar width for icons only */
            }
          }

          /* Medium and Large screens: Sidebar always visible */
          @media screen and (min-width: 768px) {
            .sidebar {
              width: 250px; /* Full sidebar width */
            }
          }
        `}
      </style>

      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <a href="/dashboard" className="nav-item">
                <Home className="nav-icon" />
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li>
              <a href="/reports" className="nav-item">
                <FileText className="nav-icon" />
                <span className="nav-text">Reports</span>
              </a>
            </li>
            <li>
              <a href="/settings" className="nav-item">
                <Settings className="nav-icon" />
                <span className="nav-text">Settings</span>
              </a>
            </li>
            <li>
              <a href="/profile" className="nav-item">
                <User className="nav-icon" />
                <span className="nav-text">Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
