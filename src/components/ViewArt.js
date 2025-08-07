import { useParams, useHistory } from 'react-router-dom';
import useFetchGeneric from '../hooks/useFetchGeneric';
import { useState } from 'react';

const ViewArt = () => {
    const { id } = useParams();
    const history = useHistory();
    const url = `http://localhost:8000/visualArts/${id}`;
    const { data: art, isPending, error } = useFetchGeneric(url);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const isVideo = (mediaUrl) => mediaUrl && /\.(mp4|webm|ogg)$/i.test(mediaUrl);

    const mediaUrls = art?.mediaUrls || (art?.imageUrl ? [art.imageUrl] : []);
    const totalMedia = mediaUrls.length;

    const goToNextMedia = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalMedia);
    };

    const goToPreviousMedia = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalMedia) % totalMedia);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-300 text-black px-4 py-16 md:py-24">
            {isPending && (
                <div className="text-xl font-light text-gray-600">Loading art details...</div>
            )}

            {error && (
                <div className="text-xl font-light text-red-600">Error: {error}</div>
            )}

            {art && (
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl max-w-7xl w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* Left Text */}
                        <div className="md:col-span-1 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4">
                                {art.title}
                            </h2>
                            {art.artist && (
                                <p className="text-md font-light text-gray-600">
                                    Artist: <span className="font-normal">{art.artist}</span>
                                </p>
                            )}
                            {art.year && (
                                <p className="text-md font-light text-gray-600">
                                    Year: <span className="font-normal">{art.year}</span>
                                </p>
                            )}
                        </div>

                        {/* Center Image / Video Carousel */}
                        <div className="md:col-span-1 flex flex-col items-center">
                            {totalMedia > 0 ? (
                                <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg shadow-md border border-gray-300 bg-black flex items-center justify-center" style={{ minHeight: '300px' }}>
                                    {isVideo(mediaUrls[currentImageIndex]) ? (
                                        <video
                                            src={ mediaUrls[currentImageIndex] }
                                            controls
                                            className="w-full max-h-[500px] object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = process.env.PUBLIC_URL + `https://placehold.co/600x400/cccccc/333333?text=Video+Not+Found`;
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={mediaUrls[currentImageIndex]}
                                            alt={`${art.title || "Art piece"} - Media ${currentImageIndex + 1}`}
                                            className="w-full max-h-[500px] object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found`;
                                            }}
                                        />
                                    )}

                                    {/* Carousel Buttons */}
                                    {totalMedia > 1 && (
                                        <>
                                            <button
                                                onClick={goToPreviousMedia}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white z-20"
                                                aria-label="Previous media"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={goToNextMedia}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white z-20"
                                                aria-label="Next media"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full z-20">
                                                {currentImageIndex + 1} / {totalMedia}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="text-lg font-light text-gray-500 py-10">No media available for this art piece.</div>
                            )}
                        </div>

                        {/* Right Description */}
                        <div className="md:col-span-1 text-center md:text-right">
                            {art.description && (
                                <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed">
                                    {art.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {!isPending && !error && !art && (
                <div className="text-xl font-light text-gray-500">No art piece found with this ID.</div>
            )}

            {/* Back Button */}
            <div className="mt-10">
                <button
                    onClick={() => history.goBack()}
                    className="flex items-center text-black hover:underline text-lg transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>
        </div>
    );
};

export default ViewArt;
