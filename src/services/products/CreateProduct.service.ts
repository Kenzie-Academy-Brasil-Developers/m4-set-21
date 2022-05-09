import Product from "../../models/Product";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

interface ProductDataParams {
  title: string;
  price: number;
  description: string;
  img_url?: string;
}

export default class CreateProductService {
  async execute(data: ProductDataParams): Promise<Product> {
    const productRepository = AppDataSource.getRepository(Product);

    const product = productRepository.create(data);

    await productRepository.save(product);

    return product;
  }
}
