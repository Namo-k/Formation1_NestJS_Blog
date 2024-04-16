import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  username: string;

  @Column({unique: true})
  readonly email: string;

  @Column()
  readonly password: string;


}