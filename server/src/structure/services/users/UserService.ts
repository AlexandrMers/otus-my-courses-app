import bcrypt from 'bcrypt';

class UserService {
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

    try {
      // const user = User.create({
      //   login,
      //   name,
      //   password: encryptedPassword,
      // });

      // return user.save();

      return Promise.resolve(null);
    } catch (error) {
      throw Error(error);
    }
  };
}

export default UserService;
