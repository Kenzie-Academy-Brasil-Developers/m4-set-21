import createCourseService from "../services/courses/createCourse.service";
import listCoursesService from "../services/courses/listCourses.service";

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

  async show(request, response) {}

  async update(request, response) {}

  async delete(request, response) {}
}
