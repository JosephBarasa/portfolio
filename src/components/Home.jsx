import { useState, useEffect } from 'react';
import VisualArts from './VisualArts';
import AboutMe from './AboutMe';
import { Link } from 'react-router-dom';

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToCatalogue = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center text-neutral-50 relative overflow-x-hidden">

      {/* Background accents */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute -top-32 -right-16 h-72 w-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-10 h-80 w-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* HERO */}
      <section className="min-h-[80vh] w-full flex items-center justify-center px-6 relative">
        <div
          className={`page-container flex flex-col items-center text-center mb-24 mt-20 space-y-10 z-10
            transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              JB
            </p>

            <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-extrabold tracking-tight leading-[0.9] text-neutral-100">
              VISUAL ARTIST
            </h1>

            <div className="h-px w-20 bg-neutral-500/60 mx-auto"></div>
          </div>

          <p className="text-base md:text-lg font-light text-neutral-300 max-w-xl">
            Been 5 years now doing this. Welcome to my digital gallery.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Link
              to="/contact-me"
              className="px-8 py-3 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 text-sm font-medium hover:bg-white transition-all"
            >
              Get In Touch
            </Link>

            <button
              onClick={handleScrollToCatalogue}
              className="px-7 py-2.5 rounded-full border border-neutral-700 text-sm text-neutral-200 hover:bg-neutral-800/60 transition-colors"
            >
              View Catalogue
            </button>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-4 mt-4">
            {/* keep your icons unchanged */}
          </div>
        </div>
      </section>

      {/* ---------- ART CATALOGUE ---------- */}
      <section
        id="catalogue"
        className="w-full py-24 bg-neutral-950 text-white relative"
      >
        {/* subtle background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-1/4 h-40 w-40 bg-neutral-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-52 w-52 bg-neutral-800/40 rounded-full blur-3xl" />
        </div>

        <div className="page-container relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Catalogue
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-white mt-2">
              The Art
            </h2>
            <p className="mt-4 text-sm text-neutral-400 max-w-md mx-auto">
              Work defined by constant evolution.
            </p>
          </div>

          {/* ART DISPLAY */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6">
              <VisualArts />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="w-full">
        <AboutMe />
      </section>

    </section>
  );
};

export default Home;