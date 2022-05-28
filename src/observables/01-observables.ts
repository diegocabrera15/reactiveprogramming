import {Observable, Observer } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('observer next: ', value),
    error: error => console.warn('observer error: ', error),
    complete: () => console.info('observer complete')
};


// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs =>{

    subs.next('Hi');
    subs.next('World');

    subs.next('Hi');
    subs.next('World');

    //Forzar error
    // const a = undefined;
    // a.name = 'Fernando';

    subs.complete();
    subs.next('Hi');
    subs.next('World');
});

// obs$.subscribe(console.log)

// obs$.subscribe(
//     value => console.log('next: ', value),
//     error => console.warn('error: ', error),
//     () => console.info('complete')
// );

obs$.subscribe(observer);