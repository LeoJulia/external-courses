function addStr(str, addedStr, index){
    str = str.split(' ');
    str.splice(index, 0, addedStr);
    return str.join(' ');
}

console.log( addStr('The fox run across field.', 'red', 1) );