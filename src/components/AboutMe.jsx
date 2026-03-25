import grad from "../assets/artist/grad.jpeg"; 
import artist from "../assets/artist/artist.jpg";
import clouds from "../assets/artist/clouds.jpg";
import JB5 from "../assets/artist/JB5.jpg";
import artist2 from "../assets/artist/artist2.jpg";



const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src={grad}
          alt="Background"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50">
        <span className="text-[10px] tracking-[0.5em] text-neutral-500 uppercase border-b border-neutral-800 pb-2">
          Portfolio Archive 
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl pointer-events-none">
        <p className="text-xs md:text-sm tracking-[0.4em] text-neutral-400 mb-4 uppercase font-light">
          Visual Artist 
        </p>
        <h1 className="text-[6rem] md:text-[12rem] lg:text-[15rem] font-black leading-[0.8] tracking-tighter mix-blend-difference">
          JB
        </h1>
        <p className="max-w-sm mt-8 text-neutral-400 text-xs md:text-sm leading-relaxed font-light tracking-wide italic">
          For context - I'm my own target audience.
        </p>
      </div>

      {/* Scattered Imagery Gallery */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        
        {/* Image 1: Top Right - Sharp & Clean */}
        <div className="absolute top-[12%] right-[8%] w-40 md:w-64 group">
          <div className="relative overflow-hidden rounded-sm transition-transform duration-700 group-hover:rotate-0 rotate-3 shadow-[20px_20px_50px_rgba(0,0,0,0.8)]">
            <img src={artist} alt="Art 1" className="w-full h-full object-cover border border-white/20" />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Image 2: Bottom Left - Grayscale & Moody */}
        <div className="absolute bottom-[15%] left-[7%] w-48 md:w-72 group">
          <div className="relative overflow-hidden rounded-sm transition-transform duration-700 group-hover:rotate-0 -rotate-6 shadow-2xl">
            <img src={clouds} alt="Art 2" className="w-full h-full object-cover grayscale contrast-125 border border-white/10" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Image 3: Top Left - Small "Polaroid" Style */}
        <div className="absolute top-[20%] left-[12%] w-24 md:w-40 hidden md:block">
          <div className="p-2 bg-neutral-900 border border-neutral-800 shadow-xl -rotate-12 transition-all hover:rotate-0 hover:scale-110 duration-500">
            <img src={grad} alt="Art 3" className="w-full aspect-square object-cover sepia-[0.5]" />
            <p className="text-[8px] mt-2 text-neutral-500 font-mono">IMG_082.JPG</p>
          </div>
        </div>

        {/* Image 4: Bottom Right - Tall Aspect Ratio */}
        <div className="absolute bottom-[10%] right-[12%] w-32 md:w-48 group">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 rotate-2 transition-all group-hover:translate-y-[-10px] duration-500 shadow-2xl">
            <img src={JB5} alt="Art 4" className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all" />
          </div>
        </div>

        {/* Image 5: Center Right - Faded Background Element */}
        <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-40 md:w-80 opacity-20 mix-blend-screen pointer-events-none blur-[2px]">
            <img src={artist2} alt="Art 5" className="w-full h-full object-cover" />
        </div>

      </div>

      {/* Lighting FX */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[150px] rounded-full" />
    </section>
  );
};

export default About;