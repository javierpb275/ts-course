interface VehicleI {
    readonly manufacturer: string;
    refuel(): void;
    startEngine(): void;
    stopEngine(): void;
}

interface LandVehicleI extends VehicleI {
    drive(): void;
}

interface AerialVehicleI extends VehicleI{
    fly(): void;
}

interface SeaVehicleI extends VehicleI {
    horn(): void;
}

class OpelCorsa implements LandVehicleI {
    manufacturer: string = 'Opel';

    drive(): void {
        console.log("driving");
    }
    refuel(): void {
        console.log("refueling");
    }
    startEngine(): void {
        console.log("start engine");
    }
    stopEngine(): void {
        console.log("stop engine");
    }
    openTrunk(): void {
        console.log("opening trunk");
    }
}

function process3(v: VehicleI) {
    v.startEngine();
    v.stopEngine();
    v.refuel();
    v.manufacturer;
}

process3(new OpelCorsa());

//We can do the same thing with type:
type VehicleT = {
    manufacturer: string;
    refuel(): void;
    startEngine(): void;
    stopEngine(): void;
}

//LandVehicleT has everything that VehicleT has and drive()
type LandVehicleT = VehicleT & {
    drive():void;
}