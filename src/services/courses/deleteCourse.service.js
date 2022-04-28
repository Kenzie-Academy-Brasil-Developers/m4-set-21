import database from "../../database";

const deleteCourseService = async ({ course_id, user_id }) => {
  try {
    const res = await database.query("SELECT * FROM courses WHERE id = $1", [
      course_id,
    ]);

    if (!res.rows.length) {
      throw new Error("Not found any course with this id ");
    }

    const [course] = res.rows;

    if (course.creator_id !== user_id) {
      throw new Error("Only the creator of the course can delete");
    }

    await database.query("DELETE FROM courses WHERE id = $1;", [course_id]);
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCourseService;
