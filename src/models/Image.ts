import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Orphanages from "./Orphanages";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  path: String;

  @ManyToOne(() => Orphanages, (orphanage) => orphanage.images)
  @JoinColumn({ name: "orphanage_id" })
  orphanage: Orphanages;
}
