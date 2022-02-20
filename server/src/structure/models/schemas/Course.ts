import { prop, Ref } from '@typegoose/typegoose';

import { User } from './User';

export class Course {
  @prop()
  image: string;

  @prop({
    ref: () => User,
  })
  creator: Ref<User>;

  @prop({
    type: () => [String],
    default: [],
  })
  comments?: string[];

  @prop({
    type: () => [String],
    default: [],
  })
  lessons: string[];

  @prop()
  description: string;

  @prop({
    ref: () => User,
  })
  availableUsers: Ref<User>[];
}
