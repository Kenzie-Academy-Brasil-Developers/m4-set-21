import express from "express";
import { uuid } from "uuidv4";

const app = express();

app.use(express.json());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  let repository = repositories.find((item) => item.id === id);

  if (!repository) {
    return response.status(400).json({
      error: "Repository not found",
    });
  }

  repository.likes = repository.likes + 1;

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;

  let repository = repositories.filter((item) => item.id === id);

  if (!repository.length) {
    return response.status(400).json({
      error: "Repository not found",
    });
  }

  const { title, url, techs } = request.body;

  const updatedRepo = { id, title, url, techs, likes: 0 };

  repositories.splice(repository);
  repository[0] = updatedRepo;

  repositories.push(repository[0]);

  return response.json(repository[0]);
});

app.listen(3333, () => {
  console.log("Server started!");
});
