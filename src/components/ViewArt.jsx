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
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-10 bg-neutral-950">
        <div className="page-container">
          <div className="max-w-3xl mx-auto rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_22px_60px_rgba(15,23,42,0.6)] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image side */}
              <div className="md:w-1/2 bg-black/60">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Details side */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
                    Visual Art
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-light text-neutral-50 mb-2">
                    {art.title}
                  </h2>
                  <p className="text-sm text-neutral-400 mb-6">
                    {art.category} • {art.year}
                  </p>

                  <p className="text-base text-neutral-200">
                    <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-1">
                      Price
                    </span>
                    <span className="text-lg font-medium">KES {art.price}</span>
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    to="/contact-me"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-50 text-neutral-900 text-sm font-medium px-6 py-2.5 hover:bg-white hover:border-white transition-colors"
                  >
                    Get Yours
                  </Link>

                  <button
                    onClick={() => navigate("/", { state: { restoreIndex: fromIndex } })}
                    className="inline-flex items-center justify-center text-xs text-neutral-400 hover:text-neutral-200 transition-colors gap-1.5"
                    aria-label="Go back"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to catalogue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewArt;
