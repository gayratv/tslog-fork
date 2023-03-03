import type {ILogger} from "./logger.interface.js";
import {NLog} from "./logger.implementation.js";

export class Test {
  constructor( protected log: ILogger) {

  }
  foo () {
    this.log.info('Привет мир!')
  }
}

new Test(NLog.getInstance()).foo()
