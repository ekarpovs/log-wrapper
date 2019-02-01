"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_wrap_1 = require("./log-wrap");
describe('Create LogWrapper', () => {
    it('should be created instance of LogWrapper', () => {
        const logWrap = new log_wrap_1.LogWrapper();
        expect(logWrap).toBeInstanceOf(log_wrap_1.LogWrapper);
    });
});
describe('Get logger', () => {
    it('should be created logger', () => {
        const logWrap = new log_wrap_1.LogWrapper();
        const log = logWrap.logger();
        expect(log);
    });
});
//# sourceMappingURL=log-wrap.test.js.map