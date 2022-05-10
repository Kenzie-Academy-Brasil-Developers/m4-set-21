import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import User from "../models/User";
import CreateUserService from "../services/users/CreateUser.service";
import { instanceToPlain } from "class-transformer";

export default class UserController {
  static async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(user);
  }

  static async index(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    return response.json(instanceToPlain(users));
  }
}
