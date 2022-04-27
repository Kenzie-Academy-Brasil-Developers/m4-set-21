import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import userRouter from "./routes/users.routes";
import courseRouter from "./routes/courses.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/courses", courseRouter);

app.get("/", (req, res) => {
  return res.send("Hello Kenzie!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App rodando!");
  startDatabase();
});
