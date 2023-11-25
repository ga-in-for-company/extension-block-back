import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'file_extension', synchronize: false })
export class Extension {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  custom_or_fixed: string;

  @Column('tinyint', { nullable: true })
  is_checked: number;
}
