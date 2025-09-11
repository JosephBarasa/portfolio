import React from "react";
import { useParams } from "react-router-dom";
import { visualArtsProjects } from "../data";

const ViewArt = () => {
  const { id } = useParams(); // get the artwork id from the url
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
    <div className="flex flex-col items-center justify-center py-6">
      <h2 className="text-2xl font-semibold mb-4">{art.title}</h2>

      {/* Artwork Image */}
      <img
        src={art.image}
        alt={art.title}
        className="max-w-[600px] w-full rounded-lg shadow-md"
      />

      {/* Extra details */}
      <p className="mt-4 text-gray-700">{art.media}</p>
      <p className="text-gray-800 font-bold">{art.price}</p>
    </div>
  );
};

export default ViewArt;
