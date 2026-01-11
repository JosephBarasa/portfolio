import React from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";  //import routing utilities from react-router-dom
import { visualArtsProjects } from "../data"; //import the visual arts data from data.json

const ViewArt = () => {
  // get the artwork id from the url
  const { id } = useParams();  

  //hook for programmatic navigation (replaces useHistory in react router v6)
  const navigate = useNavigate();

  //find the artwork whose id matches the url parameter
  //parseInt is used because url params are strings
  const art = visualArtsProjects.find((item) => item.id === parseInt(id));

  const location = useLocation();
  const fromIndex = location.state?.fromIndex;

  // handle the case where the artwork does not exist
  //prevents rendering errors and improves user feedback
  if (!art) {
    return (
      <div className="min-h-[200px] flex items-center justify-center text-red-500">
        Artwork not found.
      </div>
    );
  }

  return (
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
        <p className="font-light mt-8 text-gray-700">{art.category}</p>
        <p className="text-gray-800 font-bold mt-4">KES {art.price}</p>

        {/* Contact Link */}
        <Link
          to="/contact-me"
          className="text-gray-900 hover:text-gray-600 transition-colors duration-300 font-light text-base tracking-wide underline mt-5"
        >
          Get Yours
        </Link>
      </div>

      {/* Back Button with Icon + Text */}
      <div className="flex justify-center mt-12 mb-12">
        <button
          onClick={() => navigate("/", { state: { restoreIndex: fromIndex } })} // navigate back
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
