function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    });
};

async function asyncP() {
    return 'Mark';
}

async function main() {
    try { 
        const name = await asyncP(1000);
        console.log(name);
    } catch (error) {
        console.log(error);
    }
};

main();