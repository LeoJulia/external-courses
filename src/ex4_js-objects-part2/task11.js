function countChar( str ){
    obj = {};
    str = str.split('');
    for(var i = 0; i < str.length; i++){
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    return obj;
}

console.log(countChar('The fox run across field.'));