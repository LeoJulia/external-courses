function deepClone( obj ){
    var newObj = {};

    for(var key in obj){
        if( typeof obj[key] === 'object'){
            newObj[key] = deepClone(obj[key]);
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

console.log( deepClone(obj) );