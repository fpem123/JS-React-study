// 배열을 만들어 넣고 Promise.all 을 실행하면
// 배열의 모든 프로미스들이 fulfilled 되었을 때 then 실행
// 결과로 resolve 인자값 배열을 리턴

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    }) 
}

Promise.all([p(1000), p(2000), p(3000)]).then((msgs) => {
    console.log('모두 fulfilled 된 뒤에 실행', msgs);
});