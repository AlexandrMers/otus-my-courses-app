import { ConnectionOptions } from 'typeorm';

import { BaseConnectionOptions } from 'typeorm/connection/BaseConnectionOptions';

import './initializeDotenv';

export const getMongoDbConfig = (entities: BaseConnectionOptions['entities'] = []): ConnectionOptions => ({
  type: 'mongodb',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  name: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_USER_PASSWORD,
  database: process.env.DATABASE_NAME,
  authSource: process.env.DATABASE_NAME,
  synchronize: true,
  entities,
});
