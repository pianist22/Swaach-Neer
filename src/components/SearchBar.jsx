import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const waterBodies = [
    'Atlantic Ocean',
    'Pacific Ocean',
    'Lake Victoria',
    'Nile River',
    'Amazon River',
    'Yamuna River',
    'Yakshita',
    'Hauz Khas',
    'You There',
    'Lake Ontario'
  ];

  useEffect(() => {
    if (searchTerm && !selectedOption) {
      const filtered = waterBodies.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [searchTerm, selectedOption]);

  const handleSelectOption = (option) => {
    setSearchTerm(option);
    setSelectedOption(option);
    setFilteredOptions([]); // Clear filtered options
  };

  const handleSearch = () => {
    if (selectedOption === 'Yamuna River') {
      navigate('/yamunariver');
    } else {
      alert(`Searching for: ${selectedOption || searchTerm}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center pl-60">
        <div className="flex items-center w-3/4 relative">
          <input
            type="text"
            className={`p-3 pl-4 rounded-lg border text-black dark:text-white border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 transition-all duration-300 w-full`}
            placeholder="Search for a water body..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedOption(null); // Reset selected option when typing
            }}
            onKeyDown={handleKeyPress}
          />
          <span 
            className={`absolute inset-y-0 -right-4 mr-4 flex items-center cursor-pointer border dark:border-gray-600 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300`}
            onClick={handleSearch}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 6.5a7.5 7.5 0 010 10.5z" 
              />
            </svg>
          </span>
        
          {filteredOptions.length > 0 && searchTerm && !selectedOption && (
            <ul className="absolute z-50 top-full mt-1 bg-white text-black dark:text-white dark:bg-gray-700 rounded-lg shadow-md w-full">
              {filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
