interface Geometry {
    sides: number
}

interface Triangle extends Geometry {
    base: number 
    height: number 
}

interface Square extends Geometry {
    side: number
}

function processG(g: Geometry) {
    if (g.sides == 4) {
        let square = g as Square;
        square.side
    } else if (g.sides == 3) {
        let triangle = g as Triangle;
        triangle.height
    }
}