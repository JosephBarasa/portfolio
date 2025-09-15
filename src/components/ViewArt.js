import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { visualArtsProjects } from "../data";

const ViewArt = () => {
  const { id } = useParams(); // get the artwork id from the url
  const history = useHistory();
  const art = visualArtsProjects.find((item) => item.id === parseInt(id)); // find the artwork

  // handle case when no artwork is found
  if (!art) {
    return (
      <div className="min-h-[200px] flex items-center justify-center text-red-500">
        Artwork not found.
      </div>
    );
  }

  return (
    // Wrap both elements in a single parent element like a Fragment
    <>
      <div className="flex flex-col items-center justify-center py-6">
        <h2 className="text-2xl font-semibold mb-4">{art.title}</h2>

        {/* Artwork Image */}
        <img
          src={art.image}
          alt={art.title}
          className="max-w-[600px] w-full rounded-lg shadow-md"
        />

        {/* Extra details */}
        <p className="mt-4 text-gray-700">{art.category}</p>
        <p className="text-gray-800 font-bold">KES {art.price}</p>
      </div>

      {/* Back Button with Icon + Text */}
      <div className="flex justify-center mt-12 mb-12">
        <button
          onClick={() => history.goBack()}
          className="flex items-center gap-2 text-gray-800 hover:text-black px-6 py-3 shadow-sm transition"
          aria-label="Go back"
        >
          {/* Left Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>

          <span className="text-sm font-medium">Back</span>
        </button>
      </div>
    </>
  );
};

export default ViewArt;