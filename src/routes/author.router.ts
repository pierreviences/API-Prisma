import { getAllAuthors } from "controllers/author.controllers";
import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);

export default authorRouter;
