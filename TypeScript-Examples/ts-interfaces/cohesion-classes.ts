//class
class Point { 
    x: number;
    y: number;

    draw() {
        console.log('x: ' + this.x + ', y:'+ this.y);
        //.. function to draw the point
    }

    getDistance(another: Point){
        //.. function here
    }
}

//Object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

//*no longer needed*c
// let drawPoint = (point: Point) => {
//     //...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     //...
// }

// drawPoint({ 
//     x: 10, 
//     y: 20 
// });