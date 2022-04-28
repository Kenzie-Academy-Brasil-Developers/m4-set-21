import database from "../../database";

const showCourseService = async ({ course_id }) => {
  try {
    const res = await database.query(
      "SELECT c.*, u.id user_id, u.name, u.email FROM courses c INNER JOIN users u ON c.creator_id = u.id WHERE c.id = $1",
      [course_id]
    );

    if (!res.rows.length) {
      throw new Error("Not found any course with this id");
    }

    const { id, title, category, price, duration_hours } = res.rows[0];

    const course = {
      id,
      title,
      category,
      price,
      duration_hours,
      user: {
        id: res.rows[0].user_id,
        name: res.rows[0].name,
        email: res.rows[0].email,
      },
    };

    return course;
  } catch (err) {
    throw new Error(err);
  }
};

export default showCourseService;
