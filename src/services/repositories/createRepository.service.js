import { repositories, users } from "../../database";
import { v4 as uuid } from "uuid";

/* O service é apenas responsavel pela lógica. */
const createRepositoryService = ({ title, url, techs, user_id, banana }) => {
  const user = users.find((user) => user.id === user_id);

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
    user,
    banana,
  };

  repositories.push(repository);

  return repository;
};

export default createRepositoryService;
