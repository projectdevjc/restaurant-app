import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DocumentType } from '../../../../../../shared/enums/documentTypes/DocumentType';
import { Rol } from '../../../../../../shared/enums/roles/Rol';

@Entity('users')
export class User {
  @CreateDateColumn()
  private readonly createdAt!: Date;

  @UpdateDateColumn()
  private readonly updatedAt!: Date;

  @PrimaryGeneratedColumn('uuid')
  private readonly Id!: string;

  @Column()
  private readonly name!: string;

  @Column()
  private readonly lastName!: string;

  @Column()
  private readonly document!: string;

  @Column({
    type: 'enum',
    enum: DocumentType,
  })
  private readonly documentType!: DocumentType;

  @Column()
  private readonly Dob!: Date;

  @Column({
    type: 'enum',
    enum: Rol,
    default: Rol.USER,
  })
  private readonly rol!: Rol;

  @Column()
  private readonly email!: string;

  @Column()
  private readonly password!: string;

  @Column()
  private readonly isActive!: boolean;

  @Column()
  private readonly cellphone?: string;

  @Column()
  private readonly picture?: string;
}
