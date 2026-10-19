import { pool } from "../config/db.js";
import type { Artwork } from "../types/artwork.js";


export const getAllArtworks = async (): Promise<Artwork[]> => {
    const result = await pool.query<Artwork>(
        "SELECT * FROM artworks ORDER BY id"
    );

    return result.rows;
};

export const getArtworkById = async(id: number): Promise<Artwork | undefined> => {
    const result = await pool.query<Artwork>(
        "SELECT * FROM artworks WHERE id = $1", [id]
    );

    return result.rows[0];
};