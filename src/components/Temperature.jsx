import React from 'react';
import image2 from '../assets/image2.png'
import { motion } from 'framer-motion';

const Temperature = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
    <div className="flex justify-center items-center min-h-screen">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white">
      <img 
        className="w-full h-48 object-cover" 
        src={image2} 
        alt="Yamuna River"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">Impact of High Temperatures on Yamuna River</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Rising temperatures have significantly affected the Yamuna River, reducing its water levels and causing severe drought in surrounding regions. The excessive heat has also led to increased pollution and algal blooms, further deteriorating water quality.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">#ClimateChange</span>
        <span className="inline-block bg-red-200 text-red-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">#HeatWave</span>
        <span className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">#WaterCrisis</span>
      </div>
      {/* Close Button */}
      
    </div>
    </div>
    </motion.div>
  );
};

export default Temperature;
