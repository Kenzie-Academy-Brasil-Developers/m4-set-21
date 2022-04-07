import { v4 as uuid } from "uuid";
import { users } from "../../database";

import * as bcrypt from "bcryptjs";

const createUserService = async ({ name, email, password, isAdm = false }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  const user = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    id: uuid(),
  };

  users.push(user);

  return user;
};

export default createUserService;
