import { CreateSimpleMemoryDatabase } from "./genericClass";

const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sdb1 = new StringDatabase();
//value is automatically set to 'string' as this was declared in line 3
sdb1.set('a', 'zenek');

console.log(sdb1.get('a'))