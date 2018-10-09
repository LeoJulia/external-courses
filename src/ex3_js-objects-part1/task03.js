function checkProperty( obj, str ){
    return str in obj;
}

var obj = {
    123: 'Hello',
    'Hello World': 1,
    cat: 'meow'
};

console.log(checkProperty(obj, 'cat'));
console.log(checkProperty(obj, 'war'));