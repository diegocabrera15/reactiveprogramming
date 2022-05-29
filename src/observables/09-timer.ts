import {timer} from 'rxjs';

const observer = {
    next: val => console.log(val),
    complete: () => console.log("complete"),
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);

//El timer es asincrono
console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin");
