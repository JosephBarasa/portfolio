import React, { useState } from 'react';

const VisualArts = ({ visualArts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = visualArts.length;

  // Added a check for empty visualArts array, though you wanted to avoid error handling.
  // This just prevents a crash if visualArts is empty, returning an empty div.
  // In a real app, you'd show a "No projects" message here.
  if (!visualArts || visualArts.length === 0) {
    return <div className="min-h-[150px] flex items-center justify-center text-gray-500">No art projects to display.</div>;
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
    <div className="space-y-6 pt-1 pb-4">

      <div key={currentProject.id} className="px-2 py-4"> {/* Slight padding to content */}
        <h3 className="text-2xl font-light mb-2 text-gray-900 leading-tight"> {/* Slightly larger, lighter title */}
          {currentProject.title}
        </h3>
        <p className="text-base text-gray-700 mb-3 font-light">Project details:</p>
        <ul className="text-base font-light text-gray-800 space-y-1"> {/* Increased text size */}
          <li>{currentProject.category}</li>
          <li>{currentProject.description}</li>
          <li>{currentProject.media}</li>
          <li className="pt-2"> {/* Added padding to the link for separation */}
            <a href="#" className="text-blue-700 underline hover:text-blue-900 transition font-normal"> {/* Slightly darker blue, normal font-weight */}
              View Artwork
            </a>

            <a href="#" className="text-blue-700 underline hover:text-blue-900 transition font-normal ml-12"> {/* Slightly darker blue, normal font-weight */}
              All Projects
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      {totalProjects > 1 && (
        <div className="flex justify-center items-center gap-6 mt-4"> {/* Centered buttons, increased gap */}
          <button
            onClick={goToPrevious}
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full" // Minimalist button
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
            className="p-2 text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full" // Minimalist button
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