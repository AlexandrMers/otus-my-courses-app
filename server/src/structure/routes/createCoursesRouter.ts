import { Router } from 'express';

import CoursesService from '../services/courses/CoursesService';
import CourseController from '../controllers/CourseController';

import { CourseModel, UserModel } from '../models';

const createCourseRouter = () => {
  const courseRouter = Router();

  const coursesService = new CoursesService({
    courseModel: CourseModel,
    userModel: UserModel,
  });
  const coursesController = new CourseController(coursesService);

  courseRouter.post('/create', coursesController.create);
  courseRouter.get('/:userId', coursesController.getCourses);

  return courseRouter;
};

export default createCourseRouter;
