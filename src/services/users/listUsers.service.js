import database from "../../database";

const listUsersService = async () => {
  try {
    const res = await database.query("SELECT * FROM users;");

    res.rows.forEach((user) => delete user.password_hash);

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listUsersService;
