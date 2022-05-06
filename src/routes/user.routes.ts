import { Router } from "express";
import UserController from "../controllers/UserController";
import ensureAuth from "../middlewares/ensureAuth";

const userRouter = Router();

userRouter.post("/", UserController.store);

userRouter.use(ensureAuth);

userRouter.get("/", UserController.index);

export default userRouter;
