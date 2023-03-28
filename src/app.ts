import express from "express";
import authRouter from "./routers/authRouter";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());
// app.get("/health", (_req: Request, res: Response) => res.send("I'am alive!"));
app.use(authRouter);

export default app;