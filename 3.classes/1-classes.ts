class Rectangle {
    
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.width = width;
        this.height = height;
    }

    area() {
       return this.height * this.width; 
    }

    perimeter() {
        return this.width * 2 + this.height * 2;
    }
    
}

let r1 = new Rectangle(10,15);
let r2 = new Rectangle(4,3);

console.log(r1.area())
console.log(r1.perimeter())