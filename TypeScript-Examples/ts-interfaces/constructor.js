var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y:' + this.y);
        //.. function to draw the point
    };
    return Point;
}());
//Object
var point = new Point(1, 2);
// point.x = 1; //no longer needed with constructor
// point.y = 2;
point.draw();
