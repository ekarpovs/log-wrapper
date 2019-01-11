'use strict';
import { createLogger, transports } from 'winston';

const prod = process.env.NODE_ENV === 'production';
const logger = createLogger({
    transports: [
        new (transports.Console)({ level: prod ? 'error' : 'debug' }),
        new (transports.File)({ filename: 'debug.log', level: 'debug'})
    ]
});

if (!prod) {
    logger.debug('Logging initialized at debug level');
}

export default logger;
