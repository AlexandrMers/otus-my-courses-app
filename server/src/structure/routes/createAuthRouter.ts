import { Router } from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import AuthController from '../controllers/AuthController';
import AuthService from '../services/auth/AuthService';
import UserService from '../services/users/UserService';
import { UserModel } from '../models';

const createAuthRouter = () => {
  const authRouter = Router();

  const userService = new UserService(UserModel);
  const authService = new AuthService({
    bcryptService: bcrypt,
    userService: userService,
    jwtService: jwt,
  });
  const authController = new AuthController(authService);

  authRouter.get('/', authController.auth);
  authRouter.get('/logout', authController.logout);

  return authRouter;
};

export default createAuthRouter;
