// class = es6 부터

// 선언적 방식

class A {}

console.log(new A());

// class 표현식 할당

const B = class {};

console.log(new B());

// 선언적 방식이지만, 호이스팅 안 일어남
new C();

class C{};