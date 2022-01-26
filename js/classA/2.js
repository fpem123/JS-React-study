// constructor

class A {

}

console.log(new A());

class B {
    constructor() {
        console.log('constructor');
    }
}

console.log(new B());

class C {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('constructor', this.name, this.age);
    }
}

console.log(new C("mark", 30));
console.log(new C());
