// 상속

class Parent {
    name = "lee";

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();

console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello();
