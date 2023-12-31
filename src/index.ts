import express from "express";
const app = express();

import authorRouter from "./routes/author.router";
import bookRouter from "./routes/book.router";

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/ping", (req: express.Request, res: express.Response) => {
  res
    .json({
      message: "pong",
    })
    .status(200);
});

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
