import { Logger } from '../src/index.js';
import { appendFileSync } from "node:fs";
import path from "node:path";
import {prettyFormatLogObj} from "../src/runtime/nodejs";

const logger = new Logger();
logger.attachTransport((logObj) => {
  appendFileSync( path.resolve(process.cwd(),'./log',"logs.json"), JSON.stringify(logObj) + "\n");
});

logger.debug("I am a debug log.",{a:1,b:'петя'});
// logger.info("I am an info log.\n");
// logger.warn("I am a warn log with a json object:", { foo: "bar" },'\n');
