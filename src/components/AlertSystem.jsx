import React from 'react';

const AlertSystem = () => {
  const alerts = [
    {
      id: 1,
      waterBody: 'Yamuna River',
      alertType: 'Water Pollution',
      severity: 'High',
      description: 'AI has detected a significant increase in pollutants. Immediate action required.',
    },
    {
      id: 2,
      waterBody: 'Hauz Khas Lake',
      alertType: 'Water Level Rising',
      severity: 'Medium',
      description: 'Water level has risen by 20% in the last 24 hours. Monitoring required.',
    },
    {
      id: 3,
      waterBody: 'Sanjay Lake',
      alertType: 'Algal Bloom Detected',
      severity: 'Low',
      description: 'Early-stage algal bloom detected. Low severity, but regular monitoring advised.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-white">AI-Powered Predictive Alerts</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            Real-time monitoring and alerts for water bodies in Delhi
          </p>
        </header>

        {/* Alerts Section */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Current Alerts</h2>
          <div className="space-y-4">
            {alerts.map(alert => (
              <div
                key={alert.id}
                className={`p-4 border-l-4 ${
                  alert.severity === 'High'
                    ? 'border-red-500'
                    : alert.severity === 'Medium'
                    ? 'border-yellow-500'
                    : 'border-green-500'
                } bg-white dark:bg-gray-900 rounded-lg shadow-md`}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {alert.waterBody}: {alert.alertType} ({alert.severity} Severity)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{alert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Monitoring Statistics Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Monitoring Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Water Bodies Monitored</h3>
              <p className="text-4xl font-bold text-blue-800 dark:text-white">15</p>
            </div>
            <div className="bg-green-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">AI Alerts Generated</h3>
              <p className="text-4xl font-bold text-green-800 dark:text-white">45</p>
            </div>
            <div className="bg-yellow-100 dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">Active Severe Alerts</h3>
              <p className="text-4xl font-bold text-yellow-800 dark:text-white">3</p>
            </div>
          </div>
        </section>

        {/* Notification Bar */}
        <footer className="mt-10 bg-blue-600 dark:bg-gray-900 p-4 text-white rounded-lg">
          <p>Stay informed with real-time notifications about water quality and potential hazards in your area.</p>
        </footer>
      </div>
    </div>
  );
};

export default AlertSystem;
