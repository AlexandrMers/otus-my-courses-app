import { Express, NextFunction, Request, Response } from 'express';
import { ifElse } from 'ramda';
import cookieParser from 'cookie-parser';

// Middlewares
import CheckAuth from '../middlewares/CheckAuth';
import bodyParser from 'body-parser';

// Router Creators
import createUserRouter from './createUserRouter';
import createCoursesRouter from './createCoursesRouter';
import createAuthRouter from './createAuthRouter';

const createRoutes = (app: Express) => {
  app.use(cookieParser());
  app.use(bodyParser.json());

  app.use(
    ifElse(
      (req) => !['/auth', '/user/register'].includes(req.path),
      CheckAuth,
      (req: Request, res: Response, next: NextFunction) => next()
    )
  );

  app.use('/auth', createAuthRouter());
  app.use('/users', createUserRouter());
  app.use('/courses', createCoursesRouter());
};

export default createRoutes;
