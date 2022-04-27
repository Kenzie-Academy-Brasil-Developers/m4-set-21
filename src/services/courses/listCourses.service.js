import database from "../../database";

const listCoursesService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM courses c INNER JOIN users u ON c.creator_id = u.id;"
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
          id: row.creator_id,
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
