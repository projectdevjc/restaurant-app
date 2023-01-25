import { Request, Response } from 'express';

import { version } from '../../package.json';
import { HttpStatus } from '../shared/enums/web/HttpStatus';

export abstract class HealthCheck {
  private static readonly Version: unknown = version;
  public static getStatus = (_req: Request, res: Response): Response => {
    try {
      return res
        .status(HttpStatus.OK)
        .json({ Message: 'Server working ok!!', Version: HealthCheck.Version });
    } catch (err: unknown) {
      if (err instanceof Error) {
        return res.json({ Message: err.message });
      }
      return res.send(String(err));
    }
  };
}
