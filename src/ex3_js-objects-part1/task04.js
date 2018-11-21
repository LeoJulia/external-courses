function addProperty( str, obj ){

    if( !(str in obj) ){
        obj[str] = 'new';
    }

    return obj;
}

var obj = {
    123: 'Hello',
    'Hello World': 1,
    cat: 'meow'
};

console.log( addProperty( '123', obj ) );
console.log( addProperty( 'apple', obj ) );
