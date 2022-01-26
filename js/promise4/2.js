Promise.reject(/* value */);

Promise.reject(new Error('reason')).then(err => {

}).catch(err => {
    console.log(err);
});
