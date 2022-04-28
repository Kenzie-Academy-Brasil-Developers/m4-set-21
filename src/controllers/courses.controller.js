import createCourseService from "../services/courses/createCourse.service";
import deleteCourseService from "../services/courses/deleteCourse.service";
import listCoursesService from "../services/courses/listCourses.service";
import showCourseService from "../services/courses/showCourse.service";
import updateCourseService from "../services/courses/updateCourse.service";

export default class CoursesController {
  async store(request, response) {
    const { title, price, category, duration_hours } = request.body;

    try {
      const course = await createCourseService({
        category,
        creator_id: request.user.id,
        duration_hours,
        price,
        title,
      });

      return response.status(201).json(course);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const courses = await listCoursesService();

      return response.json(courses);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  async show(request, response) {
    const { course_id } = request.params;

    try {
      const course = await showCourseService({ course_id });

      return response.json(course);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async update(request, response) {
    const { course_id } = request.params;
    const { title, price, category, duration_hours } = request.body;

    try {
      const course = await updateCourseService({
        id: course_id,
        category,
        duration_hours,
        price,
        title,
        user_id: request.user.id,
      });

      return response.json(course);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async delete(request, response) {
    const { course_id } = request.params;

    try {
      await deleteCourseService({ course_id, user_id: request.user.id });

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }
}
