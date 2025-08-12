"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student("Nguyen Van A", 12345);
const teacher = new Teacher("Tran Thi B", "Mathematics");
student.displayInfo();
teacher.displayInfo();
