{
    function test(x, y='world') {
        console.log(x, y)
    }
    test('hello');
}

{
    let x='test';
    function test2(x, y = x) {
        console.log(x, y);
    }
    test2('kill');
}

{
    function test3(...arg) {
        for (let a of arg) {
            console.log(a);
        }
    }
    test3(1,2,3,4,5)
}

{
    console.log(...[1,2,3,4])
}

{
    let arrow = v => v*2;
    console.log(arrow(3))
}
