import express from "express";
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
