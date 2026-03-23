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
    <div className="space-y-5 text-center">
      <div
        key={project.id}
        className="px-2 py-4 rounded-2xl border border-neutral-200/80 bg-neutral-50/70"
      >
        <h3 className="text-lg font-semibold mb-1 text-neutral-900 leading-tight">
          {project.title}
        </h3>

        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Technologies
        </p>

        <ul className="text-sm font-light text-neutral-800 space-y-0.5 list-none p-0 flex flex-col items-center">
          <li>{project.technologies}</li>
          <li className="pt-4">
            <a
              href={project.githubLink}
              className="inline-flex items-center gap-1 text-neutral-900 border border-neutral-300 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586V7a1 1 0 11-2 0V5.414l-7.293 7.293a1 1 0 01-1.414-1.414L14.586 4H13a1 1 0 110-2h-.707z" />
                <path d="M5 4a1 1 0 00-1 1v10h10a1 1 0 110 2H3a1 1 0 01-1-1V5a3 3 0 013-3h4a1 1 0 110 2H5z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      {totalProjects > 1 && (
        <div className="flex items-center gap-2 mt-2 justify-center text-xs text-neutral-600">
          <button
            onClick={goToPrevious}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            aria-label="Previous Project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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

          <span className="text-sm text-neutral-700 font-light">
            {currentIndex + 1} / {totalProjects}
          </span>

          <button
            onClick={goToNext}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
            aria-label="Next Project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
