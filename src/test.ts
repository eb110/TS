import { CreateSimpleMemoryDatabase } from "./genericClass";
import { createLoggerClass } from "./logger";
import { Dumpable } from "./mixins";



const MyLogger = createLoggerClass();

const logger = new MyLogger();

logger.log(' joasia');

console.log(logger.dumpLog());


const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sdb1 = new StringDatabase();
//value is automatically set to 'string' as this was declared in line 14
sdb1.set('a', 'zenek');

//Dumpable takes as input the 'base' that have to have the 'getObject' function
//This has been declared by the 'constructor'
const DumpableStringDatabase = Dumpable(StringDatabase);

const sdb2 = new DumpableStringDatabase();
sdb2.set('joasia', 'siemielnicka');
sdb2.dump();