import { Logger } from "../src/index.js";

const logger = new Logger({ name: "myLogger" });
logger.silly("I am a silly log.");
logger.trace("I am a trace log.");
logger.debug("I am a debug log.");
logger.info("I am an info log.");
logger.warn("I am a warn log with a json object:", { foo: "bar" });
logger.error("I am an error log.");
logger.fatal(new Error("I am a pretty Error with a stacktrace."));
logger.trace("I am a trace log.");
logger.trace(`Attachable transports: Send logs to an external log aggregation services, file system, database, or email/slack/sms/you name it...`);
