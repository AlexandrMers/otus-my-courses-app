import { Response, Request } from 'express';

import CoursesService from '../services/courses/CoursesService';

import { ExtendedRequest } from '../../types/Request';

interface CourseInterface {
  name: string;
  description: string;
}

class CoursesController {
  private coursesService: CoursesService;

  constructor(service: CoursesService) {
    this.coursesService = service;
  }

  public create = async (req: ExtendedRequest<CourseInterface>, res: Response) => {
    try {
      const { name, description } = req.body;

      const createdCourse = await this.coursesService.create(name, description);

      res.json({
        status: 'ok',
        data: createdCourse,
      });
    } catch (error) {
      res.status(403).json({
        status: 'error',
        error: error.toString(),
      });
    }
  };

  public getCourses = async (req: Request, res: Response) => {
    try {
      console.log('run here');
      const courses = await this.coursesService.getCourses();

      res.json({
        status: 'ok',
        data: courses,
      });
    } catch (error) {
      res.status(403).json({
        status: 'error',
        error: error.toString(),
      });
    }
  };
}

export default CoursesController;
