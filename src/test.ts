import { SingletonCounter } from "./singleton";

var counter1 = SingletonCounter.getInstance();
var counter2 = SingletonCounter.getInstance();




console.log(counter1.inc())
console.log(counter2.inc())
console.log(counter1.inc())
console.log(counter2.inc())