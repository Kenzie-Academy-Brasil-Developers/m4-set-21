import { Router } from "express";
import CoursesController from "../controllers/courses.controller";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const coursesController = new CoursesController();

const router = Router();

router.use(ensureAuth);

router.post("/", coursesController.store);
router.get("/", coursesController.index);
router.get("/:course_id", coursesController.show);
router.patch("/:course_id", coursesController.update);
router.delete("/:course_id", coursesController.delete);

export default router;
