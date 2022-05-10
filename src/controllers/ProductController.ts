import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Product from "../models/Product";
import CreateProductService from "../services/products/CreateProduct.service";
import DeleteProductService from "../services/products/DeleteProduct.service";
import UpdateProductService from "../services/products/UpdateProduct.service";

export default class UserController {
  static async store(request: Request, response: Response) {
    const { description, price, title, img_url } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      description,
      price,
      title,
      img_url,
    });

    return response.status(201).json(product);
  }

  static async index(request: Request, response: Response) {
    const productRepository = AppDataSource.getRepository(Product);

    const products = await productRepository.find();

    return response.json(products);
  }

  static async update(request: Request, response: Response) {
    const { productId } = request.params;
    const { description, price, title, img_url } = request.body;

    const updateService = new UpdateProductService();

    const product = await updateService.execute({
      description,
      price,
      title,
      img_url,
      id: productId,
    });

    return response.json(product);
  }

  static async delete(request: Request, response: Response) {
    const { productId } = request.params;

    const deleteService = new DeleteProductService();

    await deleteService.execute({
      id: productId,
    });

    return response.status(204).json();
  }
}
