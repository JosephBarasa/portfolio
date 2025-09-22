import { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import SoftwareDev from './SoftwareDev';
import VisualArts from './VisualArts';
import SkillSet from './SkillSet';
import { Link } from 'react-router-dom';


const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-300 text-black px-4 relative overflow-x-hidden py-16 md:py-24">

      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-800 rounded-full filter blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className={`flex flex-col items-center text-center space-y-8 md:space-y-12 z-10
                             transition-all duration-1000 ease-out transform ${
                               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                             } max-w-4xl w-full`}>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-black leading-tight">
            Joseph Barasa
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-light text-gray-700 tracking-wide">
            Web Developer & Visual Artist
          </p>

          <p className="text-base text-gray-800 max-w-md mx-auto leading-relaxed font-light">
            GIFTED
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <Link to="/contact-me"
            className="px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Contact Me
          </Link>
          <Link to="/chat-bot"
            className="px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            ChatBot
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/_jose.ph.__?igsh=ZXh5ZWNndnQ1aHkx"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" // Removed border classes
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
            className="w-10 h-10 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" // Removed border classes
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
            className="w-10 h-10 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center" // Removed border classes
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

      {/* horizontal line */}
      <hr className="w-full max-w-5xl border-t border-gray-700 my-20" />

      {/* About Me Component */}
      <AboutMe />

      {/* horizontal line */}
      <hr className="w-full max-w-5xl border-t border-gray-700 my-10" />

      {/* ---------- Catalogue Section ---------- */}

      <div className="w-full max-w-6xl mx-auto mt-5 md:mt-1 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 z-10">

        <h3 className="col-span-full text-center text-3xl md:text-4xl font-light text-gray-900 mb-8 pb-4">Catalogue</h3>

        {/* Software Development Component Section */}
        {(
          <div className="py-4">
            <h3 className="text-center text-xl font-bold text-gray-800 mb-1 pb-2 border-b border-gray-300">Web Development</h3>
            <SoftwareDev />
            
          </div>
        )}

        {/* Visual Arts Component Section */}
        {(
          <div className="py-4">
            <h3 className="text-center text-xl font-bold text-gray-800 pb-2 border-b border-gray-300">Visual Arts</h3>
            <VisualArts />
            
          </div>
        )}
      </div>

      <hr className="w-full max-w-5xl border-t border-gray-700 my-10" />

      {/* Skills */}
      <SkillSet />

      <hr className="w-full max-w-5xl border-t border-gray-700 my-10" />

    </section>
  );
};

export default Home;