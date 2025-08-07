import { useHistory } from 'react-router-dom';

const ChatBot = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-20 text-center">
      <p className="text-xl md:text-2xl font-light text-gray-800 max-w-lg leading-relaxed mb-6">
        {`Sorry, I'm still working on making a friendly bot for you. Please check back later!`}
      </p>

      {/* Profile Image */}
      <img
            src={ process.env.PUBLIC_URL + '/photos/artist/profile-photo.jpg' }
            alt="Joseph Barasa - Profile"
            className="w-24 h-24 object-cover rounded-full shadow-lg border-2 border-gray-400"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = process.env.PUBLIC_URL + `https://placehold.co/200x200/cccccc/333333?text=Photo+Error`;
            }}
          />

      {/* Back Button with Icon + Text */}
      <button
        onClick={() => history.goBack()}
        className="flex items-center gap-2 text-gray-800 hover:text-black mt-2 px-4 py-2 rounded transition"
        aria-label="Go back"
      >
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

        <span className="text-sm font-medium">Back</span>
      </button>
    </div>
  );
};

export default ChatBot;
