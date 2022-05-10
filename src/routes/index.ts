import { Router } from "express";
import userRouter from "./user.routes";
import sessionRouter from "./session.routes";
import productRouter from "./product.routes";
import orderRouter from "./order.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionRouter);
routes.use("/products", productRouter);
routes.use("/orders", orderRouter);

export default routes;
