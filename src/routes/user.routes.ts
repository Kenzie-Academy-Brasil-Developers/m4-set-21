import { Router } from "express";
import UserController from "../controllers/UserController";
import ensureAuth from "../middlewares/ensureAuth";
import { expressYupMiddleware } from "express-yup-middleware";
import createUserSchema from "../validations/users/createUser.validation";

const userRouter = Router();

userRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  UserController.store
);

userRouter.use(ensureAuth);

userRouter.get("/", UserController.index);

export default userRouter;
