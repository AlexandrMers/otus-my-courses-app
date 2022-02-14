import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;
}
