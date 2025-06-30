const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div>
          <span className="text-2xl font-bold tracking-wide">GIFT.ED</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
