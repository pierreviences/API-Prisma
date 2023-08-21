import express from "express";
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

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
