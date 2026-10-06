
import { useState } from 'react';
import { Link } from 'react-router-dom';
import grad from '../assets/artist/grad.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-900/70 border-b border-neutral-800">
      <div className="page-container">

        <div className="flex justify-between items-center h-16">

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToSection}
          >
            <img
              src={grad}
              alt="Joseph Barasa"
              className="w-8 h-8 rounded-full object-cover border border-neutral-600/80 shadow-sm hover:scale-105 transition"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://placehold.co/100x100/0f172a/e5e7eb?text=JB';
              }}
            />
          </div>

          <p className="hidden md:block text-xs md:text-sm font-light text-neutral-400">
            For This Little Thing Of Ours
          </p>

          <div className="hidden md:flex items-center">
            <Link
              to="/"
              onClick={scrollToSection}
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9L12 3L21 9V21H3V9ZM6 12V18H9V12H6Z"
                />
              </svg>

              <span className="tracking-wide">
                Home
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6L18 18M6 18L18 6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6H20M4 12H20M4 18H20"
                />
              </svg>
            )}
          </button>

        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 py-4">
            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => {
                  scrollToSection();
                  closeMenu();
                }}
                className="px-4 py-3 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => {
                  scrollToSection('catalogue');
                  closeMenu();
                }}
                className="self-start text-left w-full px-4 py-3 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
              >
                Project Catalog
              </button>

              <button
                type="button"
                onClick={() => {
                  scrollToSection('about');
                  closeMenu();
                }}
                className="self-start text-left w-full px-4 py-3 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
              >
                About
              </button>

              <Link
                to="/contact-me"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-sm text-neutral-200 hover:bg-neutral-800 transition-colors"
              >
                Reach Out
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
