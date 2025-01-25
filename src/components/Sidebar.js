import React from 'react';
import { Home, Settings, FileText, User} from 'lucide-react';
import './Sidebar.css'; // Import the regular CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li>
            <a href="/dashboard" className="nav-item">
              <Home className="nav-icon" />
              Home
            </a>
          </li>
          <li>
            <a href="/reports" className="nav-item">
              <FileText className="nav-icon" />
              Reports
            </a>
          </li>
          <li>
            <a href="/dashboard?tab=settings" className="nav-item">
              <Settings className="nav-icon" />
              Settings
            </a>
          </li>
          <li>
            <a href="/dashboard?tab=profile" className="nav-item">
              <User className="nav-icon" />
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
