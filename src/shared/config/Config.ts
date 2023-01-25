import dotenv from 'dotenv';

import { AppEnvironment, NUM_UND, STR_UND } from '../types/Types';
import { logger } from './logger/Logger';

const LOCAL: string = 'local';

const environment: AppEnvironment = (process.env.ENVIRONMENT?.trim() ??
  LOCAL) as AppEnvironment;

logger.info(`Environment: ${environment}`);

dotenv.config({
  path: `${__dirname}../../../../environments/.env.${environment}`,
});

export class Config {
  public static ENVIRONMENT: AppEnvironment = environment;
  public static SERVER_PORT: STR_UND = process.env.SERVER_PORT;
  public static HOST: STR_UND = process.env.HOST;
  public static PORT: NUM_UND = Number(process.env.PORT);
  public static USER_NAME: STR_UND = process.env.USER_NAME;
  public static PASSWORD: STR_UND = process.env.PASSWORD;
  public static DATABASE: STR_UND = process.env.DATABASE;
  public static SYNCHRONIZE: boolean = Boolean(process.env.SYNCHONIZE);
}
