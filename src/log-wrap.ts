import { createLogger, transports } from 'winston';

import { LogConfig } from './log-config';

export class LogWrapper {
  // public Logger = this.logger();

  constructor(private config = new LogConfig()) {
  }

  public logger() {
    return  createLogger({
      transports: [
          new (transports.Console)({ level: this.config.level })
          // new (transports.File)({ filename: this.config.fileName, level: this.config.level})

          /* When use file this error occures via test
            Jest has detected the following 1 open handle potentially keeping Jest from exiting:
            ●  FSREQCALLBACK
            at Object.stat (node_modules/graceful-fs/polyfills.js:281:19)
            at File.stat (node_modules/winston/lib/winston/transports/file.js:426:8)
            at File.open (node_modules/winston/lib/winston/transports/file.js:399:10)
            at new File (node_modules/winston/lib/winston/transports/file.js:93:10)
            at LogWrapper.logger (src/log-wrap.ts:236:83)
            at Object.it (src/log-wrap.test.ts:13:25)
          */
      ]
    });
  }
}
