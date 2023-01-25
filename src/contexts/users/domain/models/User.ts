import { BaseEntity } from '../../../../shared/constants/BaseEntity';
import { DocumentType } from '../../../../shared/enums/documentTypes/DocumentType';
import { Rol } from '../../../../shared/enums/roles/Rol';

export class User extends BaseEntity {
  private readonly name!: string;
  private readonly lastName!: string;
  private readonly document!: string;
  private readonly documentType!: DocumentType;
  private readonly Dob!: Date;
  private readonly rol!: Rol;
  private readonly email!: string;
  private readonly password!: string;
  private readonly isActive!: boolean;
  private readonly cellphone?: string;
  private readonly picture?: string;
}
