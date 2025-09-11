import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  }

  return (
    <nav className="bg-gray-300 text-black sticky top-0 z-50 shadow-sm border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div>
          <span className="text-1xl font-bold tracking-wide">JB</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 flex items-center">
          <Link to="/" onClick={handleClick} className="hover:text-gray-600 transition">
            {/* Home Icon (SVG) - Now perfectly square with no curves */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              aria-label="Home"
            >
              {/* This new path draws a simple, square house with a sharp roof and a rectangular door */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9L12 3L21 9V21H3V9ZM6 12V18H9V12H6Z" />
            </svg>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
