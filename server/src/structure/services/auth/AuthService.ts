import UserService from '../users/UserService';

import { mapUserForClient } from '../users/helpers';

import { JwtServiceType, BcryptServiceType } from './types';

import '../../../configs/initializeDotenv';

class AuthService {
  private expiresIn: string = process.env.JWT_EXPIRES_IN;
  private tokenSecret: string = process.env.JWT_SECRET_KEY;

  private jwtService: JwtServiceType;
  private userService: UserService;
  private bcryptService: BcryptServiceType;

  constructor({
    jwtService,
    userService,
    bcryptService,
  }: {
    jwtService: JwtServiceType;
    userService: UserService;
    bcryptService: BcryptServiceType;
  }) {
    this.jwtService = jwtService;
    this.userService = userService;
    this.bcryptService = bcryptService;
  }

  public auth = async (login: string, password: string) => {
    const user = await this.userService.getByLogin(login, true);

    const passwordResult = this.bcryptService.compareSync(
      password,
      user.password
    );

    if (!passwordResult) {
      throw Error('Логин или пароль указаны неверно!');
    }

    const userWithoutPassword = mapUserForClient(user);

    return this.jwtService.sign(userWithoutPassword, this.tokenSecret, {
      expiresIn: this.expiresIn,
    });
  };
}

export default AuthService;
