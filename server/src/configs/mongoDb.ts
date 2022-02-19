import * as Process from 'process';

export const getMongoDbUrl = (process: typeof Process) =>
  'mongodb://' +
  process.env.MONGO_DB_LOGIN +
  ':' +
  process.env.MONGO_DB_PASSWORD +
  '@' +
  process.env.MONGO_DB_HOST +
  ':' +
  process.env.MONGO_DB_PORT +
  '/' +
  process.env.MONGO_DB_AUTHDATABASE;
