// 함수로 객체 생성
function A() {
    
}

const a = new A();  // 객체 생성
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

const b = new B();
const c = new B('Mark', 36);
console.log(B());
