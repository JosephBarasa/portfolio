import express from "express";
import artworkRoutes from "./routes/artworkRoutes.js";
import { pool } from "./config/db.js";
import cors from "cors";

const app = express();

const PORT = 5000;

//allow requests from the react dev server
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

//parse incoming json request bodies
app.use(express.json());


//register artwork routes
app.use("/api/artworks", artworkRoutes);

//test postgresql connection
pool.query("SELECT current_database() AS database")
    .then((result) => {
        console.log("PostgreSQL connected successfully.");
        console.log("Connected db:", result.rows[0].database);
    })
    .catch((error: unknown) => {
        console.error("PostgreSQL connection failed:", error);
    });

//start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});