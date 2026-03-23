import { useState, useEffect } from 'react';
import SoftwareDev from './SoftwareDev';
import VisualArts from './VisualArts';
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
        {/* Hero background accents */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute -top-32 -right-16 h-72 w-72 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-10 h-80 w-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero content */}
        <section className="min-h-[70vh] w-full flex items-center justify-center px-6 relative">
          <div
            className={`page-container flex flex-col items-center text-center mb-24 mt-20 space-y-10 md:space-y-12 z-10
                        transition-all duration-1000 ease-out transform ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                JB
              </p>
              <h1 className="text-[5rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-extrabold tracking-tight leading-[0.9] text-neutral-100 w-full">
                VISUAL ARTIST
              </h1>
              <div className="h-px w-20 bg-neutral-500/60 mx-auto"></div>
            </div>

            <div className="space-y-4 max-w-xl mx-auto">
              <p className="text-base md:text-lg font-light text-neutral-300 leading-relaxed">
                Over 5 years of experience in working for money.
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <Link
                to="/contact-me"
                className="px-8 py-3 rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 text-sm font-medium tracking-wide hover:bg-white hover:border-white transition-all duration-300 shadow-sm"
              >
                Get In Touch
              </Link>

              <button
                type="button"
                onClick={handleScrollToCatalogue}
                className="px-7 py-2.5 rounded-full border border-neutral-700 text-sm text-neutral-200 hover:bg-neutral-800/60 transition-colors duration-300"
              >
                View Catalogue
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/_jose.ph.__?igsh=ZXh5ZWNndnQ1aHkx"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700/70 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-300 cursor-pointer flex items-center justify-center"
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
                className="w-10 h-10 rounded-full border border-neutral-700/70 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-300 cursor-pointer flex items-center justify-center"
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
                className="w-10 h-10 rounded-full border border-neutral-700/70 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-300 cursor-pointer flex items-center justify-center"
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
        <section
          id="catalogue"
          className="w-full min-h-screen py-16 bg-neutral-100 text-neutral-900 relative scroll-mt-28"
        >
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute -top-16 left-1/3 h-40 w-40 bg-neutral-300/60 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 h-52 w-52 bg-neutral-300/40 rounded-full blur-3xl" />
          </div>

          <div className="page-container relative z-10">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Catalogue
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mt-2">
                Selected Work
              </h2>
              <p className="mt-3 text-sm text-neutral-600 max-w-md mx-auto">
                A focused glimpse into the projects and pieces that currently mean the most to me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {/* Software Development Component Section */}
              <div className="py-6 px-5 rounded-3xl bg-white/80 border border-neutral-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <h3 className="text-center text-xl font-semibold text-neutral-900 mb-4">
                  Software Development
                </h3>
                <SoftwareDev />
              </div>

              {/* Visual Arts Component Section */}
              <div className="py-6 px-5 rounded-3xl bg-white/80 border border-neutral-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <h3 className="text-center text-xl font-semibold text-neutral-900 mb-4">
                  Visual Arts
                </h3>
                <VisualArts />
              </div>
            </div>
          </div>
        </section>

    </section>
  );
};

export default Home;