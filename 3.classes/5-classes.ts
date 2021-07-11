class Vehicle {

    manufacturer: string;

    constructor(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    move() {
        console.log(`The ${this.manufacturer} vehicle is moving!`);
    }
}

class LandVehicle extends Vehicle {

    private type: string

    constructor(manufacturer: string, type: string) {
        super(manufacturer);
        this.type = type;
    }

    move() {
        console.log(`The ${this.manufacturer} ${this.type} vehicle is moving!`);
        super.move();
    }

}

class AerialVehicle extends Vehicle {

    move() {
        console.log(`The ${this.manufacturer} aerial vehicle is moving!`);
        super.move();
    }
    
}

class SeaVehicle extends Vehicle {

    move() {
        console.log(`The ${this.manufacturer} sea vehicle is moving!`);
        super.move();
    }
    
}

let vehicle = new LandVehicle('Yamaha', 'bike');
vehicle.move();