const VisualArts = () => {
  return (
    <div className="space-y-8  bg-gray-200">

      <div className="p-4 border border-gray-200 rounded-md hover:shadow-md transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">The CheckMate : Mic Cheque Podcast</h3>
        <p className="text-sm text-gray-600 mb-3">Project details:</p>
        <ul className="text-sm font-light text-gray-700 space-y-1">
          <li>Painting</li>
          <li>2025</li>
          <li>
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition">
              View Artwork
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default VisualArts;