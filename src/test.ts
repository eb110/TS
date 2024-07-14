import { Cube } from "./Cube";

var cube = new Cube(1);
console.log('cube length = 1 => ', cube.length)
console.log('cube surface area = 6 => ', cube.surfaceArea)
console.log('cube volume = 1 => ', cube.volume)
cube.surfaceArea = 54;
console.log('\ncube length = 3 => ', cube.length)
console.log('cube volume = 27 => ', cube.volume)
cube.surfaceArea = 96;
console.log('\ncube length = 4 => ', cube.length)
console.log('cube volume = 64 => ', cube.volume)