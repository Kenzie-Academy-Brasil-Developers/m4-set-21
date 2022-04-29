import database from "../../database";

const createReviewService = async ({
  user_id,
  course_id,
  review_description,
  review_score,
}) => {
  try {
    const res = await database.query("SELECT * FROM courses WHERE id = $1", [
      course_id,
    ]);

    if (!res.rows.length) {
      throw new Error("Not found any course with this id");
    }

    const verifyReview = await database.query(
      "SELECT * FROM reviews WHERE course_id = $1 AND user_id = $2",
      [course_id, user_id]
    );

    if (verifyReview.rows.length) {
      throw new Error("This user already have given a review");
    }

    const review = await database.query(
      "INSERT INTO reviews(user_id, course_id, review_description, review_score) VALUES($1, $2, $3, $4) RETURNING *",
      [user_id, course_id, review_description, review_score]
    );

    return review.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createReviewService;
