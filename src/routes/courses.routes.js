import { Router } from "express";
import CoursesController from "../controllers/courses.controller";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const coursesController = new CoursesController();

const router = Router();

router.use(ensureAuth);

router.post("/", coursesController.store);
router.get("/", coursesController.index);

export default router;
