import { Router } from "express";
import ProductController from "../controllers/ProductController";
import ensureAuth from "../middlewares/ensureAuth";
import { expressYupMiddleware } from "express-yup-middleware";
import createProductSchema from "../validations/products/createProduct.validation";

const productRouter = Router();

productRouter.use(ensureAuth);

productRouter.post(
  "/",
  expressYupMiddleware({
    schemaValidator: createProductSchema,
  }),
  ProductController.store
);
productRouter.get("/", ProductController.index);
productRouter.patch("/:productId", ProductController.update);
productRouter.delete("/:productId", ProductController.delete);

export default productRouter;
