import database from "../../database";

const updateCourseService = async ({
  id,
  title,
  price,
  category,
  duration_hours,
  user_id,
}) => {
  try {
    const res = await database.query("SELECT * FROM courses WHERE id = $1", [
      id,
    ]);

    if (!res.rows.length) {
      throw new Error("Not found any course with this id");
    }

    const [course] = res.rows;

    if (course.creator_id !== user_id) {
      throw new Error("Only the creator of the course can update");
    }

    title ? (course.title = title) : course.title;
    price ? (course.price = price) : course.price;
    category ? (course.category = category) : course.category;
    duration_hours
      ? (course.duration_hours = duration_hours)
      : course.duration_hours;

    const updatedCourse = await database.query(
      "UPDATE courses SET title = $1, price = $2, category = $3, duration_hours = $4 WHERE id = $5 RETURNING *",
      [course.title, course.price, course.category, course.duration_hours, id]
    );

    return updatedCourse.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCourseService;
