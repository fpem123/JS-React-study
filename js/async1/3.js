// reject
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'));
        }, ms);
    });
};

async function main() {
    try { 
        const ms = await p(1000);
        console.log(`${ms} ms 후에 실행된다.`);
    } catch (error) {
        console.log(error);
    }
};

main();