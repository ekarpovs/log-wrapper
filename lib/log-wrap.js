"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const log_config_1 = require("./log-config");
class LogWrapper {
    // public Logger = this.logger();
    constructor(config = new log_config_1.LogConfig()) {
        this.config = config;
    }
    logger() {
        return winston_1.createLogger({
            transports: [
                new (winston_1.transports.Console)({ level: this.config.level }),
                new (winston_1.transports.File)({ filename: this.config.fileName, level: this.config.level })
            ]
        });
    }
}
exports.LogWrapper = LogWrapper;
//# sourceMappingURL=log-wrap.js.map