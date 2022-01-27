function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
};

async function asyncP() {
    const ms = await p(1000);
    return 'Mark: ' + ms;
}

(async function main() {
    try { 
        const name = await asyncP(1000);
        console.log(name);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('end');
    }
})();