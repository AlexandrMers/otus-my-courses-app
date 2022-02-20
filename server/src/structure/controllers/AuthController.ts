import { Request, Response } from 'express';

import AuthService from '../services/auth/AuthService';
import { RequestWithUser } from '../../types/Request';

class AuthController {
  private tokenName: string = 'access_token';

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public auth = async (req: Request, res: Response) => {
    try {
      const { login, password } = req.body;
      const token = await this.authService.auth(login, password);

      return res
        .cookie(this.tokenName, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        })
        .status(200)
        .json({
          status: 'ok',
          data: 'Авторизация прошла успешно',
        });
    } catch (error) {
      res.status(401).json({
        status: 'error',
        data: error.toString(),
      });
    }
  };

  public logout = async (req: RequestWithUser, res: Response) => {
    try {
      return res.clearCookie('access_token').status(200).json({
        status: 'ok',
        data: 'Пользователь успешно разлогинен',
      });
    } catch (error) {
      return res.status(403).json({
        status: 'error',
        error: error.toString(),
      });
    }
  };
}

export default AuthController;
