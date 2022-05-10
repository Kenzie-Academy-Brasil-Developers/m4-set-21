import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Order from "../models/Order";
import CreateOrderService from "../services/orders/createOrder.service";
import { instanceToPlain } from "class-transformer";

export default class OrderController {
  static async index(request: Request, response: Response) {
    const orderRepository = AppDataSource.getRepository(Order);

    const orders = await orderRepository.find();

    return response.json(instanceToPlain(orders));
  }

  static async store(request: Request, response: Response) {
    const { products_ids, desk } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      products_ids,
      desk,
    });

    return response.status(201).json(order);
  }
}
