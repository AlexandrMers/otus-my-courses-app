import bcrypt from 'bcrypt';

// Types
import { UserModelType } from '../../models';

// Helpers
import { mapUserForClient } from './helpers';

class UserService {
  private UserModel;

  constructor(userModel: UserModelType) {
    this.UserModel = userModel;
  }

  public register = async ({
    name,
    login,
    password,
    confirmedPassword,
  }: {
    name: string;
    password: string;
    login: string;
    confirmedPassword: string;
  }) => {
    if (password !== confirmedPassword) {
      throw Error('Пароли не совпадают');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await this.UserModel.create({
      login,
      name,
      password: encryptedPassword,
    });

    const createdUser = await user.save();

    return mapUserForClient(createdUser);
  };

  public getById = async (id: string) => {
    const user = await this.UserModel.findOne({ _id: id });

    if (!user) {
      throw Error('Пользователя с таким id не существует!');
    }

    return user;
  };

  public getByLogin = async (login: string, selectPassword = false) => {
    const user = await this.UserModel.findOne({ login }).select(
      selectPassword ? '+password' : null
    );

    if (!user) {
      throw Error('Пользователя с таким логином не существует!');
    }

    return user;
  };
}

export default UserService;
