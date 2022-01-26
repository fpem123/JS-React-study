// static

class A {
    static age = 36;
    static hello() {
        console.log(A.age);
    }
}

console.log(A, A.age);

A.hello();

class B {
    age = 38;
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
B.hello();

//new B().hello(); // 객체의 함수가 아님

class C {
    static name = "이 클래스의 이름은 C가 아님"
}

console.log(C);
