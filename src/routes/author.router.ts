import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "controllers/author.controllers";
import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.get("/", createAuthor);
authorRouter.get("/:id", updateAuthor);
authorRouter.get("/:id", deleteAuthor);

export default authorRouter;
