{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    //构造函数
    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags)
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

}