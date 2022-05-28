import {range, asyncScheduler} from 'rxjs';

//Sincrono
const src1$ = range(1,6)
//Asincrono
const src2$ = range(1,6, asyncScheduler)

console.log("Inicio src1");
src1$.subscribe(console.log);
console.log("Fin src1");

console.log("Inicio src2");
src2$.subscribe(console.log);
console.log("Fin src2");
