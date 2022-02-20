import { prop, Ref } from '@typegoose/typegoose';

import { Course } from './Course';

export class User {
  @prop()
  public name: string;

  @prop({
    unique: true,
  })
  login: string;

  @prop({
    select: false,
    type: () => String,
  })
  password: string;

  @prop({
    ref: () => Course,
  })
  availableCourses: Ref<Course>[];
}
