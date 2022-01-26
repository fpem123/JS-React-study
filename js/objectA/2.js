// 값을 속성으로

function A() {
    this.name = 'Mark';
}

const a = new A();
console.log(a);


// 함수를 속성으로
function B() {
    this.hello = function() {
        console.log('hello');
    }
}

new B().hello();



