var deepClone = function f( obj ){
    var newObj = {};

    for(var key in obj){
        if( typeof obj[key] === 'object'){
            newObj[key] = f(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

var obj = {
    str: 'str',
    obj1: {
        num: 123,
        obj2: {
            hello: 'world'
        },
        name: 'Pavel'
    },
    age: 23
}

var newObj = deepClone(obj);
delete obj.obj1.obj2.hello;
delete obj.obj1.name;

console.log( obj );
console.log( newObj );