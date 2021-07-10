class Rectangle2 {
    
    private height: number;
    private width: number;
    //#width: number; new way to delcare private properties

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

let r21 = new Rectangle2(10,15);
let r22 = new Rectangle2(4,3);

console.log(r21.area())
console.log(r21.perimeter())

//console.log(r22.height); You cannot access the value of this property because it is private