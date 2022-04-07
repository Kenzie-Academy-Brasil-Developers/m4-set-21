import createRepositoryService from "../services/repositories/createRepository.service";
import deleteRepositoryService from "../services/repositories/deleteRepository.service";
import findRepositoryService from "../services/repositories/findRepository.service";
import listRepositoriesService from "../services/repositories/listRepositories.service";
import updateRepositoryService from "../services/repositories/updateRepository.service";

export default class RepositoriesController {
  /* criar */
  store(request, response) {
    const { title, url, techs } = request.body;

    console.log(request.user);

    const repository = createRepositoryService({
      title,
      url,
      techs,
      user_id: request.user.id,
      banana: request.user.banana,
    });

    return response.status(201).json(repository);
  }

  /** listar */
  index(request, response) {
    const repositories = listRepositoriesService();

    return response.json(repositories);
  }

  /* buscar 1 recurso */
  show(request, response) {
    const { id } = request.params;

    try {
      const repository = findRepositoryService({ id });

      return response.json(repository);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }

  /* atualizar */
  update(request, response) {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    try {
      const repository = updateRepositoryService({ id, title, url, techs });

      return response.json(repository);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }

  /* deletar */
  delete(request, response) {
    const { id } = request.params;

    try {
      deleteRepositoryService({ id });

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }
}
