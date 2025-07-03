const Artworks = ({artworks, title}) => {

    return (
        <div>
            <h1 className="text-red-900 text-2xl font-light">{title}</h1>
            {artworks.map((artwork) => (
                <div
                    key={artwork.id}
                    className="p-4 border border-black bg-white text-black hover:shadow-md transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold mb-2">{artwork.title}</h2>
                    <p className="text-sm text-gray-600">{artwork.media}</p>

                </div>
            ))}
        </div>
    );
}

export default Artworks;