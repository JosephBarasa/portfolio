import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VisualArts = ({ visualArts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = visualArts.length;

  if (!visualArts || visualArts.length === 0) {
    return (
      <div className="min-h-[150px] flex items-center justify-center text-gray-500">
        No art projects to display.
      </div>
    );
  }

  const currentProject = visualArts[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  return (
    // Outer container: Keep some padding, remove background color (let parent handle), reduce vertical space
    <div className="space-y-4 pt-1 pb-4"> {/* Changed space-y-6 to space-y-4 for consistency */}

      <div key={currentProject.id} className="px-2 py-4 text-center"> {/* Added text-center here */}
        <h3 className="text-2xl font-light mb-1 text-gray-900 leading-tight"> {/* Slightly larger, lighter title */}
          {currentProject.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1 font-bold italic">Art details:</p> {/* Removed redundant text-sm */}
        <ul className="text-base font-light text-gray-800 space-y-1 list-none p-0 flex flex-col items-center"> {/* Added list-none, p-0, flex, flex-col, items-center */}
          <li>{currentProject.category}</li>
          <li>{currentProject.description}</li>
          <li className="pt-2"> {/* Added padding to the link for separation */}
            <Link 
              to={`/view-art/${currentProject.id}`} 
              className="text-gray-800 underline hover:text-black transition font-normal text-sm" // Restyled for theme consistency
            > 
              View
            </Link>
          </li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      {totalProjects > 1 && (
        <div className="flex justify-center items-center gap-1 mt-4"> {/* Reduced gap-6 to gap-1 for consistency */}
          <button
            onClick={goToPrevious}
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Previous Project"
          >
            {/* Left Arrow Icon - using SVG for cleaner look */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-base text-gray-700 font-light"> {/* Slightly larger text */}
            {currentIndex + 1} / {totalProjects}
          </span>

          <button
            onClick={goToNext}
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Next Project"
          >
            {/* Right Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
};

export default VisualArts;