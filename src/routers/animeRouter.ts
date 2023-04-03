import { deleteAnime, findAnimeById, getAnimes, postAnime } from "../controllers/animeController";
import { authenticateToken } from "../middlewares/authenticationMiddleware";
import { Router } from "express";

const animeRouter = Router();

animeRouter
    .all("/*", authenticateToken)
    .post("/myanimes", postAnime)
    .delete("/myanimes", deleteAnime)
    .get("/myanimes", getAnimes)
    .get("/myanime/:id", findAnimeById);

export default animeRouter;