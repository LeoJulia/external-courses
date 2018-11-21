function copyObj (obj){
    var newObj = {};

    for( var key in obj){
        newObj[key] = obj[key];
    }

    return newObj;
}

var obj = {
    123: 'Hello',
    'Hello World': 1,
    cat: 'meow'
};

var obj2 = copyObj( obj );

console.log( obj );
console.log( obj2 );