// Promise.race
// 아무거나 빠른거 하나 fulfilled 되면 then 실행

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    }) 
}

Promise.race([p(1000), p(2000), p(3000)]).then((msg) => {
    console.log('가장 빠른거 하나 fulfilled 된 뒤에 실행', msg);
});