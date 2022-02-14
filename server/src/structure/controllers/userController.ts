import UserService from '../services/UserService';
import { Response, Request } from 'express';

const TEXT_DUPLICATE_ERROR = 'duplicate key error collection';

class UserController {
  private userService: UserService;

  constructor(userService: any) {
    this.userService = userService;
  }

  public register = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.register({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        name: req.body.name,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        password: req.body.password,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        confirmedPassword: req.body.confirmedPassword,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        login: req.body.login,
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
}

export default UserController;
