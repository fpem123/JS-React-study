// getter setter

class A {
    _name = 'no name';

    get name() {
        return this._name + "@@@";
    }

    set name(value) {
        this._name = value + "!!!";
    }
}

const a = new A();
console.log(a);

a.name = 'Mark';
console.log(a);

console.log(a.name);
console.log(a._name);

// readonly

class B {
    _name = 'no name';

    get name() {
        return this._name + "@@@";
    }
}

const b = new B();
console.log(b);
B.name = 'Mark';
console.log(b);
