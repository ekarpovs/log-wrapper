import { LogWrapper } from './log-wrap';

describe('Create LogWrapper', () => {
  it('should be created instance of LogWrapper', () => {
    const logWrap = new LogWrapper();
    expect(logWrap).toBeInstanceOf(LogWrapper);
  });
});

describe('Get logger', () => {
  it('should be created logger', () => {
    const logWrap = new LogWrapper();
    const log = logWrap.logger();
    expect(log);
  });
});
