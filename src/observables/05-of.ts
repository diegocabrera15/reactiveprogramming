import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(1, [21, 15], {a:'Diego', b: 'Fernando'}, function(){});
const obs$ = of(...[1,2,3,4,5], 6, 7, 8, 9)

console.log("Inicia el obs$");
const subs = obs$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log("Teriminamos la secuencia")
);
console.log("Termina el obs$");