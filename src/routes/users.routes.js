import { Router } from "express";
import UserController from "../controllers/users.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

/* +== => |> */

const userRouter = Router();
const userController = new UserController();

userRouter.post("", verifyEmailAvailabilityMiddleware, userController.store);
userRouter.get("", userController.index);

export default userRouter;
