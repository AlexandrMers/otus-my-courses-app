import express from 'express';
import { Connection, createConnection } from 'typeorm';

const app = express();
const port = 8080; // default port to listen

// Connect to database
const connection: Promise<Connection> = createConnection({
  type: 'mongodb',
  host: 'localhost',
  port: 27020,
  name: 'admin',
  password: 'admin',
});

connection
  .then(() => {
    console.log('mongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
