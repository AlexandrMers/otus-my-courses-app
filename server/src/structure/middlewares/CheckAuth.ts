import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

// Types
import { RequestWithUser } from '../../types/Request';
import { User } from '../models/schemas/User';

import '../../configs/initializeDotenv';

export default (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(403).json({
      status: 'error',
      error: 'Отсутствует токен авторизации!',
    });
  }

  try {
    const authenticatedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = authenticatedUser as User;

    return next();
  } catch (error) {
    return res.status(403).json({
      status: 'error',
      error: error.toString(),
    });
  }
};
