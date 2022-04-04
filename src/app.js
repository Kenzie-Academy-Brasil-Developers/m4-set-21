import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

let users = [];

app.get("/hello", (request, response) => {
  response.json({
    hello: "World",
  });
});

app.post("/users", (request, response) => {
  const { name, email, city } = request.body;

  const user = { id: uuid(), name, email, city };

  users = [...users, user];

  /* mesma coisa que:
     users.push(user) 
  */

  return response.status(201).json(user);
});

app.get("/users", (request, response) => {
  return response.json(users);
});

app.listen(3333, () => {
  console.log("Server started!");
});
