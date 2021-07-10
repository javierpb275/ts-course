class Rectangle3 {
    
    readonly height: number;
    readonly width: number;
    //readonly: watch that this properties values cannot be changed. It is like const or final.

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

let r31 = new Rectangle3(10,15);
let r32 = new Rectangle3(4,3);

console.log(r31.area())
console.log(r31.perimeter())

//r31.height = 10; you cannot do this because it is readonly which is like a constant.

console.log(r31.height); 