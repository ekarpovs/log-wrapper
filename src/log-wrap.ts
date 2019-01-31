import { createLogger, transports } from 'winston';

import { LogConfig } from './log-config';

export class LogWrapper {
  // public Logger = this.logger();

  constructor(private config = new LogConfig()) {
  }

  public logger() {
    return  createLogger({
      transports: [
          new (transports.Console)({ level: this.config.level }),
          new (transports.File)({ filename: this.config.fileName, level: this.config.level})
      ]
    });
  }
}
