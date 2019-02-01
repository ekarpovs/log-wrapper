"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_config_1 = require("./log-config");
describe('Create LogConfig', () => {
    it('should be created instance of LogConfig', () => {
        const config = new log_config_1.LogConfig();
        expect(config).toBeInstanceOf(log_config_1.LogConfig);
    });
});
describe('Assign \'level\' default value', () => {
    it('should be equal to \'debug\'', () => {
        const config = new log_config_1.LogConfig();
        expect(config.level).toEqual('debug');
    });
});
describe('Assign \'fileName\' default value', () => {
    it('should be equal to \'debug.log\'', () => {
        const config = new log_config_1.LogConfig();
        expect(config.fileName).toEqual('debug.log');
    });
});
//# sourceMappingURL=log-config.test.js.map