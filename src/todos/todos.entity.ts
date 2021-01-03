import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  status: string;

  @Column()
  assignTo: string;

  @Column()
  date: Date;
}
