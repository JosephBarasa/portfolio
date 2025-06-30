const Skills = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h2>

      <div className="flex flex-wrap justify-center gap-12 text-gray-700">

        <div>
          <h3 className="text-xl font-semibold mb-2">Software Development</h3>
          <ul className="list-disc list-inside">
            <li>Python ★★★★☆</li>
            <li>Django ★★★★☆</li>
            <li>React ★★★☆☆</li>
            <li>MySQL ★★★☆☆</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Visual Art</h3>
          <p>★★★★★</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
          <p>Canva ★★★★☆</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Video Editing</h3>
          <p>CapCut ★★★★☆</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
