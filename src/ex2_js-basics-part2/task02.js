function runArr( arr ){
    for(var i = 0; i < arr.length; i++){
        console.log( arr[i] );
    }
    console.log( 'length: ' + arr.length );
}

runArr([1, 4, 5, 'as', 5, 7]);