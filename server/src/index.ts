import express from 'express';
import { Connection, createConnection } from 'typeorm';

import createRoutes from './structure/routes';

import './configs/initializeDotenv';

import { Users } from './structure/models/UsersModel';

import { getMongoDbConfig } from './configs/mongoDb';

const runServer = async () => {
  const app = express();

  // Connect to database
  const connection: Connection = await createConnection(getMongoDbConfig([Users]))
    .then((connection) => {
      console.log('MongoDB is connected');
      return connection;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  createRoutes(app, connection);

  const port = process.env.APP_PORT;

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

runServer();
