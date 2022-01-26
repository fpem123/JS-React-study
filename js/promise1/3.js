// 1000ms 후에 fulfiiled 상태가 됨
// fulfiiled 된 시점에 then의 콜백 실행

const p = new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
        resolve();  // fulfilled
    }, 1000);
});

// callback
p.then(() => {

});
