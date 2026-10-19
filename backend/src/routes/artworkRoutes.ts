import { Router } from "express";
import { getArtworks, getArtworkByIdController } from "../controllers/artworkController.js";

const router = Router();

router.get("/", getArtworks);

router.get("/:id", getArtworkByIdController);

export default router;