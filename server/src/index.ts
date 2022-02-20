import express from 'express';
import mongoose from 'mongoose';

import createRoutes from './structure/routes';

import './configs/initializeDotenv';

import { getMongoDbUrl } from './configs/mongoDb';

const DEFAULT_PORT = 8080;

const runServer = async () => {
  try {
    const app = express();

    // connect to database
    await mongoose.connect(getMongoDbUrl(process)).then((connection) => {
      console.log('MongoDB is connected');
      return connection;
    });

    createRoutes(app);

    const port = process.env.APP_PORT || DEFAULT_PORT;
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    throw Error(error);
  }
};
runServer();
