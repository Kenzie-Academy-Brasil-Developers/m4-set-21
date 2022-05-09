import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";
import User from "../../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

export default class AuthService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("Incorrect email / password combination");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Incorrect email / password combination");
    }

    const token = sign({}, process.env.SECRET_KEY || "default", {
      subject: user.id,
      expiresIn: "3d",
    });

    return {
      user,
      token,
    };
  }
}
