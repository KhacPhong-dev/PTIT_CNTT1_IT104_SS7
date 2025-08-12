"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Animal Name: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gâu gâu");
    }
}
const myCat = new Cat("Mimi");
myCat.printName();
myCat.makeNoise();
const myDog = new Dog("Buddy");
myDog.printName();
myDog.makeNoise();
