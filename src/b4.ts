
abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}
class Student extends Person {
    public id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Student ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    public subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
const student = new Student("Nguyen Van A", 12345);
const teacher = new Teacher("Tran Thi B", "Mathematics");
student.displayInfo();
teacher.displayInfo();
