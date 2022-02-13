import { Express } from 'express';
import bodyParser from 'body-parser';

import createUserRouter from './createUserRouter';
import { Connection } from 'typeorm';

const createRoutes = (app: Express, connection: Connection) => {
  app.use(bodyParser.json());

  // TODO -  Пока что не делаем авторизацию...
  // app.use(CheckAuth);

  app.use('/users', createUserRouter(connection));
};

export default createRoutes;
