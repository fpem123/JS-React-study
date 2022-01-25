global.a = 0
//let a = -1 // let 은 안됨

{
    const a = 1;

    const test = new Function("return a");  // new function은 문자열로 만든다.

    console.log(test());    // 지역변수 a 가 아닌 전역변수 a를 리턴한다
}

{
    const a = 2;

    const test = function() {
        return a;
    };

    console.log(test());
}