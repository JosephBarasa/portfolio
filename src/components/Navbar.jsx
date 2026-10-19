import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import grad from '../assets/artist/grad.jpeg';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation();
const navigate = useNavigate();

const closeMenu = () => {
setIsMenuOpen(false);
};

const goToSection = (sectionId) => {
closeMenu();


// If we're not on the homepage, navigate there first.
if (location.pathname !== '/') {
  navigate('/');

  window.setTimeout(() => {
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 100);

  return;
}

// If we're already on the homepage, scroll to the section.
if (sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
} else {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


};

const navLinkClass =
'text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950';

return ( <nav className="sticky top-0 z-50 border-b border-[#e5e2dc] bg-[#faf9f6]/95 backdrop-blur-md"> <div className="page-container">
{/* Main navigation row */} <div className="flex h-[76px] items-center justify-between">
{/* Brand / home link */}
<Link
to="/"
onClick={() => {
closeMenu();
window.scrollTo({ top: 0, behavior: 'smooth' });
}}
className="flex items-center gap-3"
aria-label="Return to homepage"
> <img
           src={grad}
           alt=""
           className="h-10 w-10 rounded-full border border-[#e5e2dc] object-cover"
         />

        <span className="text-sm font-medium tracking-wide text-neutral-900">
          JB
        </span>
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <button
          type="button"
          onClick={() => goToSection('catalogue')}
          className={navLinkClass}
        >
          Catalogue
        </button>

        <button
          type="button"
          onClick={() => goToSection('about')}
          className={navLinkClass}
        >
          About
        </button>

        <Link to="/contact-me" className={navLinkClass}>
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((previous) => !previous)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e2dc] text-neutral-800 transition-colors hover:bg-white md:hidden"
        aria-label={
          isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
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
            className="h-5 w-5"
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

    {/* Mobile navigation */}
    {isMenuOpen && (
      <div
        id="mobile-navigation"
        className="border-t border-[#e5e2dc] py-4 md:hidden"
      >
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={() => goToSection('catalogue')}
            className="rounded-lg px-3 py-3 text-left text-sm text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950"
          >
            Catalogue
          </button>

          <button
            type="button"
            onClick={() => goToSection('about')}
            className="rounded-lg px-3 py-3 text-left text-sm text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950"
          >
            About
          </button>

          <Link
            to="/contact-me"
            onClick={closeMenu}
            className="rounded-lg px-3 py-3 text-sm text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950"
          >
            Contact
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>

);
};

export default Navbar;
