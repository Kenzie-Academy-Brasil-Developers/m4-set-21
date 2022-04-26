import database from "../database";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ email, name, password }) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const res = await database.query(
      "INSERT INTO users(email, name, password_hash, watch_time) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, name, hashedPassword, 0]
    );

    const [user] = res.rows;

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default createUserService;
