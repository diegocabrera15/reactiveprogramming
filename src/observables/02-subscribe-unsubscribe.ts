import {Observable, Observer } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subs => {
    let count = 0;
    const intervalT = setInterval(()=>{
        subs.next(count++)
        console.log(count);        
    },1000);

    return () =>{
        clearInterval(intervalT)
        console.log('Interval distroy');
    }
});


// interval$.subscribe(num => console.log('Num: ', num));

const subs1 = interval$.subscribe();
const subs2 = interval$.subscribe();
const subs3 = interval$.subscribe();

setTimeout(() =>{
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()

    console.log('complete setTimeout');
    
},3000);