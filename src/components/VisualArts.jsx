import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { visualArtsProjects } from "../data";

const VisualArts = () => {

  const location = useLocation();

  // initialize with restoreIndex if available
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalArtworks = visualArtsProjects.length;

  // 🔥 CRITICAL FIX: update index when returning from ViewArt
  useEffect(() => {
    if (location.state?.restoreIndex !== undefined) {
      setCurrentIndex(location.state.restoreIndex);
    }
  }, [location.state]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalArtworks - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalArtworks - 1 ? 0 : prevIndex + 1
    );
  };

  const art = visualArtsProjects[currentIndex];

  return (
    <div className="space-y-5">
      <div
        key={art.id}
        className="px-2 py-4 rounded-2xl border border-neutral-200/80 bg-neutral-50/70 text-center"
      >
        <h3 className="text-xl font-semibold mb-1 text-neutral-900 leading-tight">
          {art.title}
        </h3>

        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Art details
        </p>

        <ul className="text-sm font-light text-neutral-800 space-y-1 flex flex-col items-center">
          <li>{art.category}</li>
          <li>{art.year}</li>

          <li className="pt-3">
            <Link
              to={`/view-art/${art.id}`}
              state={{ fromIndex: currentIndex }}
              className="inline-flex items-center gap-1 text-neutral-900 border border-neutral-300 rounded-full px-4 py-1.5 text-xs font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors"
            >
              <span>View artwork</span>
            </Link>
          </li>
        </ul>
      </div>

      {totalArtworks > 1 && (
        <div className="flex justify-center items-center gap-2 mt-2 text-xs text-neutral-600">
          
          <button
            onClick={goToPrev}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            ‹
          </button>

          <span className="text-sm text-neutral-700 font-light">
            {currentIndex + 1} / {totalArtworks}
          </span>

          <button
            onClick={goToNext}
            className="h-8 w-8 flex items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            ›
          </button>

        </div>
      )}
    </div>
  );
};

export default VisualArts;