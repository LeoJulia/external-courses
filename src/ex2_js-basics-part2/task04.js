function chekSimmilar( arr ){
    var result = 'true';

    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arr[i+1]){
            result = 'false';
        }
    }

    return result;
}

console.log( chekSimmilar( [1, 1, 1] ) );
console.log( chekSimmilar( [1, 1, 0] ) );