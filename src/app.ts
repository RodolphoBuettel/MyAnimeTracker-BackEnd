import express, { json, Request, Response } from "express";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("I'am alive!"));

export default app;