import Product from "../../models/Product";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

interface ProductDataParams {
  id: string;
  title: string;
  price: number;
  description: string;
  img_url?: string;
}

export default class UpdateProductService {
  async execute({
    description,
    id,
    title,
    price,
    img_url,
  }: ProductDataParams): Promise<Product> {
    const productRepository = AppDataSource.getRepository(Product);

    const product = await productRepository.findOne({ where: { id } });

    if (!product) {
      throw new AppError("Not found any product with this id");
    }

    price ? (product.price = price) : product.price;
    title ? (product.title = title) : product.title;
    description ? (product.description = description) : product.description;
    img_url ? (product.img_url = img_url) : product.img_url;

    return productRepository.save(product);
  }
}
