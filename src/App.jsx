import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Donation from './components/Donation';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light/dark mode
import PaymentPage from './components/PaymentPage';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import YamunaRiver from './components/YamunaRiver';
import Temperature from './components/Temperature';
import SensorManagement from './components/SensorManagement';
import AlertSystem from './components/AlertSystem';
import ReportForm from './components/CitizenReportForm';
import YamunaCleanupPage from './components/News';
import image from './assets/SwachhNeer.png'; // Image for SwachhNeer
import MapPage from './components/maps';

function App() {
  const [darkMode, setDarkMode] = useState(true); // State to manage dark mode

  // Effect to add/remove 'dark' class from the root div
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`flex min-h-screen z-50 ${darkMode ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar />
        <div className="w-8"></div>

        {/* Main Content Layout */}
        <div className="flex-1 pl-5 bg-gray-100 dark:bg-gray-800 text-white">
          {/* Theme Toggle Icon positioned above the content */}
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? (
                <FaSun size={24} color="#FACC15" />
              ) : (
                <FaMoon size={24} color="#3498db" />
              )}
            </button>
          </div>

          {/* SwachhNeer Title with Icon and SearchBar Component */}
          <div className="flex items-center pl-4 pt-4 pr-96">
            {/* Resized SwachhNeer Image */}
            <div className="flex items-center">
              <img
                src={image}
                alt="SwachhNeer Logo"
                className="h-12 w-12" // Adjust height and width for better alignment with the text and search bar
              />
              <div className="text-xl pl-2 font-bold text-black dark:text-white">
                SwachhNeer
              </div>
            </div>

            {/* SearchBar Component */}
            <div className="flex-grow">
              <SearchBar />
            </div>
          </div>

          {/* Routes and Page Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yamunariver" element={<YamunaRiver />} />
            <Route path="/temperature" element={<Temperature />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/sensordetection" element={<SensorManagement />} />
            <Route path="/alerts" element={<AlertSystem />} />
            <Route path="/reportform" element={<ReportForm />} />
            <Route path="/news" element={<YamunaCleanupPage />} />
            <Route path="/map" element={<MapPage />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
