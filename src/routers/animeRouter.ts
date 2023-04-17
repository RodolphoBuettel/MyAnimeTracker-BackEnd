import { addEpisode, deleteAnime, findAnimeById, getAnimeByTerm, getAnimes, postAnime } from "../controllers/animeController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { Router } from "express";

const animeRouter = Router();

animeRouter
    .all("/*", authenticateToken)
    .post("/myanimes", postAnime)
    .put("/myanimes/:id", addEpisode)
    .delete("/myanimes/:id", deleteAnime)
    .get("/myanimes", getAnimes)
    .get("/myanimesbyterm", getAnimeByTerm )
    .get("/myanime/:id", findAnimeById);

export default animeRouter;