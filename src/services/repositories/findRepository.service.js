import { repositories } from "../../database";

/* Utilizando services, é possivel utilizar classes tbm, seguindo o SRP, 
deve apenas ter o método execute() */

const findRepositoryService = ({ id }) => {
  const repository = repositories.find((repository) => repository.id === id);

  if (!repository) {
    throw new Error("Repository not found");
  }

  return repository;
};

export default findRepositoryService;
