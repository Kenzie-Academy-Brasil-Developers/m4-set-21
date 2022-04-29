import database from "../../database";

const listReviewsService = async () => {
  try {
    const res = await database.query(
      `
    SELECT
     r.id,
     r.review_description,
     r.review_score,
     c.id course_id,
     c.title,
     c.category,
     c.price,
     c.duration_hours,
     u.id user_id,
     u.name,
     u.email,
     r.created_at
    FROM courses c 
    INNER JOIN reviews r
    ON c.id = r.course_id
    INNER JOIN users u
    ON u.id = r.user_id
    `
    );

    const reviews = res.rows.map((row) => {
      const {
        id,
        review_description,
        review_score,
        course_id,
        title,
        category,
        price,
        duration_hours,
        user_id,
        name,
        email,
        created_at,
      } = row;

      const course = {
        id: course_id,
        title,
        category,
        price,
        duration_hours,
      };

      const user = { id: user_id, name, email };

      return {
        id,
        review_description,
        review_score,
        course,
        user,
        created_at,
      };
    });

    return reviews;
  } catch (err) {
    throw new Error(err);
  }
};

export default listReviewsService;
