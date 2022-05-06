import { Request, Response } from "express";
import AuthService from "../services/sessions/AuthService";

export default class SessionController {
  static async store(request: Request, response: Response) {
    const { email, password } = request.body;
    const auth = new AuthService();

    const authenticatedUser = await auth.execute({
      email,
      password,
    });

    return response.json(authenticatedUser);
  }
}
