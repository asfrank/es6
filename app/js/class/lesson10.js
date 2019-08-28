{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log(list.size);
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log(list.size)
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list);
}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    for (let key of list.keys()){
        console.log(key);
    }

    for (let key of list){
        console.log(key);
    }
}

{
    let weakList = new WeakSet(); //只能存放对象
}

{
    let map = new Map();
    let arr = ['123'];
    map.set(arr, 456);
    console.log(map, map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log(map);
    console.log(map.size);
}

{
    let weakmap = new WeakMap();
}


//map/set与数组对象的对比
{
    let map = new Map();
    let array = [];

    map.set('t',1);
    array.push({t:1});
    console.info(map, array);

    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t);
    console.log(map_exist, array_exist);

    // 改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modify',map,array);

    // 删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

{
    // set和array的对比
    let set=new Set();
    let array=[];

    // 增
    set.add({t:1});
    array.push({t:1});

    console.info('set-array',set,array);

    // 查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.info('set-array',set_exist,array_exist);

    // 改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);

    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);
}

{
    // set和array的对比
    let set=new Set();
    let array=[];

    // 增
    set.add({t:1});
    array.push({t:1});

    console.info('set-array',set,array);

    // 查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.info('set-array',set_exist,array_exist);

    // 改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);

    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);
}