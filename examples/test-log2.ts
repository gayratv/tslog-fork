import { Logger, styleWrap } from "../src/index.js";
const logger = new Logger({ name: "myLogger" });
// logger.settings.hideLogPositionForProduction = true;
logger.settings.stylePrettyLogs = true;
logger.settings.type = "pretty";
logger.settings.prettyInspectOptions = { colors: true, compact: true, sorted: false };
logger.settings.prettyLogStyles = {
  logLevelName: {
    "*": ["bold", "blue", "bgWhiteBright", "dim"],

    SILLY: ["bold", "white"],
    TRACE: ["bold", "whiteBright"],
    DEBUG: ["bold", "green"],
    INFO: ["white"],
    WARN: ["bold", "yellow"],
    ERROR: ["bold", "red"],
    FATAL: ["bold", "redBright"],
  },
  dateIsoStr: "blue",
  name: ["white", "bold"],
  errorName: ["bold", "bgRedBright", "whiteBright"],
  fileNameWithLine: ["yellow"],
};
// logger.settings.prettyLogTemplate = '{{hh}}:{{MM}}:{{ss}}  {{logLevelName}}>>[{{fileNameWithLine}}]\t';

/*

logger.settings.prettyLogTemplate = '{{hh}}:{{MM}}:{{ss}}  [{{fileNameWithLine}}] ';
logger.log(2, 'level_two', 'LOG4');
logger.debug('asd');
logger.info('aaswd asd asdsd');
logger.info(styleWrap('aaswd asd asdsd','red'),'RED');

logger.info(styleWrap('asdasd',['blue','bold','bgYellowBright']));
*/
logger.debug({ asd: 11, erca: "asdkjlh" });
