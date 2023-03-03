import { Logger, IMeta, formatTemplate } from '../src/index.js';


const logger = new Logger({
  name: 'myLogger',
  stylePrettyLogs:true,
  type: 'pretty',
  overwrite: {
    formatMeta: (meta?: IMeta) => {
      // format LogObj meta object to a string and return it
      console.log(meta);

      return `${meta?.runtimeVersion} ${meta?.path?.fileNameWithLine}  `;
    },
    /*
    formatLogObj: <LogObj>(maskedArgs: unknown[], settings: ISettings<LogObj>) => {
      // format LogObj attributes to a string and return it
    },
    transportFormatted: (logMetaMarkup: string, logArgs: unknown[], logErrors: string[], settings: unknown) => {
      // overwrite the default transport for formatted (e.g. pretty) log levels. e.g. replace console with StdOut, write to file etc.
    },
*/
  },
});

logger.info('asdasd');


// const a=formatTemplate(logger.settings)
