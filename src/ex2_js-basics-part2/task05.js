function maxArr(arr){
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if( arr[i] > max ){
            max = arr[i];
        }
    }

    return max;
}

console.log( maxArr([-5, -111, -4, 0, 15, 111]) );
console.log( maxArr([-5, -111, -4, 0, -15, -111]) );