// 생성자를 통해 프로미스를 만든 순간 pending (대기) 상태가됨

new Promise((resolve, reject) => {});   // pending

// resolve를 실행하면 fulfilled (이행, 실행) 상태가됨

new Promise((resolve, reject) => {
    // ... // pending
    
    resolve();  // fulfiiled
});

// reject를 실행하면 rejected (거부) 상태가됨

new Promise((resolve, reject) => {
    reject(); // rejected
});
