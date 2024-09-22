import React from 'react';

const MapPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full h-screen">
        {/* Embed the map_final_1.html file using an iframe */}
        <iframe
          src="/water_body.html"
          title="Embedded Map"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;
