import React, { useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { visualArtsProjects } from "../data";

const ViewArt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const fromIndex = location.state?.fromIndex ?? 0;

  const art = visualArtsProjects.find(
    (item) => item.id === parseInt(id)
  );

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Artwork not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-neutral-950 text-white relative overflow-hidden">

      {/* FULLSCREEN IMAGE VIEWER */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={art.image}
            alt={art.title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white text-xs tracking-widest uppercase hover:opacity-70"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-neutral-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-52 h-52 bg-neutral-800/40 rounded-full blur-3xl" />
      </div>

      <div className="page-container relative z-10 py-20">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-12 text-xs text-neutral-500 tracking-[0.25em] uppercase">
          <span>Artwork</span>

          <button
            onClick={() =>
              navigate("/", { state: { restoreIndex: fromIndex } })
            }
            className="hover:text-white transition-colors"
          >
            Back
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="w-full">
            <div
              className="relative overflow-hidden cursor-zoom-in group"
              onClick={() => setIsOpen(true)}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover max-h-[75vh] transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
            </div>

            <p className="text-xs text-neutral-500 mt-3">
              Click image to view full size
            </p>
          </div>

          {/* DETAILS */}
          <div className="space-y-8 max-w-md">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-3">
                {art.category}
              </p>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
                {art.title}
              </h1>

              <p className="text-sm text-neutral-500">
                {art.year}
              </p>
            </div>

            <div className="h-px w-16 bg-neutral-700" />

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
                Price
              </p>
              <p className="text-lg text-neutral-200">
                KES {art.price}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/contact-me"
                className="inline-flex items-center justify-center border border-neutral-700 px-6 py-2 text-sm text-neutral-200 hover:bg-white hover:text-black transition-all"
              >
                Get Yours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewArt;