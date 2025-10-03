import React from "react";
import { softwareDevProjects } from "../data";
import { useState } from "react";

const SoftwareDev = () => {

  //keep track of which project is currently displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalProjects = softwareDevProjects.length;

  //functions to handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % totalProjects);
  };

  //get the current project
  const project = softwareDevProjects[currentIndex];

  return (
    <div className="space-y-4 pt-1 pb-3 text-center">
        <div key={project.id} className="px-2 py-3">
          {/* Project Title */}
          <h3 className="text-xl font-light mb-1 text-gray-900 leading-tight">
            {project.title}
          </h3>

          {/* Technologies used label */}
          <p className="text-sm text-gray-600 mb-2 font-bold italic">
            Technologies used:
          </p>

          {/* Technologies List */}
          <ul className="text-sm font-light text-gray-800 space-y-0.5 list-none p-0 flex flex-col items-center">
            <li>{project.technologies}</li>
            <li className="pt-4">
              {/* GitHub Link */}
              <a
                href={project.githubLink}
                className="text-gray-800 underline hover:text-black transition font-normal text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View On GitHub
              </a>
            </li>
          </ul>
        </div>

      {/* Navigation Buttons */}
      {totalProjects > 1 && (
        <div className="flex items-center gap-1 mt-4 justify-center">
        <button
          onClick={goToPrevious}
          className="text-gray-600 hover:text-black transition focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
          aria-label="Previous Project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      )}
      
    </div>
  );
};

export default SoftwareDev;
