{
    let obj = {
        time:'2017-03-11',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017','2018');
        },
        //拦截对象设置属性
        set(target, key, value) {
            if (key==='name') {
                return target[key]=value;
            }else {
                return target[key];
            }
        },
        //拦截key in obj
        has(target, key) {
            if (key==='name') {
                return target[key];
            }else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target, key) {
            if (key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        },
        //拦截object.keys，object.getOwnPropertySymbols
        ownKeys(target) {
            return Object.keys(target).filter(item=>item!='time');
        }
    });

    // console.log(monitor.time);
    // monitor.name = 'mukewang';
    // console.log(monitor.name);
    //
    // delete monitor.time;
    // console.log('delete',monitor);

    console.log(Object.keys(monitor));
}