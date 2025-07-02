import { useState } from 'react';

const Projects = () => {

  const [artworks, setArt] = useState([
    { title: 'Fyah Mummah', media: 'Pencil', id: 1 },
    { title: 'Octopizzo', media: 'Pencil', id: 2 }
  ]);

  return (
    <section className="min-h-fit bg-white text-black py-20 px-6 flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Background blur */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-900 rounded-full filter blur-3xl"></div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl font-light tracking-wide mb-16 z-10">Project Catalogue</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 z-10 w-full max-w-5xl">

        {/* Project 1 */}
        <div className="border border-gray-400 p-6 hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-medium mb-2">Software Development</h3>
          <p className="text-sm text-gray-500 mb-4">Digital Art Repository</p>
          <ul className="text-sm font-light text-gray-700 space-y-1">
            <li>HTML, CSS, JS, Python</li>
            <li>Django, MySQL</li>
            <li>
              <a href="#" className="text-black underline hover:text-gray-800 transition">
                GitHub Link / Live Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-400 p-6 hover:shadow-xl transition duration-300 ease-in-out">
          <h3 className="text-2xl font-medium mb-2">Visual Arts</h3>
          <p className="text-sm text-gray-500 mb-4">The CheckMate : Mic Cheque Podcast</p>
          <ul className="text-sm font-light text-gray-700 space-y-1">
            <li>Painting</li>
            <li>2025</li>
            <li>
              <a href="#" className="text-black underline hover:text-gray-800 transition">
                View Artwork
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* practice section */}

    {/* 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-white text-black">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="border border-black p-6 hover:bg-black hover:text-white transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-2">{artwork.title}</h2>
            <p className="text-sm text-gray-600">{artwork.media}</p>
          </div>
        ))}
      </div>
    */}


    </section>
  );
};

export default Projects;
