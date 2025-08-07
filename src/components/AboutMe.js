const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 text-black px-4">
      <h3 className="text-center text-3xl md:text-4xl font-light text-gray-900 mb-10">About Me</h3>

      {/* Horizontal Layout Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
        
        {/* Photo Container - Left Side */}
        <div className="flex-shrink-0">
          <img
            src={ process.env.PUBLIC_URL + '/photos/artist/profile-photo.jpg' }
            alt="Joseph Barasa - Profile"
            className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-gray-400"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = process.env.PUBLIC_URL + `https://placehold.co/200x200/cccccc/333333?text=Photo+Error`;
            }}
          />
        </div>

        {/* Text Content - Right Side */}
        <div className="flex-1 md:pt-8">
          <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed text-center md:text-left">
            {`With a strong foundation in software development and the arts,
              I enjoy crafting functional and engaging digital experiences
              where I explore creativity and design,
              often finding ways to blend these two worlds.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;