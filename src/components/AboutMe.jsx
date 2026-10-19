import grad from '../assets/artist/grad.jpeg';
import artist from '../assets/artist/artist.jpg';
import clouds from '../assets/artist/clouds.jpg';
import JB5 from '../assets/artist/JB5.jpg';
import artist2 from '../assets/artist/artist2.jpg';

const AboutMe = () => {
  return (
    <section className="w-full overflow-hidden bg-[#faf9f6] py-20 text-neutral-900 sm:py-24 md:py-32">
      <div className="page-container">
        {/* Section heading */}
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8a735c]" />

              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                A little about me
              </p>
            </div>

            <h2 className="font-serif text-5xl font-normal leading-tight tracking-tight sm:text-6xl md:text-7xl">
              The person
              <br />
              <span className="italic text-[#8a735c]">behind the work.</span>
            </h2>
          </div>

          {/* <p className="max-w-md text-sm leading-7 text-neutral-600 md:justify-self-end md:text-base md:leading-8">
            For context — I create for the same people I am. My work is shaped
            by curiosity, experience, faith, and a desire to make things that
            mean something.
          </p> */}
        </div>

        {/* Main content */}
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image composition */}
          <div className="relative mx-auto w-full max-w-[540px]">
            {/* Main image */}
            <div className="relative z-10 ml-[8%] w-[68%]">
              <img
                src={artist}
                alt="Joseph Barasa in his creative environment"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#d8cfc3]" />
            </div>

            {/* Secondary image */}
            {/* <div className="absolute bottom-[4%] left-0 z-20 w-[43%] -rotate-3 sm:bottom-[2%]">
              <img
                src={clouds}
                alt="Cloud formations that inspire creative exploration"
                className="aspect-[4/5] w-full border-4 border-[#faf9f6] object-cover grayscale"
                loading="lazy"
              />
            </div> */}

            {/* Portrait */}
            {/* <div className="absolute right-[1%] top-[7%] z-20 w-[31%] rotate-3 sm:right-0">
              <img
                src={JB5}
                alt="Portrait of the artist"
                className="aspect-[3/4] w-full border-4 border-[#faf9f6] object-cover"
                loading="lazy"
              />
            </div> */}

            {/* Small supporting image */}
            {/* <div className="absolute bottom-[5%] right-[5%] z-0 hidden w-[25%] opacity-80 sm:block">
              <img
                src={artist2}
                alt="A detail from the artist's visual collection"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div> */}

            {/* Decorative background image */}
            {/* <div className="pointer-events-none absolute -left-12 -top-10 -z-10 hidden h-36 w-36 opacity-[0.08] sm:block">
              <img
                src={grad}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover grayscale"
              />
            </div> */}
          </div>

          {/* Biography */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8a735c]">
              Meet JOSEPH BARASA
            </p>

            <h3 className="font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl">
              GIFTED
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">

              <p>
                I believe creativity should have a purpose. Through portraiture,
                contrast, texture, and experimentation, I aim to create pieces
                that bring character to spaces and connect with the people who
                experience them.
              </p>

              <p>
                Alongside visual art, I explore software development, another
                way of turning ideas into something tangible. Both disciplines
                challenge me to think critically, solve problems, and approach
                creation from different perspectives.
              </p>
            </div>

            {/* Personal motto */}
            <div className="mt-9 border-l-2 border-[#8a735c] pl-5">
              <p className="font-serif text-xl italic leading-relaxed text-neutral-800 sm:text-2xl">
                "I paint, so you don't have dull spaces."
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;