class Point { 
    x: number;
    y: number;

    constructor(x?: number, y?: number) {  // the ? makes the parameter optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ', y:'+ this.y);
        //.. function to draw the point
    }

}

//Object
let point = new Point(1,2);
// point.x = 1; //no longer needed with constructor
// point.y = 2;
point.draw();