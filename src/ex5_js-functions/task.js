var Calc = function (){
    var result = 0;
    
    function add(){
        if(arguments.length !== 0){
            result += arguments[0];
        }
        return add;
    }

    function subtract(){
        if(arguments.length !== 0){
            result -= arguments[0];
        }
        return subtract;
    }

    function divide(){
        if(arguments.length !== 0){
            result /= arguments[0];
        }
        return divide;
    }

    function multiply(){
        if(arguments.length !== 0){
            result *= arguments[0];
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

//module.exports = Calculator


