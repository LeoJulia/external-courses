function Calc(){
    this.result = 0;

    this.add = function(a){
        this.result += a;
        return this;
    }

    this.subtract = function(a){
        this.result -= a;
        return this;
    }

    this.multiply = function(a){
        this.result *= a;
        return this;
    }

    this.divide = function(a){
        this.result /= a;
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
        this.result = a;
        return this;
    }

    this.fetchData = function(callback){
        var self = this;
        setTimeout(function(){
            var serverState = 500;
            self.setState(serverState);
            callback();
        }, 1000);
    }
}

var Calculator = new Calc();

console.log(Calculator.getResult()); // 0

Calculator.fetchData(function(){
    console.log(Calculator.getResult());
});