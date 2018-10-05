function chekSimpler( num ){
    if( num > 1000){

        console.log( 'неверные данные' );

    } else {

        var result = 'простое число';

        for(var i = num - 1; i != 1; i--){

            if(num % i === 0){
                result = 'составное число';
            }

        }

        console.log( result );
    }
}

chekSimpler(13);
chekSimpler(14);
chekSimpler(1400);