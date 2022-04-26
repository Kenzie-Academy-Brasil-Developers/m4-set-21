import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Kenzie!");
});

app.listen(3000, () => {
  console.log("App rodando!");
});
