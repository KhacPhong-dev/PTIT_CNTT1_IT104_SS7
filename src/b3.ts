abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log(`Animal Name: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeNoise(): void {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeNoise(): void {
        console.log("Gâu gâu");
    }
}
const myCat = new Cat("Mimi");
myCat.printName();
myCat.makeNoise();
const myDog = new Dog("Buddy");
myDog.printName();
myDog.makeNoise();