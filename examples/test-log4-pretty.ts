import { Logger, styleWrap } from "../src/index.js";
const logger = new Logger({ name: "myLogger" });
// this.logger = new Logger<any>({ stackDepthLevel: 6 });

function initPretty() {
  logger.settings.stylePrettyLogs = true;
  logger.settings.prettyLogTimeZone = "local";
  logger.settings.prettyInspectOptions = { colors: true, compact: true, sorted: false };
  logger.settings.prettyLogStyles = {
    logLevelName: {
      "*": ["bold", "black", "bgWhiteBright", "dim"],
      SILLY: ["bold", "white"],
      TRACE: ["bold", "whiteBright"],
      DEBUG: ["bold", "green"],
      INFO: ["bold", "blue"],
      WARN: ["bold", "yellow"],
      ERROR: ["bold", "red"],
      FATAL: ["bold", "redBright"],
    },
    dateIsoStr: "white",
    filePathWithLine: "white",
    name: ["white", "bold"],
    nameWithDelimiterPrefix: ["white", "bold"],
    nameWithDelimiterSuffix: ["white", "bold"],
    errorName: ["bold", "bgRedBright", "whiteBright"],
    fileName: ["yellow"],
    fileNameWithLine: "white",
  };
  logger.settings.prettyLogTemplate = "{{hh}}:{{MM}}:{{ss}} {{logLevelName}} [{{fileNameWithLine}}] {{secDuration}} ";
}
initPretty();

/*

logger.settings.prettyLogTemplate = '{{hh}}:{{MM}}:{{ss}}  [{{fileNameWithLine}}] ';
logger.log(2, 'level_two', 'LOG4');
logger.debug('asd');
logger.info('aaswd asd asdsd');
logger.info(styleWrap('aaswd asd asdsd','red'),'RED');

logger.info(styleWrap('asdasd',['blue','bold','bgYellowBright']));
*/
logger.debug({ asd: 11, erca: "asdkjlh" });
