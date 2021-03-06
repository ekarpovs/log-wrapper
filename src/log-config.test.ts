import { LogConfig } from './log-config';

describe('Create LogConfig', () => {
  it('should be created instance of LogConfig', () => {
    const config = new LogConfig();
    expect(config).toBeInstanceOf(LogConfig);
  });
});

describe('Assign \'level\' default value', () => {
  it('should be equal to \'debug\'', () => {
    const config = new LogConfig();
    expect(config.level).toEqual('debug');
  });
});

describe('Assign \'fileName\' default value', () => {
  it('should be equal to \'debug.log\'', () => {
    const config = new LogConfig();
    expect(config.fileName).toEqual('debug.log');
  });
});
