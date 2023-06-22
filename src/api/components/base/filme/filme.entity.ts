import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filme')
export class Filme {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string; 


}