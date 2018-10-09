function printProperty( obj ){
    for(var key in obj){
        console.log( key + ': ' + obj[key]);
    }
}

var obj = {
    123: 'Hello',
    'Hello World': 1,
    cat: 'meow'
};

printProperty(obj);