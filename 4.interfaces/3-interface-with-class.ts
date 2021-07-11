interface Shape {
    readonly sides: number 
    area():number
    perimeter():number
}

class Rectangle implements Shape {

    sides: number = 4;
    
    constructor(readonly height: number, readonly width: number) {}

    area(): number {
        return this.height * this.width; 
    }
    perimeter(): number {
        return this.width * 2 + this.height * 2;
    }
    
}

function process2(s: Shape) {
    console.log({area: s.area()});
}

let r = new Rectangle(5, 4);

process2(r);
