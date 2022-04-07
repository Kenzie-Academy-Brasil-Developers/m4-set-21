import express from "express";
import repositoriesRouter from "./routes/repositories.routes";
import sessionRouter from "./routes/sessions.routes";
import usersRouter from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/repositories", repositoriesRouter);
app.use("/users", usersRouter);
app.use("/sessions", sessionRouter);

app.listen(3333, () => {
  console.log("Server started!");
});
