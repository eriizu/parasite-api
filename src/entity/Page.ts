import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Visit } from "./Visit";

@Entity()
export class Page {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  url!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ nullable: true })
  img?: string;

  @OneToMany(() => Visit, (visit) => visit.page)
  visits?: Visit[];
}
