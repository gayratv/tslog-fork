import type { ILogger } from '../../src/index.js';
import { NLog } from '../../src/index.js';

export class Test {
  constructor(protected log: ILogger) {}
  foo() {
    this.log.info('Привет мир!');
  }
}

new Test(NLog.getInstance()).foo();
