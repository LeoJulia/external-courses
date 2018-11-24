var isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var Calc = function(){
    this.result = 0;

    this.add = function(a){
        if(isNumber(a)){
            this.result += a;
        }
        return this;
    }

    this.subtract = function(a){
        if(isNumber(a)){
            this.result -= a;
        }
        return this;
    }

    this.multiply = function(a){
        if(isNumber(a)){
            this.result *= a;
        }
        return this;
    }

    this.divide = function(a){
        if(isNumber(a)){
            this.result /= a;
        }
        return this;
    }

    this.reset = function(){
        this.result = 0;
        return this;
    }

    this.getResult = function(){
        return this.result;
    }

    this.setState = function(a){
        if(isNumber(a)){
            this.result = a;
        }
        return this;
    }

    this.fetchData = function(callback){
        var cb = callback.bind(this);
        setTimeout(function(){
            var serverState = 500;
            cb(serverState);
        }, 1000);
        return this;
    }
}

var Calculator = new Calc();

module.exports = Calculator;