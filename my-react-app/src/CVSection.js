// CVSection.js
import React from 'react';

const CVSection = () => {
  const handleOpenCV = () => {
    // Update the path accordingly
    window.open("https://omar-cv.tiiny.site", "_blank");
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
     
      {/* Add a button to open the CV file in a new window */}
      <button
        onClick={handleOpenCV}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        View/Download my CV
      </button>
    </div>
  );
};

export default CVSection;
