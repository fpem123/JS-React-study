// 프로토타입 체인. 프로토타입으로 모든 객체들을 연결해서 표현 가능

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.hello = function () {
        console.log("hello", this.name, this.age);
    }
}

Person.prototype.hello = function () {
    console.log('Hello', this.name, this.age);
}   // prototype 설정 가능

const p = new Person('Mark', 36);

p.hello();

console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);  // 함수 자체를 의미
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);
