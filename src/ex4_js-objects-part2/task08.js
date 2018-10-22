function toLowerCamelCase( str ){
    return str.split(' ').map(function(element, i){
        if( i > 0){
            return element[0].toUpperCase() + element.slice(1);      
        } else {
            return element[0].toLowerCase() + element.slice(1);
        }
    }).join('');
}

console.log( toLowerCamelCase('The quick brown fox jumped over the lazy dog.') );