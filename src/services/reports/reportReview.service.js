import database from "../../database";

const reportReviewService = async () => {
  try {
    const res = await database.query(
      `
     SELECT
      c.id course_id, c.title, TRUNC(AVG(r.review_score), 2) media_nota
     FROM courses c
     INNER JOIN reviews r
     ON c.id = r.course_id
     GROUP BY c.category, c.id;
     `
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default reportReviewService;
