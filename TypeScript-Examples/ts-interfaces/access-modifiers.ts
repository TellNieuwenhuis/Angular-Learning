
class Point { 
    constructor(private x?: number, private y?: number) {  // the ? makes the parameter optional with the priave access modifier. simiplified the code.
    }

    draw() {
        console.log('x: ' + this.x + ', y:'+ this.y);
        //.. function to draw the point
    }

    getx() {
        return this.x;
    }

    setX(value) {
        if (value < 0)
        throw new Error('value cannot be negative');
    
        this.x = value;
    }
}

//Object
let point = new Point(1,2);
let x = point.getx();
point.setX(3);
point.draw();