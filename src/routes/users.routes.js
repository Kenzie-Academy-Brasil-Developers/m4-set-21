import { Router } from "express";
import UserController from "../controllers/users.controller";
import SessionController from "../controllers/sessions.controller";

const userRouter = Router();

const userController = new UserController();
const sessionController = new SessionController();

userRouter.post("", userController.store);
userRouter.get("", userController.index);

userRouter.post("/login", sessionController.store);

export default userRouter;
