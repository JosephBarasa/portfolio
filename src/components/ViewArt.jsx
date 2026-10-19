import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { getArtworkById } from '../services/artworkService';

const ViewArt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [art, setArt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const fromIndex = location.state?.fromIndex ?? 0;

  // Fetch the selected artwork from the existing backend API.
  useEffect(() => {
    const loadArtwork = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getArtworkById(id);
        setArt(data);
      } catch (err) {
        console.error('Failed to load artwork:', err);
        setError(err.message || 'Unable to load artwork.');
      } finally {
        setIsLoading(false);
      }
    };

    loadArtwork();
  }, [id]);

  // Close the fullscreen viewer with the Escape key.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Remove the event listener when the viewer closes or the page unmounts.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Loading state.
  if (isLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#faf9f6] px-6">
        <p className="text-sm text-neutral-500" role="status">
          Loading artwork...
        </p>
      </main>
    );
  }

  // Error or missing artwork state.
  if (error || !art) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-[#faf9f6] px-6 text-center">
        <p className="text-sm text-neutral-600" role="alert">
          {error || 'Artwork not found.'}
        </p>

        <button
          type="button"
          onClick={() =>
            navigate('/', { state: { restoreIndex: fromIndex } })
          }
          className="border-b border-neutral-400 pb-1 text-sm text-neutral-800 transition-colors hover:border-neutral-900"
        >
          Return to catalogue
        </button>
      </main>
    );
  }

  // Format the price using Kenyan number formatting.
  const formattedPrice =
    art.price !== null && art.price !== undefined
      ? `KES ${Number(art.price).toLocaleString('en-KE', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })}`
      : 'Price unavailable';

  // Use the image URL returned by the backend.
  const imageUrl = art.image;

  return (
    <main className="min-h-screen w-full bg-[#faf9f6] text-neutral-900">
      {/* Fullscreen image viewer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full-size view of ${art.title}`}
        >
          <img
            src={imageUrl}
            alt={art.title}
            className="max-h-[88vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black sm:right-8 sm:top-8"
            aria-label="Close full-size image"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
      )}

      <div className="page-container py-10 sm:py-14 md:py-16">
        {/* Top navigation */}
        <div className="mb-10 flex items-center justify-between border-b border-[#e5e2dc] pb-5 sm:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              The collection
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              navigate('/', { state: { restoreIndex: fromIndex } })
            }
            className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            <span aria-hidden="true">←</span>
            Back to catalogue
          </button>
        </div>

        {/* Artwork and details */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] md:gap-14 lg:gap-20">
          {/* Artwork image */}
          <div className="min-w-0">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-[#f0eee9] sm:min-h-[420px] md:min-h-[520px]"
              aria-label={`Enlarge ${art.title}`}
            >
              <img
                src={imageUrl}
                alt={art.title}
                className="max-h-[75vh] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />

              <span className="absolute bottom-4 right-4 bg-white/95 px-3 py-2 text-xs text-neutral-700 transition-colors group-hover:bg-white">
                Enlarge image <span aria-hidden="true">↗</span>
              </span>
            </button>

            <p className="mt-3 text-xs text-neutral-500">
              Original artwork · Click to view full size
            </p>
          </div>

          {/* Artwork information */}
          <div className="flex min-w-0 flex-col pt-2 md:sticky md:top-28 md:pt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8a735c]">
              {art.medium || 'Original artwork'}
            </p>

            <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {art.title}
            </h1>

            {art.year_created && (
              <p className="mt-4 text-sm text-neutral-500">
                Created in {art.year_created}
              </p>
            )}

            <div className="my-8 h-px w-16 bg-[#8a735c]" />

            {art.description ? (
              <div>
                <h2 className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  About this artwork
                </h2>

                <p className="whitespace-pre-line text-sm leading-7 text-neutral-600">
                  {art.description}
                </p>
              </div>
            ) : (
              <p className="text-sm leading-7 text-neutral-500">
                An original piece from the collection.
              </p>
            )}

            {/* Price and contact action */}
            <div className="mt-10 border-t border-[#e5e2dc] pt-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Price
              </p>

              <p className="text-xl font-normal text-neutral-900">
                {formattedPrice}
              </p>

              <Link
                to="/contact-me"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-neutral-900 px-6 py-4 text-sm text-white transition-colors hover:bg-neutral-700 sm:w-auto"
              >
                Enquire about this piece
                <span aria-hidden="true">↗</span>
              </Link>

              <p className="mt-4 text-xs leading-6 text-neutral-500">
                Interested in this artwork? Get in touch to discuss
                availability and purchase details.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 border-t border-[#e5e2dc] pt-6 sm:mt-24">
          <button
            type="button"
            onClick={() =>
              navigate('/', { state: { restoreIndex: fromIndex } })
            }
            className="inline-flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-neutral-950"
          >
            <span aria-hidden="true">←</span>
            Return to the collection
          </button>
        </div>
      </div>
    </main>
  );
};

export default ViewArt;