{
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'))
}

{
    let str = '\u{20bb7}abc';
    for (let i=0;i<str.length;i++) {
        console.log('es5', str[i]);
    }
    for (let code of str) {
        console.log('es6', code);
    }
}

{
    let str = "string";
    console.log('includes', str.includes("r"));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('ng'));

}

{
    let str = 'abc';
    console.log(str.repeat(2));
}


{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    console.log('1'.padStart(2,'0'));
}


{
    console.log(String.raw())
}