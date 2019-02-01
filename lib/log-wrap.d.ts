import { LogConfig } from './log-config';
export declare class LogWrapper {
    private config;
    constructor(config?: LogConfig);
    logger(): import("winston").Logger;
}
