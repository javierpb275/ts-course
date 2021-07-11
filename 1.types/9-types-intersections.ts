type Coordinate = [x: number, y: number];
type Vector = [x: number, y: number];

type Positionable = {
    position: Coordinate;
}

type Moveable = {
    speed: Vector;
    acceleration: Vector;
}

type MoveableAndPositionable = Moveable & Positionable;

let place: Positionable = {
    position: [5, 5]
}

let vehicle: Moveable = {
    speed: [4, 4],
    acceleration: [1, 1]
}

let obj: MoveableAndPositionable = {
    position: [5, 5],
    speed: [4, 4],
    acceleration: [1, 1]
}