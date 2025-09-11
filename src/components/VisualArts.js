import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { visualArtsProjects } from "../data";

const VisualArts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalArtworks = visualArtsProjects.length;

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? totalArtworks - 1 : prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalArtworks - 1 ? 0 : prevIndex + 1
    );
  };

  const art = visualArtsProjects[currentIndex];

  return (
    <div className="space-y-4 pt-1 pb-4">
      <div key={art.id} className="px-2 py-4 text-center">
        <h3 className="text-2xl font-light mb-1 text-gray-900 leading-tight">
          {art.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1 font-bold italic">Art details:</p>
        <ul className="text-base font-light text-gray-800 space-y-1 list-none p-0 flex flex-col items-center">
          <li>{art.media}</li>
          <li>{art.year}</li>
          <li className="pt-2">
            <Link 
              to={`/view-art/${art.id}`} 
              className="text-gray-800 underline hover:text-black transition font-normal text-sm"
            >
              View
            </Link>
          </li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      {totalArtworks > 1 && (
        <div className="flex justify-center items-center gap-1 mt-4">
          <button
            onClick={goToPrev}
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Previous Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-base text-gray-700 font-light">
            {currentIndex + 1} / {totalArtworks}
          </span>

          <button
            onClick={goToNext}
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Next Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VisualArts;
