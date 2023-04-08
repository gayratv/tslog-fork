import { ILogObj, IMeta, Logger } from '../src/index.js';
import { appendFileSync } from 'node:fs';
import path from 'node:path';
import { prettyFormatLogObj } from '../src/runtime/nodejs';
import dayjs from 'dayjs';

const logger = new Logger();
logger.attachTransport((logObj) => {
  // appendFileSync( path.resolve(process.cwd(),'./log',"logs.json"), JSON.stringify(logObj) + "\n");
  logFileTransport(logObj);
});

function logFileTransport(logObject: ILogObj) {
  // console.log(logObject); // Use this to see the shape of the log object.
  const logMeta = logObject['_meta'] as IMeta;

  const djs = dayjs(logMeta.date).format('DD/MM/YYYY HH:mm:ss');

  let parentString = logMeta.parentNames?.join(':') || '';
  if (parentString) {
    parentString = `${parentString}:`;
  }

  let dataView = '';
  Reflect.ownKeys(logObject).forEach((key) => {
    if (key !== '_meta') {
      if (typeof logObject[key as string] === 'object') {
        dataView += ' ' + JSON.stringify(logObject[key as string]);
      } else {
        dataView += ' ' + logObject[key as string];
      }
    }
  });

  appendFileSync(
    path.resolve(process.cwd(), './log/logs2.json'),
    `${djs} - ${logMeta.logLevelName}: [${logMeta.path?.fileNameWithLine}] ${dataView}\n`,
  );
}

// logFileTransport({ a: 1, b: 'петя' });

logger.debug('I am a debug log.', { a: 1, b: 'петя' });
// logger.info("I am an info log.\n");
// logger.warn("I am a warn log with a json object:", { foo: "bar" },'\n');
