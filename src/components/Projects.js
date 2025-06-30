const Projects = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>

      <div className="flex flex-wrap justify-center gap-10">

        <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">DAB</h3>
          <p className="mb-2 text-gray-700">Digital Art Repository</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>HTML, CSS, JS, Python</li>
            <li>Django, MySQL</li>
            <li><a href="#" className="text-blue-500 hover:underline">GitHub Link / Live Demo</a></li>
          </ul>
        </div>

        <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">The Checkmate</h3>
          <p className="mb-2 text-gray-700">Mic Check Podcast</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>CapCut</li>
            <li>Graphics</li>
            <li><a href="#" className="text-blue-500 hover:underline">View Project</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;
