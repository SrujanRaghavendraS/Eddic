import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home'; // Adjust the path if necessary
import Dashboard from './dashboard'; // Adjust the path if necessary
import Reports from './reports';
import ProfilePage from './profile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
