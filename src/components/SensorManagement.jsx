import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const SensorManagement = () => {
  const [sensors, setSensors] = useState([
    { id: 1, name: 'pH Sensor', location: 'Yamuna River', status: 'Active' },
    { id: 2, name: 'Dissolved Oxygen (DO) Sensor', location: 'Sanjay Lake', status: 'Inactive' },
    { id: 3, name: 'Conductivity Sensor', location: 'Naini Lake', status: 'Active' },
  ]);

  const [newSensor, setNewSensor] = useState({ name: '', location: '', status: 'Active' });
  

  // Simulate loading for 2 seconds on page load
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const addSensor = () => {
    const id = sensors.length ? sensors[sensors.length - 1].id + 1 : 1;
    setSensors([...sensors, { id, ...newSensor }]);
    setNewSensor({ name: '', location: '', status: 'Active' });
  };

  const deleteSensor = (id) => {
    setSensors(sensors.filter(sensor => sensor.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSensor({ ...newSensor, [name]: value });
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Loading Animation */}
       
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Sensor Management</h1>
          
          {/* Add Sensor Form */}
          <div className="mb-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Sensor</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Sensor Name"
                value={newSensor.name}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newSensor.location}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <select
                name="status"
                value={newSensor.status}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addSensor}
                className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300"
              >
                Add Sensor
              </motion.button>
            </div>
          </div>

          {/* Sensor List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Manage Sensors</h2>
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b bg-gray-200 dark:bg-gray-900 text-left text-gray-900 dark:text-gray-100">ID</th>
                  <th className="py-3 px-4 border-b bg-gray-200 dark:bg-gray-900 text-left text-gray-900 dark:text-gray-100">Name</th>
                  <th className="py-3 px-4 border-b bg-gray-200 dark:bg-gray-900 text-left text-gray-900 dark:text-gray-100">Location</th>
                  <th className="py-3 px-4 border-b bg-gray-200 dark:bg-gray-900 text-left text-gray-900 dark:text-gray-100">Status</th>
                  <th className="py-3 px-4 border-b bg-gray-200 dark:bg-gray-900 text-left text-gray-900 dark:text-gray-100">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sensors.map((sensor) => (
                  <motion.tr
                    key={sensor.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sensor.id * 0.1 }}
                    className="border-b dark:border-gray-600"
                  >
                    <td className="py-3 px-4">{sensor.id}</td>
                    <td className="py-3 px-4">{sensor.name}</td>
                    <td className="py-3 px-4">{sensor.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg ${
                          sensor.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                      >
                        {sensor.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteSensor(sensor.id)}
                        className="px-4 py-2 bg-red-500 dark:bg-red-400 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-500 transition-all duration-300"
                      >
                        Delete
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      )
    </div>
  );
};

export default SensorManagement;
