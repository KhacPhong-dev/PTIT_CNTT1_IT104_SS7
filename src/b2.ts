class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; // Ensure speed doesn't go negative
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): number {
        return this.speed;
    }
}
class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Bicycle Info:
        Name: ${this.name}
        Speed: ${this.speed}
        ID: ${this.id}
        Gear: ${this.gear}`);
    }
}


const myBicycle = new Bicycle("Mountain Bike", 20, 1, 5);
myBicycle.speedUp(10);
console.log(`Current Speed: ${myBicycle.showSpeed()} km/h`);
myBicycle.slowDown(5);
console.log(`Current Speed after slowing down: ${myBicycle.showSpeed()} km/h`);
myBicycle.showInfo();
