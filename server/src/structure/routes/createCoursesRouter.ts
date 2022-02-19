import { Router } from 'express';
import CoursesService from '../services/courses/CoursesService';
import CoursesController from '../controllers/CoursesController';

const createUserRouter = () => {
  const courseRouter = Router();

  const coursesService = new CoursesService();
  const coursesController = new CoursesController(coursesService);

  courseRouter.post('/create', coursesController.create);
  courseRouter.get('/', coursesController.getCourses);

  return courseRouter;
};

export default createUserRouter;
