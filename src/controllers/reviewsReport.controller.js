import reportReviewService from "../services/reports/reportReview.service";

export default class ReviewReportController {
  async index(request, response) {
    try {
      const report = await reportReviewService();

      return response.json(report);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }
}
