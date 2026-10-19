import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisualArts from './VisualArts';
import AboutMe from './AboutMe';

const Home = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
setIsVisible(true);
}, []);

const handleScrollToCatalogue = () => {
const element = document.getElementById('catalogue');


if (element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}


};

return ( <main className="w-full overflow-x-hidden">

  {/* HERO SECTION */}
  <section className="flex min-h-[75vh] w-full items-center">
    <div
      className={`page-container w-full py-24 transition-all duration-1000 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-5xl">

        {/* Introductory label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8a735c]" />

          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Software Developer & Visual Artist
          </p>
        </div>

        {/* Main heading */}
        <h1 className="max-w-4xl text-5xl font-normal leading-[1.08] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl">
          For This Little Thing
          <br />

          <span className="font-serif italic text-[#8a735c]">
            Of Ours.
          </span>
        </h1>

        {/* Supporting introduction */}
        <div className="mt-8 flex flex-col justify-between gap-8 border-t border-[#e5e2dc] pt-6 md:flex-row md:items-end">
          <p className="max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
            A software developer and visual artist exploring the
            intersection of technology, creativity, and visual
            storytelling.
          </p>

          {/* Action buttons */}
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleScrollToCatalogue}
              className="inline-flex items-center gap-3 bg-neutral-900 px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
            >
              Explore My Work

              <span aria-hidden="true">↘</span>
            </button>

            <Link
              to="/contact-me"
              className="inline-flex items-center border-b border-neutral-400 py-3 text-sm text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950"
            >
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* PROJECT CATALOGUE SECTION */}
  <section
    id="catalogue"
    className="w-full scroll-mt-24 border-t border-[#e5e2dc] bg-white py-24 md:py-32"
  >
    <div className="page-container">

      {/* Catalogue heading */}
      <div className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Selected work
          </p>

          <h2 className="text-4xl font-normal tracking-tight text-neutral-900 md:text-6xl">
            The Catalogue
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-neutral-500 md:text-base">
          A collection of creative explorations, original artwork,
          and ideas brought to life.
        </p>
      </div>

      {/* Artwork display */}
      <VisualArts />

    </div>
  </section>

  {/* ABOUT SECTION */}
  <section
    id="about"
    className="w-full scroll-mt-24 border-t border-[#e5e2dc]"
  >
    <AboutMe />
  </section>

</main>

);
};

export default Home;
