import type { Request, Response } from "express";
import { getAllArtworks, getArtworkById } from "../services/artworkService.js";

export const getArtworks = async ( req: Request, res: Response ) => {
    try {
        const artworks = await getAllArtworks();

        return res.json(artworks);
    } catch (error: unknown) {
        console.error("Failed to fetch artworks:", error);

        return res.status(500).json({
            message: "Failed to retrieve artworks.",
        });
    }
};

export const getArtworkByIdController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid artwork ID.",
        });
    }

    try {
        const artwork = await getArtworkById(id);

        if(!artwork) {
            return res.status(404).json({
                message: "Artwork not found.",
            });
        }

        return res.json(artwork);
    } catch (error: unknown) {
        console.error("Failed to fetch artwork:", error);

        return res.status(500).json({
            message: "Failed to retrieve artwork.",
        });
    }
}