import repositories from "../../database";

const updateRepositoryService = ({ id, title, techs, url }) => {
  let repository = repositories.find((item) => item.id === id);

  if (!repository) {
    throw new Error("Repository not found");
  }

  const updatedRepo = { id, title, url, techs, likes: 0 };

  repositories.splice(repository);
  repository = updatedRepo;

  repositories.push(repository);

  return repository;
};

export default updateRepositoryService;
