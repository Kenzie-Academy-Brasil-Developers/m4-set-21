import Product from "../../models/Product";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import { DeleteResult } from "typeorm";

interface ProductDataParams {
  id: string;
}

export default class DeleteProductService {
  async execute({ id }: ProductDataParams): Promise<DeleteResult> {
    const productRepository = AppDataSource.getRepository(Product);

    const product = await productRepository.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new AppError("Not found any product with this id");
    }

    return await productRepository.delete(id);
  }
}
