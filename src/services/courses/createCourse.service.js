import database from "../../database";

const createCourseService = async ({
  title,
  price,
  category,
  duration_hours,
  creator_id,
}) => {
  try {
    const res = await database.query(
      "INSERT INTO courses(title, price, category, duration_hours, creator_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, price, category, duration_hours, creator_id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createCourseService;
