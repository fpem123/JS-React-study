// es6부터 내장 객체

console.log(Promise);

// 생성자로 프로미스를 만들 수 있음
// 인자로 executor 함수를 이용

// new Promise(/* executor */);

// executor는 resolve, reject를 인자로 가짐
// (resolve, reject) => {}
// resolve와 reject는 함수

new Promise(/* executor */(resolve, reject) => {});
