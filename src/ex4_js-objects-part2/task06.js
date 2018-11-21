function toUpperChars( str ){
    return str.split(' ').map(function(element){
        return element[0].toUpperCase() + element.slice(1);
    }).join(' ');
}

console.log( toUpperChars('The quick brown fox jumped over the lazy dog.'));
