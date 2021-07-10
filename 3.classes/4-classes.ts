class Rectangle4 {
    
    height: number;
    width: number;
    private _name: string = "";

    constructor(height: number, width: number) {
        this.width = width;
        this.height = height;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get area() {
       return this.height * this.width; 
    }

    get perimeter() {
        return this.width * 2 + this.height * 2;
    }
 
}

let r41 = new Rectangle4(10,15);
let r42 = new Rectangle4(4,3);

console.log(`The area of the r41 is ${r41.area}`);
console.log(`The perimeter of the r41 is ${r41.perimeter}`);

r41.name = 'Pepe';
console.log(`The name of the r41 is ${r41.name}`);