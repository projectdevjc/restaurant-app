import { DataSource } from 'typeorm';

import { Config } from '../Config';

export class Database {
  // eslint-disable-next-line no-use-before-define
  private static instance: Database | undefined;
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: 'postgres',
      host: Config.HOST,
      port: Config.PORT,
      username: Config.USER_NAME,
      password: Config.PASSWORD,
      database: Config.DATABASE,
      synchronize: Config.SYNCHRONIZE,
    });
  }

  public static toInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
      return this.instance;
    }
    return this.instance;
  }

  public async init(): Promise<DataSource> {
    try {
      return await this.dataSource.initialize();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error(String(error));
    }
  }
}
