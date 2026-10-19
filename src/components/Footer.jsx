import grad from '../assets/artist/grad.jpeg';

const Footer = () => {
return ( <footer className="mt-auto border-t border-[#e5e2dc] bg-[#faf9f6] py-10 text-neutral-700 sm:py-12"> <div className="page-container"> <div className="flex flex-col items-center gap-5">
{/* Artist profile */} <img
         src={grad}
         alt="Joseph Barasa"
         className="h-14 w-14 rounded-full border border-[#e5e2dc] object-cover"
         loading="lazy"
       />

      {/* Artist identity */}
      <div className="space-y-2 text-center">
        {/* <p className="font-serif text-lg italic text-neutral-800">
          For This Little Thing Of Ours
        </p> */}

        <p className="text-xs tracking-wide text-neutral-500 sm:text-sm">
          Visual Artist <span className="mx-2 text-[#8a735c]">·</span>
          Software Developer
        </p>
      </div>

      {/* Copyright */}
      <div className="mt-2 w-full border-t border-[#e5e2dc] pt-5 text-center">
        <p className="text-xs text-neutral-500 sm:text-sm">
          © {new Date().getFullYear()} JB. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-neutral-400">
          Bungoma, Kenya
        </p>
      </div>
    </div>
  </div>
</footer>


);
};

export default Footer;
