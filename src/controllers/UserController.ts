import { Request, Response } from "express";
import CreateUserService from "../services/users/CreateUserService";

export default class UserController {
  static async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.status(201).json(user);
  }
}
