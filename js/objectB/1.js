// new Object로 만들기, 권장 되진 않음

const a = new Object();

console.log(a, typeof a);

const b = new Object(true);

console.log(b, typeof b);

const c = new Object({name : "Mark"});

console.log(c, typeof c);
