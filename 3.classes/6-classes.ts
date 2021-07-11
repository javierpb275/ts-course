abstract class Vehicle2 {//you cannot create a new Vehicle(), only the classes that extend from this class

    protected manufacturer: string;//protected: you can access only from the its own class or its children.

    constructor(manufacturer: string) {
        this.manufacturer = manufacturer;
    }

    move() {
        console.log(`The ${this.manufacturer} vehicle is moving!`);
    }

    protected takeToGarage() {
        console.log(`Take the vehicle to the garage.`)
    }
}

class LandVehicle2 extends Vehicle2 {

    private type: string

    constructor(manufacturer: string, type: string) {
        super(manufacturer);
        this.type = type;
    }

    move() {
        console.log(`The ${this.manufacturer} ${this.type} vehicle is moving!`);
        super.move();
    }

    repair() {
        console.log(`Read ${this.manufacturer} instruction manual. Repair the ${this.type}.`);
    }

}

class AerialVehicle2 extends Vehicle2 {

    move() {
        console.log(`The ${this.manufacturer} aerial vehicle is moving!`);
        super.move();
    }
    
}

class SeaVehicle2 extends Vehicle2 {

    move() {
        console.log(`The ${this.manufacturer} sea vehicle is moving!`);
        super.move();
    }

    repair() {
        this.takeToGarage();
    }
    
}

let vehicle2: Vehicle2 = new LandVehicle2('Yamaha', 'bike');

//you cannot access this method because this object is declared as type Vehicle2 
//so you can only access the properties and methods of that class
//vehicle2.repair(); 