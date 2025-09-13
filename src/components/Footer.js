import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 text-center relative overflow-hidden">
      {/* Subtle background blur effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-white rounded-full filter blur-2xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top row: Social + Contact */}
        <div className="flex justify-between items-center mb-6">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/_jose.ph.__?igsh=ZXh5ZWNndnQ1aHkx" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/joseph-barasa-0270972a9/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/JosephBarasa" aria-label="GitHub" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0 0-1.03 0-3 1.53A12.35 12.35 0 0 0 12 5.09c-2.03 0-4.07.2-6 .56C3.91 3 3 3 3 3a5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 2 10.71c0 5.44 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>

          {/* Contact Link */}
          <Link
            to="/contact-me"
            className="text-gray-300 hover:text-white transition-colors duration-300 font-light text-base tracking-wide underline"
          >
            Contact Me
          </Link>
        </div>

        {/* Profile Image Centered Above Footer Text */}
        <div className="flex justify-center mb-4 min-w-fit">
          <img
            src={ process.env.PUBLIC_URL + '/photos/artist/profile-photo.jpg' }
            alt="Joseph Barasa - Profile"
            className="w-24 h-24 object-cover rounded-full shadow-lg border-2 border-gray-400"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = process.env.PUBLIC_URL + `https://placehold.co/200x200/cccccc/333333?text=Photo+Error`;
            }}
          />
        </div>

        {/* Footer Text */}
        <div className="space-y-2">
          <p className="text-sm md:text-base font-light tracking-wide text-gray-300">
            Designed & Built by Joseph Barasa © {new Date().getFullYear()}
          </p>
          <p className="text-xs md:text-sm font-light text-gray-400">
            Nairobi, Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;