import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  //write just 'Name' for entity name
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`insterted user with id ${this.id}`);
  }
  @AfterUpdate()
  logUpdate() {
    console.log(`updated user with id ${this.id}`);
  }
  @AfterRemove()
  logRemove() {
    console.log(`removed user with id ${this.id}`);
  }
}
