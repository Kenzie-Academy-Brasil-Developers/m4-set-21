import database from "../../database";

const listCoursesService = async () => {
  try {
    const res = await database.query(
      "SELECT c.*, u.id user_id, u.name, u.email FROM courses c INNER JOIN users u ON c.creator_id = u.id;"
    );

    const courses = res.rows.map((row) => {
      const { id, title, category, price, duration_hours } = row;

      return {
        id,
        title,
        category,
        price,
        duration_hours,
        user: {
          id: row.user_id,
          name: row.name,
          email: row.email,
        },
      };
    });

    return courses;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCoursesService;
