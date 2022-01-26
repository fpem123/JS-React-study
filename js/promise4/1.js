// value가 프로미스인지 아닌지 알 수 없다면 연결된 then 실행
// value가 프로미스면 resolve 된 then 을 실행
// 아니면 value를 인자로 보내면서 then을 실행

Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
}))
.then((data) => {
    console.log('프로미스 객체인 경우 resolve 결과를 받아 then이 실행됨', data);
});

Promise.resolve('bar').then(data => {
    console.log('then이 없는 경우 fulfiiled 된다', data);
});

