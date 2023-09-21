// *let drawPoint = (x, y) => {  /// it is better to use a variable in this like shown below. 
//     // ...
// *}

interface Point { //interface should always be capitalized and purely for declaration purposes
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    //...
}

// let drawPoint = (point: {x: number, y: number}) => {  //need to use inline anotation to prevent any error down the line with the code. "(point: number)" or as shown. 
//     // ...better way to do is to use an interface incase point needs to be used somewhere else.
// }

drawPoint({ 
    x: 10, 
    y: 20 
});