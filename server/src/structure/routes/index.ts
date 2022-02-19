import { Express } from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import createUserRouter from './createUserRouter';
import createCoursesRouter from './createCoursesRouter';

const createRoutes = (app: Express, connection: typeof mongoose) => {
  app.use(bodyParser.json());

  // TODO -  Пока что не делаем авторизацию...
  // app.use(CheckAuth);

  app.use('/users', createUserRouter());
  app.use('/courses', createCoursesRouter());
};

export default createRoutes;
