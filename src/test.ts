import { createLoggerClass } from "./logger";



const MyLogger = createLoggerClass();

const logger = new MyLogger();

logger.log(' joasia');

console.log(logger.dumpLog());