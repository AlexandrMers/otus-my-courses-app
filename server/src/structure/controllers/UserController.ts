import { Request, Response } from 'express';

import UserService from '../services/users/UserService';

const TEXT_DUPLICATE_ERROR = 'duplicate key error collection';

class UserController {
  private userService: UserService;

  constructor(userService: any) {
    this.userService = userService;
  }

  public register = async (req: Request, res: Response) => {
    try {
      const { name, password, confirmedPassword, login } = req.body;

      const user = await this.userService.register({
        name,
        password,
        confirmedPassword,
        login,
      });

      res.json({
        status: 'ok',
        data: user,
      });
    } catch (error) {
      const textError = error.toString();
      if (textError.includes(TEXT_DUPLICATE_ERROR)) {
        return res.status(403).json({
          status: 'error',
          message: 'пользователь с таким логином уже существует',
        });
      }
      res.json({
        status: 'error',
        message: error.toString(),
      });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.getById(String(req.params.id));

      res.json({
        status: 'ok',
        data: user,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error.toString(),
      });
    }
  };
}

export default UserController;
