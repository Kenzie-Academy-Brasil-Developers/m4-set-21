import { In } from "typeorm";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import Order from "../../models/Order";
import OrderProduct from "../../models/OrderProduct";
import Product from "../../models/Product";

interface Request {
  desk: string;
  products_ids: string[];
}

// 1,2,3,4,5,6,7

export default class CreateOrderService {
  public async execute({ desk, products_ids }: Request): Promise<Order> {
    const orderRepository = AppDataSource.getRepository(Order);
    const productsRepository = AppDataSource.getRepository(Product);
    const orderProductsRepository = AppDataSource.getRepository(OrderProduct);

    const products = await productsRepository.findBy({
      id: In(products_ids),
    });

    if (!products[products_ids.length - 1]) {
      throw new AppError("Invalid list of ids");
    }

    // if (products.length !== products_ids.length) {
    //   throw new AppError("Invalid list of ids");
    // }

    const order = orderRepository.create({
      desk,
    });

    await orderRepository.save(order);

    products_ids.forEach(async (productId) => {
      const orderProduct = orderProductsRepository.create({
        orderId: order.id,
        productId,
      });

      await orderProductsRepository.save(orderProduct);
    });

    return order;
  }
}
