import { addEpisode, deleteAnime, findAnimeById, getAnimes, postAnime } from "../controllers/animeController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { Router } from "express";

const animeRouter = Router();

animeRouter
    .all("/*", authenticateToken)
    .post("/myanimes", postAnime)
    .put("/myanimes/:id", addEpisode)
    .delete("/myanimes/:id", deleteAnime)
    .get("/myanimes", getAnimes)
    .get("/myanime/:id", findAnimeById);

export default animeRouter;