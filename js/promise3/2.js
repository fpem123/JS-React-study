// callback

function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

c(() => {
    console.log('1000ms 후에 callback');
});

c(() => {
    c(() => {
        c(() => {
            console.log('1000ms 후에 callback');
        });
    });
});
