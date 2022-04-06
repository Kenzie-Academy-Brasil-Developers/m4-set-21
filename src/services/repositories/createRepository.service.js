import repositories from "../../database";
import { v4 as uuid } from "uuid";

/* O service é apenas responsavel pela lógica. */
const createRepositoryService = ({ title, url, techs }) => {
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return repository;
};

export default createRepositoryService;
