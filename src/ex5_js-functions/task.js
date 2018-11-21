var isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var Calc = function(){
    var result = 0;
    
    function add(a){
        if(isNumber(a)){
            result += a;
        }
        return add;
    }

    function subtract(a){
        if(isNumber(a)){
            result -= a;
        }
        return subtract;
    }

    function divide(a){
        if(isNumber(a)){
            result /= a;
        }
        return divide;
    }

    function multiply(a){
        if(isNumber(a)){
            result *= a;
        }
        return multiply;
    }

    function getResult(){
        return result;
    }

    function reset(){
        result = 0;
        return reset;
    }

    return {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
        getResult: getResult,
        reset: reset
    }
}

var Calculator = Calc();

module.exports = Calculator
