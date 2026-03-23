import { Link } from 'react-router-dom';
import grad from '../assets/artist/grad.jpeg';

const Navbar = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-900/70 border-b border-neutral-800">
      <div className="page-container flex justify-between items-center h-16">

        {/* Logo + Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleClick}>
          {/* Profile Image */}
          <img
            src={grad}
            alt="Joseph Barasa"
            className="w-8 h-8 rounded-full object-cover border border-neutral-600/80 shadow-sm hover:scale-105 transition"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/100x100/0f172a/e5e7eb?text=JB`;
            }}
          />
        </div>

        {/* Center tagline */}
        <p className="hidden md:block text-xs md:text-sm font-light text-neutral-400">
          For This Little Thing Of Ours
        </p>

        {/* Navigation */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1.5"
              aria-label="Home"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9L12 3L21 9V21H3V9ZM6 12V18H9V12H6Z"
              />
            </svg>
            <span className="tracking-wide">Home</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;