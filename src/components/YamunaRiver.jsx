import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(annotationPlugin);
import image from '../assets/image.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate






ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement, Tooltip, Legend);

const YamunaRiver = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDataset, setActiveDataset] = useState('Temperature');
  const [filteredOptions, setFilteredOptions] = useState([null]);
  const waterBodies = ['Yamuna River', 'Yakshita', 'Hauz Khas', 'You There', 'Lake Ontario'];
  const navigate = useNavigate();
  const [showTemperature, setShowTemperature] = useState(false); // New state to manage Temperature visibility


  const handleNavigation = (parameter) => {
    if (parameter === 'Temperature (°C)') {
      navigate('/temperature'); // Navigate to the Temperature component route
    }
    // You can add more conditions for other parameters here if needed
  };
  
  useEffect(() => {
    const filtered = waterBodies.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const handleNavigate = () => {
    navigate('/news'); // Navigate to the cleanup page
  };



  const transactions = [
    { id: '01e4d5aa', name: 'johndoe', amount: 43.95 },
    { id: '0315d5aa', name: 'jackdoew', amount: 138.46 },
    { id: '02e4d5bb', name: 'abercrohny', amount: 249.0 },
  ];

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
);



  // Bar Chart Data
  const barData = {
    labels: ['2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
    datasets: [
      {
        label: 'Temperature',
        data: [27,29.6,31.2, 30.7,33,32.5,31,27],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dissolved Oxygen', // New dataset
        data: [5.4,0.6,2.8, 5,6.2,2.4,2.4,3.2],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'pH', // New dataset
        data: [8.5, 8.2,7.6,7.8,8, 7.3,7.9,8],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Conductivity', // New dataset
        data: [1498,1750,2045, 2240,2320,1550,1641,2240],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Bio-Chemical Oxygen Demand (BOD)', // New dataset
        data: [39,17,36,37, 48,35,57,48],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Nitrate', // New dataset
        data: [9.7,12.5,17.5,6.2,0.15,1.2,2.8,1.5],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
      {
        label: 'Total Coliform', // New dataset
        data: [20000,9200,54000, 16000,39000,24000,28000,8400],
        backgroundColor: 'rgba(3, 138, 255, 0.5)',
        borderColor: 'rgba(3, 138, 255, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on the x-axis
        },
        ticks: {
          font: {
            size: 14, // Larger and clearer font for labels
            weight: 'bold',
          },
          color: '#787878', // Darker color for better readability
        },
        title: {
          display: true,
          text: 'Parameters', // Adding an x-axis label
          color: '#787878',
          font: {
            size: 20,
            weight: 'bold',
          },
        },
        barPercentage: 0.6, // Adjust the bar width to make them narrower
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)', // Faint grid lines for the y-axis
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#787878',
          stepSize: 2, // Customize the step size for cleaner increments
          beginAtZero: true,
        },
        title: {
          display: true,
          text: 'Values',
          color: '#787878',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top', // Move the legend to the top
        labels: {
          font: {
            size: 14,
          },
          color: '#787878',
          padding: 20,
          boxWidth: 20,
          usePointStyle: true, // Use points instead of rectangles for legend
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)', // Darker background for tooltips
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        boxPadding: 5,
      },
    },
  };
   // Function to handle dataset selection
  const handleDatasetChange = (e) => {
    setActiveDataset(e.target.value); // Set the active dataset to the selected value
  };

  // Filter the active dataset for the bar chart
  const filteredBarData = {
    ...barData,
    datasets: barData.datasets.filter((dataset) => dataset.label === activeDataset),
  };
  
  

  // Pie Chart Data
  const pieData = {
    labels: ['Ph Scale', 'Conductivity', 'D-O', 'Nitrate'],
    datasets: [
      {
        data: [10, 20, 23, 74],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'right',  // Position the labels on the right
        align: 'center',    // Align the labels vertically in the center
        labels: {
          boxWidth: 20,    // Box size for the legend
          padding: 20,     // Padding between legend items
          usePointStyle: true,  // Use point styles for better visual representation
        },
      },
    },
    maintainAspectRatio: false,  // Allow the chart to resize properly
  };

  // Line Chart Data
const lineData = {
  labels: ['Low','Medium', 'High', 'Unsafe','Lethal'],
  datasets: [
    {
      label: 'Risk Levels',
      data: [20, 25, 38, 45, 53],
      fill: false,
      backgroundColor: 'rgba(3, 138, 255, 0.5)',
      borderColor: 'rgba(3, 138, 255, 0.5)',
    },
  ],
};

// Generate dashed line annotations for each data point
const annotations = lineData.datasets[0].data.map((value, index) => ({
  type: 'line',
  yMin: value,
  yMax: value,
  borderColor: 'white',
  borderWidth: 2,
  borderDash: [5, 5], // Dashed line
  label: {
    enabled: false,
    content: `Value ${value}`,
    position: 'end',
    backgroundColor: 'rgba(3, 138, 255, 0.5)',
    color: 'white',
    font: {
      size: 12,
    },
  },
}));

// Line Chart Options with Annotations for Each Data Point
const lineOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // Disable vertical grid lines
      },
    },
    y: {
      grid: {
        display: false, // Disable general horizontal grid lines
      },
      ticks: {
        beginAtZero: true, // Start Y-axis at 0
        color: '#787878', // Set the color of the Y-axis ticks
        stepSize:5, // Set the interval between ticks (optional)
      },
    },
  },
  plugins: {
    annotation: {
      annotations: annotations, // Add the generated annotations
    },
  },
};





  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300"
    >
      <h1 className="text-4xl font-bold pt-2 text-black dark:text-white mb-6">WaterSafety</h1>

      


      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="md:grid-cols-2 lg:grid-cols-4 mt-16"
      >
        <div className='flex'>
          <img width={500} src={image} alt="" />
          <div className='grid-flow-col'>
          <h1 className='pl-48 text-2xl font-bold text-black dark:text-white mb-4 '>The Yamuna River: A Case of Extreme Pollution</h1>
          <h1 className='pl-24 text-lg  text-black dark:text-white'>The Yamuna River, once revered as sacred and central to the cultural and spiritual life of millions, has tragically become one of the most polluted rivers in India. What was once a lifeline for northern India is now plagued by an ever-increasing flow of industrial waste, untreated sewage, agricultural runoff, and household garbage. Every day, over 3 billion liters of untreated sewage and 500 million liters of industrial waste enter the river, turning its once pristine waters into a toxic cesspool. The river’s pollution is so severe that in parts of the Yamuna, oxygen levels have plummeted to almost zero, creating what are known as "dead zones," where aquatic life can no longer survive.
          <br />
          <br />
          This rampant contamination has led to the collapse of the river's ecosystem, with native species of fish, amphibians, and plant life disappearing from once-thriving stretches of the river. Furthermore, the toxic nature of the water poses extreme health risks to the millions of people who live along its banks and rely on its water for drinking, bathing, and irrigation. Many communities, particularly in urban areas like Delhi, face chronic health issues ranging from skin diseases to more severe conditions caused by exposure to heavy metals such as lead, mercury, and arsenic, all of which are found in dangerously high concentrations in the Yamuna's waters.</h1>
          </div>
        </div>
        
      </motion.div>

      {/* Chart Section */} 
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Contamination Levels</h2>
        
        {!isLoaded && (
          <div className="mt-6 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-8 w-8 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        )}

        {isLoaded && (
          <div className="mb-4">
          <label htmlFor="datasetSelect" className="block text-black dark:text-white mb-2">Select Parameter:</label>
          <select
            id="datasetSelect"
            value={activeDataset}
            onChange={handleDatasetChange}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
          >
            <option value="Temperature">Temperature</option>
            <option value="Dissolved Oxygen">Dissolved Oxygen</option>
            <option value="pH">pH</option>
            <option value="Conductivity">Conductivity</option>
            <option value="Bio-Chemical Oxygen Demand (BOD)">Bio-Chemical Oxygen Demand (BOD)</option>
            <option value="Nitrate">Nitrate</option>
            <option value="Total Coliform">Total Coliform</option>
          </select>
          
        </div>
        )}

{isLoaded && (
  <div className="mt-6 h-auto flex flex-col md:flex-row items-center justify-between bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6">
    {isLoaded && (
      <div className="w-full md:w-3/4 lg:w-2/3 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
        <Bar data={filteredBarData} options={barOptions} />
      </div>
    )}
    <div className="w-full md:w-1/3 lg:w-1/4 h-auto flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mx-6">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3 text-center transition-all duration-300 ease-in-out">
        Parameters
      </h3>
      <ol className="list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
        {[
          { name: "Temperature (°C)" },
          { name: "Dissolved Oxygen (mg/L)" },
          { name: "pH" },
          { name: "Conductivity (µmhos/cm)" },
          { name: "Bio-Chemical Oxygen Demand (mg/L)" },
          { name: "Nitrate (mg/L)" },
          { name: "Total Coliform (MPN/100L)" },
        ].map((item, index) => (
          <li
          key={index}
          className="pl-4 transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
          onClick={() => handleNavigation(item.name)} // Handle click
        >
          {item.name}
        </li>
        ))}
      </ol>
    </div>
  </div>
)}


      </motion.div>
      

      {/* Pie and Line Chart Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900  p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Statistics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg">
            {isLoaded && <Pie data={pieData} options={pieOptions} />}
          </div>
          <div className="h-64 bg-gray-200 dark:bg-black rounded-lg">
            {isLoaded && <Line data={lineData} options={lineOptions} />}
          </div>

        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Steps Taken By Government To clean Yamuna River :</h2>
        <div className="space-y-4">
          {/* Button to navigate to YamunaCleanupPage */}
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          View Details
        </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default YamunaRiver;
