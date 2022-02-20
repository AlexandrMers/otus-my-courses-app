import { Router } from 'express';

// Controllers
import UserController from '../controllers/UserController';

// Services
import UserService from '../services/users/UserService';

// Models
import { UserModel } from '../models';

const createUserRouter = () => {
  const userRouter = Router();

  const userService = new UserService(UserModel);
  const userController = new UserController(userService);

  userRouter.post('/register', userController.register);
  userRouter.get('/:id', userController.getById);

  return userRouter;
};

export default createUserRouter;
