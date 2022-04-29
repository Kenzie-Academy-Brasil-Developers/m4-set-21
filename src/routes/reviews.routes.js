import { Router } from "express";
import ReviewsController from "../controllers/reviews.controller";
import ensureAuth from "../middlewares/ensureAuth.middleware";
import ReviewReportController from "../controllers/reviewsReport.controller";

const router = Router();

const reviewsController = new ReviewsController();
const reviewReportController = new ReviewReportController();

router.use(ensureAuth);

router.post("/", reviewsController.store);
router.get("/", reviewsController.index);

router.get("/report", reviewReportController.index);

export default router;
