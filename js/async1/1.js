// Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};


// Promise 객체를 이용해 비동기 로직을 수행
p(1000).then(ms => {
    console.log(`${ms}ms 후에 실행`);
})


// Promise 객체를 리턴하는 함수를 await으로 호출
//const ms = await p(1000);
console.log(`${ms}ms 후에 실행`);