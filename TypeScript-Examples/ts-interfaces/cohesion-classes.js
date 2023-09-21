var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y:' + this.y);
        //.. function to draw the point
    };
    Point.prototype.getDistance = function (another) {
        //.. function here
    };
    return Point;
}());
var point = new Point();
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
