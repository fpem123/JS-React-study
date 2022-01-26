// overrride

class Parent {
    name = 'lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 12;

    // override
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = 'Anna';
c.hello();