import repositories from "../../database";

const likeRepositoryService = ({ id }) => {
  let repository = repositories.find((item) => item.id === id);

  if (!repository) {
    throw new Error("Repository not found");
  }

  repository.likes = repository.likes + 1;

  return repository;
};

export default likeRepositoryService;
