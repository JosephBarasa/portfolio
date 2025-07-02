
import { useState, useEffect } from 'react';

const Home = () => {

  const [contact, setContact] = useState('Crafting digital experiences through code and creative vision')

  const [isVisible, setIsVisible] = useState(false);

  const [message, setMessage] = useState('');

  const contactMe = () => {
    setContact('Sorry, we are not taking message requests at the moment')
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-800 rounded-full filter blur-3xl"></div>
      </div>

      {/* Message display */}
      {message && (
        <div className="mt-6 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded shadow">
          {message}
        </div>
      )}

      {/* Main content */}
      <div className={`text-center space-y-12 z-10 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Name with clean typography */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-black">
            Joseph Barasa
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Title and description */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-wide">
            Software Developer & Visual Artist
          </p>
          <p id="contactMe" className="text-base text-gray-500 max-w-md mx-auto leading-relaxed font-light">
            {contact}
          </p>
        </div>

        {/* Clean buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">         
          <button onClick={() => contactMe()} className="px-8 py-3 border border-black text-black font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Contact Me
          </button>
        </div>

        {/* Minimal social indicators */}
        <div className="flex justify-center space-x-8 mt-12">
          <div className="w-8 h-8 border border-gray-400 hover:border-black transition-colors duration-300 cursor-pointer"></div>
          <div className="w-8 h-8 bg-black hover:bg-gray-800 transition-colors duration-300 cursor-pointer"></div>
          <div className="w-8 h-8 border border-gray-400 hover:border-black transition-colors duration-300 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
