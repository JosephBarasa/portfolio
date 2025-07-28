import React, { useState } from 'react'; 

const SoftwareDev = ({ softwareDev }) => {
  // State to keep track of the current project's index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add a check for empty softwareDev array to prevent crashes
  if (!softwareDev || softwareDev.length === 0) {
    return (
      <div className="min-h-[120px] flex items-center justify-center text-gray-500 text-sm">
        No software projects to display.
      </div>
    );
  }

  // Get the total number of projects
  const totalProjects = softwareDev.length;

  // Get the project object that should be currently displayed
  const currentProject = softwareDev[currentIndex];

  // Function to go to the next project
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  // Function to go to the previous project
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  return (
    // Outer container: Retaining existing styles
    <div className="space-y-4 pt-1 pb-3">
      {/* Display the current project's details - replaces the .map() */}
      <div
        key={currentProject.id} // Use key on the currently displayed project
        className="px-1 py-3 text-center" // Added text-center here
      >
        {/* Project Title: Retaining existing styles */}
        <h3 className="text-xl font-light mb-1 text-gray-900 leading-tight">
          {currentProject.title}
        </h3>

        {/* Technologies used label: Retaining existing styles */}
        <p className="text-sm text-gray-600 mb-2 font-bold italic">Technologies used:</p>

        {/* Technologies List: Retaining existing styles */}
        {/* Adjusted ul to also be inline for centering, potentially using flex or a block element if list item has long text */}
        <ul className="text-sm font-light text-gray-800 space-y-0.5 list-none p-0 flex flex-col items-center">
          <li>{currentProject.technologies}</li>
          <li className="pt-1">
            {/* GitHub Link: Restyled to match theme */}
            <a
              href={currentProject["githubLink"] || "#"} 
              className="text-gray-800 underline hover:text-black transition font-normal text-sm" // Restyled for theme consistency
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>

            <a
              href={currentProject["githubLink"] || "#"} 
              className="text-gray-800 underline hover:text-black transition font-normal text-sm ml-5" // Restyled for theme consistency
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation Buttons (Copied directly from VisualArts component) */}
      {totalProjects > 1 && ( // Only show buttons if there's more than one project
        <div className="flex items-center gap-1 mt-4 justify-center"> {/* Added justify-center for button centering */}
          <button
            onClick={goToPrevious}
            className="text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Previous Project"
          >
            {/* Left Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-base text-gray-700 font-light">
            {currentIndex + 1} / {totalProjects}
          </span>

          <button
            onClick={goToNext}
            className="text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
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

export default SoftwareDev;