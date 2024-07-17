import { CreateSimpleMemoryDatabase } from "./genericClass";
import { intersect } from "./intersect";
import { Monkey } from "./monkey";
import { Person } from "./person";

const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sdb1 = new StringDatabase();
//value is automatically set to 'string' as this was declared in line 3
sdb1.set('a', 'zenek');

console.log(sdb1.get('a'))



console.log('\n intersect \n')
var permonk = intersect(new Person(), new Monkey());
//permonk.name = 'lolo'
//permonk.surname = 'bolo'
