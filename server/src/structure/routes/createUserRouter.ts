import { Router } from 'express';

// Controllers
import UserController from '../controllers/UserController';

// Services
import UserService from '../services/users/UserService';

const createUserRouter = () => {
  const userRouter = Router();

  const userService = new UserService();
  const userController = new UserController(userService);

  userRouter.post('/register', userController.register);

  return userRouter;
};

export default createUserRouter;
