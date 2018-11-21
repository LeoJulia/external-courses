function countEvenOdd( arr ){

    var odd = 0;
    var even = 0;
    var zero = 0;

    for(var i = 0; i < arr.length; i++){
        
        if( arr[i] === 0 ){
            ++zero;
        } else if( arr[i] % 2 === 0){
            ++even;
        } else {
            ++odd;
        }

    }

    if(zero === 0){
        console.log( 'Even: ' + even + ' Odd: ' + odd);
    } else {
        console.log( 'Even: ' + even + ' Odd: ' + odd + ' Zero: ' + zero );
    }

}

countEvenOdd( [1, 2, 3, 4] );
countEvenOdd( [1, 2, 3, 0] );