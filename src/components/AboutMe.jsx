import grad from "../assets/artist/grad.jpeg"; 
import artist from "../assets/artist/artist.jpg";
import clouds from "../assets/artist/clouds.jpg";
import JB5 from "../assets/artist/JB5.jpg";
import artist2 from "../assets/artist/artist2.jpg";

const About = () => {
  return (
    <section className="w-full py-24 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={grad}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Content Container */}
      <div className="page-container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-2">
            The Artist
          </h2>
          <p className="mt-4 text-sm text-neutral-400 max-w-md mx-auto">
            For context — I create for the same people I am.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT — TEXT BLOCK */}
          <div className="space-y-6">

            <h5 className="text-2xl md:text-4xl font-bold leading-[0.9] tracking-tight">
              JB
            </h5>

            <p className="text-neutral-300 text-base leading-relaxed max-w-md">
              A self-taught artist driven by curiosity, faith, 
              and the desire to create work that carries meaning beyond the canvas. 
              At the heart of it all is a God-given calling and a commitment to creating with purpose, authenticity, and passion.
              <em><strong>I paint, so you don't have dull spaces.</strong></em>
            </p>

            <p className="text-neutral-500 text-sm italic">
              "For This Little Thing Of Ours"
            </p>
          </div>

          {/* RIGHT — IMAGE COMPOSITION */}
          <div className="relative h-[500px]">
            
            {/* Main Image */}
            <div className="absolute top-0 left-10 w-64 md:w-80 shadow-2xl">
              <img
                src={artist}
                alt="Main"
                className="w-full h-full object-cover border border-white/10"
              />
            </div>

            {/* Secondary (Grayscale mood) */}
            <div className="absolute bottom-0 left-0 w-56 md:w-72 -rotate-6 shadow-xl">
              <img
                src={clouds}
                alt="Clouds"
                className="w-full object-cover grayscale contrast-125 border border-white/10"
              />
            </div>

            {/* Tall portrait */}
            <div className="absolute top-10 right-0 w-40 md:w-52 rotate-3 shadow-xl">
              <img
                src={JB5}
                alt="Portrait"
                className="w-full h-full object-cover brightness-75"
              />
            </div>

            {/* Background texture image */}
            <div className="absolute bottom-10 right-10 w-40 opacity-20">
              <img
                src={artist2}
                alt="Texture"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient lighting */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-neutral-700/10 blur-[120px]" />
    </section>
  );
};

export default About;