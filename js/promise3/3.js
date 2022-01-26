// then 함수에서 프로미스로 체이닝하여 비동기작업을 순차적으로 표현

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
};

p().then(() => {
    return p();
})
.then(() => p())
.then(p)
.then(() => {
    console.log("4000ms 후에 callback");
});