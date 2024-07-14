import { createLoggerClass } from "./logger";



const MyLogger = createLoggerClass();

const logger = new MyLogger();

logger.log(' joasia');

console.log(logger.dumpLog());


const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sdb1 = new StringDatabase();
//value is automatically set to 'string' as this was declared in line 14
sdb1.set('a', 'zenek');