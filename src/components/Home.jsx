import { useState, useEffect } from 'react';
import SoftwareDev from './SoftwareDev';
import VisualArts from './VisualArts';
import { Link } from 'react-router-dom';


const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col items-center text-black relative overflow-x-hidden">



        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-800 rounded-full filter blur-3xl"></div>
        </div>

        {/* Hero content */}

        <section className="min-h-screen w-full bg-neutral-700 flex items-center justify-center px-6 relative">
          <div className={`flex flex-col items-center text-center px-10 mb-20 mt-20 space-y-10 md:space-y-14 z-10
                                transition-all duration-1000 ease-out transform ${
                                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                                } 
                                max-w-4xl w-full`}
          >

            <div className="space-y-4">
              <h1  className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-gray-300 leading-tight">
                Joseph Barasa
              </h1>
              <div className="h-px w-24 bg-white mx-auto"></div>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide">
                Web Developer & Visual Artist
              </p>

              <p className="text-base text-gray-300 max-w-md mx-auto leading-relaxed font-light">
                GIFTED
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Link to="/contact-me"
                className="px-8 py-3 border border-gray-400 text-gray-300 font-light tracking-wide hover:bg-gray-700 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-1">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/_jose.ph.__?igsh=ZXh5ZWNndnQ1aHkx"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-white hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" 
              >
                {/* Instagram SVG (simple outline) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/joseph-barasa-0270972a9/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-white hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" // Removed border classes
              >
                {/* LinkedIn SVG (simple outline) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/JosephBarasa" 
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-white hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" 
              >
                {/* GitHub SVG (simple outline) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0 0-1.03 0-3 1.53A12.35 12.35 0 0 0 12 5.09c-2.03 0-4.07.2-6 .56C3.91 3 3 3 3 3a5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 2 10.71c0 5.44 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Catalogue Section ---------- */}

        <section className="bg-neutral-200 w-full min-h-screen py-10 items-center justify-center relative">
          <div className="w-full max-w-6xl mx-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 z-10">

            {/* Software Development Component Section */}
            {(
              <div className="py-4">
                <h3 className="text-center text-xl font-bold text-gray-800 mb-1 pb-2 border-gray-300">Web Development</h3>
                <SoftwareDev />
                
              </div>
            )}

            {/* Visual Arts Component Section */}
            {(
              <div className="py-4">
                <h3 className="text-center text-xl font-bold text-gray-800 pb-2 border-gray-300">Visual Arts</h3>
                <VisualArts />
                
              </div>
            )}
          </div>
        </section>

    </section>
  );
};

export default Home;