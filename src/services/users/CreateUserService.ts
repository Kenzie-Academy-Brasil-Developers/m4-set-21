import User from "../../models/User";
import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

// Interfaces são tipagens de chave e valor para o nosso objeto
// Dentro dos services, sempre utilizo objetos como parametros, entao sempre existe
// uma interface para o parametro do método execute
interface UserDataParams {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  async execute({ email, name, password }: UserDataParams): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    // Esquecer o await transforma a promise em um valor truthy
    // Promise<pending> === true
    const checkUserExists = await userRepository.findOne({
      where: {
        email,
      },
    });

    // SELECT * FROM users WHERE email = $1, [email]

    if (checkUserExists) {
      throw new AppError("Email already exists", 401);
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}
