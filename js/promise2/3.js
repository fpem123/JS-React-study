// reject, catch

function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject();  // rejected
        }, 1000);
    });
}

p().then(( ) => {
    console.log("1000ms 후에 fulfilled");
}).catch((err) => {
    console.log(err, "1000ms 후에 rejected");
});