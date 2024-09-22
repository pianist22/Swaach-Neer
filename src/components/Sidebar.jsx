import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaDonate, FaHome, FaBell, FaFileAlt, FaMicrochip, FaCalendarAlt, FaHandHoldingHeart } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar initially closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-full fixed bg-gray-900 text-white z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-14'}`}>
      <div className="p-6 flex items-center justify-between">
        <h1 className={`text-2xl font-bold transition-all duration-300 ${!isOpen && 'hidden'}`}>Jaal-Jeven</h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars className="text-xl" />
        </button>
      </div>

      <nav className="mt-10">
        <NavLink
          to="/"
          className="py-4 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaHome />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Home</span>
        </NavLink>

        <NavLink
          to="/sensordetection"
          className="py-4 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaMicrochip />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Sensors</span>
        </NavLink>

        <NavLink
          to="/alerts"
          className="py-4 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaBell />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Alert System</span>
        </NavLink>
        
        <NavLink
          to="/reportform"
          className="py-4 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaFileAlt />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Reporting Portal</span>
        </NavLink>

        <NavLink
          to="/donation"
          className="py-4 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FaDonate />
          <span className={`${isOpen ? 'inline' : 'hidden'} ml-4`}>Donation Portal</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
