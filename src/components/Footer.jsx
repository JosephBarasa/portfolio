import grad from '../assets/artist/grad.jpeg';

const Footer = () => {
  return (
    <footer className=" text-black text-center relative overflow-hidden bg-cover bg-center bg-no-repeat py-20">
      {/* Subtle background blur effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-white rounded-full filter blur-2xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Profile Image Centered Above Footer Text */}
        <div className="flex justify-center mb-4 min-w-fit">
          <img
            src={ grad }
            alt="Joseph Barasa - Profile"
            className="w-24 h-24 object-cover rounded-full shadow-lg border-2 border-gray-400"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://placehold.co/200x200/cccccc/333333?text=Photo+Error`;
            }}
          />
        </div>

        {/* Footer Text */}
        <div className="space-y-2">

          <p className="text-xs md:text-sm font-light">
            For This Little Thing Of Ours
          </p>

          <p className="text-sm md:text-base font-light tracking-wide">
            JB © {new Date().getFullYear()}
          </p>
          <p className="text-xs md:text-sm font-light">
            Bungoma, Kenya. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;