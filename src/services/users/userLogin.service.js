import database from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = async ({ email, password }) => {
  try {
    const res = await database.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (!res.rows.length) {
      throw new Error("Email ou senha inválidos");
    }

    const [user] = res.rows;

    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatch) {
      throw new Error("Email ou senha inválidos");
    }

    const token = jwt.sign({}, process.env.SECRET, {
      expiresIn: "3d",
      subject: user.id,
    });

    delete user.password_hash;

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
};

export default userLoginService;
