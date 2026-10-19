import octopizzo from "../assets/art/octopizzo.jpg";
import fyahMummah from "../assets/art/fyahMummah.jpg";
import stillLife from "../assets/art/stillLife.jpg";
import littleGrebe from "../assets/art/littleGrebe.jpg";


const API_URL = "http://localhost:5000/api/artworks";


//match artworks to the imported images using the db id
const artworkImages = {
    1: stillLife,
    4: octopizzo,
    6: fyahMummah,
    7: littleGrebe,
};


//fetch all artworks
export const getArtworks = async () => {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const artworks = await response.json();

    return artworks.map((artwork) => ({
        ...artwork,
        image: artworkImages[artwork.id] ?? null,
    }));
};


//fetch a single artwork using the db ID
export const getArtworkById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        if (response.status === 404) {
        throw new Error("Artwork not found.");
        }

         throw new Error(`HTTP error: ${response.status}`);
    }

    const artwork = await response.json();

    return {
        ...artwork,
        image: artworkImages[artwork.id] ?? null,
    };  
};