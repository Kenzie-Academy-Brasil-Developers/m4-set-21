import { repositories } from "../../database";

const deleteRepositoryService = ({ id }) => {
  let repository = repositories.findIndex((repository) => repository.id === id);

  if (repository >= 0) {
    repositories.splice(repository, 1);
  } else {
    throw new Error("Repository not found");
  }
};

export default deleteRepositoryService;
