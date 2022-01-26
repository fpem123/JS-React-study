// member var

class A {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A("mark", 21));

// class field는 런타임을 확인 노드 12버전 이상만 됨
class B {
    name;
    age;    // this.name, this.age로 선언됨, 
}

console.log(new B());

class C {
    name = 'no name';
    age = 0;

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C());
console.log(new C('eme', 12));
