import { useState, useEffect } from 'react';
import SoftwareDev from './SoftwareDev';
import VisualArts from './VisualArts';

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This useEffect is good for triggering the entrance animation
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-300 text-black px-4 relative overflow-hidden py-16 md:py-24">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-800 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Hero content - vertically centered and animated */}
      <div className={`flex flex-col items-center text-center space-y-8 md:space-y-12 z-10 
                       transition-all duration-1000 ease-out transform ${
                         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                       } max-w-4xl w-full`}>
        
        {/* Name with clean typography */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-black leading-tight">
            Joseph Barasa
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Title and description */}
        <div className="space-y-4"> 
          <p className="text-xl md:text-2xl font-light text-gray-700 tracking-wide">
            Software Developer & Visual Artist
          </p>

          <p id="contactMe" className="text-base text-gray-800 max-w-md mx-auto leading-relaxed font-light">
            Creative Developer
          </p>

        </div>

        {/* Clean buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"> 
          <button
            className="px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Contact Me
          </button>
          <a
            href="#projects" 
            className="px-8 py-3 border border-gray-600 text-gray-800 font-light tracking-wide hover:bg-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            View Projects
          </a>
        </div>

        {/* Minimal social indicators */}
        <div className="flex justify-center space-x-6 mt-12"> 
          {/* Replace with actual social icons or links as needed */}
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-gray-400 hover:border-black transition-colors duration-300 cursor-pointer flex items-center justify-center">L</a>
          <a href="#" aria-label="GitHub" className="w-10 h-10 bg-black hover:bg-gray-800 transition-colors duration-300 cursor-pointer flex items-center justify-center text-white">G</a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 border border-gray-400 hover:border-black transition-colors duration-300 cursor-pointer flex items-center justify-center">I</a>
        </div>

      </div>

      {/* ---------- Start of sections for SoftwareDev & VisualArts ---------- */}

      <div className="w-full max-w-6xl mx-auto mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 z-10">
        {/* Software Development Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg"> {/* Card styling for section */}
          <h3 className="text-xl font-light text-gray-900 mb-6 border-b pb-2 italic">Software Development</h3>
          <SoftwareDev />
        </div>

        {/* Visual Arts Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg"> {/* Card styling for section */}
          <h3 className="text-xl font-light text-gray-900 mb-6 border-b pb-2 italic">Visual Arts</h3>
          <VisualArts />
        </div>
      </div>

    </section>
  );
};

export default Home;