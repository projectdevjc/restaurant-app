import { BaseEntity } from '../../../../shared/constants/BaseEntity';

export class Restaurant extends BaseEntity {
  private readonly name!: string;
  private readonly nit!: string;
  private readonly ownerId!: number;
  private readonly categoryId!: number;
  private readonly address!: string;
  private readonly city!: string;
  private readonly department!: string;
  private readonly phone!: string;
  private readonly email?: string;
  private readonly capacity!: number;
  private readonly picture!: string;
  private readonly description!: string;
}
