import compression from 'compression';
import cors from 'cors';
import express, { Application, json } from 'express';
import { Server } from 'http';
import morgan from 'morgan';

import { HealthCheck } from './healthCheck/HealthCheck';
import { Database } from './shared/config/database/Database';
import { logger } from './shared/config/logger/Logger';
import { Path } from './shared/enums/web/Path';
import { STR_UND } from './shared/types/Types';

export class App {
  private readonly app: Application = express();
  private readonly database: Database;

  constructor() {
    this.database = Database.toInstance();
    this.middlewares();
  }

  public init(port: STR_UND): Server {
    return this.app.listen(port, () => {
      logger.info(`Open server on => http://localhost:${port}`);
      logger.info(
        `To health check visit => http://localhost:${port}/${Path.API}/${Path.CHECK}`
      );
      this.database
        .init()
        .then(() => logger.info('Database connected successfully'))
        .catch((err) => logger.error(err));
    });
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(compression());
    this.app.use(morgan('dev'));
    this.app.use(`/${Path.API}/${Path.CHECK}`, HealthCheck.getStatus);
  }
}
