// 함수를 인자로 함수를 호출

function hello(c) {
    console.log("hello");
    c();
}

hello(function() {
    console.log("콜백");
});
