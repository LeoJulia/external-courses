
function SimpleCalculator(name){
    this._result = 0;
    this._type = this.constructor.toString();
    this._name = name || 'Unnamed ' + this.getType();
}

SimpleCalculator.prototype.constructor.toString = function(){
    return 'SimpleCalculator';
}

SimpleCalculator.prototype.add = function(a){
    this._result += a;
    return this;
}

SimpleCalculator.prototype.subtract = function(a){
    this._result -= a;
    return this;
}

SimpleCalculator.prototype.multiply = function(a){
    this._result *= a;
    return this;
}

SimpleCalculator.prototype.divide = function(a){
    this._result /= a;
    return this;
}

SimpleCalculator.prototype.reset = function(){
    this._result = 0;
    return this;
}

SimpleCalculator.prototype.getResult = function(){
    return this._result;
}

SimpleCalculator.prototype.setState = function(a){
    this._result = a;
    return this;
}

SimpleCalculator.prototype.getType = function(a){
    return this._type;
}

SimpleCalculator.prototype.getName = function(){
    return this._name;
}


function DesktopCalculator(name){
    SimpleCalculator.apply(this, arguments);
}

DesktopCalculator.prototype = Object.create(SimpleCalculator.prototype);
DesktopCalculator.prototype.constructor = DesktopCalculator;
DesktopCalculator.prototype.constructor.toString = function(){
    return 'DesktopCalculator';
}

DesktopCalculator.prototype.sqrt = function(){
    this._result = Math.sqrt(this._result);
    return this;
}


function PrintCalculator(name){
    DesktopCalculator.apply(this, arguments);
}

PrintCalculator.prototype = Object.create(DesktopCalculator.prototype);
PrintCalculator.prototype.constructor = PrintCalculator;
PrintCalculator.prototype.constructor.toString = function(){
    return 'PrintCalculator';
}

PrintCalculator.prototype.add = function(a){
    var temp = this._result;
    SimpleCalculator.prototype.add.apply(this, arguments);
    console.log(temp + ' + ' + a + ' = ' + this._result);
    return this;
}

PrintCalculator.prototype.subtract = function(a){
    var temp = this._result;
    SimpleCalculator.prototype.subtract.apply(this, arguments);
    console.log(temp + ' - ' + a + ' = ' + this._result);
    return this;
}

PrintCalculator.prototype.multiply = function(a){
    var temp = this._result;
    SimpleCalculator.prototype.multiply.apply(this, arguments);
    console.log(temp + ' * ' + a + ' = ' + this._result);
    return this;
}

PrintCalculator.prototype.divide = function(a){
    var temp = this._result;
    SimpleCalculator.prototype.divide.apply(this, arguments);
    console.log(temp + ' / ' + a + ' = ' + this._result);
    return this;
}

PrintCalculator.prototype.sqrt = function(){
    var temp = this._result;
    DesktopCalculator.prototype.sqrt.apply(this);
    console.log(' √ ' + temp + ' = ' + this._result);
    return this;
}

PrintCalculator.prototype.reset = function(){
    SimpleCalculator.prototype.reset.call(this);
    console.log(this._name + ' was reset');
    return this;
}

PrintCalculator.prototype.getResult = function(){
    console.log('Result ' + this._name + ' = ' + this._result);
}

PrintCalculator.prototype.setState = function(a){
    SimpleCalculator.prototype.setState.apply(this, arguments);
    console.log(this._name + ' was set state = ' + a);
    return this;
}


var calc = new SimpleCalculator();
console.log(calc.getType());
calc.add(5).subtract(2).multiply(10).divide(2);
console.log(calc.getResult());

console.log(' ');

var desktopCalc = new DesktopCalculator();
console.log(desktopCalc.getType());
desktopCalc.add(5).subtract(2).multiply(10).divide(2).sqrt();
console.log(desktopCalc.getResult());

console.log(' ');

var print = new PrintCalculator();
console.log(print.getType());
print.add(5).subtract(2).multiply(10).divide(2).sqrt().getResult();
print.reset().setState(5);
print.getResult();