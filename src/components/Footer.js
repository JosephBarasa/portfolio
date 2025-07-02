const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center relative overflow-hidden">

      {/* Subtle background blur effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-white rounded-full filter blur-2xl"></div>
      </div>

      {/* Footer content */}
      <p className="relative z-10 text-sm font-light tracking-wide">
        Designed & Built by Joseph Barasa © {new Date().getFullYear()}
      </p>
      
    </footer>
  );
};

export default Footer;
