import { ConnectionOptions } from 'typeorm';
import './initializeDotenv';

export const MongoDbConfig: ConnectionOptions = {
  type: 'mongodb',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  name: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_USER_PASSWORD,
};
