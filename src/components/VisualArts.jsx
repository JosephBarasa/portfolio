import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getArtworks } from '../services/artworkService';

const VisualArts = () => {
  const location = useLocation();

  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalArtworks = artworks.length;
  const art = artworks[currentIndex];

  // Fetch artwork from the existing backend API.
  useEffect(() => {
    const loadArtworks = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getArtworks();
        setArtworks(data);
      } catch (err) {
        console.error('Failed to load artworks:', err);
        setError('Unable to load artworks. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadArtworks();
  }, []);

  // Restore the carousel position when returning from an artwork page.
  useEffect(() => {
    const restoredIndex = location.state?.restoreIndex;

    if (restoredIndex === undefined) {
      return;
    }

    if (
      Number.isInteger(restoredIndex) &&
      restoredIndex >= 0 &&
      restoredIndex < artworks.length
    ) {
      setCurrentIndex(restoredIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [location.state, artworks.length]);

  // Move backwards through the artwork collection.
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalArtworks - 1 : prevIndex - 1
    );
  };

  // Move forwards through the artwork collection.
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalArtworks - 1 ? 0 : prevIndex + 1
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div
        className="py-20 text-center text-sm text-neutral-500"
        role="status"
      >
        Loading artworks...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-20 text-center text-sm text-red-700" role="alert">
        {error}
      </div>
    );
  }

  // Empty collection state
  if (artworks.length === 0) {
    return (
      <div className="py-20 text-center text-sm text-neutral-500">
        No artworks available at the moment.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main artwork display */}
      <article
        key={art.id}
        className="mx-auto max-w-5xl"
        aria-label={`Artwork ${currentIndex + 1} of ${totalArtworks}`}
      >
        {/* Artwork image */}
        <Link
          to={`/view-art/${art.id}`}
          state={{ fromIndex: currentIndex }}
          className="group relative block overflow-hidden bg-[#f0eee9] focus-visible:outline-offset-4"
          aria-label={`View ${art.title}`}
        >
          <div className="flex min-h-[280px] items-center justify-center sm:min-h-[400px] md:min-h-[520px]">
            <img
              src={art.image}
              alt={`${art.title}${art.medium ? `, ${art.medium}` : ''}`}
              className="h-full max-h-[620px] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Subtle image overlay */}
          <div className="pointer-events-none absolute inset-0 border border-black/[0.04]" />

          {/* Hover prompt */}
          <div className="absolute bottom-5 right-5 translate-y-2 bg-white/95 px-4 py-2 text-xs text-neutral-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Artwork <span aria-hidden="true">↗</span>
          </div>
        </Link>

        {/* Artwork information */}
        <div className="flex flex-col gap-5 border-b border-[#e5e2dc] py-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Artwork {String(currentIndex + 1).padStart(2, '0')}
            </p>

            <h3 className="text-2xl font-normal tracking-tight text-neutral-900 sm:text-3xl">
              {art.title}
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              {[art.medium, art.year_created].filter(Boolean).join(' · ')}
            </p>
          </div>

          <Link
            to={`/view-art/${art.id}`}
            state={{ fromIndex: currentIndex }}
            className="inline-flex w-fit items-center gap-3 border-b border-neutral-400 pb-2 text-sm text-neutral-800 transition-colors hover:border-neutral-900 hover:text-neutral-950"
          >
            Explore Artwork
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </article>

      {/* Carousel controls */}
      {totalArtworks > 1 && (
        <div className="mx-auto mt-6 flex max-w-5xl items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Selected works
          </p>

          <div className="flex items-center gap-5">
            <span
              className="min-w-[54px] text-center text-sm tabular-nums text-neutral-600"
              aria-live="polite"
              aria-atomic="true"
            >
              {String(currentIndex + 1).padStart(2, '0')}
              <span className="mx-1 text-neutral-400">/</span>
              {String(totalArtworks).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={goToPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e2dc] text-xl text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline-offset-4"
              aria-label="View previous artwork"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e2dc] text-xl text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:outline-offset-4"
              aria-label="View next artwork"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualArts;