import { ILogObj, IMeta } from './index.js';
import { appendFileSync } from 'node:fs';
import dayjs from 'dayjs';

export function logFileTransport(fnameWithDir: string, logObject: ILogObj) {
  // console.log(logObject); // Use this to see the shape of the log object.
  const logMeta = logObject['_meta'] as IMeta;

  const djs = dayjs(logMeta.date).format('DD/MM/YYYY HH:mm:ss');

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

  appendFileSync(fnameWithDir, `${djs} - ${logMeta.logLevelName}: [${logMeta.path?.fileNameWithLine}] ${dataView}\n`);
}
