import {Observable, Observer, Subject } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subs => {

    const intervalT = setInterval(() => subs.next(Math.random()) , 3000);

    return () => clearInterval(intervalT);
});


/**
 * 1. Casteo multipli
 * 2. También es un Observer
 * 3. Next, error, complete
 */
const subject$ = new Subject();
interval$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd =>console.log("subs1: ", rnd))
const subs2 = subject$.subscribe(rnd =>console.log("subs2: ", rnd))