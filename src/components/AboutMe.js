const AboutMe = () => {

  const handleResumeClick = () => {
    alert("My resume is not yet ready. Please check back later.")
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 text-black px-4">
      <h3 className="text-center text-3xl md:text-4xl font-light text-gray-900 mb-10">About Me</h3>

      {/* Horizontal Layout Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
        
        {/* Photo Container - Left Side */}
        <div className="flex-shrink-0">
          <img
            src={ process.env.PUBLIC_URL + '/photos/artist/JB-5.jpg' }
            alt="JB"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-2 border-gray-400"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = process.env.PUBLIC_URL + `https://placehold.co/200x200/cccccc/333333?text=Photo+Error`;
            }}
          />
        </div>

        {/* Text Content - Right Side */}
        <div className="flex-1 md:pt-8">
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed text-center md:text-left">
            {`I see technology as a space where creativity  
              and logic come together to build something meaningful. My journey blends  
              a background in web development with a deep appreciation for the arts,  
              allowing me to craft experiences through a modern minimalist lens,
              demonstrating how great work is not only about solving problems,  
              but also about evoking a sense of connection, beauty, and purpose in our modern world.`}
          </p>

          {/* Resume Link with Margin */}
          <div className="flex justify-center md:justify-start mt-6">
            <div className="flex justify-center md:justify-start mt-6">
              <button
                onClick={handleResumeClick}
                className="text-gray-900 hover:text-gray-800 transition-colors duration-300 font-light text-base tracking-wide underline focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 relative z-10"
              >
                Resume
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;