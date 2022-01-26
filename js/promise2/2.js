// 함수 실행과 동시에 프로미스를 만들고 pending이 시작ㄷ하게 하기 위해
function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            resolve();  // fulfilled
        }, 1000);
    });
}

p().then(( ) => {
    console.log("1000ms 후에 fulfilled");
});