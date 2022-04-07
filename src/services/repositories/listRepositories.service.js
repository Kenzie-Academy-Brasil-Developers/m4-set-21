import { repositories } from "../../database";

/* Utilizando services, é possivel utilizar classes tbm, seguindo o SRP, 
deve apenas ter o método execute() */

const listRepositoriesService = () => {
  return repositories;
};

export default listRepositoriesService;
