import {
  Paintbrush,
  Palette,
  Clipboard
} from 'lucide-react'; 

const SkillSet = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-300 py-16">
      
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">Skill Set</h1>

      {/* Skills Grid Container */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">

        {/* Software Dev Skills */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-800 border border-gray-500">
            JS
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">JavaScript</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-800 border border-gray-500">
            R
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">React</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-800 border border-gray-500">
            PY
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">Python</p>
        </div>

        {/* Visual Arts Skills */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center border border-gray-500">
            <Paintbrush className="h-6 w-6 text-gray-800" />
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">Portraits</p>
        </div>


        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center border border-gray-500">
            <Palette className="h-6 w-6 text-gray-800" />
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">Paintings</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center border border-gray-500">
            <Clipboard className="h-6 w-6 text-gray-900" />
          </div>
          <p className="text-lg font-light text-gray-800 tracking-wide">Graphic Design</p>
        </div>

      </div>
    </section>
  );
};

export default SkillSet;
