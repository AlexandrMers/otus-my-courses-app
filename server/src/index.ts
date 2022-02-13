import express from 'express';
import { Connection, createConnection } from 'typeorm';

import createRoutes from './structure/routes';

import './configs/initializeDotenv';

import { Users } from './structure/models/UsersModel';

const runServer = async () => {
  const app = express();

  // console.log('process.env.DATABASE_HOST ->', process.env.DATABASE_HOST);
  // console.log('process.env.DATABASE_USER_NAME ->', process.env.DATABASE_USER_NAME);
  // console.log('process.env.DATABASE_USER_PASSWORD ->', process.env.DATABASE_USER_PASSWORD);
  // console.log('process.env.DATABASE_PORT ->', process.env.DATABASE_PORT);

  // Connect to database
  const connection: Connection = await createConnection({
    type: 'mongodb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    database: process.env.DATABASE_NAME,
    authSource: process.env.DATABASE_NAME,
    entities: [Users],
  })
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
