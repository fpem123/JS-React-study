// 함수로 객체 생성
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person("Mark", 37);

console.log(p, p.name, p.age);


const a = new Person("Anna", 26);

console.log(a, a.name, a.age);

// arrow function은 this 가 생기지 않음, 객체 생성자 함수로 사용 불가
const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
}

//const c = new Cat("고양", 1);   // error 발생
