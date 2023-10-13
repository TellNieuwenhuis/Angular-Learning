import { fromEvent, interval } from "rxjs";
import{ map,exhaustMap, switchMap, take, tap } from "rxjs/operators";
import {ajax} from 'rxjs/ajax';

const button = document.querySelector('#btn')

const observable = fromEvent(
    button, 'click'
).pipe(
    exhaustMap(()=> {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete(){
                    console.log('inner observable complete')
                }
            }),
        )
        
    })
    
)


const subscription = observable.subscribe(
    {
        next(value){
            console.log(value)
        },
        complete(){
            console.log('complete')
        }
    }
)

console.log('hello')

// setTimeout (() => {
//     subscription.unsubscribe()
// },4000)

