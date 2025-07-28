const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 px-4 mt-3 mb-5">
      <h3 className="col-span-full text-center text-3xl md:text-4xl font-light text-gray-900 mb-8">About Me</h3>
      <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-2xl mx-auto text-center">
        {`With a strong foundation in software development and the arts, 
          I enjoy crafting functional and engaging digital experiences
          where I explore creativity and design, 
          often finding ways to blend these two worlds.`}
      </p>
    </div>
  );
}

export default AboutMe;