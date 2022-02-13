import { Users } from '../models/UsersModel';
import { Connection } from 'typeorm';

class UserService {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
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
    console.log('run here in register');

    if (password !== confirmedPassword) {
      throw Error('Пароли не совпадают');
    }

    // TODO - шифрование пароля сделаем чуть позже...
    // const encryptedPassword = await bcrypt.hash(password, 10);

    try {
      const user = new Users();

      user.login = login;
      user.name = name;
      user.password = password;

      return await this.connection.manager.save(user);
    } catch (error) {
      throw Error(error);
    }
  };
}

export default UserService;
