import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;
}
