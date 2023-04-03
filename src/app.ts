import express from "express";
import authRouter from "./routers/authRouter";
import cors from "cors";
import animeRouter from "./routers/animeRouter";

const app = express();
app.use(express.json())
app.use(cors());
// app.get("/health", (_req: Request, res: Response) => res.send("I'am alive!"));
app.use(authRouter);
app.use(animeRouter);

export default app;