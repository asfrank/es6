{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=', arr);
}

{
    console.log(Array.from([1,3,5], function (item) {
        return item * 2;
    }))
}

{
    console.log('fill-7', [1,'a',undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(7,1,3))
}