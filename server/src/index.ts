import express from 'express';
import { Connection, createConnection } from 'typeorm';
import { MongoDbConfig } from './configs/mongoDb';

import './configs/initializeDotenv';

const app = express();

// Connect to database

const connection: Promise<Connection> = createConnection(MongoDbConfig);

connection
  .then(() => {
    console.log('mongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
