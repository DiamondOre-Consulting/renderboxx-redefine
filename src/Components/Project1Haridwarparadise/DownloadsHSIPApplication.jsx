import React from 'react';
import map from '../../assets/map.jpg';

import pdffile from '../../assets/HSIP-Form.pdf';// Replace with the path to your PDF

const DownloadsHSIPApplication = () => {
  return (
    <div>
      <div
        className="relative w-full h-48 sm:h-60 md:h-80 bg-contain bg-center"
        style={{
          backgroundImage: `url(${map})`,
        }}
      >
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 headingp1">
              Download HSIP Application Form
            </h1>
            <a
              href={pdffile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg md:text-2xl bg-p1 px-4 sm:px-6 py-2 sm:py-3 mt-2 rounded-lg text-white hover:bg-opacity-90 transition-all duration-300"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsHSIPApplication;
