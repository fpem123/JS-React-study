// arrow 함수는 항상 익명함수, 선언 방식으로 쓸 수 없게됨
const hello1 = () => {
    console.log("hello1");
};

// 매개변수가 1개일 때 괄호 생략 가능
const hello2 = name => {
    console.log("hello2", name);
}

// 리턴
const hello4 = name => {
    return `hello4 ${name}`;
}

// 리턴만 있으면 중괄호 생략가능
const hello5 = name => `hello5 ${name}`;