import express from "express";
import artworkRoutes from "./routes/artworkRoutes.js";
import { pool } from "./config/db.js";
import cors from "cors";

const app = express();

const PORT = Number(process.env.PORT ?? 5000);


// origins allowed to call this API
const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL,
].filter((origin): origin is string => Boolean(origin));


app.use(cors({ origin: allowedOrigins}));


//parse incoming json request bodies
app.use(express.json());


//register artwork routes
app.use("/api/artworks", artworkRoutes);


// TEMPORARY: remove after debugging
app.get("/api/debug-env", (_req, res) => {
    const url = process.env.DATABASE_URL;
    let parsedPort: string | null = null;
    try {
        parsedPort = url ? new URL(url).port : null;
    } catch {
        parsedPort = "unparseable";
    }
    res.json({
        onVercel: Boolean(process.env.VERCEL),
        hasDatabaseUrl: Boolean(url),
        parsedPort,
    });
});

// catch any error thrown inside routes and respond cleanly
app.use(
    (
        err: Error,
        _req: express.Request,
        res: express.Response,
        _next: express.NextFunction
    ) => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
);


//test postgresql connection
pool.query("SELECT current_database() AS database")
    .then((result) => {
        console.log("PostgreSQL connected successfully.");
        console.log("Connected db:", result.rows[0].database);
    })
    .catch((error: unknown) => {
        console.error("PostgreSQL connection failed:", error);
    });

// only start our server when not running on vercel
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


// let vercel import the app and run it
export default app;