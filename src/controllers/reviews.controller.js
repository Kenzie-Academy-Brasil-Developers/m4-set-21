import createReviewService from "../services/reviews/createReview.service";
import listReviewsService from "../services/reviews/listReviews.service";

export default class ReviewsController {
  async store(request, response) {
    const { course_id, review_description, review_score } = request.body;
    try {
      const review = await createReviewService({
        course_id,
        review_description,
        review_score,
        user_id: request.user.id,
      });

      return response.status(201).json(review);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const reviews = await listReviewsService();

      return response.json(reviews);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async show(request, response) {}

  async update(request, response) {}

  async delete(request, response) {}
}
