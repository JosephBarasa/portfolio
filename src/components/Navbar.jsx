```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import grad from '../assets/artist/grad.jpeg';

const Navbar = () => {

  // State that keeps track of whether the mobile menu is open.
  // false = menu is closed
  // true  = menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Scroll the page to the top.
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // Close the mobile menu.
  // We use this when a user selects a navigation link.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-900/70 border-b border-neutral-800">

      <div className="page-container">

        {/* 
          Main Navbar Row

          flex:
            Places the logo, tagline and hamburger/navigation
            on the same horizontal row.

          justify-between:
            Pushes the left and right sections apart.

          items-center:
            Vertically centers everything.

          h-16:
            Gives the navbar a height of 64px.
        */}
        <div className="flex justify-between items-center h-16">


          {/* =========================
              LOGO / PROFILE IMAGE
              ========================= */}

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleClick}
          >

            <img
              src={grad}
              alt="Joseph Barasa"
              className="
                w-8 h-8
                rounded-full
                object-cover
                border border-neutral-600/80
                shadow-sm
                hover:scale-105
                transition
              "

              // If the profile image fails to load,
              // replace it with a placeholder image.
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://placehold.co/100x100/0f172a/e5e7eb?text=JB';
              }}
            />

          </div>


          {/* =========================
              CENTER TAGLINE
              ========================= */}

          <p className="hidden md:block text-xs md:text-sm font-light text-neutral-400">
            For This Little Thing Of Ours
          </p>


          {/* =========================
              DESKTOP NAVIGATION
              ========================= */}

          {/*
            hidden:
              Hide this navigation by default.

            md:flex:
              Display it as a flex container on medium
              screens and larger.

            Therefore:

              Mobile  → hidden
              Desktop → visible
          */}
          <div className="hidden md:flex items-center">

            <Link
              to="/"
              onClick={handleClick}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border border-neutral-700
                px-3 py-1
                text-xs
                text-neutral-200
                hover:bg-neutral-100
                hover:text-neutral-900
                transition-colors
              "
            >

              {/* Home SVG icon */}
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

              <span className="tracking-wide">
                Home
              </span>

            </Link>

          </div>


          {/* =========================
              MOBILE HAMBURGER BUTTON
              ========================= */}

          {/*
            md:hidden:

              The button is visible on mobile devices,
              but hidden on medium screens and larger.

              Mobile  → visible
              Desktop → hidden
          */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden
              inline-flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              border border-neutral-700
              text-neutral-200
              hover:bg-neutral-100
              hover:text-neutral-900
              transition-colors
            "
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >

            {/*
              Conditional rendering.

              If isMenuOpen is true:
                Show the X icon.

              If isMenuOpen is false:
                Show the hamburger icon.
            */}

            {isMenuOpen ? (

              // X / Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6L18 18M6 18L18 6"
                />
              </svg>

            ) : (

              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
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


        {/* =========================
            MOBILE MENU
            ========================= */}

        {/*
          Only render the mobile menu when isMenuOpen is true.

          This is React's conditional rendering.

          When:

            isMenuOpen = false
                ↓
            menu doesn't exist in the rendered UI

          When:

            isMenuOpen = true
                ↓
            menu is rendered
        */}
        {isMenuOpen && (

          <div className="md:hidden border-t border-neutral-800 py-4">

            <div className="flex flex-col gap-2">

              {/* Home */}
              <Link
                to="/"
                onClick={() => {
                  handleClick();
                  closeMenu();
                }}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  text-neutral-200
                  hover:bg-neutral-800
                  transition-colors
                "
              >
                Home
              </Link>


              {/* About */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  text-neutral-200
                  hover:bg-neutral-800
                  transition-colors
                "
              >
                About
              </Link>


              {/* Projects */}
              <Link
                to="/projects"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  text-neutral-200
                  hover:bg-neutral-800
                  transition-colors
                "
              >
                Projects
              </Link>


              {/* Visual Arts */}
              <Link
                to="/visual-arts"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  text-neutral-200
                  hover:bg-neutral-800
                  transition-colors
                "
              >
                Visual Arts
              </Link>


              {/* Contact */}
              <Link
                to="/contact-me"
                onClick={closeMenu}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  text-neutral-200
                  hover:bg-neutral-800
                  transition-colors
                "
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


// Export the Navbar component so it can be imported
// and used in other components, such as App.jsx.
export default Navbar;
```
