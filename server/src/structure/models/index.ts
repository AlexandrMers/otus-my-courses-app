import { getModelForClass } from '@typegoose/typegoose';

import { User } from './schemas/User';
import { Course } from './schemas/Course';

export const CourseModel = getModelForClass(Course);
export const UserModel = getModelForClass(User);

export type UserModelType = typeof UserModel;
export type CourseModelType = typeof CourseModel;
