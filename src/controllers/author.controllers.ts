import { PrismaClient } from "@prisma/client";
import express from "express";
const authorClient = new PrismaClient().author;

// get All Authors
export const getAllAuthors = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const allAuthors = await authorClient.findMany({
      include: {
        books: true,
      },
    });

    res.status(200).json({ data: allAuthors });
  } catch (error) {
    console.log(error);
  }
};

// get Author By Id
export const getAuthorById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const authorId = req.params.id;
    const author = await authorClient.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });

    res.status(200).json({ data: author });
  } catch (error) {
    console.log(error);
  }
};

// create Author

// update Author

// delete Author
