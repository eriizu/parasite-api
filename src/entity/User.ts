import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  constructor() {}

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age?: number;
}
