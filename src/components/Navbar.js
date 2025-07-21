
const Navbar = () => {
  return (
    <nav className="bg-gray-300 text-black sticky top-0 z-50 shadow-sm border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div>
          <span className="text-1xl font-light tracking-wide">GIFT.ED</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8">
          <a href="#home" className="hover:text-gray-600 transition font-light tracking-wide">Home</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
