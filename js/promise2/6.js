function p() {
    return new Promise((resolve, reject) => {
        // pending
        setTimeout(() => {
            reject(new Error("Bad"));
        }, 1000);
    });
}

p()
    .then((data) => {
        console.log(data, "1000ms 후에 fulfilled");
    })
    .catch((err) => {
        console.log(err, "1000ms 후에 rejected");
    });
