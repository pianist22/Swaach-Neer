import React from 'react';
import { motion } from 'framer-motion';

const cleanupSteps = [
  {
    id: 1,
    title: "Increase in Sewage Treatment Capacity",
    description:
      "The Delhi government has increased sewage treatment capacity by setting up new plants to ensure untreated sewage doesn’t reach the Yamuna.",
    date: "July 5, 2024",
  },
  {
    id: 2,
    title: "Riverfront Development Projects",
    description:
      "Several riverfront development projects have been launched to promote a cleaner, greener Yamuna, including eco-tourism and public spaces.",
    date: "June 18, 2024",
  },
  {
    id: 3,
    title: "New Wastewater Management Technologies",
    description:
      "Advanced wastewater treatment technologies have been deployed to improve the water quality of the Yamuna and prevent further pollution.",
    date: "May 25, 2024",
  },
  {
    id: 4,
    title: "River Rejuvenation Drives",
    description:
      "A mass river rejuvenation drive was initiated with participation from various NGOs, local communities, and volunteers to clean the river banks.",
    date: "April 14, 2024",
  },
];

const YamunaCleanupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold text-black dark:text-white mb-6 text-center"
        >
          Steps Taken to Clean the Yamuna River
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Discover the key initiatives and efforts made by the government and communities to rejuvenate the Yamuna River.
          </p>
        </motion.div>

        <div className="space-y-8">
          {cleanupSteps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.id * 0.2, duration: 0.4 }}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">
                {step.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                {step.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Date: {new Date(step.date).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YamunaCleanupPage;
