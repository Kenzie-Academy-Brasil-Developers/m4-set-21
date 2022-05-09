import { Router } from "express";
import userRouter from "./user.routes";
import sessionRouter from "./session.routes";
import productRouter from "./product.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionRouter);

routes.use("/products", productRouter);

export default routes;
