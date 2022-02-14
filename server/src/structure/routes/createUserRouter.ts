import { Router } from 'express';

// Controllers
import UserController from '../controllers/userController';

// Services
import UserService from '../services/UserService';
import { Connection } from 'typeorm';

const createUserRouter = (connection: Connection) => {
  const userRouter = Router();

  const userService = new UserService(connection);
  const userController = new UserController(userService);

  userRouter.post('/register', userController.register);

  return userRouter;
};

export default createUserRouter;
