import { Router } from "express";
import ensureAuth from "../middlewares/ensureAuth";
import { expressYupMiddleware } from "express-yup-middleware";
import createOrderSchema from "../validations/orders/createOrder.validation";
import OrderController from "../controllers/OrderController";

const orderRouter = Router();

orderRouter.post(
  "/",
  expressYupMiddleware({
    schemaValidator: createOrderSchema,
  }),
  OrderController.store
);

orderRouter.use(ensureAuth);

orderRouter.get("/", OrderController.index);

export default orderRouter;
