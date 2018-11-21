function shortenLine(str, num){
    if(str.length > num){
        str = str.slice(0, num - 1) + '…';
    }
    return str;
}

console.log( shortenLine('The quick brown fox jumped over the lazy dog.', 20) );