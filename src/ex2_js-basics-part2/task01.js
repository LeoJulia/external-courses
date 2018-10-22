function chekValue( value ){

    var result = 'undefined';
    
    if( typeof value === 'number'){
        result = 'number';
    } else if( typeof value === 'string' ) {
        result = 'string';
    }
    
    return result;
    
}

console.log( chekValue(45) );
console.log( chekValue('56') );
console.log( chekValue(true) );