import React from 'react';
import { motion } from 'framer-motion';
import image3 from '../assets/image3.png'
import image5 from '../assets/image5.png'
import videoUrl from  '../assets/video-1.mp4'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/news'); // Navigate to the cleanup page
  };
  return (
    <div className="min-h-screen pt-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
    {/* Navbar */}
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 transition-transform duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-gray-200 hover:text-blue-700 dark:hover:text-gray-400 transition-all ease-in-out duration-300">
          Water Monitoring
        </div>
        <div className="space-x-6">
          <a href="/map" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300">Map</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300">About</a>
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300">Features</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-400 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>

    {/* Background Video Section with Text */}
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="container mx-auto text-center relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl font-bold text-white mb-4">
          Safeguarding Water, Empowering Lives
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Leveraging the power of AI-driven monitoring systems to protect our most vital resource—water. From real-time alerts to long-term sustainability, we are committed to preserving the health of Delhi's water bodies.
        </p>
      </div>
    </section>

    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-700 text-white py-16 transition-transform ease-in-out duration-500 hover:scale-105">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>

      {/* Content of the section */}
      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Revolutionizing Water Body Monitoring
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          A real-time technological solution for survey and monitoring of water bodies in Delhi. Empowering cities with actionable data for rejuvenation and sustainable management.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#features"
          className="bg-white dark:bg-gray-700 dark:text-gray-300 text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-100 dark:hover:bg-gray-600 transition duration-300 transform hover:scale-110 animate-bounce"
        >
          Learn More
        </motion.a>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-700 transition-all ease-in-out duration-500 hover:bg-blue-200 dark:hover:bg-gray-700">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-600 dark:text-gray-300 mb-4 transition-colors duration-500 hover:text-blue-800 dark:hover:text-gray-400"
          >
            About Our Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8 animate-slideUp transition-all duration-700"
          >
            The water bodies in Delhi are facing severe environmental degradation due to unchecked pollution and waste disposal. Our solution provides real-time monitoring using advanced IoT sensors, machine learning algorithms, and predictive analytics to measure water quality, pollution levels, and overall ecosystem health. The system delivers insights to help policymakers and citizens make data-driven decisions to rejuvenate and manage these critical water resources.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section
    id="features"
    className="relative py-20 bg-cover bg-center bg-no-repeat from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    style={{ backgroundImage: `url(${image5})` }}
>
  <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 z-0"></div> {/* Semi-transparent overlay */}
  <div className="relative container mx-auto px-6 z-10"> {/* Ensure content is above overlay */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center text-blue-600 dark:text-gray-300 mb-8"
    >
      Key Features
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer z-20" // Added z-index and cursor
      >
        <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Real-Time Data</h3>
        <p className="text-gray-700 dark:text-gray-400">
          With real-time data from connected sensors, the platform provides instantaneous updates on water quality, pH levels, dissolved oxygen, and contamination alerts.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer z-20"
      >
        <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Predictive Analytics</h3>
        <p className="text-gray-700 dark:text-gray-400">
          Predict and prevent future pollution incidents using AI-powered analytics that track trends and forecast environmental threats based on historical data.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 cursor-pointer z-20"
      >
        <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Public Alerts & Notifications</h3>
        <p className="text-gray-700 dark:text-gray-400">
          Timely alerts to the public and authorities for contamination risks, water-level changes, and health advisories. Stay informed with mobile notifications.
        </p>
      </motion.div>
    </div>
  </div>
</section>



      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 hover:opacity-90">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-600 dark:text-gray-300 mb-8"
          >
            How It Works
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img src={image3} alt="Monitoring system" className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-1/2 md:ml-8 mt-8 md:mt-0"
            >
              <h3 className="text-3xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Data Collection</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                Sensors are installed in strategic locations across water bodies. These sensors monitor key parameters such as temperature, turbidity, and chemical contaminants in real-time.
              </p>
              <h3 className="text-3xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Data Analytics</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 mb-4">
                The data is transmitted to our cloud-based platform, where it is processed and analyzed using advanced algorithms to provide actionable insights.
              </p>
              <h3 className="text-3xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Actionable Insights</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400">
                Authorities and the public can access this data via dashboards and mobile apps, allowing for rapid response to pollution events and informed water management decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-900 dark:to-blue-900">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-600 dark:text-gray-300 mb-8"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Learn how our water monitoring solution has transformed the management of water bodies in different parts of the city. From reducing pollution levels to improving water quality for nearby communities, our system is making a positive impact every day.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Success Story #1</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Our system helped reduce contamination by 40% in one of Delhi’s most polluted lakes, giving local ecosystems a chance to thrive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Success Story #2</h3>
              <p className="text-gray-700 dark:text-gray-400">
                With real-time data, local authorities prevented several major pollution incidents, safeguarding local communities and aquatic life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-gray-300 mb-4">Success Story #3</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Our predictive analytics reduced response time by 50%, helping authorities take preemptive measures to control pollution levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue- 100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-600 dark:text-gray-300 mb-4 transition-colors duration-500 hover:text-blue-800 dark:hover:text-gray-400"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8"
          >
            Interested in learning more or partnering with us? Reach out for more information about our water monitoring solutions.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="mailto:info@watermonitoring.com"
            className="bg-blue-600 dark:bg-gray-700 dark:text-gray-300 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-gray-600 transition duration-300 transform hover:scale-110 animate-bounce"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}

export default Home;