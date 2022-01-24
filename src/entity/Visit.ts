import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Page } from "./Page";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ default: "NOW()" })
  on!: Date;

  @Column({ type: "inet" })
  ip!: string;

  @ManyToOne(() => Page, (page) => page.visits)
  page?: Page | string;
}
