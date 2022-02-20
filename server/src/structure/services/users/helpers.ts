import { Document } from 'mongodb';
import { User } from '../../models/schemas/User';

type AnyObjectType = { [key: string]: any };

export const excludeFieldFromDoc =
  <RETURN_TYPE>(field: string) =>
  (obj: AnyObjectType) => {
    return Object.entries(obj).reduce<AnyObjectType>((res, [key, value]) => {
      if (key !== field) {
        res[key] = value;
        return res;
      }
      return res;
    }, {}) as RETURN_TYPE;
  };

export const mapUserForClient = (userData: Document & User) => ({
  id: userData._id,
  name: userData.name,
  login: userData.login,
  availableCourses: userData.availableCourses,
});
