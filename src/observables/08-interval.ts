import {interval} from 'rxjs';

const observer = {
    next: val => console.log(val),
    complete: () => console.log("complete"),
}

const interval$ = interval(1000);

//El interval es asincrono
console.log("Inicio");
interval$.subscribe(observer);
console.log("Fin");
