import React, { useState } from 'react';
import { Camera, Send, MapPin, AlertTriangle } from 'lucide-react';

const ReportForm = () => {
  const [report, setReport] = useState({
    location: '',
    issue: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    console.log('Image uploaded:', e.target.files[0]);
    setReport((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting report:', report);
    alert('Thank you for your report!');
    setReport({ location: '', issue: '', description: '', image: null });
  };

  // Switch between 'theme-light' or 'theme-dark' for testing the themes
  const theme = 'theme-dark'; // change this to 'theme-light' to apply light theme

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme}`}>
      <div className="max-w-3xl mx-auto shadow-sm rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        <div className="bg-gray-700 py-4 px-6 dark:bg-gray-900">
          <h1 className="text-2xl font-semibold text-black dark:text-white">Delhi Water Body Monitoring</h1>
          <p className="text-gray-500 dark:text-gray-300 mt-1">Citizen Reporting Portal</p>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Help us monitor and rejuvenate Delhi's water bodies by reporting issues you observe. Your input is valuable for maintaining our water resources.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location of Water Body</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={report.location}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter specific location or coordinates"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type of Issue</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AlertTriangle className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="issue"
                  name="issue"
                  value={report.issue}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select an issue</option>
                  <option value="pollution">Water Pollution</option>
                  <option value="encroachment">Encroachment</option>
                  <option value="drying">Drying Up</option>
                  <option value="chemicals">Chemical Discharge</option>
                  <option value="debris">Debris/Waste Accumulation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Detailed Description</label>
              <textarea
                id="description"
                name="description"
                value={report.description}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Please provide a detailed description of the issue, including any relevant observations or measurements."
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Image (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {report.image ? (
                    <img src={URL.createObjectURL(report.image)} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                  ) : (
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  )}
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label htmlFor="image" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleImageUpload}
                        className="sr-only"
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="mr-2 h-5 w-5" />
                Submit Report
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 sm:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            This reporting system is maintained by the Delhi Water Board. For emergencies, please contact our hotline at 1800-XXX-XXXX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
