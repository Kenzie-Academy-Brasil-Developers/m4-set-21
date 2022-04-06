import { Router } from "express";
import LikesController from "../controllers/likes.controller";
import RepositoriesController from "../controllers/repositories.controller";

const repositoriesRouter = Router();

const repositoriesController = new RepositoriesController();
const likesController = new LikesController();

// CRUD

/*  CREATE
 *  READ
 *  UPDATE
 *  DELETE
 */

repositoriesRouter.get("", repositoriesController.index);
repositoriesRouter.get("/:id", repositoriesController.show);

repositoriesRouter.post("", repositoriesController.store);
repositoriesRouter.put("/:id", repositoriesController.update);
repositoriesRouter.delete("/:id", repositoriesController.delete);

repositoriesRouter.post("/:id/like", likesController.store);

export default repositoriesRouter;
