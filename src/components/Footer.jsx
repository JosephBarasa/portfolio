import grad from '../assets/artist/grad.jpeg';

const Footer = () => {
  return (
    <footer className="mt-auto text-center relative overflow-hidden bg-neutral-950 py-10 border-t border-neutral-800">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 h-40 w-40 bg-neutral-700/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-44 w-44 bg-neutral-800/60 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 page-container">
        <div className="flex flex-col items-center gap-3">
          <div className="flex justify-center mb-2 min-w-fit">
            <img
              src={grad}
              alt="Joseph Barasa - Profile"
              className="w-16 h-16 object-cover rounded-full shadow-lg border border-neutral-600/80"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/200x200/0f172a/e5e7eb?text=JB`;
              }}
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs md:text-sm font-light text-neutral-400">
              For This Little Thing Of Ours
            </p>

            <p className="text-sm md:text-base font-light tracking-wide text-neutral-200">
              JB © {new Date().getFullYear()}
            </p>
            <p className="text-xs md:text-sm font-light text-neutral-500">
              Bungoma, Kenya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;