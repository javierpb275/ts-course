//is

interface Geometry2 {
    sides: number
    paint(): void
}

interface Triangle2 extends Geometry2 {
    base: number 
    height: number 
}

interface Square2 extends Geometry2 {
    side: number
}

function isGeomatry(x: any): x is Geometry2 {
    return x.sides &&  x.paint;
}

function isSquare(x: any): x is Square2 {
    return isGeomatry(x) && (x as any).side;
}

function isTriangle(x: any): x is Triangle2 {
    return isGeomatry(x) && (x as any).base && (x as any).height;
}

function processG2(g: Geometry2) {
    if (isSquare(g)) {
        g.side
    } else if (isTriangle(g)) {
        g.base
    }
}

//instanceof

interface Car {
    manufacturer: string;
};

class SpecificCar implements Car{
    manufacturer: 'honda';
    move() {}
}

let c: Car = new SpecificCar()
console.log(c instanceof SpecificCar);//return true/false